
export const EMPTY = Object.freeze(Object.create(null));

export const EMPTY_ARR = Object.freeze([]);

export interface WithErrorsArr {
  errors?: string[] | null;
}

export interface ValidateFn<I, O extends I> extends WithErrorsArr {
  (value: I): value is O;
}
