
import type { JSONSchemaType } from 'ajv';
import type { BaseMessage } from './utils.js';

import { EMPTY_ARR, assign, type ValidateFn } from '../common/utils.js';
import { Action, MessageType } from './utils.js';
import { validate } from '../common/ajv.js';
import * as schemas from './schemas.js';
import * as types from './types.js';

export type AdjustPeriodicEventStreamCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.AdjustPeriodicEventStream, payload: types.AdjustPeriodicEventStreamRequest]>;
export type AFRRSignalCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.AFRRSignal, payload: types.AFRRSignalRequest]>;
export type AuthorizeCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.Authorize, payload: types.AuthorizeRequest]>;
export type BatterySwapCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.BatterySwap, payload: types.BatterySwapRequest]>;
export type BootNotificationCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.BootNotification, payload: types.BootNotificationRequest]>;
export type CancelReservationCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.CancelReservation, payload: types.CancelReservationRequest]>;
export type CertificateSignedCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.CertificateSigned, payload: types.CertificateSignedRequest]>;
export type ChangeAvailabilityCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ChangeAvailability, payload: types.ChangeAvailabilityRequest]>;
export type ChangeTransactionTariffCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ChangeTransactionTariff, payload: types.ChangeTransactionTariffRequest]>;
export type ClearCacheCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ClearCache, payload: types.ClearCacheRequest]>;
export type ClearChargingProfileCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ClearChargingProfile, payload: types.ClearChargingProfileRequest]>;
export type ClearDERControlCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ClearDERControl, payload: types.ClearDERControlRequest]>;
export type ClearDisplayMessageCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ClearDisplayMessage, payload: types.ClearDisplayMessageRequest]>;
export type ClearedChargingLimitCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ClearedChargingLimit, payload: types.ClearedChargingLimitRequest]>;
export type ClearTariffsCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ClearTariffs, payload: types.ClearTariffsRequest]>;
export type ClearVariableMonitoringCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ClearVariableMonitoring, payload: types.ClearVariableMonitoringRequest]>;
export type ClosePeriodicEventStreamCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ClosePeriodicEventStream, payload: types.ClosePeriodicEventStreamRequest]>;
export type CostUpdatedCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.CostUpdated, payload: types.CostUpdatedRequest]>;
export type CustomerInformationCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.CustomerInformation, payload: types.CustomerInformationRequest]>;
export type DataTransferCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.DataTransfer, payload: types.DataTransferRequest]>;
export type DeleteCertificateCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.DeleteCertificate, payload: types.DeleteCertificateRequest]>;
export type FirmwareStatusNotificationCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.FirmwareStatusNotification, payload: types.FirmwareStatusNotificationRequest]>;
export type Get15118EVCertificateCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.Get15118EVCertificate, payload: types.Get15118EVCertificateRequest]>;
export type GetBaseReportCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetBaseReport, payload: types.GetBaseReportRequest]>;
export type GetCertificateChainStatusCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetCertificateChainStatus, payload: types.GetCertificateChainStatusRequest]>;
export type GetCertificateStatusCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetCertificateStatus, payload: types.GetCertificateStatusRequest]>;
export type GetChargingProfilesCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetChargingProfiles, payload: types.GetChargingProfilesRequest]>;
export type GetCompositeScheduleCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetCompositeSchedule, payload: types.GetCompositeScheduleRequest]>;
export type GetDERControlCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetDERControl, payload: types.GetDERControlRequest]>;
export type GetDisplayMessagesCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetDisplayMessages, payload: types.GetDisplayMessagesRequest]>;
export type GetInstalledCertificateIdsCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetInstalledCertificateIds, payload: types.GetInstalledCertificateIdsRequest]>;
export type GetLocalListVersionCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetLocalListVersion, payload: types.GetLocalListVersionRequest]>;
export type GetLogCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetLog, payload: types.GetLogRequest]>;
export type GetMonitoringReportCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetMonitoringReport, payload: types.GetMonitoringReportRequest]>;
export type GetPeriodicEventStreamCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetPeriodicEventStream, payload: types.GetPeriodicEventStreamRequest]>;
export type GetReportCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetReport, payload: types.GetReportRequest]>;
export type GetTariffsCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetTariffs, payload: types.GetTariffsRequest]>;
export type GetTransactionStatusCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetTransactionStatus, payload: types.GetTransactionStatusRequest]>;
export type GetVariablesCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.GetVariables, payload: types.GetVariablesRequest]>;
export type HeartbeatCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.Heartbeat, payload: types.HeartbeatRequest]>;
export type InstallCertificateCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.InstallCertificate, payload: types.InstallCertificateRequest]>;
export type LogStatusNotificationCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.LogStatusNotification, payload: types.LogStatusNotificationRequest]>;
export type MeterValuesCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.MeterValues, payload: types.MeterValuesRequest]>;
export type NotifyAllowedEnergyTransferCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyAllowedEnergyTransfer, payload: types.NotifyAllowedEnergyTransferRequest]>;
export type NotifyChargingLimitCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyChargingLimit, payload: types.NotifyChargingLimitRequest]>;
export type NotifyCustomerInformationCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyCustomerInformation, payload: types.NotifyCustomerInformationRequest]>;
export type NotifyDERAlarmCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyDERAlarm, payload: types.NotifyDERAlarmRequest]>;
export type NotifyDERStartStopCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyDERStartStop, payload: types.NotifyDERStartStopRequest]>;
export type NotifyDisplayMessagesCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyDisplayMessages, payload: types.NotifyDisplayMessagesRequest]>;
export type NotifyEVChargingNeedsCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyEVChargingNeeds, payload: types.NotifyEVChargingNeedsRequest]>;
export type NotifyEVChargingScheduleCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyEVChargingSchedule, payload: types.NotifyEVChargingScheduleRequest]>;
export type NotifyEventCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyEvent, payload: types.NotifyEventRequest]>;
export type NotifyMonitoringReportCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyMonitoringReport, payload: types.NotifyMonitoringReportRequest]>;
export type NotifyPeriodicEventStreamCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyPeriodicEventStream, payload: types.NotifyPeriodicEventStream]>;
export type NotifyPriorityChargingCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyPriorityCharging, payload: types.NotifyPriorityChargingRequest]>;
export type NotifyReportCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyReport, payload: types.NotifyReportRequest]>;
export type NotifySettlementCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifySettlement, payload: types.NotifySettlementRequest]>;
export type NotifyWebPaymentStartedCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.NotifyWebPaymentStarted, payload: types.NotifyWebPaymentStartedRequest]>;
export type OpenPeriodicEventStreamCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.OpenPeriodicEventStream, payload: types.OpenPeriodicEventStreamRequest]>;
export type PublishFirmwareCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.PublishFirmware, payload: types.PublishFirmwareRequest]>;
export type PublishFirmwareStatusNotificationCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.PublishFirmwareStatusNotification, payload: types.PublishFirmwareStatusNotificationRequest]>;
export type PullDynamicScheduleUpdateCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.PullDynamicScheduleUpdate, payload: types.PullDynamicScheduleUpdateRequest]>;
export type ReportChargingProfilesCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ReportChargingProfiles, payload: types.ReportChargingProfilesRequest]>;
export type ReportDERControlCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ReportDERControl, payload: types.ReportDERControlRequest]>;
export type RequestBatterySwapCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.RequestBatterySwap, payload: types.RequestBatterySwapRequest]>;
export type RequestStartTransactionCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.RequestStartTransaction, payload: types.RequestStartTransactionRequest]>;
export type RequestStopTransactionCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.RequestStopTransaction, payload: types.RequestStopTransactionRequest]>;
export type ReservationStatusUpdateCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ReservationStatusUpdate, payload: types.ReservationStatusUpdateRequest]>;
export type ReserveNowCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.ReserveNow, payload: types.ReserveNowRequest]>;
export type ResetCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.Reset, payload: types.ResetRequest]>;
export type SecurityEventNotificationCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SecurityEventNotification, payload: types.SecurityEventNotificationRequest]>;
export type SendLocalListCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SendLocalList, payload: types.SendLocalListRequest]>;
export type SetChargingProfileCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SetChargingProfile, payload: types.SetChargingProfileRequest]>;
export type SetDefaultTariffCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SetDefaultTariff, payload: types.SetDefaultTariffRequest]>;
export type SetDERControlCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SetDERControl, payload: types.SetDERControlRequest]>;
export type SetDisplayMessageCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SetDisplayMessage, payload: types.SetDisplayMessageRequest]>;
export type SetMonitoringBaseCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SetMonitoringBase, payload: types.SetMonitoringBaseRequest]>;
export type SetMonitoringLevelCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SetMonitoringLevel, payload: types.SetMonitoringLevelRequest]>;
export type SetNetworkProfileCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SetNetworkProfile, payload: types.SetNetworkProfileRequest]>;
export type SetVariableMonitoringCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SetVariableMonitoring, payload: types.SetVariableMonitoringRequest]>;
export type SetVariablesCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SetVariables, payload: types.SetVariablesRequest]>;
export type SignCertificateCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.SignCertificate, payload: types.SignCertificateRequest]>;
export type StatusNotificationCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.StatusNotification, payload: types.StatusNotificationRequest]>;
export type TransactionEventCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.TransactionEvent, payload: types.TransactionEventRequest]>;
export type TriggerMessageCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.TriggerMessage, payload: types.TriggerMessageRequest]>;
export type UnlockConnectorCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.UnlockConnector, payload: types.UnlockConnectorRequest]>;
export type UnpublishFirmwareCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.UnpublishFirmware, payload: types.UnpublishFirmwareRequest]>;
export type UpdateDynamicScheduleCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.UpdateDynamicSchedule, payload: types.UpdateDynamicScheduleRequest]>;
export type UpdateFirmwareCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.UpdateFirmware, payload: types.UpdateFirmwareRequest]>;
export type UsePriorityChargingCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.UsePriorityCharging, payload: types.UsePriorityChargingRequest]>;
export type VatNumberValidationCall = BaseMessage<MessageType.CALL | MessageType.SEND, [ action: Action.VatNumberValidation, payload: types.VatNumberValidationRequest]>;




