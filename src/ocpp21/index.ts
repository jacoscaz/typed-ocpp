
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

const validate: ValidateFn<any, OCPP21.Call | OCPP21.CallError | OCPP21.CallResult> = assign(
  (data: any): data is OCPP21.Call | OCPP21.CallError | OCPP21.CallResult => {
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

const isCall = <C extends OCPP21.Call | OCPP21.CallError | OCPP21.UncheckedCallResult | OCPP21.CallResult>(msg: C): msg is Extract<C, OCPP21.Call> => {
  return msg[0] === MessageType.CALL || msg[0] === MessageType.SEND;
};

const isCallError = <C extends OCPP21.Call | OCPP21.CallError | OCPP21.UncheckedCallResult | OCPP21.CallResult>(msg: C): msg is Extract<C, OCPP21.CallError> => {
  return msg[0] === MessageType.CALLERROR || msg[0] === MessageType.CALLRESULTERROR;
};

const isCallResult = <C extends OCPP21.Call | OCPP21.CallError | OCPP21.UncheckedCallResult | OCPP21.CallResult>(msg: C): msg is Extract<C, OCPP21.UncheckedCallResult | OCPP21.CallResult> => {
  return msg[0] === MessageType.CALLRESULT;
};

export abstract class OCPP21 extends Namespace {

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
