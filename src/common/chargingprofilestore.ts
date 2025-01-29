
import type { ChargingSchedule, ChargingLimits } from './chargingschedule.js';
import type { ChargingRateUnit, LineVoltage } from './utils';
import type { MergeDataFn } from './schedule.js';

import { addHours } from 'date-fns';
import { merge, getPeriodForDate } from './schedule.js';
import { 
  mergeChargingLimitsCombineMin, 
  mergeChargingLimitsOverrideRtoL, 
  mergeChargingLimitsCombineAdd, 
  cloneChargingLimits,
} from './chargingschedule.js';

const CHARGING_PROFILE_PURPOSES = [
  'ChargingStationExternalConstraints',
  'ChargingStationMaxProfile',
  'TxDefaultProfile',
  'TxProfile',
  'PriorityCharging',
  'LocalGeneration',
] as const;

export type ChargingProfilePurpose = typeof CHARGING_PROFILE_PURPOSES[number];

export interface PhysicalInfo {
  canDischarge: boolean;
  lineVoltage: LineVoltage;
}

export interface WrappedProfile<ProfileType> {
  profile: ProfileType;
  stackLevel: number;
  evseId: number;
}



export abstract class ChargingProfileStore<ProfileType> {

  protected _info: PhysicalInfo;
  #profiles: Record<ChargingProfilePurpose, WrappedProfile<ProfileType>[]>;

