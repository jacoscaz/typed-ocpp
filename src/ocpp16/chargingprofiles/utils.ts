
import type { SetChargingProfileRequest  } from '../types.js';
import type { LineVoltage } from '../../common/schedule.js';

export type ChargingProfile = SetChargingProfileRequest;
export type ChargingProfilePurpose = ChargingProfile['csChargingProfiles']['chargingProfilePurpose'];

export interface ChargePointInfo {
  lineVoltage: LineVoltage;
}
