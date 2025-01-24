
import type { ClearChargingProfileRequest, SetChargingProfileRequest  } from '../types.js';
import type { ClearChargingProfileCall, SetChargingProfileCall } from '../call.js';
import type { ChargingProfilePurpose, ChargingProfile, ChargingRateUnit, ConnectorStatus, ChargePointInfo, LineVoltage } from './utils.js';
import type { InstantChargingLimits, GetInstantChargingLimitsFromProfileOpts } from './limits.js';

import { getInstantChargingLimitsFromProfile, getInstantChargingLimitsFromProfiles, applyLimitsToInstantChargingLimits } from './limits.js';
import { EMPTY_OBJ } from '../../common/utils.js';

export interface GetConnectorInstantChargingLimitsOpts {}

export class ChargingProfileStore {

  #info: ChargePointInfo;
  #profiles: Record<ChargingProfilePurpose, ChargingProfile[]>;
  #connectors: ConnectorStatus[];

  constructor(info: ChargePointInfo) {
    this.#info = info;
    this.#connectors = [];
    this.#profiles = {
      'ChargePointMaxProfile': [],
      'TxDefaultProfile': [],
      'TxProfile': [],
    };
  }

  #setConnector(connectorId: number) {
    if (!this.#connectors[connectorId]) {
      this.#connectors[connectorId] = { 
        transaction: undefined, 
        chargingRate: undefined,
      };
    }
  }

  setConnectorChargingRate(connectorId: number, rate: ConnectorStatus['chargingRate']) {
    this.#setConnector(connectorId);
    this.#connectors[connectorId].chargingRate = rate;
  }

  setConnectorTransaction(connectorId: Exclude<number, 0>, trx: ConnectorStatus['transaction']) {
    this.#setConnector(connectorId);
    this.#connectors[connectorId].transaction = trx;
  }

  addProfile(profile: ChargingProfile) {
    const { connectorId, csChargingProfiles: { chargingProfilePurpose, stackLevel } } = profile;
    this.clearProfiles({ chargingProfilePurpose, stackLevel, connectorId });
    this.#profiles[chargingProfilePurpose].push(profile);
    this.#profiles[chargingProfilePurpose].sort((profile1, profile2) => {
      return profile1.csChargingProfiles.stackLevel < profile2.csChargingProfiles.stackLevel ? -1 : 1;
    });
  }

  handleSetChargingProfileCall(call: SetChargingProfileCall) {
    this.addProfile(call[3]);
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

  handleClearChargingProfileCall(call: ClearChargingProfileCall) {
    this.clearProfiles(call[3]);
  }

  getConnectorInstantChargingLimits(connectorId: Exclude<number, 0>, referenceDate: Date, unit: ChargingRateUnit, opts: GetConnectorInstantChargingLimitsOpts = EMPTY_OBJ): InstantChargingLimits | null {

    const global = getInstantChargingLimitsFromProfiles(
      this.#profiles.ChargePointMaxProfile, 
      referenceDate, 
      { 
        ...opts,
        ...this.#info,
        unit,
        connectorId,
        purpose: 'ChargePointMaxProfile',
      },
    );

    const transaction = getInstantChargingLimitsFromProfiles(
      this.#profiles.TxDefaultProfile, 
      referenceDate, 
      { 
        ...opts,
        ...this.#info,
        unit,
        connectorId,
        purpose: 'TxProfile',
        transaction: this.#connectors[connectorId]?.transaction,
      },
    );

    // TODO: revise transaction-specific charging limits to make sure they fall
    // within global limits for this CS, also considering the state of other
    // connectors.
    if (transaction) return global ? applyLimitsToInstantChargingLimits(this.#info.lineVoltage, transaction, global) : transaction;

    const defaults = getInstantChargingLimitsFromProfiles(
      this.#profiles.TxDefaultProfile, 
      referenceDate, 
      { 
        ...opts,
        ...this.#info,
        unit,
        connectorId,
        purpose: 'TxDefaultProfile',
      },
    );

    // TODO: revise default charging limits to make sure they fall within
    // global limits for this CS, also considering the state of other
    // connectors.
    if (defaults) return global ? applyLimitsToInstantChargingLimits(this.#info.lineVoltage, defaults, global) : defaults;

    return global;
  
  }

}