
import type { ClearChargingProfileRequest, GetCompositeScheduleResponse, SetChargingProfileRequest } from './types.js';
import type { ChargingSchedule, ChargingContext, MaybeChargingSchedule } from '../common/chargingmanager/utils.js';
import type { ChargingRateUnit, NumberOfPhases, ChargingLimits } from '../common/utils.js';
import type { Models } from '../common/models.js';

import { startOfDay, addMilliseconds, startOfWeek, differenceInMilliseconds, addWeeks, addDays, addSeconds, min, differenceInSeconds } from 'date-fns';
import { AbstractChargingManager } from '../common/chargingmanager/chargingmanager.js'; 

export type getCompositeProfileOpts = Pick<SetChargingProfileRequest['csChargingProfiles'], 
  | 'stackLevel'
  | 'chargingProfileId'
  | 'chargingProfileKind'
  | 'chargingProfilePurpose'
>;

export class ChargingManager extends AbstractChargingManager<SetChargingProfileRequest, ClearChargingProfileRequest> {

  protected _getScheduleFromProfile(context: ChargingContext, profile: SetChargingProfileRequest, fromDate: Date, toDate: Date, unit: ChargingRateUnit): MaybeChargingSchedule {
    const { csChargingProfiles: { chargingSchedule, validFrom, validTo, recurrencyKind, chargingProfileKind } } = profile;
    const schedule: MaybeChargingSchedule = [];
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
              min: context.model.convert(minChargingRate ?? 0, chargingRateUnit, unit, numberPhases as NumberOfPhases),
              max: context.model.convert(limit >= 0 ? limit : 0, chargingRateUnit, unit, numberPhases as NumberOfPhases),
              phases: { qty: numberPhases as NumberOfPhases },
            },
            discharging: { 
              min: context.model.convert(0, chargingRateUnit, unit, numberPhases as NumberOfPhases),
              max: context.model.convert(limit < 0 ? Math.abs(limit) : 0, chargingRateUnit, unit, numberPhases as NumberOfPhases),
              phases: { qty: numberPhases as NumberOfPhases },
            },
            shouldDischarge: limit < 0,
            unit,
          },
        });
      });
    });
    return schedule;
  }

  setChargingProfile(request: SetChargingProfileRequest) {
    const { csChargingProfiles: { chargingProfilePurpose, stackLevel }, connectorId } = request;
    this._setChargingProfile(chargingProfilePurpose, connectorId, stackLevel, request);
  }

  clearChargingProfile(request: ClearChargingProfileRequest) {
    this._clearChargingProfiles(request.chargingProfilePurpose, request.connectorId, request.stackLevel);
  }

  getConnectorSchedule(fromDate: Date, toDate: Date, connectorId: number, unit: ChargingRateUnit, model: Models.ChargingSession): ChargingSchedule {
    return this._getChargerSchedule(fromDate, toDate, connectorId, unit, model);
  }

  getConnectorLimitsAtDate(atDate: Date, connectorId: number, unit: ChargingRateUnit, model: Models.ChargingSession): ChargingLimits {
    return this._getChargerLimitsAtDate(atDate, connectorId, unit, model);
  }

  getConnectorCompositeSchedule(fromDate: Date, toDate: Date, chargerId: number, model: Models.ChargingSession) {
    const now = new Date();
    const schedule = this._getChargerSchedule(fromDate, toDate, chargerId, 'W', model);
    if (schedule.length === 0) {
      return;
    }
    const min_date: Date = schedule[0].start;
    const max_date: Date = schedule.at(-1)!.end;
    return {
      status: 'Accepted',
      connectorId: chargerId,
      chargingSchedule: {
        startSchedule: now.toISOString(),
        duration: differenceInSeconds(max_date, min_date),
        chargingRateUnit: 'W',
        chargingSchedulePeriod: schedule.map((interval) => {
          const { start, data: { charging, discharging, shouldDischarge} } = interval;
          return shouldDischarge
            ? { 
                startPeriod: differenceInSeconds(start, min_date), 
                limit: -1 * discharging.max, 
                numberPhases: discharging.phases.qty,
              }
            : { 
                startPeriod: differenceInSeconds(start, min_date), 
                limit: charging.max,  
                numberPhases: charging.phases.qty,
              }
        }),
      },
    } satisfies GetCompositeScheduleResponse;  
  }

  getConnectorCompositeProfile(fromDate: Date, toDate: Date, connectorId: number, model: Models.ChargingSession, opts: getCompositeProfileOpts): SetChargingProfileRequest | undefined {
    const compositeSchedule = this.getConnectorCompositeSchedule(fromDate, toDate, connectorId, model);
    if (!compositeSchedule) {
      return;
    }
    return {
      connectorId: compositeSchedule.connectorId,
      csChargingProfiles: {
        ...opts,
        validFrom: fromDate.toISOString(),
        validTo: fromDate.toISOString(),
        chargingSchedule: compositeSchedule.chargingSchedule,
      },
    };
  }

}
