
import type {
  AuthorizeCall,
  BootNotificationCall,
  CancelReservationCall,
  ChangeAvailabilityCall,
  ChangeConfigurationCall,
  ClearCacheCall,
  ClearChargingProfileCall,
  DataTransferCall,
  DiagnosticsStatusNotificationCall,
  FirmwareStatusNotificationCall,
  GetCompositeScheduleCall,
  GetConfigurationCall,
  GetDiagnosticsCall,
  GetLocalListVersionCall,
  HeartbeatCall,
  MeterValuesCall,
  RemoteStartTransactionCall,
  RemoteStopTransactionCall,
  ReserveNowCall,
  ResetCall,
  SendLocalListCall,
  SetChargingProfileCall,
  StartTransactionCall,
  StatusNotificationCall,
  StopTransactionCall,
  TriggerMessageCall,
  UnlockConnectorCall,
  UpdateFirmwareCall,
} from './call.js';

import type {
  AuthorizeCallResult,
  BootNotificationCallResult,
  CancelReservationCallResult,
  ChangeAvailabilityCallResult,
  ChangeConfigurationCallResult,
  ClearCacheCallResult,
  ClearChargingProfileCallResult,
  DataTransferCallResult,
  DiagnosticsStatusNotificationCallResult,
  FirmwareStatusNotificationCallResult,
  GetCompositeScheduleCallResult,
  GetConfigurationCallResult,
  GetDiagnosticsCallResult,
  GetLocalListVersionCallResult,
  HeartbeatCallResult,
  MeterValuesCallResult,
  RemoteStartTransactionCallResult,
  RemoteStopTransactionCallResult,
  ReserveNowCallResult,
  ResetCallResult,
  SendLocalListCallResult,
  SetChargingProfileCallResult,
  StartTransactionCallResult,
  StatusNotificationCallResult,
  StopTransactionCallResult,
  TriggerMessageCallResult,
  UnlockConnectorCallResult,
  UpdateFirmwareCallResult,
} from './callresult.js';

import type {
  Context, 
  Measurand, 
  Phase, 
  Location, 
  Unit, 
  Format, 
  SampledValue, 
  MeterValue,
} from './utils.js';

import type { Call } from './call.js';

import type { CallError } from './callerror.js';

import type { UncheckedCallResult, CallResult } from './callresult.js';

import * as ensure from '../common/ensure.js';
import * as schemas_ from './schemas.js';
import { setAjv as setAjv_ } from '../common/ajv.js';
import { parseCall as parseCall_ } from './call.js';
import { parseCallError as parseCallError_ } from './callerror.js';
import { parseCallResult as parseCallResult_, checkCallResult as checkCallResult_ } from './callresult.js';
import { Action as Action_, MessageType as MessageType_, ErrorCode as ErrorCode_ } from './utils.js';

export declare namespace OCPP16 {

  export type {
    AuthorizeCall,
    BootNotificationCall,
    CancelReservationCall,
    ChangeAvailabilityCall,
    ChangeConfigurationCall,
    ClearCacheCall,
    ClearChargingProfileCall,
    DataTransferCall,
    DiagnosticsStatusNotificationCall,
    FirmwareStatusNotificationCall,
    GetCompositeScheduleCall,
    GetConfigurationCall,
    GetDiagnosticsCall,
    GetLocalListVersionCall,
    HeartbeatCall,
    MeterValuesCall,
    RemoteStartTransactionCall,
    RemoteStopTransactionCall,
    ReserveNowCall,
    ResetCall,
    SendLocalListCall,
    SetChargingProfileCall,
    StartTransactionCall,
    StatusNotificationCall,
    StopTransactionCall,
    TriggerMessageCall,
    UnlockConnectorCall,
    UpdateFirmwareCall,
  };

  export type {
    AuthorizeCallResult,
    BootNotificationCallResult,
    CancelReservationCallResult,
    ChangeAvailabilityCallResult,
    ChangeConfigurationCallResult,
    ClearCacheCallResult,
    ClearChargingProfileCallResult,
    DataTransferCallResult,
    DiagnosticsStatusNotificationCallResult,
    FirmwareStatusNotificationCallResult,
    GetCompositeScheduleCallResult,
    GetConfigurationCallResult,
    GetDiagnosticsCallResult,
    GetLocalListVersionCallResult,
    HeartbeatCallResult,
    MeterValuesCallResult,
    RemoteStartTransactionCallResult,
    RemoteStopTransactionCallResult,
    ReserveNowCallResult,
    ResetCallResult,
    SendLocalListCallResult,
    SetChargingProfileCallResult,
    StartTransactionCallResult,
    StatusNotificationCallResult,
    StopTransactionCallResult,
    TriggerMessageCallResult,
    UnlockConnectorCallResult,
    UpdateFirmwareCallResult,
  };

  export type {
    Context, 
    Measurand, 
    Phase, 
    Location, 
    Unit, 
    Format, 
    SampledValue, 
    MeterValue,
  };

  export type {
    Call,
    CallError,
    CallResult,
    UncheckedCallResult,
  };

};

export namespace OCPP16 {

  export import MessageType = MessageType_; 
  export import Action = Action_; 
  export import ErrorCode = ErrorCode_;

  export const setAjv = setAjv_;
  export const checkCallResult = checkCallResult_;
  export const schemas = schemas_;

  export const maybeParse = (data: string | any[]): any[] => {
    const parsed = typeof data === 'string' ? JSON.parse(data) : data;
    return ensure.array(parsed, 'Invalid OCPP message: not an array');
  };

  export const parse = (data: string | any[]): Call | CallError | UncheckedCallResult<any> => {
    const arr = maybeParse(data);
    ensure.string(arr[1], 'Invalid OCPP message: invalid message id');
    switch (arr[0]) {
      case MessageType_.CALL:
        return parseCall_(arr as [MessageType_.CALL, string, ...any]);
      case MessageType_.CALLERROR:
        return parseCallError_(arr as [MessageType_.CALLERROR, string, ...any]);
      case MessageType_.CALLRESULT:
        return parseCallResult_(arr as [MessageType_.CALLRESULT, string, ...any]);
      default:
        throw new Error('Invalid OCPP message: invalid message type');
    }
  };

  export const stringify = (arr: Call | CallError | CallResult | UncheckedCallResult<any>): string => {
    return JSON.stringify(arr);
  };

  export const isCall = (msg: Call | CallError | UncheckedCallResult<any>): msg is Call => {
    return msg[0] === MessageType_.CALL;
  };

  export const isCallError = (msg: Call | CallError | UncheckedCallResult<any>): msg is CallError => {
    return msg[0] === MessageType_.CALLERROR;
  };

  export const isCallResult = (msg: Call | CallError | UncheckedCallResult<any>): msg is CallResult => {
    return msg[0] === MessageType_.CALLRESULT;
  };

};
