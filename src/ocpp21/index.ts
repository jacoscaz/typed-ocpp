
import type {
  AdjustPeriodicEventStreamRequest,
  AFRRSignalRequest,
  AuthorizeRequest,
  BatterySwapRequest,
  BootNotificationRequest,
  CancelReservationRequest,
  CertificateSignedRequest,
  ChangeAvailabilityRequest,
  ChangeTransactionTariffRequest,
  ClearCacheRequest,
  ClearChargingProfileRequest,
  ClearDERControlRequest,
  ClearDisplayMessageRequest,
  ClearedChargingLimitRequest,
  ClearTariffsRequest,
  ClearVariableMonitoringRequest,
  ClosePeriodicEventStreamRequest,
  CostUpdatedRequest,
  CustomerInformationRequest,
  DataTransferRequest,
  DeleteCertificateRequest,
  FirmwareStatusNotificationRequest,
  Get15118EVCertificateRequest,
  GetBaseReportRequest,
  GetCertificateChainStatusRequest,
  GetCertificateStatusRequest,
  GetChargingProfilesRequest,
  GetCompositeScheduleRequest,
  GetDERControlRequest,
  GetDisplayMessagesRequest,
  GetInstalledCertificateIdsRequest,
  GetLocalListVersionRequest,
  GetLogRequest,
  GetMonitoringReportRequest,
  GetPeriodicEventStreamRequest,
  GetReportRequest,
  GetTariffsRequest,
  GetTransactionStatusRequest,
  GetVariablesRequest,
  HeartbeatRequest,
  InstallCertificateRequest,
  LogStatusNotificationRequest,
  MeterValuesRequest,
  NotifyAllowedEnergyTransferRequest,
  NotifyChargingLimitRequest,
  NotifyCustomerInformationRequest,
  NotifyDERAlarmRequest,
  NotifyDERStartStopRequest,
  NotifyDisplayMessagesRequest,
  NotifyEVChargingNeedsRequest,
  NotifyEVChargingScheduleRequest,
  NotifyEventRequest,
  NotifyMonitoringReportRequest,
  NotifyPeriodicEventStream,
  NotifyPriorityChargingRequest,
  NotifyReportRequest,
  NotifySettlementRequest,
  NotifyWebPaymentStartedRequest,
  OpenPeriodicEventStreamRequest,
  PublishFirmwareRequest,
  PublishFirmwareStatusNotificationRequest,
  PullDynamicScheduleUpdateRequest,
  ReportChargingProfilesRequest,
  ReportDERControlRequest,
  RequestBatterySwapRequest,
  RequestStartTransactionRequest,
  RequestStopTransactionRequest,
  ReservationStatusUpdateRequest,
  ReserveNowRequest,
  ResetRequest,
  SecurityEventNotificationRequest,
  SendLocalListRequest,
  SetChargingProfileRequest,
  SetDefaultTariffRequest,
  SetDERControlRequest,
  SetDisplayMessageRequest,
  SetMonitoringBaseRequest,
  SetMonitoringLevelRequest,
  SetNetworkProfileRequest,
  SetVariableMonitoringRequest,
  SetVariablesRequest,
  SignCertificateRequest,
  StatusNotificationRequest,
  TransactionEventRequest,
  TriggerMessageRequest,
  UnlockConnectorRequest,
  UnpublishFirmwareRequest,
  UpdateDynamicScheduleRequest,
  UpdateFirmwareRequest,
  UsePriorityChargingRequest,
  VatNumberValidationRequest,
} from './types.js';

