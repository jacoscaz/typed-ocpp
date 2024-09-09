
export const assertNil = (val: any): val is (null | undefined) => {
  return typeof val === 'undefined' || val === null;
};
