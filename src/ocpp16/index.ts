
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
  Status,
} from './utils.js';

import type { Call } from './call.js';

import type { CallError } from './callerror.js';

import type { UncheckedCallResult, CheckedCallResult, CallResult } from './callresult.js';

import type { ValidateFn } from '../common/utils.js';

import * as schemas_ from './schemas.js';
import { validateCall as parseCall_ } from './call.js';
import { validateCallError as parseCallError_ } from './callerror.js';
import { validateCallResult as parseCallResult_, checkCallResult as checkCallResult_ } from './callresult.js';
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
    Status,
  };

  export type {
    Call,
    CallError,
    CallResult,
    CheckedCallResult,
    UncheckedCallResult,
  };

};

export namespace OCPP16 {

  export import MessageType = MessageType_; 
  export import Action = Action_; 
  export import ErrorCode = ErrorCode_;

  export const checkCallResult = checkCallResult_;
  export const schemas = schemas_;

  export const validate: ValidateFn<any, OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult<any>> = (data: any): data is OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult<any> => {
    validate.errors = null;
    switch (Array.isArray(data) ? data[0] : null) {
      case MessageType_.CALL:
        if (!parseCall_(data)) {
          validate.errors = parseCall_.errors;
          return false;
        }
        return true;
      case MessageType_.CALLERROR:
        if (!parseCallError_(data)) {
          validate.errors = parseCallError_.errors;
          return false;
        }
        return true;
      case MessageType_.CALLRESULT:
        if (!parseCallResult_(data)) {
          validate.errors = parseCallResult_.errors;
          return false;
        }
        return true;
      default:
        validate.errors = ['Invalid OCPP message: invalid message type or not an array'];
        return false;
    }
  };

  export const isCall = (msg: OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult<any>): msg is OCPP16.Call => {
    return msg[0] === MessageType_.CALL;
  };

  export const isCallError = (msg: OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult<any>): msg is OCPP16.CallError => {
    return msg[0] === MessageType_.CALLERROR;
  };

  export const isCallResult = (msg: OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult<any>): msg is OCPP16.CallResult => {
    return msg[0] === MessageType_.CALLRESULT;
  };

};