import type {
  AdjustPeriodicEventStreamResponse,
  AFRRSignalResponse,
  AuthorizeResponse,
  BatterySwapResponse,
  BootNotificationResponse,
  CancelReservationResponse,
  CertificateSignedResponse,
  ChangeAvailabilityResponse,
  ChangeTransactionTariffResponse,
  ClearCacheResponse,
  ClearChargingProfileResponse,
  ClearDERControlResponse,
  ClearDisplayMessageResponse,
  ClearedChargingLimitResponse,
  ClearTariffsResponse,
  ClearVariableMonitoringResponse,
  ClosePeriodicEventStreamResponse,
  CostUpdatedResponse,
  CustomerInformationResponse,
  DataTransferResponse,
  DeleteCertificateResponse,
  FirmwareStatusNotificationResponse,
  Get15118EVCertificateResponse,
  GetBaseReportResponse,
  GetCertificateChainStatusResponse,
  GetCertificateStatusResponse,
  GetChargingProfilesResponse,
  GetCompositeScheduleResponse,
  GetDERControlResponse,
  GetDisplayMessagesResponse,
  GetInstalledCertificateIdsResponse,
  GetLocalListVersionResponse,
  GetLogResponse,
  GetMonitoringReportResponse,
  GetPeriodicEventStreamResponse,
  GetReportResponse,
  GetTariffsResponse,
  GetTransactionStatusResponse,
  GetVariablesResponse,
  HeartbeatResponse,
  InstallCertificateResponse,
  LogStatusNotificationResponse,
  MeterValuesResponse,
  NotifyAllowedEnergyTransferResponse,
  NotifyChargingLimitResponse,
  NotifyCustomerInformationResponse,
  NotifyDERAlarmResponse,
  NotifyDERStartStopResponse,
  NotifyDisplayMessagesResponse,
  NotifyEVChargingNeedsResponse,
  NotifyEVChargingScheduleResponse,
  NotifyEventResponse,
  NotifyMonitoringReportResponse,
  NotifyPriorityChargingResponse,
  NotifyReportResponse,
  NotifySettlementResponse,
  NotifyWebPaymentStartedResponse,
  OpenPeriodicEventStreamResponse,
  PublishFirmwareResponse,
  PublishFirmwareStatusNotificationResponse,
  PullDynamicScheduleUpdateResponse,
  ReportChargingProfilesResponse,
  ReportDERControlResponse,
  RequestBatterySwapResponse,
  RequestStartTransactionResponse,
  RequestStopTransactionResponse,
  ReservationStatusUpdateResponse,
  ReserveNowResponse,
  ResetResponse,
  SecurityEventNotificationResponse,
  SendLocalListResponse,
  SetChargingProfileResponse,
  SetDefaultTariffResponse,
  SetDERControlResponse,
  SetDisplayMessageResponse,
  SetMonitoringBaseResponse,
  SetMonitoringLevelResponse,
  SetNetworkProfileResponse,
  SetVariableMonitoringResponse,
  SetVariablesResponse,
  SignCertificateResponse,
  StatusNotificationResponse,
  TransactionEventResponse,
  TriggerMessageResponse,
  UnlockConnectorResponse,
  UnpublishFirmwareResponse,
  UpdateDynamicScheduleResponse,
  UpdateFirmwareResponse,
  UsePriorityChargingResponse,
  VatNumberValidationResponse,
} from './types.js';

