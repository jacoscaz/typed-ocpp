/*
 * This module builds upon the primitives in ./schedules.ts and implements
 * scheduling types and functions mapping to a subset of the OCPP data model
 * shared by OCPP 1.6, 2.0.1 and 2.1.
 */

import type { Schedule, CloneDataFn, MergeDataFn } from './schedule.js';
import type { ChargingRateUnit, NumberPhases, LineVoltage } from './utils.js';

import { convertChargingRate } from './utils.js';

/**
 * Describes the limits that a charging station should follow whilst charging
 * an EV.
 */
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

/**
 * Commodity type that specializes the generic `Schedule` type into a schedule
 * of periods with `ChargingLimits` data values.
 */
export type ChargingSchedule = Schedule<ChargingLimits>;

/**
 * Returns a new `ChargingLimit` object with the `min`/`max` values converted
 * into the desired unit.
 */
export const convertChargingLimits = (limits: ChargingLimits, targetUnit: ChargingRateUnit, lineVoltage: LineVoltage): ChargingLimits => {
  const converted = { ...limits };
  converted.charging.min = convertChargingRate(limits.charging.min, limits.unit, targetUnit, lineVoltage, converted.charging.numberPhases);
  converted.discharging.max = convertChargingRate(limits.discharging.max, limits.unit, targetUnit, lineVoltage, converted.discharging.numberPhases);
  converted.charging.min = convertChargingRate(limits.charging.min, limits.unit, targetUnit, lineVoltage, converted.charging.numberPhases);
  converted.discharging.max = convertChargingRate(limits.discharging.max, limits.unit, targetUnit, lineVoltage, converted.discharging.numberPhases);
  converted.unit = targetUnit;
  return converted;
};

/**
 * Cloning function for use with scheduling methods in `./schedule.ts` that
 * returns a deep copy of the provided `ChargingLimit` object.
 */
export const cloneChargingLimits: CloneDataFn<ChargingLimits> = (l: ChargingLimits): ChargingLimits => ({ 
  ...l,
  charging: { ...l.charging },
  discharging: { ...l.discharging },
});

/**
 * Merging function for use with scheduling methods in `./schedule.ts` that
 * returns a deep copy of the provided `right` instance of `ChargingLimit`.
 * Semantically, this can be used to merge two charging schedules in a
 * manner that overrides the limit of overlapping periods with the values
 * coming from that of the `right` schedule.
 */
export const mergeChargingLimitsOverrideRtoL: MergeDataFn<ChargingLimits> = (l: ChargingLimits, r: ChargingLimits): ChargingLimits => { 
  if (l.unit !== r.unit) {
    throw new Error('cannot merge limits with different units');
  }
  return cloneChargingLimits(r);
};

/**
 * Merging function for use with scheduling methods in `./schedule.ts` that
 * returns a deep copy of the provided `right` instance of `ChargingLimit`.
 * Semantically, this can be used to merge two charging schedules in a
 * manner that composes limits of overlapping periods (lower maximum, greater
 * minimum).
 */
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

/**
 * Merging function for use with scheduling methods in `./schedule.ts` that
 * returns a deep copy of the provided `right` instance of `ChargingLimit`.
 * Semantically, this can be used to merge two charging schedules in a
 * manner that composes limits of overlapping periods via addition, resulting
 * in a `ChargingLimit` object with the `max` values set to the sum of those
 * in each period.
 */
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
