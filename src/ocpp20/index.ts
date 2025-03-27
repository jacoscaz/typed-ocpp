
import type {
  AuthorizeCall,
  BootNotificationCall,
  CancelReservationCall,
  CertificateSignedCall,
  ChangeAvailabilityCall,
  ClearCacheCall,
  ClearChargingProfileCall,
  ClearDisplayMessageCall,
  ClearedChargingLimitCall,
  ClearVariableMonitoringCall,
  CostUpdatedCall,
  CustomerInformationCall,
  DataTransferCall,
  DeleteCertificateCall,
  FirmwareStatusNotificationCall,
  Get15118EVCertificateCall,
  GetBaseReportCall,
  GetCertificateStatusCall,
  GetChargingProfilesCall,
  GetCompositeScheduleCall,
  GetDisplayMessagesCall,
  GetInstalledCertificateIdsCall,
  GetLocalListVersionCall,
  GetLogCall,
  GetMonitoringReportCall,
  GetReportCall,
  GetTransactionStatusCall,
  GetVariablesCall,
  HeartbeatCall,
  InstallCertificateCall,
  LogStatusNotificationCall,
  MeterValuesCall,
  NotifyChargingLimitCall,
  NotifyCustomerInformationCall,
  NotifyDisplayMessagesCall,
  NotifyEVChargingNeedsCall,
  NotifyEVChargingScheduleCall,
  NotifyEventCall,
  NotifyMonitoringReportCall,
  NotifyReportCall,
  PublishFirmwareCall,
  PublishFirmwareStatusNotificationCall,
  ReportChargingProfilesCall,
  RequestStartTransactionCall,
  RequestStopTransactionCall,
  ReservationStatusUpdateCall,
  ReserveNowCall,
  ResetCall,
  SecurityEventNotificationCall,
  SendLocalListCall,
  SetChargingProfileCall,
  SetDisplayMessageCall,
  SetMonitoringBaseCall,
  SetMonitoringLevelCall,
  SetNetworkProfileCall,
  SetVariableMonitoringCall,
  SetVariablesCall,
  SignCertificateCall,
  StatusNotificationCall,
  TransactionEventCall,
  TriggerMessageCall,
  UnlockConnectorCall,
  UnpublishFirmwareCall,
  UpdateFirmwareCall,
} from './call.js';

import type {
  AuthorizeCallResult,
  BootNotificationCallResult,
  CancelReservationCallResult,
  CertificateSignedCallResult,
  ChangeAvailabilityCallResult,
  ClearCacheCallResult,
  ClearChargingProfileCallResult,
  ClearDisplayMessageCallResult,
  ClearedChargingLimitCallResult,
  ClearVariableMonitoringCallResult,
  CostUpdatedCallResult,
  CustomerInformationCallResult,
  DataTransferCallResult,
  DeleteCertificateCallResult,
  FirmwareStatusNotificationCallResult,
  Get15118EVCertificateCallResult,
  GetBaseReportCallResult,
  GetCertificateStatusCallResult,
  GetChargingProfilesCallResult,
  GetCompositeScheduleCallResult,
  GetDisplayMessagesCallResult,
  GetInstalledCertificateIdsCallResult,
  GetLocalListVersionCallResult,
  GetLogCallResult,
  GetMonitoringReportCallResult,
  GetReportCallResult,
  GetTransactionStatusCallResult,
  GetVariablesCallResult,
  HeartbeatCallResult,
  InstallCertificateCallResult,
  LogStatusNotificationCallResult,
  MeterValuesCallResult,
  NotifyChargingLimitCallResult,
  NotifyCustomerInformationCallResult,
  NotifyDisplayMessagesCallResult,
  NotifyEVChargingNeedsCallResult,
  NotifyEVChargingScheduleCallResult,
  NotifyEventCallResult,
  NotifyMonitoringReportCallResult,
  NotifyReportCallResult,
  PublishFirmwareCallResult,
  PublishFirmwareStatusNotificationCallResult,
  ReportChargingProfilesCallResult,
  RequestStartTransactionCallResult,
  RequestStopTransactionCallResult,
  ReservationStatusUpdateCallResult,
  ReserveNowCallResult,
  ResetCallResult,
  SecurityEventNotificationCallResult,
  SendLocalListCallResult,
  SetChargingProfileCallResult,
  SetDisplayMessageCallResult,
  SetMonitoringBaseCallResult,
  SetMonitoringLevelCallResult,
  SetNetworkProfileCallResult,
  SetVariableMonitoringCallResult,
  SetVariablesCallResult,
  SignCertificateCallResult,
  StatusNotificationCallResult,
  TransactionEventCallResult,
  TriggerMessageCallResult,
  UnlockConnectorCallResult,
  UnpublishFirmwareCallResult,
  UpdateFirmwareCallResult,
} from './callresult.js';

