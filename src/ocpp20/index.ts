
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

import type { UncheckedCallResult, CheckedCallResult, CallResult } from './callresult.js';

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

import type { ValidateFn } from '../common/utils.js';

import * as schemas_ from './schemas.js';

import { validateCall as parseCall_ } from './call.js';
import { validateCallError as parseCallError_ } from './callerror.js';
import { validateCallResult as parseCallResult_, checkCallResult as checkCallResult_ } from './callresult.js';
import { Action as Action_, MessageType as MessageType_, ErrorCode as ErrorCode_ } from './utils.js';

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

  export const validate: ValidateFn<any, OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult<any>> = (data: any): data is OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult<any> => {
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
        validate.errors = ['Invalid OCPP message: invalid message type'];
        return false;
    }
  };

  export const isCall = (msg: OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult<any>): msg is OCPP20.Call => {
    return msg[0] === MessageType_.CALL;
  };

  export const isCallError = (msg: OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult<any>): msg is OCPP20.CallError => {
    return msg[0] === MessageType_.CALLERROR;
  };

  export const isCallResult = (msg: OCPP20.Call | OCPP20.CallError | OCPP20.UncheckedCallResult<any>): msg is OCPP20.CallResult => {
    return msg[0] === MessageType_.CALLRESULT;
  };

};
