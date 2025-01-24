
import type { ChargingRateUnit, ChargingProfilePurpose, ChargingProfile, NumberPhases, LineVoltage } from './utils.js';

import { startOfDay, addMilliseconds, startOfWeek, differenceInMilliseconds } from 'date-fns';
import { convertValueToUnit } from './utils.js';

export interface GetInstantChargingLimitsFromProfileOpts {
  unit: ChargingRateUnit;
  connectorId: number;
  lineVoltage: 110 | 230;
  purpose: ChargingProfilePurpose;
  canDischarge: boolean;
  transaction?: { id: number; startDate: Date; };
}

export interface InstantChargingLimits { 
  min: number; 
  max: number; 
  numberPhases: NumberPhases;
  discharge: boolean; 
  unit: ChargingRateUnit;
}

export const getInstantChargingLimitsFromProfile = (profile: ChargingProfile, referenceDate: Date, opts: GetInstantChargingLimitsFromProfileOpts): InstantChargingLimits | null => {
  const { 
    connectorId, 
    csChargingProfiles: { chargingSchedule, validFrom, validTo, recurrencyKind, chargingProfileKind, chargingProfilePurpose, transactionId },
  } = profile;
  if (validFrom && referenceDate < new Date(validFrom)) {
    return null;
  }
  if (validTo && referenceDate < new Date(validTo)) {
    return null;
  }
  if (chargingProfilePurpose !== opts.purpose) {
    return null;
  }
  if (transactionId && opts.transaction && opts.transaction.id !== transactionId) {
    return null;
  }
  switch (opts.purpose) {
    case 'TxProfile': 
      if (opts.connectorId && opts.connectorId !== connectorId) {
        return null;
      }
      break;
    case 'TxDefaultProfile': 
      if (connectorId !== 0 && connectorId !== opts.connectorId) {
        return null;
      }
      break;
  }
  const { duration, chargingRateUnit, chargingSchedulePeriod, minChargingRate, startSchedule } = chargingSchedule;
  let start_sch_date: Date | undefined;
  switch (chargingProfileKind) {
    case 'Absolute':
      start_sch_date = startSchedule ? new Date(startSchedule) : opts.transaction?.startDate;
      break;
    case 'Relative':
      start_sch_date = opts.transaction?.startDate;
      break;
    case 'Recurring':
      if (startSchedule) {
        start_sch_date = new Date(startSchedule);
        switch (recurrencyKind) {
          case 'Daily':
            start_sch_date = addMilliseconds(startOfDay(referenceDate), differenceInMilliseconds(start_sch_date, startOfDay(start_sch_date)));
            break;
          case 'Weekly':
            start_sch_date = addMilliseconds(startOfWeek(referenceDate), differenceInMilliseconds(start_sch_date, startOfWeek(start_sch_date)));
            break;
        }
      }
      break;
  }
  if (!start_sch_date) {
    return null;
  }
  if (start_sch_date >= referenceDate) {
    return null;
  }
  let period = chargingSchedulePeriod.findLast(({ startPeriod }) => {
    return referenceDate.valueOf() >= start_sch_date.valueOf() + startPeriod * 1000;
  });
  if (duration) {
    if (referenceDate.valueOf() >= start_sch_date.valueOf() + duration * 1000) {
      return null;
    }
  } else if (!period) {
    period = chargingSchedulePeriod.at(-1);
  }
  if (!period) {
    return null;
  }
  const { limit, numberPhases = 3 } = period;
  if (limit < 0 && (!opts.canDischarge || opts.purpose !== 'TxProfile')) {
    return null;
  }
  const max = convertValueToUnit(limit, chargingRateUnit, opts.unit, opts.lineVoltage, numberPhases as NumberPhases);
  const min = typeof minChargingRate === 'number'
    ? convertValueToUnit(minChargingRate, chargingRateUnit, opts.unit, opts.lineVoltage, numberPhases as NumberPhases)
    : 0;
  return { 
    min: Math.abs(min), 
    max: Math.abs(max), 
    discharge: max < 0, 
    numberPhases: numberPhases as NumberPhases,
    unit: opts.unit,
  };
};

export const getInstantChargingLimitsFromProfiles = (profiles: ChargingProfile[], referenceDate: Date, opts: GetInstantChargingLimitsFromProfileOpts): InstantChargingLimits | null => {
  return profiles.reduce((range: InstantChargingLimits | null, profile: ChargingProfile) => {
    return getInstantChargingLimitsFromProfile(profile, referenceDate, opts) ?? range;
  }, null);
};

export const applyLimitsToInstantChargingLimits = (lineVoltage: LineVoltage, original: InstantChargingLimits, limiter: InstantChargingLimits): InstantChargingLimits => {
  if (original.discharge !== limiter.discharge) {
    return original;
  }
  return { 
    discharge: original.discharge,
    numberPhases: Math.min(original.numberPhases, limiter.numberPhases) as NumberPhases,
    min: Math.max(convertValueToUnit(limiter.min, limiter.unit, original.unit, lineVoltage, limiter.numberPhases), original.min),
    max: Math.min(convertValueToUnit(limiter.max, limiter.unit, original.unit, lineVoltage, limiter.numberPhases), original.max),
    unit: original.unit,
  };
  
};

