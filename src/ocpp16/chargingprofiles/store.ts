
import type { ChargingSchedule, ChargingRateUnit, LineVoltage } from '../../common/schedule.js';
import type { ClearChargingProfileRequest, SetChargingProfileRequest  } from '../types.js';
import type { ChargingProfilePurpose, ChargingProfile, ChargePointInfo } from './utils.js';

import { cloneChargingLimits, mergeChargingLimitsCombine, mergeChargingLimitsOverrideRtoL } from '../../common/schedule.js';
import { merge } from '../../common/periods.js';
import { getChargingScheduleFromProfile } from './limits.js';


export class ChargingProfileStore {

  #info: ChargePointInfo;
  #profiles: Record<ChargingProfilePurpose, SetChargingProfileRequest[]>;

  constructor(info: ChargePointInfo) {
    this.#info = info;
    this.#profiles = {
      'ChargePointMaxProfile': [],
      'TxDefaultProfile': [],
      'TxProfile': [],
    };
  }

  addProfile(profile: SetChargingProfileRequest) {
    const { connectorId, csChargingProfiles: { chargingProfilePurpose, stackLevel } } = profile;
    this.clearProfiles({ chargingProfilePurpose, stackLevel, connectorId });
    this.#profiles[chargingProfilePurpose].push(profile);
    this.#profiles[chargingProfilePurpose].sort((profile1, profile2) => {
      return profile1.csChargingProfiles.stackLevel < profile2.csChargingProfiles.stackLevel ? -1 : 1;
    });
  }

  #clearProfiles(purpose: ChargingProfilePurpose, opts: ClearChargingProfileRequest) {
    const { connectorId, stackLevel, id } = opts;
    this.#profiles[purpose] = this.#profiles[purpose].filter((profile: ChargingProfile) => {
      return id ? profile.csChargingProfiles.chargingProfileId === id : true
        && typeof connectorId === 'number' ? profile.connectorId === connectorId : true
        && typeof stackLevel === 'number' ? profile.csChargingProfiles.stackLevel === stackLevel : true
      ;
    });
  }

  clearProfiles(opts: ClearChargingProfileRequest) {
    const { chargingProfilePurpose, connectorId } = opts;
    if (chargingProfilePurpose) {
      this.#clearProfiles(chargingProfilePurpose, { 
        ...opts, 
        connectorId: chargingProfilePurpose === 'ChargePointMaxProfile' ? undefined : connectorId,
      });
    } else {
      this.#clearProfiles('ChargePointMaxProfile', { ...opts, connectorId: undefined });
      this.#clearProfiles('TxDefaultProfile', opts);
      this.#clearProfiles('TxProfile', opts);
    }
  }

  #getProfiles(purpose: ChargingProfilePurpose, connectorId?: number, transactionId?: number): ChargingProfile[] {
    return this.#profiles[purpose].filter((profile) => {
      const { connectorId: profileConnectorId, csChargingProfiles: { transactionId: profileTransactionId } } = profile;
      switch (purpose) {
        case 'TxDefaultProfile':
          if (profileConnectorId && connectorId && connectorId !== profileConnectorId) {
            return false;
          }
          break;
        case 'TxProfile':
          if (typeof profileConnectorId === 'number' && connectorId && connectorId !== profileConnectorId) {
            return false;
          }
          if (profileTransactionId && transactionId && profileTransactionId !== transactionId) {
            return false;
          }
          break;
      }
      return true;
    });
  };

  getChargingSchedule(connectorId: Exclude<number, 0>, transactionStartDate: Date, transactionDuration: number, unit: ChargingRateUnit, line_voltage: LineVoltage): ChargingSchedule {
    const normal = [
      this.#getProfiles('TxDefaultProfile', connectorId)
        .map(profile => getChargingScheduleFromProfile(profile, transactionStartDate, transactionDuration, unit, line_voltage))
        .reduce((prev, next) => merge(prev, next, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []),
      this.#getProfiles('TxProfile', connectorId)
        .map(profile => getChargingScheduleFromProfile(profile, transactionStartDate, transactionDuration, unit, line_voltage))
        .reduce((prev, next) => merge(prev, next, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []),
    ].reduce((prev, next) => merge(prev, next, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []);
    const limit = this.#getProfiles('ChargePointMaxProfile', connectorId)
      .map(profile => getChargingScheduleFromProfile(profile, transactionStartDate, transactionDuration, unit, line_voltage))
      .reduce((prev, next) => merge(prev, next, cloneChargingLimits, mergeChargingLimitsOverrideRtoL), []);
    return merge(normal, limit, cloneChargingLimits, mergeChargingLimitsCombine);
  };
  

}