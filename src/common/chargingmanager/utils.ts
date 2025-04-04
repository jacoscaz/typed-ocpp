/*
 * This module builds upon the primitives in ./schedules.ts and implements
 * scheduling types and functions mapping to a subset of the OCPP data model
 * shared by OCPP 1.6, 2.0.1 and 2.1.
 */

import type { Schedule, CloneDataFn, MergeDataFn, MaybeSchedule } from '../schedule/schedule.js';
import type { Models } from '../models.js';
import type { ChargingLimits, NumberOfPhases } from '../utils.js';

export interface ChargingContext {
  model: Models.EnergyExchange;
}

/**
 * Specializes the generic `Schedule` type into a schedule of periods described
 * by `ExchangeLimits` objects.
 */
export type ChargingSchedule = Schedule<ChargingLimits>;

/**
 * Specializes the generic `MaybeSchedule` type into a schedule of periods
 * described by `ExchangeLimits` objects.
 */
export type MaybeChargingSchedule = MaybeSchedule<ChargingLimits>;

/**
 * Cloning function for use with scheduling methods in `./schedule.ts` that
 * returns a deep copy of the provided `ExchangeLimits` object.
 */
export const cloneChargingLimits: CloneDataFn<ChargingLimits> = (l: ChargingLimits): ChargingLimits => ({ 
  ...l,
  charging: { ...l.charging },
  discharging: { ...l.discharging },
});

/**
 * Merging function for use with scheduling methods in `./schedule.ts` that
 * returns a deep copy of the provided `right` instance of `ExchangeLimits`.
 * Semantically, this can be used to merge two exchange schedules in a manner 
 * that sets the limits of overlapping periods to those from the `right`
 * schedule.
 */
export const mergeChargingLimitsRight: MergeDataFn<ChargingLimits> = (l: ChargingLimits, r: ChargingLimits): ChargingLimits => { 
  if (l.unit !== r.unit) {
    throw new Error('cannot merge limits with different units');
  }
  return cloneChargingLimits(r);
};

/**
 * Merging function for use with scheduling methods in `./schedule.ts` that
 * returns a new `ExchangeLimits` object computed as the convervative minimum
 * between `left` and `right`. Semantically, this can be used to merge two
 * schedules in a manner that sets the limits of overlapping periods to the 
 * minimum values between both.
 */
export const mergeChargingLimitsMin: MergeDataFn<ChargingLimits> = (l: ChargingLimits, r: ChargingLimits): ChargingLimits => {
  if (l.unit !== r.unit) {
    throw new Error('cannot merge limits with different units');
  }
  return {
    shouldDischarge: l.shouldDischarge === r.shouldDischarge ? l.shouldDischarge : false,
    charging: {
      max: Math.min(l.charging.max, r.charging.max),
      min: Math.max(l.charging.min, r.charging.min),
      phases: { qty: Math.min(l.charging.phases.qty, r.charging.phases.qty) as NumberOfPhases },
    },
    discharging: {
      max: Math.min(l.discharging.max, r.discharging.max),
      min: Math.max(l.discharging.min, r.discharging.min),
      phases: { qty: Math.min(l.discharging.phases.qty, r.discharging.phases.qty) as NumberOfPhases },
    },
    unit: l.unit,
  };
};

/**
 * Merging function for use with scheduling methods in `./schedule.ts` that
 * returns a new `ExchangeLimits` object computed as the logical sum of the
 * limits in `left` and `right`. Semantically, this can be used to merge two
 * exchange schedules in a manner that composes limits of overlapping periods
 * via addition.
 */
export const mergeChargingLimitsAdd: MergeDataFn<ChargingLimits> = (l: ChargingLimits, r: ChargingLimits): ChargingLimits => {
  if (l.unit !== r.unit) {
    throw new Error('cannot merge limits with different units');
  }
  return {
    shouldDischarge: l.shouldDischarge === r.shouldDischarge ? l.shouldDischarge : false,
    charging: {
      max: l.charging.max + r.charging.max,
      min: Math.max(l.charging.min, r.charging.min),
      phases: { qty: Math.max(l.charging.phases.qty, r.charging.phases.qty) as NumberOfPhases },
    },
    discharging: {
      max: l.discharging.max + r.discharging.max,
      min: Math.max(l.discharging.min, r.discharging.min),
      phases: { qty: Math.max(l.discharging.phases.qty, r.discharging.phases.qty) as NumberOfPhases },
    },
    unit: l.unit,
  };
};