export type Call =
  | AdjustPeriodicEventStreamCall
  | AFRRSignalCall
  | AuthorizeCall
  | BatterySwapCall
  | BootNotificationCall
  | CancelReservationCall
  | CertificateSignedCall
  | ChangeAvailabilityCall
  | ChangeTransactionTariffCall
  | ClearCacheCall
  | ClearChargingProfileCall
  | ClearDERControlCall
  | ClearDisplayMessageCall
  | ClearedChargingLimitCall
  | ClearTariffsCall
  | ClearVariableMonitoringCall
  | ClosePeriodicEventStreamCall
  | CostUpdatedCall
  | CustomerInformationCall
  | DataTransferCall
  | DeleteCertificateCall
  | FirmwareStatusNotificationCall
  | Get15118EVCertificateCall
  | GetBaseReportCall
  | GetCertificateChainStatusCall
  | GetCertificateStatusCall
  | GetChargingProfilesCall
  | GetCompositeScheduleCall
  | GetDERControlCall
  | GetDisplayMessagesCall
  | GetInstalledCertificateIdsCall
  | GetLocalListVersionCall
  | GetLogCall
  | GetMonitoringReportCall
  | GetPeriodicEventStreamCall
  | GetReportCall
  | GetTariffsCall
  | GetTransactionStatusCall
  | GetVariablesCall
  | HeartbeatCall
  | InstallCertificateCall
  | LogStatusNotificationCall
  | MeterValuesCall
  | NotifyAllowedEnergyTransferCall
  | NotifyChargingLimitCall
  | NotifyCustomerInformationCall
  | NotifyDERAlarmCall
  | NotifyDERStartStopCall
  | NotifyDisplayMessagesCall
  | NotifyEVChargingNeedsCall
  | NotifyEVChargingScheduleCall
  | NotifyEventCall
  | NotifyMonitoringReportCall
  | NotifyPeriodicEventStreamCall
  | NotifyPriorityChargingCall
  | NotifyReportCall
  | NotifySettlementCall
  | NotifyWebPaymentStartedCall
  | OpenPeriodicEventStreamCall
  | PublishFirmwareCall
  | PublishFirmwareStatusNotificationCall
  | PullDynamicScheduleUpdateCall
  | ReportChargingProfilesCall
  | ReportDERControlCall
  | RequestBatterySwapCall
  | RequestStartTransactionCall
  | RequestStopTransactionCall
  | ReservationStatusUpdateCall
  | ReserveNowCall
  | ResetCall
  | SecurityEventNotificationCall
  | SendLocalListCall
  | SetChargingProfileCall
  | SetDefaultTariffCall
  | SetDERControlCall
  | SetDisplayMessageCall
  | SetMonitoringBaseCall
  | SetMonitoringLevelCall
  | SetNetworkProfileCall
  | SetVariableMonitoringCall
  | SetVariablesCall
  | SignCertificateCall
  | StatusNotificationCall
  | TransactionEventCall
  | TriggerMessageCall
  | UnlockConnectorCall
  | UnpublishFirmwareCall
  | UpdateDynamicScheduleCall
  | UpdateFirmwareCall
  | UsePriorityChargingCall
  | VatNumberValidationCall
