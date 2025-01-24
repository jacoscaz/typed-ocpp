
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