import type { Call } from './call.js';

import type { CallError } from './callerror.js';

import type { 
  CallResult,
  CheckedCallResult,
  UncheckedCallResult,
} from './callresult.js';

import type {
  UnitOfMeasureType,
  LocationEnumType,
  ReadingContextEnumType,
  MeasurandEnumType,
  PhaseEnumType,
  MeterValueType,
  SampledValueType,
  SignedMeterValueType,  
} from './types.js';

import type {
  ConnectorStatus,
  ChargingState,
} from './utils.js';

import { assign, EMPTY_ARR, type ValidateFn } from '../common/utils.js';

import * as schemas from './schemas.js';

import { validateCall } from './call.js';
import { validateCallError } from './callerror.js';
import { validateCallResult, checkCallResult } from './callresult.js';
import { Action, MessageType, ErrorCode } from './utils.js';
import { compile } from '../common/ajv.js';
import { Namespace } from '../common/namespace.js';

Object.values(schemas).forEach((schema) => {
  compile(schema);
});

export declare namespace OCPP20 {

  export type {
    AuthorizeCall,
    BootNotificationCall,
    CancelReservationCall,
    CertificateSignedCall,
    ChangeAvailabilityCall,
    ClearCacheCall,
    ClearChargingProfileCall,
    ClearDisplayMessageCall,
    ClearedChargingLimitCall,
    ClearVariableMonitoringCall,
    CostUpdatedCall,
    CustomerInformationCall,
    DataTransferCall,
    DeleteCertificateCall,
    FirmwareStatusNotificationCall,
    Get15118EVCertificateCall,
    GetBaseReportCall,
    GetCertificateStatusCall,
    GetChargingProfilesCall,
    GetCompositeScheduleCall,
    GetDisplayMessagesCall,
    GetInstalledCertificateIdsCall,
    GetLocalListVersionCall,
    GetLogCall,
    GetMonitoringReportCall,
    GetReportCall,
    GetTransactionStatusCall,
    GetVariablesCall,
    HeartbeatCall,
    InstallCertificateCall,
    LogStatusNotificationCall,
    MeterValuesCall,
    NotifyChargingLimitCall,
    NotifyCustomerInformationCall,
    NotifyDisplayMessagesCall,
    NotifyEVChargingNeedsCall,
    NotifyEVChargingScheduleCall,
    NotifyEventCall,
    NotifyMonitoringReportCall,
    NotifyReportCall,
    PublishFirmwareCall,
    PublishFirmwareStatusNotificationCall,
    ReportChargingProfilesCall,
    RequestStartTransactionCall,
    RequestStopTransactionCall,
    ReservationStatusUpdateCall,
    ReserveNowCall,
    ResetCall,
    SecurityEventNotificationCall,
    SendLocalListCall,
    SetChargingProfileCall,
    SetDisplayMessageCall,
    SetMonitoringBaseCall,
    SetMonitoringLevelCall,
    SetNetworkProfileCall,
    SetVariableMonitoringCall,
    SetVariablesCall,
    SignCertificateCall,
    StatusNotificationCall,
    TransactionEventCall,
    TriggerMessageCall,
    UnlockConnectorCall,
    UnpublishFirmwareCall,
    UpdateFirmwareCall,
  };

