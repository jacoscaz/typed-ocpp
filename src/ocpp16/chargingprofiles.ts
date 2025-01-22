
import type { ClearChargingProfileRequest, SetChargingProfileRequest  } from './types';
import type { ClearChargingProfileCall, SetChargingProfileCall } from './call';

import { addMilliseconds, startOfDay, startOfWeek, differenceInMilliseconds } from 'date-fns';

type ChargingProfile = SetChargingProfileRequest;
type ChargingRateUnit = ChargingProfile['csChargingProfiles']['chargingSchedule']['chargingRateUnit'];
type ChargingProfilePurpose = ChargingProfile['csChargingProfiles']['chargingProfilePurpose'];

const convertUnit = (value: number, source_unit: ChargingRateUnit, target_unit: ChargingRateUnit, line_voltage: 110 | 230, number_phases: number): number => {
  if (source_unit === target_unit) {
    return value;
  }
  switch (source_unit) {
    case 'A': 
      return value * line_voltage * number_phases;
    case 'W': 
      return value / (line_voltage * number_phases);
  }
};

const compareChargingProfiles = (a: ChargingProfile, b: ChargingProfile) => {
  const { chargingProfilePurpose: pa, stackLevel: la } = a.csChargingProfiles;
  const { chargingProfilePurpose: pb, stackLevel: lb } = b.csChargingProfiles;
  // `chargingProfilePurpose` values (`TxProfile`, `TxDefaultProfile` and
  // `ChargePointMaxProfile`), when sorted lexicographically, go from highest
  // priority (`TxProfile`) to lowest priority (`ChargePointMaxProfile`).
  if (pa < pb) return +1;
  if (pa > pb) return -1;
  if (la < lb) return -1;
  if (la > lb) return +1;
  return 0;
};

export interface ChargingLimits {
  charging: { min: number, max: number };
  discharging: { min: number, max: number };
  shouldDischarge?: boolean;
}

export interface GetChargingLimitOpts {
  unit: ChargingRateUnit;
  connectorId: number;
  gridVoltage: 110 | 230;
  referenceDate?: Date;
  transaction?: {
    id: number;
    startDate: Date;
  },
  profilePurposes?: ChargingProfilePurpose[];
  canDischarge?: boolean;
  minChargingValue?: number;
  minDischargingValue?: number;
}

export const getProfileChargingLimitForDate = (profile: ChargingProfile, referenceDate: Date, opts: GetChargingLimitOpts): { min: number; max: number; discharge: boolean; } | null => {
  const { 
    connectorId, 
    csChargingProfiles: { chargingSchedule, validFrom, validTo, recurrencyKind, chargingProfileKind, chargingProfilePurpose, transactionId },
  } = profile;
  if (connectorId !== opts.connectorId) {
    return null;
  }
  if (validFrom && referenceDate < new Date(validFrom)) {
    return null;
  }
  if (validTo && referenceDate < new Date(validTo)) {
    return null;
  }
  if (opts.transaction && transactionId && chargingProfilePurpose === 'TxProfile' &&  transactionId !== opts.transaction.id) {
    return null;
  }
  if (opts.profilePurposes && !opts.profilePurposes.includes(chargingProfilePurpose)) {
    return null;
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
  const { limit, numberPhases } = period;
  const max = convertUnit(limit, chargingRateUnit, opts.unit, opts.gridVoltage, numberPhases ?? 3);
  const min = typeof minChargingRate === 'number'
    ? convertUnit(minChargingRate, chargingRateUnit, opts.unit, opts.gridVoltage, numberPhases ?? 3)
    : 0;
  return { min: Math.abs(min), max: Math.abs(max), discharge: max < 0 };
};

export class ChargingProfileStore {

  #profiles: ChargingProfile[];

  constructor() {
    this.#profiles = [];
  }

  addProfile(profile: ChargingProfile) {
    this.clearProfiles({ 
      chargingProfilePurpose: profile.csChargingProfiles.chargingProfilePurpose, 
      stackLevel: profile.csChargingProfiles.stackLevel,
    });
    this.#profiles.push(profile);
    this.#profiles.sort(compareChargingProfiles);
  }

  handleSetChargingProfileCall(call: SetChargingProfileCall) {
    this.addProfile(call[3]);
  }

  clearProfiles(opts: ClearChargingProfileRequest) {
    const { connectorId, chargingProfilePurpose, stackLevel, id } = opts;
    this.#profiles = this.#profiles.filter((profile: ChargingProfile) => {
      const match = true
        && id ? profile.csChargingProfiles.chargingProfileId === id : true
        && chargingProfilePurpose ? profile.csChargingProfiles.chargingProfilePurpose === chargingProfilePurpose : true
        && typeof connectorId === 'number' ? profile.connectorId === connectorId : true
        && typeof stackLevel === 'number' ? profile.csChargingProfiles.stackLevel === stackLevel : true
      return !match;
    });
  }

  handleClearChargingProfileCall(call: ClearChargingProfileCall) {
    this.clearProfiles(call[3]);
  }

  getChargingLimits(opts: GetChargingLimitOpts): ChargingLimits {
    const limits: ChargingLimits = {
      charging: { min: opts.minChargingValue ?? 0, max: Infinity },
      discharging: opts.canDischarge 
        ? { min: opts.minDischargingValue ?? 0, max: Infinity } 
        : { min: 0, max: 0 },
      shouldDischarge: false,
    };
    const referenceDate = opts.referenceDate ?? new Date();
    this.#profiles.forEach((profile) => {
      const profile_limits = getProfileChargingLimitForDate(profile, referenceDate, opts);
      if (profile_limits === null) {
        return;
      }
      if (profile_limits.discharge && opts.canDischarge) {
        limits.discharging.max = Math.min(limits.discharging.max, profile_limits.max);
        limits.discharging.min = Math.max(limits.discharging.min, profile_limits.min);
        limits.shouldDischarge = true;
      } else {
        limits.charging.max = Math.min(limits.charging.max, profile_limits.max);
        limits.charging.min = Math.max(limits.charging.min, profile_limits.min);
        limits.shouldDischarge = false;
      }
    });
    return limits;
  }

}