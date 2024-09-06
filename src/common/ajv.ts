
import type { JSONSchemaType } from 'ajv'; 

import Ajv from 'ajv';
import addFormats from 'ajv-formats';

export const ajv = addFormats(new Ajv());

export interface ValidateFn {
  <T>(value: any, schema: JSONSchemaType<T>, prefix: string): value is T;
  errors?: string[] | null;
}

export const validate: ValidateFn = <T>(value: any, schema: JSONSchemaType<T>, prefix: string): value is T => {
  validate.errors = null;
  if (ajv.validate<T>(schema, value)) {
    return true;
  }
  validate.errors = ajv.errors!.map((e: any) => `${prefix}: ${e.instancePath} ${e.message}`);
  return false;
};
