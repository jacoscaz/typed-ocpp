
import type { JSONSchemaType } from 'ajv';
import type { BaseMessage } from './utils.js';
import type { ValidateFn } from '../common/utils.js';

import { assign, EMPTY_ARR } from '../common/utils.js';
import { validate } from '../common/ajv.js';
import { MessageType, ErrorCode } from './utils.js';

export type CallError = BaseMessage<MessageType.CALLERROR | MessageType.CALLRESULTERROR, [code: ErrorCode, description: string, details: Record<string, any>]>;

const callerror_schema: JSONSchemaType<CallError> = {
  type: 'array',
  items: [
    { type: 'number', enum: [MessageType.CALLERROR, MessageType.CALLRESULTERROR] },
    { type: 'string'  },
    { type: 'string', enum: Object.values(ErrorCode) },
    { type: 'string' },
    { type: 'object', additionalProperties: true },
  ],
  minItems: 5,
  maxItems: 5,
};

export const validateCallError: ValidateFn<any, CallError> = assign(
  (arr: any): arr is CallError => {
    if (!validate<CallError>(arr, callerror_schema, 'Invalid OCPP call error')) {
      validateCallError.errors = validate.errors;
      return false;
    }
    validateCallError.errors = EMPTY_ARR;
    return true;
  },
  { errors: EMPTY_ARR },
);
