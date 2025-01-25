
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

import * as schemas_ from './schemas.js';

import { validateCall as validateCall_ } from './call.js';
import { validateCallError as validateCallError_ } from './callerror.js';
import { validateCallResult as validateCallResult_, checkCallResult as checkCallResult_ } from './callresult.js';
import { Action as Action_, MessageType as MessageType_, ErrorCode as ErrorCode_ } from './utils.js';
import { compile } from '../common/ajv.js';

Object.values(schemas_).forEach((schema) => {
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

export namespace OCPP20 {

  export import MessageType = MessageType_; 
  export import Action = Action_; 
  export import ErrorCode = ErrorCode_;

  export const schemas = schemas_;
  export const checkCallResult = checkCallResult_;

  export const validateCall = validateCall_;
  export const validateCallError = validateCallError_;
  export const validateCallResult = validateCallResult_;

  export const validate: ValidateFn<any, OCPP20.Call | OCPP20.CallError | OCPP20.CallResult> = assign(
    (data: any): data is OCPP20.Call | OCPP20.CallError | OCPP20.CallResult => {
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
          validate.errors = ['Invalid OCPP message: invalid message type'];
          return false;
      }
    },
    { errors: EMPTY_ARR },
  );

  export const isCall = <C extends OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult | OCPP20.CallResult>(msg: C): msg is Extract<C, OCPP20.Call> => {
    return msg[0] === MessageType_.CALL;
  };

  export const isCallError = <C extends OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult | OCPP20.CallResult>(msg: C): msg is Extract<C, OCPP20.CallError> => {
    return msg[0] === MessageType_.CALLERROR;
  };

  export const isCallResult = <C extends OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult | OCPP20.CallResult>(msg: C): msg is Extract<C, OCPP20.UncheckedCallResult | OCPP20.CallResult> => {
    return msg[0] === MessageType_.CALLRESULT;
  };

};
