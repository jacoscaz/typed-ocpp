
import type { SetChargingProfileRequest  } from '../types.js';

export type LineVoltage = 110 | 230;
export type NumberPhases = 1 | 2 | 3;
export type ChargingProfile = SetChargingProfileRequest;
export type ChargingRateUnit = ChargingProfile['csChargingProfiles']['chargingSchedule']['chargingRateUnit'];
export type ChargingProfilePurpose = ChargingProfile['csChargingProfiles']['chargingProfilePurpose'];

export interface ChargePointInfo {
  lineVoltage: LineVoltage;
  canDischarge: boolean;
  chargingRateLimits: { 
    unit: ChargingRateUnit; 
    charging: { max: number; min: number; };
    discharging: { max: number; min: number; };
    numberPhases: NumberPhases;
  }
}

export interface ConnectorStatus {
  chargingRate: { 
    unit: ChargingRateUnit; 
    value: number; 
  } | undefined;
  transaction: { 
    id: number; 
    startDate: Date;
  } | undefined;
}

export const convertValueToUnit = (value: number, source_unit: ChargingRateUnit, target_unit: ChargingRateUnit, line_voltage: LineVoltage, number_phases: NumberPhases): number => {
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
