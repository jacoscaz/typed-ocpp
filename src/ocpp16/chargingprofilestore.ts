
import type { ClearChargingProfileRequest, SetChargingProfileRequest } from './types.js';
import type { ChargingSchedule } from '../common/chargingschedule.js';
import type { ChargingRateUnit, NumberPhases } from '../common/utils.js';

import { startOfDay, addMilliseconds, startOfWeek, differenceInMilliseconds, addWeeks, addDays, addSeconds } from 'date-fns';
import { convertChargingRate } from '../common/utils.js';
import { ChargingProfileStore } from '../common/chargingprofilestore.js'; 

export class OCPP16ChargingProfileStore extends ChargingProfileStore<SetChargingProfileRequest> {

  addChargingProfile(request: SetChargingProfileRequest) {
    const { csChargingProfiles: { chargingProfilePurpose, stackLevel }, connectorId } = request;
    this._addChargingProfile(chargingProfilePurpose, connectorId, stackLevel, request);
  }

  removeChargingProfile(request: ClearChargingProfileRequest) {
    this._removeChargingProfiles(request.chargingProfilePurpose, request.connectorId, request.stackLevel);
  }

  protected _getScheduleFromProfile(profile: SetChargingProfileRequest, fromDate: Date, toDate: Date, unit: ChargingRateUnit): ChargingSchedule {
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
          scheduleStartEndDatePairs.push([recurringProfileStartDate, (recurringProfileStartDate = addFn(recurringProfileStartDate, 1))]);
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
              min: 0, 
              max: convertChargingRate(limit >= 0 ? limit : 0, chargingRateUnit, unit, this._info.lineVoltage, numberPhases as NumberPhases), 
              numberPhases: numberPhases as NumberPhases,
            },
            discharging: { 
              min: 0, 
              max: convertChargingRate(limit < 0 ? Math.abs(limit) : 0, chargingRateUnit, unit, this._info.lineVoltage, numberPhases as NumberPhases), 
              numberPhases: numberPhases as NumberPhases,
            },
            canDischarge: limit < 0,
            shouldDischarge: limit < 0,
            unit,
          },
        });
      });
    });
    return schedule;
  }

}