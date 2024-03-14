
export type {
  OCPPAuthorizeCall,
  OCPPBootNotificationCall,
  OCPPCancelReservationCall,
  OCPPChangeAvailabilityCall,
  OCPPChangeConfigurationCall,
  OCPPClearCacheCall,
  OCPPClearChargingProfileCall,
  OCPPDataTransferCall,
  OCPPDiagnosticsStatusNotificationCall,
  OCPPFirmwareStatusNotificationCall,
  OCPPGetCompositeScheduleCall,
  OCPPGetConfigurationCall,
  OCPPGetDiagnosticsCall,
  OCPPGetLocalListVersionCall,
  OCPPHeartbeatCall,
  OCPPMeterValuesCall,
  OCPPRemoteStartTransactionCall,
  OCPPRemoteStopTransactionCall,
  OCPPReserveNowCall,
  OCPPResetCall,
  OCPPSendLocalListCall,
  OCPPSetChargingProfileCall,
  OCPPStartTransactionCall,
  OCPPStatusNotificationCall,
  OCPPStopTransactionCall,
  OCPPTriggerMessageCall,
  OCPPUnlockConnectorCall,
  OCPPUpdateFirmwareCall,
} from './call.js';

export type {
  OCPPAuthorizeCallResult,
  OCPPBootNotificationCallResult,
  OCPPCancelReservationCallResult,
  OCPPChangeAvailabilityCallResult,
  OCPPChangeConfigurationCallResult,
  OCPPClearCacheCallResult,
  OCPPClearChargingProfileCallResult,
  OCPPDataTransferCallResult,
  OCPPDiagnosticsStatusNotificationCallResult,
  OCPPFirmwareStatusNotificationCallResult,
  OCPPGetCompositeScheduleCallResult,
  OCPPGetConfigurationCallResult,
  OCPPGetDiagnosticsCallResult,
  OCPPGetLocalListVersionCallResult,
  OCPPHeartbeatCallResult,
  OCPPMeterValuesCallResult,
  OCPPRemoteStartTransactionCallResult,
  OCPPRemoteStopTransactionCallResult,
  OCPPReserveNowCallResult,
  OCPPResetCallResult,
  OCPPSendLocalListCallResult,
  OCPPSetChargingProfileCallResult,
  OCPPStartTransactionCallResult,
  OCPPStatusNotificationCallResult,
  OCPPStopTransactionCallResult,
  OCPPTriggerMessageCallResult,
  OCPPUnlockConnectorCallResult,
  OCPPUpdateFirmwareCallResult,
} from './callresult.js';

export type {
  OCPPContext, 
  OCPPMeasurand, 
  OCPPPhase, 
  OCPPLocation, 
  OCPPUnit, 
  OCPPFormat, 
  OCPPSampledValue, 
  OCPPMeterValue,
} from './types/MeterValues.js';

import type { OCPPCall } from './call.js';
import type { OCPPCallError } from './callerror.js';
import type { OCPPUncheckedCallResult, OCPPCallResult } from './callresult.js';

export type { 
  OCPPCall, 
  OCPPCallError, 
  OCPPUncheckedCallResult, 
  OCPPCallResult, 
};

import * as ensure from './ensure.js';
import { setAjv } from './ajv.js';
import { parseCall } from './call.js';
import { parseCallError } from './callerror.js';
import { parseCallResult, checkCallResult } from './callresult.js';
import { OCPPMessageType, OCPPAction, OCPPErrorCode } from './utils.js';

export {
  OCPPMessageType, 
  OCPPAction, 
  OCPPErrorCode,
}

const maybeParse = (data: string | any[]): any[] => {
  const parsed = typeof data === 'string' ? JSON.parse(data) : data;
  return ensure.array(parsed, 'Invalid OCPP message: not an array');
};

const parse = (data: string | any[]): OCPPCall | OCPPCallError | OCPPUncheckedCallResult<any> => {
  const arr = maybeParse(data);
  ensure.string(arr[1], 'Invalid OCPP message: invalid message id');
  switch (arr[0]) {
    case OCPPMessageType.CALL:
      return parseCall(arr as [OCPPMessageType.CALL, string, ...any]);
    case OCPPMessageType.CALLERROR:
      return parseCallError(arr as [OCPPMessageType.CALLERROR, string, ...any]);
    case OCPPMessageType.CALLRESULT:
      return parseCallResult(arr as [OCPPMessageType.CALLRESULT, string, ...any]);
    default:
      throw new Error('Invalid OCPP message: invalid message type');
  }
};

const stringify = (arr: OCPPCall | OCPPCallError | OCPPCallResult | OCPPUncheckedCallResult<any>): string => {
  return JSON.stringify(arr);
};

export const OCPP = { setAjv, parse, stringify, checkCallResult };
