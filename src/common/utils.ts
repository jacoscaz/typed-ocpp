
export const EMPTY_ARR: [] = Object.freeze([]) as [];

export const EMPTY_OBJ: {} = Object.freeze({}) as {};

export interface WithErrorsArr {
  errors: string[];
}

export interface ValidateFn<I, O extends I> extends WithErrorsArr {
  (value: I): value is O;
  errors: string[];
}

export const assign = <TGT extends {}, SRC extends {}>(target: TGT, source: SRC): TGT & SRC => {
  return Object.assign(target, source); 
};

export type ChargingRateUnit = 'W' | 'A';

// export type IndividualPhases = [boolean, boolean, boolean];

export type NumberOfPhases = 1 | 2 | 3;

export type Phases = { 
  qty: NumberOfPhases;
};

export interface ChargingLimits {
  charging: { 
    min: number; 
    max: number;
    phases: Phases;
  };
  discharging: { 
    min: number; 
    max: number;
    phases: Phases;
  };
  shouldDischarge: boolean;
  unit: ChargingRateUnit;
}

export const CHARGING_PROFILE_PURPOSES = [
  'ChargingStationExternalConstraints',
  'ChargingStationMaxProfile',
  'TxDefaultProfile',
  'TxProfile',
  'PriorityCharging',
  'LocalGeneration',
] as const;

export type ChargingProfilePurpose = (typeof CHARGING_PROFILE_PURPOSES)[number];
