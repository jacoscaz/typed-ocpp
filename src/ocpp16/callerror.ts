
import type { ValidateFn } from '../common/utils.js';

import * as ensure from '../common/ensure.js';
import { MessageType, ErrorCode, BaseMessage } from './utils.js';

export type CallError = BaseMessage<MessageType.CALLERROR, [code: ErrorCode, description: string, details: Record<string, any>]>

export const validateCallError: ValidateFn<[MessageType.CALLERROR, string, ...any], CallError> = (arr): arr is CallError => {
  validateCallError.errors = null;
  if (!ensure.length(validateCallError, arr, 5, 'Invalid OCPP call: bad length')) {
    return false;
  }
  const [,, code, description, details] = arr;
  if (!ensure.keyOf(validateCallError, code, ErrorCode, 'Invalid OCPP call error: unknown code')) {
    return false;
  }
  if (!ensure.string(validateCallError, description, 'Invalid OCPP call error: bad description')) {
    return false;
  }
  if (!ensure.object(validateCallError, details, 'Invalid OCPP call error: bad details')) {
    return false;
  }
  return true;
};
