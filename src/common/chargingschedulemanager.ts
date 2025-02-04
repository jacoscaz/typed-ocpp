
import type { ChargingRateUnit, ChargingProfilePurpose, ChargingLimits } from './utils.js';
import type { ChargingContext, ChargingSchedule } from './chargingschedule.js';
import type { MergeDataFn } from './schedule.js';
import type { Models } from './models.js';

import { addHours } from 'date-fns';
import { merge, getPeriodForDate } from './schedule.js';
import { CHARGING_PROFILE_PURPOSES } from './utils.js';
import { 
  mergeChargingLimitsMin, 
  mergeChargingLimitsRight, 
  mergeChargingLimitsAdd, 
  cloneChargingLimits,
} from './chargingschedule.js';

export interface WrappedProfile<ProfileType> {
  profile: ProfileType;
  stackLevel: number;
  evseId: number;
}

export abstract class AbstractChargingScheduleManager<SetChargingProfileType, ClearChargingProfileType> {

  #profiles: Record<ChargingProfilePurpose, WrappedProfile<SetChargingProfileType>[]>;

  constructor() {
    this.#profiles = {
      ['ChargingStationExternalConstraints']: [],
      ['ChargingStationMaxProfile']: [],
      ['TxDefaultProfile']: [],
      ['TxProfile']: [],
      ['PriorityCharging']: [],
      ['LocalGeneration']: [],
    };
  }

  protected abstract  _getScheduleFromProfile(context: ChargingContext, profile: SetChargingProfileType, fromDate: Date, endDate: Date, unit: ChargingRateUnit): ChargingSchedule;
  
  abstract setChargingProfile(profile: SetChargingProfileType): void;

  abstract clearChargingProfile(request: ClearChargingProfileType): void;

  protected _setChargingProfile(purpose: ChargingProfilePurpose | 'ChargePointMaxProfile', evseId: number, stackLevel: number, profile: SetChargingProfileType) {
    const _purpose = purpose === 'ChargePointMaxProfile' ? 'ChargingStationMaxProfile' : purpose;
    if (_purpose === 'ChargingStationMaxProfile' || _purpose === 'LocalGeneration' && evseId !== 0) {
      throw new Error(`"${purpose}" profiles cannot be added for evseId other than "0"`);
    }
    if (_purpose === 'TxProfile' && evseId === 0) {
      throw new Error('"TxProfile" profiles cannot be added for evseId "0"');
    }
    this._clearChargingProfiles(purpose, evseId, stackLevel);
    this.#profiles[_purpose].push({
      evseId,
      stackLevel,
      profile,
    });
    this.#profiles[_purpose].sort((l, r) => l.stackLevel < r.stackLevel ? -1 : 1);
  }

  protected _clearChargingProfiles(purpose: ChargingProfilePurpose | 'ChargePointMaxProfile' | undefined, evseId: number | undefined, stackLevel: number | undefined) {
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

  #reduceChargingProfilesToSchedule = (context: ChargingContext, purpose: ChargingProfilePurpose, profileFilterFn: (profile: WrappedProfile<SetChargingProfileType>) => boolean, fromDate: Date, toDate: Date, limitsMergerFn: MergeDataFn<ChargingLimits>, unit: ChargingRateUnit): ChargingSchedule => {
    return this.#profiles[purpose].reduce((schedule, profile) => {
      if (profileFilterFn(profile)) {
        return merge(
          schedule, 
          this._getScheduleFromProfile(context, profile.profile, fromDate, toDate, unit), 
          cloneChargingLimits, 
          limitsMergerFn,
        );
      }
      return schedule;
    }, [] as ChargingSchedule);
  };

  getStationSchedule(fromDate: Date, toDate: Date, unit: ChargingRateUnit, model: Models.ChargingStation): ChargingSchedule {
    let schedule: ChargingSchedule = [];
    const context = { model };
    const maxSchedule = this.#reduceChargingProfilesToSchedule(
      context,
      'ChargingStationMaxProfile', 
      (profile) => true,
      fromDate,
      toDate,
      mergeChargingLimitsRight,
      unit,
    );
    schedule = merge(schedule, maxSchedule, cloneChargingLimits, mergeChargingLimitsRight);
    const localGenerationSchedule = this.#reduceChargingProfilesToSchedule(
      context,
      'LocalGeneration', 
      (profile) => true,
      fromDate,
      toDate,
      mergeChargingLimitsRight,
      unit,
    );
    schedule = merge(schedule, localGenerationSchedule, cloneChargingLimits, mergeChargingLimitsAdd);
    const externalMaxSchedule = this.#reduceChargingProfilesToSchedule(
      context,
      'ChargingStationExternalConstraints', 
      (profile) => profile.evseId === 0,
      fromDate,
      toDate,
      mergeChargingLimitsRight,
      unit,
    );
    schedule = merge(schedule, externalMaxSchedule, cloneChargingLimits, mergeChargingLimitsMin);
    return schedule;
  }

  getEvseSchedule(evseId: number, fromDate: Date, toDate: Date, unit: ChargingRateUnit, model: Models.ChargingSession, priority?: boolean): ChargingSchedule {
    let schedule: ChargingSchedule = [];
    const context: ChargingContext = { model };
    const defaultSchedule = this.#reduceChargingProfilesToSchedule(
      context,
      'TxDefaultProfile', 
      (profile) => profile.evseId === 0 || profile.evseId === evseId,
      fromDate,
      toDate,
      mergeChargingLimitsRight,
      unit,
    );
    schedule = merge(schedule, defaultSchedule, cloneChargingLimits, mergeChargingLimitsRight);
    if (priority) {
      const defaultPrioritySchedule = this.#reduceChargingProfilesToSchedule(
        context,
        'PriorityCharging', 
        (profile) => profile.evseId === 0,
        fromDate,
        toDate,
        mergeChargingLimitsRight,
        unit,
      ) 
      schedule = merge(schedule, defaultPrioritySchedule, cloneChargingLimits, mergeChargingLimitsRight);
    }
    if (evseId !== 0) {
      const transactionSchedule = this.#reduceChargingProfilesToSchedule(
        context,
        'TxProfile', 
        (profile) => profile.evseId === evseId,
        fromDate,
        toDate,
        mergeChargingLimitsRight,
        unit,
      ) 
      schedule = merge(schedule, transactionSchedule, cloneChargingLimits, mergeChargingLimitsRight);
      if (priority) {
        const transactionPrioritySchedule = this.#reduceChargingProfilesToSchedule(
          context,
          'PriorityCharging', 
          (profile) => profile.evseId === evseId,
          fromDate,
          toDate,
          mergeChargingLimitsRight,
          unit,
        ) 
        schedule = merge(schedule, transactionPrioritySchedule, cloneChargingLimits, mergeChargingLimitsRight);
      }
    }
    return schedule;
  }

  getStationLimitsAtDate(atDate: Date, unit: ChargingRateUnit, model: Models.ChargingStation): ChargingLimits | undefined {
    const schedule = this.getStationSchedule(atDate, addHours(atDate, 1), unit, model);
    if (schedule) {
      return getPeriodForDate(schedule, atDate)?.data;
    }
  }

  getEvseLimitsAtDate(evseId: Exclude<number, 0>, atDate: Date, unit: ChargingRateUnit, model: Models.ChargingSession, priority?: boolean): ChargingLimits | undefined {
    const schedule = this.getEvseSchedule(evseId, atDate, addHours(atDate, 1), unit, model, priority);
    if (schedule) {
      return getPeriodForDate(schedule, atDate)?.data;
    }
  }

}