  constructor(info: PhysicalInfo) {
    this._info = { ...info };
    this.#profiles = {
      ['ChargingStationExternalConstraints']: [],
      ['ChargingStationMaxProfile']: [],
      ['TxDefaultProfile']: [],
      ['TxProfile']: [],
      ['PriorityCharging']: [],
      ['LocalGeneration']: [],
    };
  }

  protected abstract  _getScheduleFromProfile(profile: ProfileType, fromDate: Date, endDate: Date, unit: ChargingRateUnit): ChargingSchedule;
  
  abstract addChargingProfile(profile: ProfileType): void;

  protected _addChargingProfile(purpose: ChargingProfilePurpose | 'ChargePointMaxProfile', evseId: number, stackLevel: number, profile: ProfileType) {
    const _purpose = purpose === 'ChargePointMaxProfile' ? 'ChargingStationMaxProfile' : purpose;
    if (_purpose === 'ChargingStationMaxProfile' || _purpose === 'LocalGeneration' && evseId !== 0) {
      throw new Error(`"${purpose}" profiles cannot be added for evseId other than "0"`);
    }
    if (_purpose === 'TxProfile' && evseId === 0) {
      throw new Error('"TxProfile" profiles cannot be added for evseId "0"');
    }
    this._removeChargingProfiles(purpose, evseId, stackLevel);
    this.#profiles[_purpose].push({
      evseId: evseId,
      stackLevel,
      profile,
    });
    this.#profiles[_purpose].sort((l, r) => l.stackLevel < r.stackLevel ? -1 : 1);
  }

  protected _removeChargingProfiles(purpose: ChargingProfilePurpose | 'ChargePointMaxProfile' | undefined, evseId: number | undefined, stackLevel: number | undefined) {
    purpose = purpose === 'ChargePointMaxProfile' ? 'ChargingStationMaxProfile' : purpose;
    (purpose ? [purpose] : CHARGING_PROFILE_PURPOSES).forEach((purpose) => {
      this.#profiles[purpose] = this.#profiles[purpose].filter((profile) => {
        if (typeof evseId === 'number' && evseId !== profile.evseId) {
          return false;
        }
        if (typeof stackLevel === 'number' && stackLevel !== profile.stackLevel) {
          return false;
        }
        true;
      });
    });
  }

  #reduceChargingProfilesToSchedule = (purpose: ChargingProfilePurpose, profileFilterFn: (profile: WrappedProfile<ProfileType>) => boolean, fromDate: Date, toDate: Date, unit: ChargingRateUnit, limitsMergerFn: MergeDataFn<ChargingLimits>): ChargingSchedule => {
    return this.#profiles[purpose].reduce((schedule, profile) => {
      if (profileFilterFn(profile)) {
        return merge(
          schedule, 
          this._getScheduleFromProfile(profile.profile, fromDate, toDate, unit), 
          cloneChargingLimits, 
          limitsMergerFn,
        );
      }
      return schedule;
    }, [] as ChargingSchedule);
  };

  getStationChargingSchedule(fromDate: Date, toDate: Date, unit: ChargingRateUnit): ChargingSchedule {
    let schedule: ChargingSchedule = [];
    const maxSchedule = this.#reduceChargingProfilesToSchedule(
      'ChargingStationMaxProfile', 
      (profile) => true,
      fromDate,
      toDate,
      unit,
      mergeChargingLimitsOverrideRtoL
    );
    schedule = merge(schedule, maxSchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
    const localGenerationSchedule = this.#reduceChargingProfilesToSchedule(
      'LocalGeneration', 
      (profile) => true,
      fromDate,
      toDate,
      unit,
      mergeChargingLimitsOverrideRtoL
    );
    schedule = merge(schedule, localGenerationSchedule, cloneChargingLimits, mergeChargingLimitsCombineAdd);
    const externalMaxSchedule = this.#reduceChargingProfilesToSchedule(
      'ChargingStationExternalConstraints', 
      (profile) => profile.evseId === 0,
      fromDate,
      toDate,
      unit,
      mergeChargingLimitsOverrideRtoL
    );
    schedule = merge(schedule, externalMaxSchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
    return schedule;
  }

  getEvseChargingSchedule(evseId: number, fromDate: Date, toDate: Date, unit: ChargingRateUnit, priority?: boolean): ChargingSchedule {
    let schedule: ChargingSchedule = [];
    const defaultSchedule = this.#reduceChargingProfilesToSchedule(
      'TxDefaultProfile', 
      (profile) => profile.evseId === 0 || profile.evseId === evseId,
      fromDate,
      toDate,
      unit,
      mergeChargingLimitsOverrideRtoL
    );
    schedule = merge(schedule, defaultSchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
    if (priority) {
      const defaultPrioritySchedule = this.#reduceChargingProfilesToSchedule(
        'PriorityCharging', 
        (profile) => profile.evseId === 0,
        fromDate,
        toDate,
        unit,
        mergeChargingLimitsOverrideRtoL
      ) 
      schedule = merge(schedule, defaultPrioritySchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
    }
    if (evseId !== 0) {
      const transactionSchedule = this.#reduceChargingProfilesToSchedule(
        'TxProfile', 
        (profile) => profile.evseId === evseId,
        fromDate,
        toDate,
        unit,
        mergeChargingLimitsOverrideRtoL
      ) 
      schedule = merge(schedule, transactionSchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
      if (priority) {
        const transactionPrioritySchedule = this.#reduceChargingProfilesToSchedule(
          'PriorityCharging', 
          (profile) => profile.evseId === evseId,
          fromDate,
          toDate,
          unit,
          mergeChargingLimitsOverrideRtoL
        ) 
        schedule = merge(schedule, transactionPrioritySchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
      }
    }
    return schedule;
  }

  getStationChargingLimitsAtDate(atDate: Date, unit: ChargingRateUnit): ChargingLimits | undefined {
    const schedule = this.getStationChargingSchedule(atDate, addHours(atDate, 1), unit);
    if (schedule) {
      return getPeriodForDate(schedule, atDate)?.data;
    }
  }

  getEvseChargingLimitsAtDate(evseId: Exclude<number, 0>, atDate: Date, unit: ChargingRateUnit, priority?: boolean): ChargingLimits | undefined {
    const schedule = this.getEvseChargingSchedule(evseId, atDate, addHours(atDate, 1), unit, priority);
    if (schedule) {
      return getPeriodForDate(schedule, atDate)?.data;
    }
  }

}