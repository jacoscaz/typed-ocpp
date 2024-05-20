
import * as ensure from '../common/ensure.js';
import { MessageType, ErrorCode, BaseMessage } from './utils.js';

export type CallError = BaseMessage<MessageType.CALLERROR, [code: ErrorCode, description: string, details: Record<string, any>]>

export const parseCallError = (arr: [MessageType.CALLERROR, string, ...any]): CallError => {
  arr = ensure.length(arr, 5, 'Invalid OCPP call error: bad length');
  ensure.keyOf(arr[2], ErrorCode, 'Invalid OCPP call error: unknown error code');
  ensure.string(arr[3], 'Invalid OCPP call error: bad error description');
  ensure.object(arr[4], 'Invalid OCPP call error: bad error details');
  return arr as CallError;
};