import type {
  AdjustPeriodicEventStreamCall,
  AFRRSignalCall,
  AuthorizeCall,
  BatterySwapCall,
  BootNotificationCall,
  CancelReservationCall,
  CertificateSignedCall,
  ChangeAvailabilityCall,
  ChangeTransactionTariffCall,
  ClearCacheCall,
  ClearChargingProfileCall,
  ClearDERControlCall,
  ClearDisplayMessageCall,
  ClearedChargingLimitCall,
  ClearTariffsCall,
  ClearVariableMonitoringCall,
  ClosePeriodicEventStreamCall,
  CostUpdatedCall,
  CustomerInformationCall,
  DataTransferCall,
  DeleteCertificateCall,
  FirmwareStatusNotificationCall,
  Get15118EVCertificateCall,
  GetBaseReportCall,
  GetCertificateChainStatusCall,
  GetCertificateStatusCall,
  GetChargingProfilesCall,
  GetCompositeScheduleCall,
  GetDERControlCall,
  GetDisplayMessagesCall,
  GetInstalledCertificateIdsCall,
  GetLocalListVersionCall,
  GetLogCall,
  GetMonitoringReportCall,
  GetPeriodicEventStreamCall,
  GetReportCall,
  GetTariffsCall,
  GetTransactionStatusCall,
  GetVariablesCall,
  HeartbeatCall,
  InstallCertificateCall,
  LogStatusNotificationCall,
  MeterValuesCall,
  NotifyAllowedEnergyTransferCall,
  NotifyChargingLimitCall,
  NotifyCustomerInformationCall,
  NotifyDERAlarmCall,
  NotifyDERStartStopCall,
  NotifyDisplayMessagesCall,
  NotifyEVChargingNeedsCall,
  NotifyEVChargingScheduleCall,
  NotifyEventCall,
  NotifyMonitoringReportCall,
  NotifyPeriodicEventStreamCall,
  NotifyPriorityChargingCall,
  NotifyReportCall,
  NotifySettlementCall,
  NotifyWebPaymentStartedCall,
  OpenPeriodicEventStreamCall,
  PublishFirmwareCall,
  PublishFirmwareStatusNotificationCall,
  PullDynamicScheduleUpdateCall,
  ReportChargingProfilesCall,
  ReportDERControlCall,
  RequestBatterySwapCall,
  RequestStartTransactionCall,
  RequestStopTransactionCall,
  ReservationStatusUpdateCall,
  ReserveNowCall,
  ResetCall,
  SecurityEventNotificationCall,
  SendLocalListCall,
  SetChargingProfileCall,
  SetDefaultTariffCall,
  SetDERControlCall,
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
  UpdateDynamicScheduleCall,
  UpdateFirmwareCall,
  UsePriorityChargingCall,
  VatNumberValidationCall,
} from './call.js';

