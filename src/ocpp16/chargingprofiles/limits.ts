
import type { ChargingSchedule } from '../../common/schedule.js';
import type { ChargingProfile } from './utils.js';
import type { LineVoltage, ChargingRateUnit, NumberPhases } from '../../common/schedule.js';

import { startOfDay, addMilliseconds, startOfWeek, differenceInMilliseconds, addWeeks, addDays, addSeconds } from 'date-fns';
import { convertChargingRate } from '../../common/schedule.js';

export const getChargingScheduleFromProfile = (profile: ChargingProfile, transactionStartDate: Date, transactionDuration: number, unit: ChargingRateUnit, line_voltage: LineVoltage): ChargingSchedule => {

  const transactionEndDate = addSeconds(transactionStartDate, transactionDuration);

  const { csChargingProfiles: { chargingSchedule, validFrom, validTo, recurrencyKind, chargingProfileKind } } = profile;
  const schedule: ChargingSchedule = [];
  if (validFrom && transactionStartDate < new Date(validFrom)) {
    return schedule;
  }
  if (validTo && transactionStartDate >= new Date(validTo)) {
    return schedule;
  }
  

  const { duration, chargingRateUnit, chargingSchedulePeriod, minChargingRate, startSchedule } = chargingSchedule;
  const scheduleStartEndDatePairs: Date[][] = [];
  switch (chargingProfileKind) {
    case 'Absolute': {
      const absoluteProfileStartDate = startSchedule ? new Date(startSchedule) : transactionStartDate;
      const absoluteProfileEndDate = duration ? addSeconds(absoluteProfileStartDate, duration) : transactionEndDate;
      scheduleStartEndDatePairs.push([absoluteProfileStartDate, absoluteProfileEndDate]);
    } break;
    case 'Relative': {
      const relativeProfileStartDate = transactionStartDate;
      const relativeProfileEndDate = duration ? addSeconds(relativeProfileStartDate, duration) : transactionEndDate;
      scheduleStartEndDatePairs.push([relativeProfileStartDate, relativeProfileEndDate]);
    } break;
    case 'Recurring': {
      let recurringProfileStartDate = startSchedule ? new Date(startSchedule) : transactionStartDate;
      const startOfFn = recurrencyKind === 'Daily' ? startOfDay : startOfWeek;
      const addFn = recurrencyKind === 'Daily' ? addDays : addWeeks;
      recurringProfileStartDate = addMilliseconds(startOfFn(transactionStartDate), differenceInMilliseconds(recurringProfileStartDate, startOfFn(recurringProfileStartDate)));
      while (recurringProfileStartDate < transactionEndDate) {
        scheduleStartEndDatePairs.push([recurringProfileStartDate, (recurringProfileStartDate = addFn(recurringProfileStartDate, 1))]);
      }
    } break;
  }

  scheduleStartEndDatePairs.forEach(([scheduleStartDate, scheduleEndDate]) => {
    chargingSchedulePeriod.forEach((period, periodIndex) => {
      const { startPeriod, limit, numberPhases } = period;
      const nextPeriod = chargingSchedulePeriod[periodIndex + 1];
      const periodStartDate = addSeconds(scheduleStartDate, startPeriod);
      const periodEndDate = nextPeriod ? addSeconds(scheduleStartDate, nextPeriod.startPeriod) : scheduleEndDate;
      
      schedule.push({
        start: periodStartDate,
        end: periodEndDate,
        data: {
          charging: { 
            min: 0, 
            max: convertChargingRate(limit >= 0 ? limit : 0, chargingRateUnit, unit, line_voltage, numberPhases as NumberPhases), 
            numberPhases: numberPhases as NumberPhases,
          },
          discharging: { 
            min: 0, 
            max: convertChargingRate(limit < 0 ? Math.abs(limit) : 0, chargingRateUnit, unit, line_voltage, numberPhases as NumberPhases), 
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
};
