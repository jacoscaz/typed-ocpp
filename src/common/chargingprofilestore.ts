
import type { ChargingSchedule, ChargingLimits } from './chargingschedule.js';
import type { ChargingRateUnit, LineVoltage } from './utils';

import { merge } from './schedule.js';
import { mergeChargingLimitsCombineMin, mergeChargingLimitsOverrideRtoL, mergeChargingLimitsCombineAdd, cloneChargingLimits } from './chargingschedule.js';

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
  lineVoltage: LineVoltage;
}

export interface WrappedProfile<ProfileType> {
  profile: ProfileType;
  stackLevel: number;
  connectorIdOrEvseId: number;
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

  protected _addChargingProfile(purpose: ChargingProfilePurpose | 'ChargePointMaxProfile', connectorIdOrEvseId: number, stackLevel: number, profile: ProfileType) {
    const _purpose = purpose === 'ChargePointMaxProfile' ? 'ChargingStationMaxProfile' : purpose;
    if (_purpose === 'ChargingStationMaxProfile' || _purpose === 'LocalGeneration' && connectorIdOrEvseId !== 0) {
      throw new Error(`"${purpose}" profiles cannot be added for connectorId or evseId other than "0"`);
    }
    if (_purpose === 'TxProfile' && connectorIdOrEvseId === 0) {
      throw new Error('"TxProfile" profiles cannot be added for connectorId or evseId "0"');
    }
    this._removeChargingProfiles(purpose, connectorIdOrEvseId, stackLevel);
    this.#profiles[_purpose].push({
      connectorIdOrEvseId,
      stackLevel,
      profile,
    });
    this.#profiles[_purpose].sort((l, r) => l.stackLevel < r.stackLevel ? -1 : 1);
  }

  protected _removeChargingProfiles(purpose: ChargingProfilePurpose | 'ChargePointMaxProfile' | undefined, connectorIdOrEvseId: number | undefined, stackLevel: number | undefined) {
    purpose = purpose === 'ChargePointMaxProfile' ? 'ChargingStationMaxProfile' : purpose;
    (purpose ? [purpose] : CHARGING_PROFILE_PURPOSES).forEach((purpose) => {
      this.#profiles[purpose] = this.#profiles[purpose].filter((profile) => {
        if (typeof connectorIdOrEvseId === 'number' && connectorIdOrEvseId !== profile.connectorIdOrEvseId) {
          return false;
        }
        if (typeof stackLevel === 'number' && stackLevel !== profile.stackLevel) {
          return false;
        }
        true;
      });
    });
  }

  getStationChargingSchedule(fromDate: Date, toDate: Date, unit: ChargingRateUnit): ChargingSchedule {
    let schedule: ChargingSchedule = [];
    const maxSchedule = this.#profiles['ChargingStationMaxProfile']
      .filter((profile) => true)
      .map(profile => this._getScheduleFromProfile(profile.profile, fromDate, toDate, unit))
      .reduce((left, right) => merge(left, right, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []);
    schedule = merge(schedule, maxSchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
    const localGenerationSchedule = this.#profiles['LocalGeneration']
      .filter((profile) => true)
      .map(profile => this._getScheduleFromProfile(profile.profile, fromDate, toDate, unit))
      .reduce((left, right) => merge(left, right, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []);
    schedule = merge(schedule, localGenerationSchedule, cloneChargingLimits, mergeChargingLimitsCombineAdd);
    const externalMaxSchedule = this.#profiles['ChargingStationExternalConstraints']
      .filter((profile) => profile.connectorIdOrEvseId === 0)
      .map(profile => this._getScheduleFromProfile(profile.profile, fromDate, toDate, unit))
      .reduce((left, right) => merge(left, right, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []);
    schedule = merge(schedule, externalMaxSchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
    return schedule;
  }

  getConnectorOrEvseChargingSchedule(connectorIdOrEvseId: number, fromDate: Date, toDate: Date, unit: ChargingRateUnit, priority?: boolean): ChargingSchedule {
    let schedule: ChargingSchedule = [];
    const defaultSchedule = this.#profiles['TxDefaultProfile']
      .filter((profile) => profile.connectorIdOrEvseId === 0 || profile.connectorIdOrEvseId === connectorIdOrEvseId)
      .map(profile => this._getScheduleFromProfile(profile.profile, fromDate, toDate, unit))
      .reduce((left, right) => merge(left, right, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []);
    schedule = merge(schedule, defaultSchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
    if (priority) {
      const defaultPrioritySchedule = this.#profiles['PriorityCharging']
        .filter((profile) => profile.connectorIdOrEvseId === 0)
        .map(profile => this._getScheduleFromProfile(profile.profile, fromDate, toDate, unit))
        .reduce((left, right) => merge(left, right, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []);      
      schedule = merge(defaultPrioritySchedule, defaultSchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
    }
    if (connectorIdOrEvseId !== 0) {
      const transactionSchedule = this.#profiles['TxProfile']
        .filter((profile) => profile.connectorIdOrEvseId === connectorIdOrEvseId)
        .map(profile => this._getScheduleFromProfile(profile.profile, fromDate, toDate, unit))
        .reduce((left, right) => merge(left, right, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []);      
      schedule = merge(transactionSchedule, defaultSchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
      if (priority) {
        const transactionPrioritySchedule = this.#profiles['PriorityCharging']
          .filter((profile) => profile.connectorIdOrEvseId === connectorIdOrEvseId)
          .map(profile => this._getScheduleFromProfile(profile.profile, fromDate, toDate, unit))
          .reduce((left, right) => merge(left, right, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []);      
        schedule = merge(transactionPrioritySchedule, defaultSchedule, cloneChargingLimits, mergeChargingLimitsOverrideRtoL);
      }
    }
    const stationSchedule = this.getStationChargingSchedule(fromDate, toDate, unit);
    schedule = merge(stationSchedule, schedule, cloneChargingLimits, mergeChargingLimitsCombineMin); 
    return schedule;
  }

}