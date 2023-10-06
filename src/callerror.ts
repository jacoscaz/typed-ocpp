
import * as ensure from './ensure.js';
import { OCPPMessageType, OCPPErrorCode, OCPPBaseMessage } from './utils.js';

export type OCPPCallError = OCPPBaseMessage<OCPPMessageType.CALLERROR, [code: OCPPErrorCode, description: string, details: Record<string, any>]>

export const parseCallError = (arr: [OCPPMessageType.CALLERROR, string, ...any]): OCPPCallError => {
  arr = ensure.length(arr, 5, 'Invalid OCPP call error: bad length');
  ensure.keyOf(arr[2], OCPPErrorCode, 'Invalid OCPP call error: unknown error code');
  ensure.string(arr[3], 'Invalid OCPP call error: bad error description');
  ensure.object(arr[4], 'Invalid OCPP call error: bad error details');
  return arr as OCPPCallError;
};
