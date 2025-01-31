
import type { ClearChargingProfileRequest, SetChargingProfileRequest } from './types.js';
import type { ChargingSchedule } from '../common/chargingschedule.js';
import type { NumberOfPhases } from '../common/utils.js';

import { startOfDay, addMilliseconds, startOfWeek, differenceInMilliseconds, addWeeks, addDays, addSeconds, min } from 'date-fns';
import { AbstractChargingScheduleManager } from '../common/chargingschedulemanager.js'; 

export class ChargingScheduleManager extends AbstractChargingScheduleManager<SetChargingProfileRequest, ClearChargingProfileRequest> {

  setChargingProfile(request: SetChargingProfileRequest) {
    const { csChargingProfiles: { chargingProfilePurpose, stackLevel }, connectorId } = request;
    this._addChargingProfile(chargingProfilePurpose, connectorId, stackLevel, request);
  }

  clearChargingProfile(request: ClearChargingProfileRequest) {
    this._clearChargingProfiles(request.chargingProfilePurpose, request.connectorId, request.stackLevel);
  }

  protected _getScheduleFromProfile(profile: SetChargingProfileRequest, fromDate: Date, toDate: Date): ChargingSchedule {
    const { csChargingProfiles: { chargingSchedule, validFrom, validTo, recurrencyKind, chargingProfileKind } } = profile;
    const schedule: ChargingSchedule = [];
    if (validFrom && fromDate < new Date(validFrom)) {
      return schedule;
    }
    if (validTo && fromDate >= new Date(validTo)) {
      return schedule;
    }
    const { duration, chargingRateUnit, chargingSchedulePeriod, minChargingRate, startSchedule } = chargingSchedule;
    const scheduleStartEndDatePairs: Date[][] = [];
    switch (chargingProfileKind) {
      case 'Absolute': {
        const absoluteProfileStartDate = startSchedule ? new Date(startSchedule) : fromDate;
        const absoluteProfileEndDate = duration ? addSeconds(absoluteProfileStartDate, duration) : toDate;
        scheduleStartEndDatePairs.push([absoluteProfileStartDate, absoluteProfileEndDate]);
      } break;
      case 'Relative': {
        const relativeProfileStartDate = fromDate;
        const relativeProfileEndDate = duration ? addSeconds(relativeProfileStartDate, duration) : toDate;
        scheduleStartEndDatePairs.push([relativeProfileStartDate, relativeProfileEndDate]);
      } break;
      case 'Recurring': {
        let recurringProfileStartDate = startSchedule ? new Date(startSchedule) : fromDate;
        const startOfFn = recurrencyKind === 'Daily' ? startOfDay : startOfWeek;
        const addFn = recurrencyKind === 'Daily' ? addDays : addWeeks;
        recurringProfileStartDate = addMilliseconds(startOfFn(fromDate), differenceInMilliseconds(recurringProfileStartDate, startOfFn(recurringProfileStartDate)));
        while (recurringProfileStartDate < toDate) {
          let recurringProfileEndDate = addFn(recurringProfileStartDate, 1);
          let recurringProfileEndDateInclDuration = duration 
            ? min([recurringProfileEndDate, addSeconds(recurringProfileStartDate, duration)])
            : recurringProfileEndDate;
          scheduleStartEndDatePairs.push([recurringProfileStartDate, recurringProfileEndDateInclDuration]);
          recurringProfileStartDate = recurringProfileEndDate;
        }
      } break;
    }
    scheduleStartEndDatePairs.forEach(([scheduleStartDate, scheduleEndDate]) => {
      chargingSchedulePeriod.forEach((period, periodIndex) => {
        const { startPeriod, limit, numberPhases = 3 } = period;
        const nextPeriod = chargingSchedulePeriod[periodIndex + 1];
        const periodStartDate = addSeconds(scheduleStartDate, startPeriod);
        const periodEndDate = nextPeriod ? addSeconds(scheduleStartDate, nextPeriod.startPeriod) : scheduleEndDate;
        schedule.push({
          start: periodStartDate,
          end: periodEndDate,
          data: {
            charging: { 
              min: minChargingRate ?? 0,
              max: limit >= 0 ? limit : 0, 
              phases: { qty: numberPhases as NumberOfPhases },
            },
            discharging: { 
              min: 0, 
              max: limit < 0 ? Math.abs(limit) : 0, 
              phases: { qty: numberPhases as NumberOfPhases },
            },
            shouldDischarge: limit < 0,
            unit: chargingRateUnit,
          },
        });
      });
    });
    return schedule;
  }

}