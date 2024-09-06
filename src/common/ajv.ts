
import type { WithErrorsArr } from './utils.js';
import { EMPTY_ARR } from './utils.js';

let __ajv: any = null;

const isAjv = (ajv: any): boolean => {
  return !!ajv 
    && typeof ajv === 'object' 
    && typeof ajv.validate === 'function'
  ;
};

export const setAjv = (ajv: any) => {
  if (!isAjv(ajv)) {
    throw new Error(`
      The argument provided to \`setAjv()\` does not look like an instance of
      Ajv. See https://npm.im/typed-ocpp.
    `);
  }
  __ajv = ajv;
};

export const getAjv = (): any => {
  if (!isAjv(__ajv)) {
    throw new Error(`
      The typed-ocpp library requires an instance of Ajv (https://npm.im/ajv)
      extended with the ajv-formats plugin (https://npm.im/ajv-formats) to be
      provided using \`setAjv()\`. See https://npm.im/typed-ocpp.
    `);
  }
  return __ajv;
};

export const ajvErrorsToString = (parseFn: WithErrorsArr, prefix: string, ajv: any) => {
  const errors: string[] = ajv.errors?.map((e: any) => `${prefix}: ${e.instancePath} ${e.message}`) ?? EMPTY_ARR;
  if (!parseFn.errors) {
    parseFn.errors = errors;
  } else {
    parseFn.errors.push(...errors);
  }
};
