
import type { ChargingRateUnit, ChargingProfilePurpose, ChargingLimits } from '../utils.js';
import type { ChargingContext, ChargingSchedule, MaybeChargingSchedule } from './utils.js';
import type { MergeDataFn } from '../schedule/schedule.js';
import type { Models } from '../models.js';

import { addHours } from 'date-fns';
import { merge, getPeriodForDate, fillGaps } from '../schedule/schedule.js';
import { CHARGING_PROFILE_PURPOSES } from '../utils.js';
import { 
  mergeChargingLimitsMin, 
  mergeChargingLimitsRight, 
  mergeChargingLimitsAdd, 
  cloneChargingLimits,
} from './utils.js';

export interface WrappedProfile<ProfileType> {
  profile: ProfileType;
  stackLevel: number;
  /**
   * This maps to `connectorId` when using OCPP 1.6 and to `evseId` when using
   * OCPP 2.0 or OCPP 2.1.
   */
  chargerId: number;
}

export abstract class AbstractChargingManager<SetChargingProfileType, ClearChargingProfileRequestType> {

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
  
  getDefaultLimits = (fromDate: Date, toDate: Date, chargerId: number): ChargingLimits => {
    return {
      unit: 'W',
      charging: { min: 4200, max: 6000, phases: { qty: 1 } },
      discharging: { min: 0, max: 0, phases: { qty: 1 } },
      shouldDischarge: false,
    };
  }

  protected abstract  _getScheduleFromProfile(context: ChargingContext, profile: SetChargingProfileType, fromDate: Date, endDate: Date, unit: ChargingRateUnit): MaybeChargingSchedule;
  
  abstract setChargingProfile(profile: SetChargingProfileType): void;

  abstract clearChargingProfile(request: ClearChargingProfileRequestType): void;

  protected _setChargingProfile(purpose: ChargingProfilePurpose | 'ChargePointMaxProfile', chargerId: number, stackLevel: number, profile: SetChargingProfileType) {
    const _purpose = purpose === 'ChargePointMaxProfile' ? 'ChargingStationMaxProfile' : purpose;
    if (_purpose === 'ChargingStationMaxProfile' || _purpose === 'LocalGeneration' && chargerId !== 0) {
      throw new Error(`"${purpose}" profiles cannot be added for evseId other than "0"`);
    }
    if (_purpose === 'TxProfile' && chargerId === 0) {
      throw new Error('"TxProfile" profiles cannot be added for evseId "0"');
    }
    this._clearChargingProfiles(purpose, chargerId, stackLevel);
    this.#profiles[_purpose].push({
      chargerId,
      stackLevel,
      profile,
    });
    this.#profiles[_purpose].sort((l, r) => l.stackLevel < r.stackLevel ? -1 : 1);
  }

  protected _clearChargingProfiles(purpose: ChargingProfilePurpose | 'ChargePointMaxProfile' | undefined, chargerId: number | undefined, stackLevel: number | undefined) {
    purpose = purpose === 'ChargePointMaxProfile' ? 'ChargingStationMaxProfile' : purpose;
    (purpose ? [purpose] : CHARGING_PROFILE_PURPOSES).forEach((purpose) => {
      this.#profiles[purpose] = this.#profiles[purpose].filter((profile) => {
        if (typeof chargerId === 'number' && chargerId !== profile.chargerId) {
          return false;
        }
        if (typeof stackLevel === 'number' && stackLevel !== profile.stackLevel) {
          return false;
        }
        true;
      });
    });
  }

  #reduceChargingProfilesToSchedule(context: ChargingContext, purpose: ChargingProfilePurpose, profileFilterFn: (profile: WrappedProfile<SetChargingProfileType>) => boolean, fromDate: Date, toDate: Date, mergeLimits: MergeDataFn<ChargingLimits>, unit: ChargingRateUnit): MaybeChargingSchedule {
    return this.#profiles[purpose].reduce((schedule, profile) => {
      if (profileFilterFn(profile)) {
        return merge(
          schedule, 
          this._getScheduleFromProfile(context, profile.profile, fromDate, toDate, unit), 
          cloneChargingLimits, 
          mergeLimits,
        );
      }
      return schedule;
    }, [] as MaybeChargingSchedule);
  }

  getStationSchedule(fromDate: Date, toDate: Date, unit: ChargingRateUnit, model: Models.ChargingStation): ChargingSchedule {
    let schedule: MaybeChargingSchedule = [];
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
      (profile) => profile.chargerId === 0,
      fromDate,
      toDate,
      mergeChargingLimitsRight,
      unit,
    );
    schedule = merge(schedule, externalMaxSchedule, cloneChargingLimits, mergeChargingLimitsMin);
    return fillGaps(schedule, fromDate, toDate, (fromDate, toDate) => this.getDefaultLimits(fromDate, toDate, 0));
  }

  protected _getChargerSchedule(fromDate: Date, toDate: Date, chargerId: number, unit: ChargingRateUnit, model: Models.ChargingSession, priority?: boolean): ChargingSchedule {
    let schedule: MaybeChargingSchedule = [];
    const context: ChargingContext = { model };
    const defaultSchedule = this.#reduceChargingProfilesToSchedule(
      context,
      'TxDefaultProfile', 
      (profile) => profile.chargerId === 0 || profile.chargerId === chargerId,
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
        (profile) => profile.chargerId === 0,
        fromDate,
        toDate,
        mergeChargingLimitsRight,
        unit,
      ) 
      schedule = merge(schedule, defaultPrioritySchedule, cloneChargingLimits, mergeChargingLimitsRight);
    }
    if (chargerId !== 0) {
      const transactionSchedule = this.#reduceChargingProfilesToSchedule(
        context,
        'TxProfile', 
        (profile) => profile.chargerId === chargerId,
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
          (profile) => profile.chargerId === chargerId,
          fromDate,
          toDate,
          mergeChargingLimitsRight,
          unit,
        ); 
        merge(schedule, transactionPrioritySchedule, cloneChargingLimits, mergeChargingLimitsRight);
      }
    }
    return fillGaps(schedule, fromDate, toDate, (fromDate, toDate) => this.getDefaultLimits(fromDate, toDate, 0));
  }

  getStationLimitsAtDate(atDate: Date, unit: ChargingRateUnit, model: Models.ChargingStation): ChargingLimits {
    const schedule = this.getStationSchedule(atDate, addHours(atDate, 1), unit, model);
    const period = getPeriodForDate(schedule, atDate);
    if (!period) {
      throw new Error('period not found');
    }
    return period.data;
  }

  protected _getChargerLimitsAtDate(atDate: Date, chargerId: number, unit: ChargingRateUnit, model: Models.ChargingSession, priority?: boolean): ChargingLimits {
    const schedule = this._getChargerSchedule(atDate, addHours(atDate, 1), chargerId, unit, model, priority);
    const period = getPeriodForDate(schedule, atDate);
    if (!period) {
      throw new Error('period not found');
    }
    return period.data;
  }

}
