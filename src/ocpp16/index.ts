
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

import type { 
  CallResult,
  CheckedCallResult,
  UncheckedCallResult,
} from './callresult.js';

import { assign, EMPTY_ARR, type ValidateFn } from '../common/utils.js';

import * as schemas_ from './schemas.js';
import { validateCall as validateCall_ } from './call.js';
import { validateCallError as validateCallError_ } from './callerror.js';
import { validateCallResult as validateCallResult_, checkCallResult as checkCallResult_ } from './callresult.js';
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

  export const validateCall = validateCall_;
  export const validateCallError = validateCallError_;
  export const validateCallResult = validateCallResult_;

  export const validate: ValidateFn<any, OCPP16.Call | OCPP16.CallError | OCPP16.CallResult> = assign(
    (data: any): data is OCPP16.Call | OCPP16.CallError | OCPP16.CallResult => {
      switch (Array.isArray(data) ? data[0] : null) {
        case MessageType_.CALL:
          if (!validateCall_(data)) {
            validate.errors = validateCall_.errors;
            return false;
          }
          validate.errors = EMPTY_ARR;
          return true;
        case MessageType_.CALLERROR:
          if (!validateCallError_(data)) {
            validate.errors = validateCallError_.errors;
            return false;
          }
          validate.errors = EMPTY_ARR;
          return true;
        case MessageType_.CALLRESULT:
          if (!validateCallResult_(data)) {
            validate.errors = validateCallResult_.errors;
            return false;
          }
          validate.errors = EMPTY_ARR;
          return true;
        default:
          validate.errors = ['Invalid OCPP message: invalid message type or not an array'];
          return false;
      }
    },
    { errors: EMPTY_ARR },
  );

  export const isCall = <C extends OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult | OCPP16.CallResult>(msg: C): msg is Extract<C, OCPP16.Call> => {
    return msg[0] === MessageType_.CALL;
  };

  export const isCallError = <C extends OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult | OCPP16.CallResult>(msg: C): msg is Extract<C, OCPP16.CallError> => {
    return msg[0] === MessageType_.CALLERROR;
  };

  export const isCallResult = <C extends OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult | OCPP16.CallResult>(msg: C): msg is Extract<C, OCPP16.UncheckedCallResult | OCPP16.CallResult> => {
    return msg[0] === MessageType_.CALLRESULT;
  };

};
