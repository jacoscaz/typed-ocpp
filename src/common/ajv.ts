
import type { JSONSchemaType } from 'ajv'; 

import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { EMPTY_ARR } from './utils.js';

const ajv = addFormats(new Ajv({
  strict: false,
}));

export interface AjvValidateFn {
  <T>(value: any, schema: JSONSchemaType<T>, prefix: string): value is T;
  errors: string[];
}

export const validate: AjvValidateFn = Object.assign(
  <T>(value: any, schema: JSONSchemaType<T>, prefix: string): value is T => {
    if (ajv.validate<T>(schema, value)) {
      validate.errors = EMPTY_ARR;
      return true;
    }
    validate.errors = ajv.errors!.map((e: any) => `${prefix}: ${e.instancePath} ${e.message}`);
    return false;
  }, 
  { errors: EMPTY_ARR },
);

export const compile = (schema: JSONSchemaType<any>) => {
  ajv.compile(schema);
};