  export type {
    AuthorizeCallResult,
    BootNotificationCallResult,
    CancelReservationCallResult,
    CertificateSignedCallResult,
    ChangeAvailabilityCallResult,
    ClearCacheCallResult,
    ClearChargingProfileCallResult,
    ClearDisplayMessageCallResult,
    ClearedChargingLimitCallResult,
    ClearVariableMonitoringCallResult,
    CostUpdatedCallResult,
    CustomerInformationCallResult,
    DataTransferCallResult,
    DeleteCertificateCallResult,
    FirmwareStatusNotificationCallResult,
    Get15118EVCertificateCallResult,
    GetBaseReportCallResult,
    GetCertificateStatusCallResult,
    GetChargingProfilesCallResult,
    GetCompositeScheduleCallResult,
    GetDisplayMessagesCallResult,
    GetInstalledCertificateIdsCallResult,
    GetLocalListVersionCallResult,
    GetLogCallResult,
    GetMonitoringReportCallResult,
    GetReportCallResult,
    GetTransactionStatusCallResult,
    GetVariablesCallResult,
    HeartbeatCallResult,
    InstallCertificateCallResult,
    LogStatusNotificationCallResult,
    MeterValuesCallResult,
    NotifyChargingLimitCallResult,
    NotifyCustomerInformationCallResult,
    NotifyDisplayMessagesCallResult,
    NotifyEVChargingNeedsCallResult,
    NotifyEVChargingScheduleCallResult,
    NotifyEventCallResult,
    NotifyMonitoringReportCallResult,
    NotifyReportCallResult,
    PublishFirmwareCallResult,
    PublishFirmwareStatusNotificationCallResult,
    ReportChargingProfilesCallResult,
    RequestStartTransactionCallResult,
    RequestStopTransactionCallResult,
    ReservationStatusUpdateCallResult,
    ReserveNowCallResult,
    ResetCallResult,
    SecurityEventNotificationCallResult,
    SendLocalListCallResult,
    SetChargingProfileCallResult,
    SetDisplayMessageCallResult,
    SetMonitoringBaseCallResult,
    SetMonitoringLevelCallResult,
    SetNetworkProfileCallResult,
    SetVariableMonitoringCallResult,
    SetVariablesCallResult,
    SignCertificateCallResult,
    StatusNotificationCallResult,
    TransactionEventCallResult,
    TriggerMessageCallResult,
    UnlockConnectorCallResult,
    UnpublishFirmwareCallResult,
    UpdateFirmwareCallResult,
  };

  export type {
    Call,
    CallError,
    CallResult,
    CheckedCallResult,
    UncheckedCallResult,
  };

  export type {
    UnitOfMeasureType,
    LocationEnumType,
    ReadingContextEnumType,
    MeasurandEnumType,
    PhaseEnumType,
    MeterValueType,
    SampledValueType,
    SignedMeterValueType,
  };

  export type {
    ChargingState,
    ConnectorStatus,
  };

};

const validate: ValidateFn<any, OCPP20.Call | OCPP20.CallError | OCPP20.CallResult> = assign(
  (data: any): data is OCPP20.Call | OCPP20.CallError | OCPP20.CallResult => {
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
        validate.errors = ['Invalid OCPP message: invalid message type'];
        return false;
    }
  },
  { errors: EMPTY_ARR },
);

const isCall = <C extends OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult | OCPP20.CallResult>(msg: C): msg is Extract<C, OCPP20.Call> => {
  return msg[0] === MessageType.CALL;
};

const isCallError = <C extends OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult | OCPP20.CallResult>(msg: C): msg is Extract<C, OCPP20.CallError> => {
  return msg[0] === MessageType.CALLERROR;
};

const isCallResult = <C extends OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult | OCPP20.CallResult>(msg: C): msg is Extract<C, OCPP20.UncheckedCallResult | OCPP20.CallResult> => {
  return msg[0] === MessageType.CALLRESULT;
};

export abstract class OCPP20 extends Namespace {

  static MessageType = MessageType; 
  static Action = Action; 
  static ErrorCode = ErrorCode;

  static schemas = schemas;
  static checkCallResult = checkCallResult;

  static validate = validate;

  static validateCall = validateCall;
  static validateCallError = validateCallError;
  static validateCallResult = validateCallResult;

  static isCall = isCall;
  static isCallError = isCallError;
  static isCallResult = isCallResult;

};
