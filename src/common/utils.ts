
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