import type {
  AdjustPeriodicEventStreamCallResult,
  AFRRSignalCallResult,
  AuthorizeCallResult,
  BatterySwapCallResult,
  BootNotificationCallResult,
  CancelReservationCallResult,
  CertificateSignedCallResult,
  ChangeAvailabilityCallResult,
  ChangeTransactionTariffCallResult,
  ClearCacheCallResult,
  ClearChargingProfileCallResult,
  ClearDERControlCallResult,
  ClearDisplayMessageCallResult,
  ClearedChargingLimitCallResult,
  ClearTariffsCallResult,
  ClearVariableMonitoringCallResult,
  ClosePeriodicEventStreamCallResult,
  CostUpdatedCallResult,
  CustomerInformationCallResult,
  DataTransferCallResult,
  DeleteCertificateCallResult,
  FirmwareStatusNotificationCallResult,
  Get15118EVCertificateCallResult,
  GetBaseReportCallResult,
  GetCertificateChainStatusCallResult,
  GetCertificateStatusCallResult,
  GetChargingProfilesCallResult,
  GetCompositeScheduleCallResult,
  GetDERControlCallResult,
  GetDisplayMessagesCallResult,
  GetInstalledCertificateIdsCallResult,
  GetLocalListVersionCallResult,
  GetLogCallResult,
  GetMonitoringReportCallResult,
  GetPeriodicEventStreamCallResult,
  GetReportCallResult,
  GetTariffsCallResult,
  GetTransactionStatusCallResult,
  GetVariablesCallResult,
  HeartbeatCallResult,
  InstallCertificateCallResult,
  LogStatusNotificationCallResult,
  MeterValuesCallResult,
  NotifyAllowedEnergyTransferCallResult,
  NotifyChargingLimitCallResult,
  NotifyCustomerInformationCallResult,
  NotifyDERAlarmCallResult,
  NotifyDERStartStopCallResult,
  NotifyDisplayMessagesCallResult,
  NotifyEVChargingNeedsCallResult,
  NotifyEVChargingScheduleCallResult,
  NotifyEventCallResult,
  NotifyMonitoringReportCallResult,
  NotifyPriorityChargingCallResult,
  NotifyReportCallResult,
  NotifySettlementCallResult,
  NotifyWebPaymentStartedCallResult,
  OpenPeriodicEventStreamCallResult,
  PublishFirmwareCallResult,
  PublishFirmwareStatusNotificationCallResult,
  PullDynamicScheduleUpdateCallResult,
  ReportChargingProfilesCallResult,
  ReportDERControlCallResult,
  RequestBatterySwapCallResult,
  RequestStartTransactionCallResult,
  RequestStopTransactionCallResult,
  ReservationStatusUpdateCallResult,
  ReserveNowCallResult,
  ResetCallResult,
  SecurityEventNotificationCallResult,
  SendLocalListCallResult,
  SetChargingProfileCallResult,
  SetDefaultTariffCallResult,
  SetDERControlCallResult,
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
  UpdateDynamicScheduleCallResult,
  UpdateFirmwareCallResult,
  UsePriorityChargingCallResult,
  VatNumberValidationCallResult,
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

export declare namespace OCPP21 {

  export type {
    AdjustPeriodicEventStreamCall,
    AFRRSignalCall,
    AuthorizeCall,
    BatterySwapCall,
    BootNotificationCall,
    CancelReservationCall,
    CertificateSignedCall,
    ChangeAvailabilityCall,
    ChangeTransactionTariffCall,
    ClearCacheCall,
    ClearChargingProfileCall,
    ClearDERControlCall,
    ClearDisplayMessageCall,
    ClearedChargingLimitCall,
    ClearTariffsCall,
    ClearVariableMonitoringCall,
    ClosePeriodicEventStreamCall,
    CostUpdatedCall,
    CustomerInformationCall,
    DataTransferCall,
    DeleteCertificateCall,
    FirmwareStatusNotificationCall,
    Get15118EVCertificateCall,
    GetBaseReportCall,
    GetCertificateChainStatusCall,
    GetCertificateStatusCall,
    GetChargingProfilesCall,
    GetCompositeScheduleCall,
    GetDERControlCall,
    GetDisplayMessagesCall,
    GetInstalledCertificateIdsCall,
    GetLocalListVersionCall,
    GetLogCall,
    GetMonitoringReportCall,
    GetPeriodicEventStreamCall,
    GetReportCall,
    GetTariffsCall,
    GetTransactionStatusCall,
    GetVariablesCall,
    HeartbeatCall,
    InstallCertificateCall,
    LogStatusNotificationCall,
    MeterValuesCall,
    NotifyAllowedEnergyTransferCall,
    NotifyChargingLimitCall,
    NotifyCustomerInformationCall,
    NotifyDERAlarmCall,
    NotifyDERStartStopCall,
    NotifyDisplayMessagesCall,
    NotifyEVChargingNeedsCall,
    NotifyEVChargingScheduleCall,
    NotifyEventCall,
    NotifyMonitoringReportCall,
    NotifyPeriodicEventStreamCall,
    NotifyPriorityChargingCall,
    NotifyReportCall,
    NotifySettlementCall,
    NotifyWebPaymentStartedCall,
    OpenPeriodicEventStreamCall,
    PublishFirmwareCall,
    PublishFirmwareStatusNotificationCall,
    PullDynamicScheduleUpdateCall,
    ReportChargingProfilesCall,
    ReportDERControlCall,
    RequestBatterySwapCall,
    RequestStartTransactionCall,
    RequestStopTransactionCall,
    ReservationStatusUpdateCall,
    ReserveNowCall,
    ResetCall,
    SecurityEventNotificationCall,
    SendLocalListCall,
    SetChargingProfileCall,
    SetDefaultTariffCall,
    SetDERControlCall,
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
    UpdateDynamicScheduleCall,
    UpdateFirmwareCall,
    UsePriorityChargingCall,
    VatNumberValidationCall,
  };

  export type {
    AdjustPeriodicEventStreamCallResult,
    AFRRSignalCallResult,
    AuthorizeCallResult,
    BatterySwapCallResult,
    BootNotificationCallResult,
    CancelReservationCallResult,
    CertificateSignedCallResult,
    ChangeAvailabilityCallResult,
    ChangeTransactionTariffCallResult,
    ClearCacheCallResult,
    ClearChargingProfileCallResult,
    ClearDERControlCallResult,
    ClearDisplayMessageCallResult,
    ClearedChargingLimitCallResult,
    ClearTariffsCallResult,
    ClearVariableMonitoringCallResult,
    ClosePeriodicEventStreamCallResult,
    CostUpdatedCallResult,
    CustomerInformationCallResult,
    DataTransferCallResult,
    DeleteCertificateCallResult,
    FirmwareStatusNotificationCallResult,
    Get15118EVCertificateCallResult,
    GetBaseReportCallResult,
    GetCertificateChainStatusCallResult,
    GetCertificateStatusCallResult,
    GetChargingProfilesCallResult,
    GetCompositeScheduleCallResult,
    GetDERControlCallResult,
    GetDisplayMessagesCallResult,
    GetInstalledCertificateIdsCallResult,
    GetLocalListVersionCallResult,
    GetLogCallResult,
    GetMonitoringReportCallResult,
    GetPeriodicEventStreamCallResult,
    GetReportCallResult,
    GetTariffsCallResult,
    GetTransactionStatusCallResult,
    GetVariablesCallResult,
    HeartbeatCallResult,
    InstallCertificateCallResult,
    LogStatusNotificationCallResult,
    MeterValuesCallResult,
    NotifyAllowedEnergyTransferCallResult,
    NotifyChargingLimitCallResult,
    NotifyCustomerInformationCallResult,
    NotifyDERAlarmCallResult,
    NotifyDERStartStopCallResult,
    NotifyDisplayMessagesCallResult,
    NotifyEVChargingNeedsCallResult,
    NotifyEVChargingScheduleCallResult,
    NotifyEventCallResult,
    NotifyMonitoringReportCallResult,
    NotifyPriorityChargingCallResult,
    NotifyReportCallResult,
    NotifySettlementCallResult,
    NotifyWebPaymentStartedCallResult,
    OpenPeriodicEventStreamCallResult,
    PublishFirmwareCallResult,
    PublishFirmwareStatusNotificationCallResult,
    PullDynamicScheduleUpdateCallResult,
    ReportChargingProfilesCallResult,
    ReportDERControlCallResult,
    RequestBatterySwapCallResult,
    RequestStartTransactionCallResult,
    RequestStopTransactionCallResult,
    ReservationStatusUpdateCallResult,
    ReserveNowCallResult,
    ResetCallResult,
    SecurityEventNotificationCallResult,
    SendLocalListCallResult,
    SetChargingProfileCallResult,
    SetDefaultTariffCallResult,
    SetDERControlCallResult,
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
    UpdateDynamicScheduleCallResult,
    UpdateFirmwareCallResult,
    UsePriorityChargingCallResult,
    VatNumberValidationCallResult,
  };

  export type {
    AdjustPeriodicEventStreamRequest,
    AFRRSignalRequest,
    AuthorizeRequest,
    BatterySwapRequest,
    BootNotificationRequest,
    CancelReservationRequest,
    CertificateSignedRequest,
    ChangeAvailabilityRequest,
    ChangeTransactionTariffRequest,
    ClearCacheRequest,
    ClearChargingProfileRequest,
    ClearDERControlRequest,
    ClearDisplayMessageRequest,
    ClearedChargingLimitRequest,
    ClearTariffsRequest,
    ClearVariableMonitoringRequest,
    ClosePeriodicEventStreamRequest,
    CostUpdatedRequest,
    CustomerInformationRequest,
    DataTransferRequest,
    DeleteCertificateRequest,
    FirmwareStatusNotificationRequest,
    Get15118EVCertificateRequest,
    GetBaseReportRequest,
    GetCertificateChainStatusRequest,
    GetCertificateStatusRequest,
    GetChargingProfilesRequest,
    GetCompositeScheduleRequest,
    GetDERControlRequest,
    GetDisplayMessagesRequest,
    GetInstalledCertificateIdsRequest,
    GetLocalListVersionRequest,
    GetLogRequest,
    GetMonitoringReportRequest,
    GetPeriodicEventStreamRequest,
    GetReportRequest,
    GetTariffsRequest,
    GetTransactionStatusRequest,
    GetVariablesRequest,
    HeartbeatRequest,
    InstallCertificateRequest,
    LogStatusNotificationRequest,
    MeterValuesRequest,
    NotifyAllowedEnergyTransferRequest,
    NotifyChargingLimitRequest,
    NotifyCustomerInformationRequest,
    NotifyDERAlarmRequest,
    NotifyDERStartStopRequest,
    NotifyDisplayMessagesRequest,
    NotifyEVChargingNeedsRequest,
    NotifyEVChargingScheduleRequest,
    NotifyEventRequest,
    NotifyMonitoringReportRequest,
    NotifyPeriodicEventStream,
    NotifyPriorityChargingRequest,
    NotifyReportRequest,
    NotifySettlementRequest,
    NotifyWebPaymentStartedRequest,
    OpenPeriodicEventStreamRequest,
    PublishFirmwareRequest,
    PublishFirmwareStatusNotificationRequest,
    PullDynamicScheduleUpdateRequest,
    ReportChargingProfilesRequest,
    ReportDERControlRequest,
    RequestBatterySwapRequest,
    RequestStartTransactionRequest,
    RequestStopTransactionRequest,
    ReservationStatusUpdateRequest,
    ReserveNowRequest,
    ResetRequest,
    SecurityEventNotificationRequest,
    SendLocalListRequest,
    SetChargingProfileRequest,
    SetDefaultTariffRequest,
    SetDERControlRequest,
    SetDisplayMessageRequest,
    SetMonitoringBaseRequest,
    SetMonitoringLevelRequest,
    SetNetworkProfileRequest,
    SetVariableMonitoringRequest,
    SetVariablesRequest,
    SignCertificateRequest,
    StatusNotificationRequest,
    TransactionEventRequest,
    TriggerMessageRequest,
    UnlockConnectorRequest,
    UnpublishFirmwareRequest,
    UpdateDynamicScheduleRequest,
    UpdateFirmwareRequest,
    UsePriorityChargingRequest,
    VatNumberValidationRequest,
  };

  export type {
    AdjustPeriodicEventStreamResponse,
    AFRRSignalResponse,
    AuthorizeResponse,
    BatterySwapResponse,
    BootNotificationResponse,
    CancelReservationResponse,
    CertificateSignedResponse,
    ChangeAvailabilityResponse,
    ChangeTransactionTariffResponse,
    ClearCacheResponse,
    ClearChargingProfileResponse,
    ClearDERControlResponse,
    ClearDisplayMessageResponse,
    ClearedChargingLimitResponse,
    ClearTariffsResponse,
    ClearVariableMonitoringResponse,
    ClosePeriodicEventStreamResponse,
    CostUpdatedResponse,
    CustomerInformationResponse,
    DataTransferResponse,
    DeleteCertificateResponse,
    FirmwareStatusNotificationResponse,
    Get15118EVCertificateResponse,
    GetBaseReportResponse,
    GetCertificateChainStatusResponse,
    GetCertificateStatusResponse,
    GetChargingProfilesResponse,
    GetCompositeScheduleResponse,
    GetDERControlResponse,
    GetDisplayMessagesResponse,
    GetInstalledCertificateIdsResponse,
    GetLocalListVersionResponse,
    GetLogResponse,
    GetMonitoringReportResponse,
    GetPeriodicEventStreamResponse,
    GetReportResponse,
    GetTariffsResponse,
    GetTransactionStatusResponse,
    GetVariablesResponse,
    HeartbeatResponse,
    InstallCertificateResponse,
    LogStatusNotificationResponse,
    MeterValuesResponse,
    NotifyAllowedEnergyTransferResponse,
    NotifyChargingLimitResponse,
    NotifyCustomerInformationResponse,
    NotifyDERAlarmResponse,
    NotifyDERStartStopResponse,
    NotifyDisplayMessagesResponse,
    NotifyEVChargingNeedsResponse,
    NotifyEVChargingScheduleResponse,
    NotifyEventResponse,
    NotifyMonitoringReportResponse,
    NotifyPriorityChargingResponse,
    NotifyReportResponse,
    NotifySettlementResponse,
    NotifyWebPaymentStartedResponse,
    OpenPeriodicEventStreamResponse,
    PublishFirmwareResponse,
    PublishFirmwareStatusNotificationResponse,
    PullDynamicScheduleUpdateResponse,
    ReportChargingProfilesResponse,
    ReportDERControlResponse,
    RequestBatterySwapResponse,
    RequestStartTransactionResponse,
    RequestStopTransactionResponse,
    ReservationStatusUpdateResponse,
    ReserveNowResponse,
    ResetResponse,
    SecurityEventNotificationResponse,
    SendLocalListResponse,
    SetChargingProfileResponse,
    SetDefaultTariffResponse,
    SetDERControlResponse,
    SetDisplayMessageResponse,
    SetMonitoringBaseResponse,
    SetMonitoringLevelResponse,
    SetNetworkProfileResponse,
    SetVariableMonitoringResponse,
    SetVariablesResponse,
    SignCertificateResponse,
    StatusNotificationResponse,
    TransactionEventResponse,
    TriggerMessageResponse,
    UnlockConnectorResponse,
    UnpublishFirmwareResponse,
    UpdateDynamicScheduleResponse,
    UpdateFirmwareResponse,
    UsePriorityChargingResponse,
    VatNumberValidationResponse,
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

export namespace OCPP21 {

  export import MessageType = MessageType_; 
  export import Action = Action_; 
  export import ErrorCode = ErrorCode_;

  export const schemas = schemas_;
  export const checkCallResult = checkCallResult_;

  export const validateCall = validateCall_;
  export const validateCallError = validateCallError_;
  export const validateCallResult = validateCallResult_;

  export const validate: ValidateFn<any, OCPP21.Call | OCPP21.CallError | OCPP21.CallResult> = assign(
    (data: any): data is OCPP21.Call | OCPP21.CallError | OCPP21.CallResult => {
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

  export const isCall = <C extends OCPP21.Call | OCPP21.CallError | OCPP21.UncheckedCallResult | OCPP21.CallResult>(msg: C): msg is Extract<C, OCPP21.Call> => {
    return msg[0] === MessageType_.CALL || msg[0] === MessageType_.SEND;
  };

  export const isCallError = <C extends OCPP21.Call | OCPP21.CallError | OCPP21.UncheckedCallResult | OCPP21.CallResult>(msg: C): msg is Extract<C, OCPP21.CallError> => {
    return msg[0] === MessageType_.CALLERROR || msg[0] === MessageType_.CALLRESULTERROR;
  };

  export const isCallResult = <C extends OCPP21.Call | OCPP21.CallError | OCPP21.UncheckedCallResult | OCPP21.CallResult>(msg: C): msg is Extract<C, OCPP21.UncheckedCallResult | OCPP21.CallResult> => {
    return msg[0] === MessageType_.CALLRESULT;
  };

};