;

const schemasByCommand: Record<Action, object> = {
  [Action.AdjustPeriodicEventStream]: schemas.AdjustPeriodicEventStreamRequest,
  [Action.AFRRSignal]: schemas.AFRRSignalRequest,
  [Action.Authorize]: schemas.AuthorizeRequest,
  [Action.BatterySwap]: schemas.BatterySwapRequest,
  [Action.BootNotification]: schemas.BootNotificationRequest,
  [Action.CancelReservation]: schemas.CancelReservationRequest,
  [Action.CertificateSigned]: schemas.CertificateSignedRequest,
  [Action.ChangeAvailability]: schemas.ChangeAvailabilityRequest,
  [Action.ChangeTransactionTariff]: schemas.ChangeTransactionTariffRequest,
  [Action.ClearCache]: schemas.ClearCacheRequest,
  [Action.ClearChargingProfile]: schemas.ClearChargingProfileRequest,
  [Action.ClearDERControl]: schemas.ClearDERControlRequest,
  [Action.ClearDisplayMessage]: schemas.ClearDisplayMessageRequest,
  [Action.ClearedChargingLimit]: schemas.ClearedChargingLimitRequest,
  [Action.ClearTariffs]: schemas.ClearTariffsRequest,
  [Action.ClearVariableMonitoring]: schemas.ClearVariableMonitoringRequest,
  [Action.ClosePeriodicEventStream]: schemas.ClosePeriodicEventStreamRequest,
  [Action.CostUpdated]: schemas.CostUpdatedRequest,
  [Action.CustomerInformation]: schemas.CustomerInformationRequest,
  [Action.DataTransfer]: schemas.DataTransferRequest,
  [Action.DeleteCertificate]: schemas.DeleteCertificateRequest,
  [Action.FirmwareStatusNotification]: schemas.FirmwareStatusNotificationRequest,
  [Action.Get15118EVCertificate]: schemas.Get15118EVCertificateRequest,
  [Action.GetBaseReport]: schemas.GetBaseReportRequest,
  [Action.GetCertificateChainStatus]: schemas.GetCertificateChainStatusRequest,
  [Action.GetCertificateStatus]: schemas.GetCertificateStatusRequest,
  [Action.GetChargingProfiles]: schemas.GetChargingProfilesRequest,
  [Action.GetCompositeSchedule]: schemas.GetCompositeScheduleRequest,
  [Action.GetDERControl]: schemas.GetDERControlRequest,
  [Action.GetDisplayMessages]: schemas.GetDisplayMessagesRequest,
  [Action.GetInstalledCertificateIds]: schemas.GetInstalledCertificateIdsRequest,
  [Action.GetLocalListVersion]: schemas.GetLocalListVersionRequest,
  [Action.GetLog]: schemas.GetLogRequest,
  [Action.GetMonitoringReport]: schemas.GetMonitoringReportRequest,
  [Action.GetPeriodicEventStream]: schemas.GetPeriodicEventStreamRequest,
  [Action.GetReport]: schemas.GetReportRequest,
  [Action.GetTariffs]: schemas.GetTariffsRequest,
  [Action.GetTransactionStatus]: schemas.GetTransactionStatusRequest,
  [Action.GetVariables]: schemas.GetVariablesRequest,
  [Action.Heartbeat]: schemas.HeartbeatRequest,
  [Action.InstallCertificate]: schemas.InstallCertificateRequest,
  [Action.LogStatusNotification]: schemas.LogStatusNotificationRequest,
  [Action.MeterValues]: schemas.MeterValuesRequest,
  [Action.NotifyAllowedEnergyTransfer]: schemas.NotifyAllowedEnergyTransferRequest,
  [Action.NotifyChargingLimit]: schemas.NotifyChargingLimitRequest,
  [Action.NotifyCustomerInformation]: schemas.NotifyCustomerInformationRequest,
  [Action.NotifyDERAlarm]: schemas.NotifyDERAlarmRequest,
  [Action.NotifyDERStartStop]: schemas.NotifyDERStartStopRequest,
  [Action.NotifyDisplayMessages]: schemas.NotifyDisplayMessagesRequest,
  [Action.NotifyEVChargingNeeds]: schemas.NotifyEVChargingNeedsRequest,
  [Action.NotifyEVChargingSchedule]: schemas.NotifyEVChargingScheduleRequest,
  [Action.NotifyEvent]: schemas.NotifyEventRequest,
  [Action.NotifyMonitoringReport]: schemas.NotifyMonitoringReportRequest,
  [Action.NotifyPeriodicEventStream]: schemas.NotifyPeriodicEventStreamRequest,
  [Action.NotifyPriorityCharging]: schemas.NotifyPriorityChargingRequest,
  [Action.NotifyReport]: schemas.NotifyReportRequest,
  [Action.NotifySettlement]: schemas.NotifySettlementRequest,
  [Action.NotifyWebPaymentStarted]: schemas.NotifyWebPaymentStartedRequest,
  [Action.OpenPeriodicEventStream]: schemas.OpenPeriodicEventStreamRequest,
  [Action.PublishFirmware]: schemas.PublishFirmwareRequest,
  [Action.PublishFirmwareStatusNotification]: schemas.PublishFirmwareStatusNotificationRequest,
  [Action.PullDynamicScheduleUpdate]: schemas.PullDynamicScheduleUpdateRequest,
  [Action.ReportChargingProfiles]: schemas.ReportChargingProfilesRequest,
  [Action.ReportDERControl]: schemas.ReportDERControlRequest,
  [Action.RequestBatterySwap]: schemas.RequestBatterySwapRequest,
  [Action.RequestStartTransaction]: schemas.RequestStartTransactionRequest,
  [Action.RequestStopTransaction]: schemas.RequestStopTransactionRequest,
  [Action.ReservationStatusUpdate]: schemas.ReservationStatusUpdateRequest,
  [Action.ReserveNow]: schemas.ReserveNowRequest,
  [Action.Reset]: schemas.ResetRequest,
  [Action.SecurityEventNotification]: schemas.SecurityEventNotificationRequest,
  [Action.SendLocalList]: schemas.SendLocalListRequest,
  [Action.SetChargingProfile]: schemas.SetChargingProfileRequest,
  [Action.SetDefaultTariff]: schemas.SetDefaultTariffRequest,
  [Action.SetDERControl]: schemas.SetDERControlRequest,
  [Action.SetDisplayMessage]: schemas.SetDisplayMessageRequest,
  [Action.SetMonitoringBase]: schemas.SetMonitoringBaseRequest,
  [Action.SetMonitoringLevel]: schemas.SetMonitoringLevelRequest,
  [Action.SetNetworkProfile]: schemas.SetNetworkProfileRequest,
  [Action.SetVariableMonitoring]: schemas.SetVariableMonitoringRequest,
  [Action.SetVariables]: schemas.SetVariablesRequest,
  [Action.SignCertificate]: schemas.SignCertificateRequest,
  [Action.StatusNotification]: schemas.StatusNotificationRequest,
  [Action.TransactionEvent]: schemas.TransactionEventRequest,
  [Action.TriggerMessage]: schemas.TriggerMessageRequest,
  [Action.UnlockConnector]: schemas.UnlockConnectorRequest,
  [Action.UnpublishFirmware]: schemas.UnpublishFirmwareRequest,
  [Action.UpdateDynamicSchedule]: schemas.UpdateDynamicScheduleRequest,
  [Action.UpdateFirmware]: schemas.UpdateFirmwareRequest,
  [Action.UsePriorityCharging]: schemas.UsePriorityChargingRequest,
  [Action.VatNumberValidation]: schemas.VatNumberValidationRequest,
};

type BaseCall = BaseMessage<MessageType.CALL | MessageType.SEND, [action: Action, payload: {}]>;

const basecall_schema: JSONSchemaType<BaseCall> = {
  type: 'array',
  items: [
    { type: 'number', enum: [MessageType.CALL, MessageType.SEND] },
    { type: 'string'  },
    { type: 'string', enum: Object.values(Action) },
    { type: 'object', additionalProperties: true },
  ],
  minItems: 4,
  maxItems: 4
};

export const validateCall: ValidateFn<any, Call> = assign(
  (arr: any): arr is Call => {
    if (!validate<BaseCall>(arr, basecall_schema, 'Invalid OCPP call')) {
      validateCall.errors = validate.errors;
      return false;
    }
    const [,, action, payload] = (arr as BaseCall);
    const schema = schemasByCommand[action];
    if (!validate<Call[3]>(payload, schema as JSONSchemaType<Call[3]>, 'Invalid OCPP call')) {
      validateCall.errors = validate.errors;
      return false;
    }
    validateCall.errors = EMPTY_ARR;
    return true;
  },
  { errors: EMPTY_ARR }
);

validateCall.errors = EMPTY_ARR;
