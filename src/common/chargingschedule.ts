
import type { Schedule, CloneDataFn, MergeDataFn } from './schedule.js';
import type { ChargingRateUnit, NumberPhases, LineVoltage } from './utils.js';

import { convertChargingRate } from './utils.js';

export interface ChargingLimits {
  canDischarge: boolean;
  shouldDischarge: boolean;
  charging: { 
    min: number; 
    max: number; 
    numberPhases: NumberPhases; 
  };
  discharging: { 
    min: number; 
    max: number; 
    numberPhases: NumberPhases; 
  }; 
  unit: ChargingRateUnit;
}

export type ChargingSchedule = Schedule<ChargingLimits>;

export const convertChargingLimits = (limits: ChargingLimits, target_unit: ChargingRateUnit, line_voltage: LineVoltage): ChargingLimits => {
  const converted = { ...limits };
  converted.charging.min = convertChargingRate(limits.charging.min, limits.unit, target_unit, line_voltage, converted.charging.numberPhases);
  converted.discharging.max = convertChargingRate(limits.discharging.max, limits.unit, target_unit, line_voltage, converted.discharging.numberPhases);
  converted.charging.min = convertChargingRate(limits.charging.min, limits.unit, target_unit, line_voltage, converted.charging.numberPhases);
  converted.discharging.max = convertChargingRate(limits.discharging.max, limits.unit, target_unit, line_voltage, converted.discharging.numberPhases);
  converted.unit = target_unit;
  return converted;
};

export const cloneChargingLimits: CloneDataFn<ChargingLimits> = (l: ChargingLimits): ChargingLimits => ({ 
  ...l,
  charging: { ...l.charging },
  discharging: { ...l.discharging },
});

export const mergeChargingLimitsOverrideRtoL: MergeDataFn<ChargingLimits> = (l: ChargingLimits, r: ChargingLimits): ChargingLimits => { 
  if (l.unit !== r.unit) {
    throw new Error('cannot merge limits with different units');
  }
  return r;
};

export const mergeChargingLimitsCombineMin: MergeDataFn<ChargingLimits> = (l: ChargingLimits, r: ChargingLimits): ChargingLimits => {
  if (l.unit !== r.unit) {
    throw new Error('cannot merge limits with different units');
  }
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

export const mergeChargingLimitsCombineAdd: MergeDataFn<ChargingLimits> = (l: ChargingLimits, r: ChargingLimits): ChargingLimits => {
  if (l.unit !== r.unit) {
    throw new Error('cannot merge limits with different units');
  }
  return {
    canDischarge: l.canDischarge || r.canDischarge,
    shouldDischarge: l.shouldDischarge && r.shouldDischarge,
    charging: {
      max: l.charging.max + r.charging.max,
      min: Math.max(l.charging.min, r.charging.min),
      numberPhases: Math.min(l.charging.numberPhases, r.charging.numberPhases) as NumberPhases,
    },
    discharging: {
      max: l.discharging.max + r.discharging.max,
      min: Math.max(l.discharging.min, r.discharging.min),
      numberPhases: Math.min(l.discharging.numberPhases, r.discharging.numberPhases) as NumberPhases,
    },
    unit: l.unit,
  };
};
