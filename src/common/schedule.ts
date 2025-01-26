
import type { Period, Series } from './periods.js';

import type { merge } from './periods.js';

export type ChargingRateUnit = 'W' | 'A';

export type LineVoltage = 110 | 230;

export type NumberPhases = 1 | 2 | 3;

export const convertChargingRate = (value: number, source_unit: ChargingRateUnit, target_unit: ChargingRateUnit, line_voltage: LineVoltage, number_phases: NumberPhases): number => {
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

export const convertChargingLimits = (limits: ChargingLimits, target_unit: ChargingRateUnit, line_voltage: LineVoltage): ChargingLimits => {
  const converted = { ...limits };
  converted.charging.min = convertChargingRate(limits.charging.min, limits.unit, target_unit, line_voltage, converted.charging.numberPhases);
  converted.discharging.max = convertChargingRate(limits.discharging.max, limits.unit, target_unit, line_voltage, converted.discharging.numberPhases);
  converted.charging.min = convertChargingRate(limits.charging.min, limits.unit, target_unit, line_voltage, converted.charging.numberPhases);
  converted.discharging.max = convertChargingRate(limits.discharging.max, limits.unit, target_unit, line_voltage, converted.discharging.numberPhases);
  converted.unit = target_unit;
  return converted;
};

export interface ChargingLimits {
  canDischarge: boolean;
  shouldDischarge: boolean;
  charging: { min: number; max: number; numberPhases: NumberPhases; };
  discharging: { min: number; max: number; numberPhases: NumberPhases; }; 
  unit: ChargingRateUnit;
}

export const cloneChargingLimits = (l: ChargingLimits): ChargingLimits => ({ ...l });

export const mergeChargingLimitsOverrideRtoL = (l: ChargingLimits, r: ChargingLimits): ChargingLimits => { 
  if (l.unit !== r.unit) throw new Error('cannot merge limits with different units');
  return r;
};

export const mergeChargingLimitsCombine = (l: ChargingLimits, r: ChargingLimits): ChargingLimits => {
  if (l.unit !== r.unit) throw new Error('cannot merge limits with different units');
  return {
    canDischarge: l.canDischarge && r.canDischarge,
    shouldDischarge: l.shouldDischarge && r.shouldDischarge,
    charging: {
      max: Math.min(l.charging.max, r.charging.max),
      min: Math.max(l.charging.min, r.charging.min),
      numberPhases: Math.min(l.charging.numberPhases, r.charging.numberPhases) as NumberPhases,
    },
    discharging: {
      max: Math.min(l.discharging.max, r.discharging.max),
      min: Math.max(l.discharging.min, r.discharging.min),
      numberPhases: Math.min(l.discharging.numberPhases, r.discharging.numberPhases) as NumberPhases,
    },
    unit: l.unit,
  };
};

export type ChargingSchedule = Series<ChargingLimits>;