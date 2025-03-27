
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
import { Namespace } from '../common/namespace.js';

import * as schemas from './schemas.js';
import { validateCall } from './call.js';
import { validateCallError } from './callerror.js';
import { validateCallResult, checkCallResult } from './callresult.js';
import { Action, MessageType, ErrorCode } from './utils.js';
import { compile } from '../common/ajv.js';
import { ChargingScheduleManager } from './chargingschedulemanager.js';

Object.values(schemas).forEach((schema) => {
  compile(schema);
});

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

const validate: ValidateFn<any, OCPP16.Call | OCPP16.CallError | OCPP16.CallResult> = assign(
  (data: any): data is OCPP16.Call | OCPP16.CallError | OCPP16.CallResult => {
    switch (Array.isArray(data) ? data[0] : null) {
      case MessageType.CALL:
        if (!validateCall(data)) {
          validate.errors = validateCall.errors;
          return false;
        }
        validate.errors = EMPTY_ARR;
        return true;
      case MessageType.CALLERROR:
        if (!validateCallError(data)) {
          validate.errors = validateCallError.errors;
          return false;
        }
        validate.errors = EMPTY_ARR;
        return true;
      case MessageType.CALLRESULT:
        if (!validateCallResult(data)) {
          validate.errors = validateCallResult.errors;
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

const isCall = <C extends OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult | OCPP16.CallResult>(msg: C): msg is Extract<C, OCPP16.Call> => {
  return msg[0] === MessageType.CALL;
};

const isCallError = <C extends OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult | OCPP16.CallResult>(msg: C): msg is Extract<C, OCPP16.CallError> => {
  return msg[0] === MessageType.CALLERROR;
};

const isCallResult = <C extends OCPP16.Call | OCPP16.CallError | OCPP16.UncheckedCallResult | OCPP16.CallResult>(msg: C): msg is Extract<C, OCPP16.UncheckedCallResult | OCPP16.CallResult> => {
  return msg[0] === MessageType.CALLRESULT;
};

export abstract class OCPP16 extends Namespace {

  static MessageType = MessageType; 
  static Action = Action; 
  static ErrorCode = ErrorCode;

  static checkCallResult = checkCallResult;
  static schemas = schemas;

  static validateCall = validateCall;
  static validateCallError = validateCallError;
  static validateCallResult = validateCallResult;

  static ChargingScheduleManager = ChargingScheduleManager;

  static validate = validate;

  static isCall = isCall;
  static isCallError = isCallError;
  static isCallResult = isCallResult;

};
