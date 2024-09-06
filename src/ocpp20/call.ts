
import type { ValidateFn } from '../common/utils.js';

import { Action, BaseMessage, MessageType } from './utils.js';
import { ajvErrorsToString, getAjv } from '../common/ajv.js';
import * as ensure from '../common/ensure.js';
import * as schemas from './schemas.js';
import * as types from './types.js';

export type AuthorizeCall = BaseMessage<MessageType.CALL, [action: Action.Authorize, payload: types.AuthorizeRequest]>;
export type BootNotificationCall = BaseMessage<MessageType.CALL, [action: Action.BootNotification, payload: types.BootNotificationRequest]>;
export type CancelReservationCall = BaseMessage<MessageType.CALL, [action: Action.CancelReservation, payload: types.CancelReservationRequest]>;
export type CertificateSignedCall = BaseMessage<MessageType.CALL, [action: Action.CertificateSigned, payload: types.CertificateSignedRequest]>;
export type ChangeAvailabilityCall = BaseMessage<MessageType.CALL, [action: Action.ChangeAvailability, payload: types.ChangeAvailabilityRequest]>;
export type ClearCacheCall = BaseMessage<MessageType.CALL, [action: Action.ClearCache, payload: types.ClearCacheRequest]>;
export type ClearChargingProfileCall = BaseMessage<MessageType.CALL, [action: Action.ClearChargingProfile, payload: types.ClearChargingProfileRequest]>;
export type ClearDisplayMessageCall = BaseMessage<MessageType.CALL, [action: Action.ClearDisplayMessage, payload: types.ClearDisplayMessageRequest]>;
export type ClearedChargingLimitCall = BaseMessage<MessageType.CALL, [action: Action.ClearedChargingLimit, payload: types.ClearedChargingLimitRequest]>;
export type ClearVariableMonitoringCall = BaseMessage<MessageType.CALL, [action: Action.ClearVariableMonitoring, payload: types.ClearVariableMonitoringRequest]>;
export type CostUpdatedCall = BaseMessage<MessageType.CALL, [action: Action.CostUpdated, payload: types.CostUpdatedRequest]>;
export type CustomerInformationCall = BaseMessage<MessageType.CALL, [action: Action.CustomerInformation, payload: types.CustomerInformationRequest]>;
export type DataTransferCall = BaseMessage<MessageType.CALL, [action: Action.DataTransfer, payload: types.DataTransferRequest]>;
export type DeleteCertificateCall = BaseMessage<MessageType.CALL, [action: Action.DeleteCertificate, payload: types.DeleteCertificateRequest]>;
export type FirmwareStatusNotificationCall = BaseMessage<MessageType.CALL, [action: Action.FirmwareStatusNotification, payload: types.FirmwareStatusNotificationRequest]>;
export type Get15118EVCertificateCall = BaseMessage<MessageType.CALL, [action: Action.Get15118EVCertificate, payload: types.Get15118EVCertificateRequest]>;
export type GetBaseReportCall = BaseMessage<MessageType.CALL, [action: Action.GetBaseReport, payload: types.GetBaseReportRequest]>;
export type GetCertificateStatusCall = BaseMessage<MessageType.CALL, [action: Action.GetCertificateStatus, payload: types.GetCertificateStatusRequest]>;
export type GetChargingProfilesCall = BaseMessage<MessageType.CALL, [action: Action.GetChargingProfiles, payload: types.GetChargingProfilesRequest]>;
export type GetCompositeScheduleCall = BaseMessage<MessageType.CALL, [action: Action.GetCompositeSchedule, payload: types.GetCompositeScheduleRequest]>;
export type GetDisplayMessagesCall = BaseMessage<MessageType.CALL, [action: Action.GetDisplayMessages, payload: types.GetDisplayMessagesRequest]>;
export type GetInstalledCertificateIdsCall = BaseMessage<MessageType.CALL, [action: Action.GetInstalledCertificateIds, payload: types.GetInstalledCertificateIdsRequest]>;
export type GetLocalListVersionCall = BaseMessage<MessageType.CALL, [action: Action.GetLocalListVersion, payload: types.GetLocalListVersionRequest]>;
export type GetLogCall = BaseMessage<MessageType.CALL, [action: Action.GetLog, payload: types.GetLogRequest]>;
export type GetMonitoringReportCall = BaseMessage<MessageType.CALL, [action: Action.GetMonitoringReport, payload: types.GetMonitoringReportRequest]>;
export type GetReportCall = BaseMessage<MessageType.CALL, [action: Action.GetReport, payload: types.GetReportRequest]>;
export type GetTransactionStatusCall = BaseMessage<MessageType.CALL, [action: Action.GetTransactionStatus, payload: types.GetTransactionStatusRequest]>;
export type GetVariablesCall = BaseMessage<MessageType.CALL, [action: Action.GetVariables, payload: types.GetVariablesRequest]>;
export type HeartbeatCall = BaseMessage<MessageType.CALL, [action: Action.Heartbeat, payload: types.HeartbeatRequest]>;
export type InstallCertificateCall = BaseMessage<MessageType.CALL, [action: Action.InstallCertificate, payload: types.InstallCertificateRequest]>;
export type LogStatusNotificationCall = BaseMessage<MessageType.CALL, [action: Action.LogStatusNotification, payload: types.LogStatusNotificationRequest]>;
export type MeterValuesCall = BaseMessage<MessageType.CALL, [action: Action.MeterValues, payload: types.MeterValuesRequest]>;
export type NotifyChargingLimitCall = BaseMessage<MessageType.CALL, [action: Action.NotifyChargingLimit, payload: types.NotifyChargingLimitRequest]>;
export type NotifyCustomerInformationCall = BaseMessage<MessageType.CALL, [action: Action.NotifyCustomerInformation, payload: types.NotifyCustomerInformationRequest]>;
export type NotifyDisplayMessagesCall = BaseMessage<MessageType.CALL, [action: Action.NotifyDisplayMessages, payload: types.NotifyDisplayMessagesRequest]>;
export type NotifyEVChargingNeedsCall = BaseMessage<MessageType.CALL, [action: Action.NotifyEVChargingNeeds, payload: types.NotifyEVChargingNeedsRequest]>;
export type NotifyEVChargingScheduleCall = BaseMessage<MessageType.CALL, [action: Action.NotifyEVChargingSchedule, payload: types.NotifyEVChargingScheduleRequest]>;
export type NotifyEventCall = BaseMessage<MessageType.CALL, [action: Action.NotifyEvent, payload: types.NotifyEventRequest]>;
export type NotifyMonitoringReportCall = BaseMessage<MessageType.CALL, [action: Action.NotifyMonitoringReport, payload: types.NotifyMonitoringReportRequest]>;
export type NotifyReportCall = BaseMessage<MessageType.CALL, [action: Action.NotifyReport, payload: types.NotifyReportRequest]>;
export type PublishFirmwareCall = BaseMessage<MessageType.CALL, [action: Action.PublishFirmware, payload: types.PublishFirmwareRequest]>;
export type PublishFirmwareStatusNotificationCall = BaseMessage<MessageType.CALL, [action: Action.PublishFirmwareStatusNotification, payload: types.PublishFirmwareStatusNotificationRequest]>;
export type ReportChargingProfilesCall = BaseMessage<MessageType.CALL, [action: Action.ReportChargingProfiles, payload: types.ReportChargingProfilesRequest]>;
export type RequestStartTransactionCall = BaseMessage<MessageType.CALL, [action: Action.RequestStartTransaction, payload: types.RequestStartTransactionRequest]>;
export type RequestStopTransactionCall = BaseMessage<MessageType.CALL, [action: Action.RequestStopTransaction, payload: types.RequestStopTransactionRequest]>;
export type ReservationStatusUpdateCall = BaseMessage<MessageType.CALL, [action: Action.ReservationStatusUpdate, payload: types.ReservationStatusUpdateRequest]>;
export type ReserveNowCall = BaseMessage<MessageType.CALL, [action: Action.ReserveNow, payload: types.ReserveNowRequest]>;
export type ResetCall = BaseMessage<MessageType.CALL, [action: Action.Reset, payload: types.ResetRequest]>;
export type SecurityEventNotificationCall = BaseMessage<MessageType.CALL, [action: Action.SecurityEventNotification, payload: types.SecurityEventNotificationRequest]>;
export type SendLocalListCall = BaseMessage<MessageType.CALL, [action: Action.SendLocalList, payload: types.SendLocalListRequest]>;
export type SetChargingProfileCall = BaseMessage<MessageType.CALL, [action: Action.SetChargingProfile, payload: types.SetChargingProfileRequest]>;
export type SetDisplayMessageCall = BaseMessage<MessageType.CALL, [action: Action.SetDisplayMessage, payload: types.SetDisplayMessageRequest]>;
export type SetMonitoringBaseCall = BaseMessage<MessageType.CALL, [action: Action.SetMonitoringBase, payload: types.SetMonitoringBaseRequest]>;
export type SetMonitoringLevelCall = BaseMessage<MessageType.CALL, [action: Action.SetMonitoringLevel, payload: types.SetMonitoringLevelRequest]>;
export type SetNetworkProfileCall = BaseMessage<MessageType.CALL, [action: Action.SetNetworkProfile, payload: types.SetNetworkProfileRequest]>;
export type SetVariableMonitoringCall = BaseMessage<MessageType.CALL, [action: Action.SetVariableMonitoring, payload: types.SetVariableMonitoringRequest]>;
export type SetVariablesCall = BaseMessage<MessageType.CALL, [action: Action.SetVariables, payload: types.SetVariablesRequest]>;
export type SignCertificateCall = BaseMessage<MessageType.CALL, [action: Action.SignCertificate, payload: types.SignCertificateRequest]>;
export type StatusNotificationCall = BaseMessage<MessageType.CALL, [action: Action.StatusNotification, payload: types.StatusNotificationRequest]>;
export type TransactionEventCall = BaseMessage<MessageType.CALL, [action: Action.TransactionEvent, payload: types.TransactionEventRequest]>;
export type TriggerMessageCall = BaseMessage<MessageType.CALL, [action: Action.TriggerMessage, payload: types.TriggerMessageRequest]>;
export type UnlockConnectorCall = BaseMessage<MessageType.CALL, [action: Action.UnlockConnector, payload: types.UnlockConnectorRequest]>;
export type UnpublishFirmwareCall = BaseMessage<MessageType.CALL, [action: Action.UnpublishFirmware, payload: types.UnpublishFirmwareRequest]>;
export type UpdateFirmwareCall = BaseMessage<MessageType.CALL, [action: Action.UpdateFirmware, payload: types.UpdateFirmwareRequest]>;



export type Call =
 | AuthorizeCall
 | BootNotificationCall
 | CancelReservationCall
 | CertificateSignedCall
 | ChangeAvailabilityCall
 | ClearCacheCall
 | ClearChargingProfileCall
 | ClearDisplayMessageCall
 | ClearedChargingLimitCall
 | ClearVariableMonitoringCall
 | CostUpdatedCall
 | CustomerInformationCall
 | DataTransferCall
 | DeleteCertificateCall
 | FirmwareStatusNotificationCall
 | Get15118EVCertificateCall
 | GetBaseReportCall
 | GetCertificateStatusCall
 | GetChargingProfilesCall
 | GetCompositeScheduleCall
 | GetDisplayMessagesCall
 | GetInstalledCertificateIdsCall
 | GetLocalListVersionCall
 | GetLogCall
 | GetMonitoringReportCall
 | GetReportCall
 | GetTransactionStatusCall
 | GetVariablesCall
 | HeartbeatCall
 | InstallCertificateCall
 | LogStatusNotificationCall
 | MeterValuesCall
 | NotifyChargingLimitCall
 | NotifyCustomerInformationCall
 | NotifyDisplayMessagesCall
 | NotifyEVChargingNeedsCall
 | NotifyEVChargingScheduleCall
 | NotifyEventCall
 | NotifyMonitoringReportCall
 | NotifyReportCall
 | PublishFirmwareCall
 | PublishFirmwareStatusNotificationCall
 | ReportChargingProfilesCall
 | RequestStartTransactionCall
 | RequestStopTransactionCall
 | ReservationStatusUpdateCall
 | ReserveNowCall
 | ResetCall
 | SecurityEventNotificationCall
 | SendLocalListCall
 | SetChargingProfileCall
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
 | UpdateFirmwareCall
;

const schemasByCommand: Record<Action, object> = {
  [Action.Authorize]: schemas.AuthorizeRequest,
  [Action.BootNotification]: schemas.BootNotificationRequest,
  [Action.CancelReservation]: schemas.CancelReservationRequest,
  [Action.CertificateSigned]: schemas.CertificateSignedRequest,
  [Action.ChangeAvailability]: schemas.ChangeAvailabilityRequest,
  [Action.ClearCache]: schemas.ClearCacheRequest,
  [Action.ClearChargingProfile]: schemas.ClearChargingProfileRequest,
  [Action.ClearDisplayMessage]: schemas.ClearDisplayMessageRequest,
  [Action.ClearedChargingLimit]: schemas.ClearedChargingLimitRequest,
  [Action.ClearVariableMonitoring]: schemas.ClearVariableMonitoringRequest,
  [Action.CostUpdated]: schemas.CostUpdatedRequest,
  [Action.CustomerInformation]: schemas.CustomerInformationRequest,
  [Action.DataTransfer]: schemas.DataTransferRequest,
  [Action.DeleteCertificate]: schemas.DeleteCertificateRequest,
  [Action.FirmwareStatusNotification]: schemas.FirmwareStatusNotificationRequest,
  [Action.Get15118EVCertificate]: schemas.Get15118EVCertificateRequest,
  [Action.GetBaseReport]: schemas.GetBaseReportRequest,
  [Action.GetCertificateStatus]: schemas.GetCertificateStatusRequest,
  [Action.GetChargingProfiles]: schemas.GetChargingProfilesRequest,
  [Action.GetCompositeSchedule]: schemas.GetCompositeScheduleRequest,
  [Action.GetDisplayMessages]: schemas.GetDisplayMessagesRequest,
  [Action.GetInstalledCertificateIds]: schemas.GetInstalledCertificateIdsRequest,
  [Action.GetLocalListVersion]: schemas.GetLocalListVersionRequest,
  [Action.GetLog]: schemas.GetLogRequest,
  [Action.GetMonitoringReport]: schemas.GetMonitoringReportRequest,
  [Action.GetReport]: schemas.GetReportRequest,
  [Action.GetTransactionStatus]: schemas.GetTransactionStatusRequest,
  [Action.GetVariables]: schemas.GetVariablesRequest,
  [Action.Heartbeat]: schemas.HeartbeatRequest,
  [Action.InstallCertificate]: schemas.InstallCertificateRequest,
  [Action.LogStatusNotification]: schemas.LogStatusNotificationRequest,
  [Action.MeterValues]: schemas.MeterValuesRequest,
  [Action.NotifyChargingLimit]: schemas.NotifyChargingLimitRequest,
  [Action.NotifyCustomerInformation]: schemas.NotifyCustomerInformationRequest,
  [Action.NotifyDisplayMessages]: schemas.NotifyDisplayMessagesRequest,
  [Action.NotifyEVChargingNeeds]: schemas.NotifyEVChargingNeedsRequest,
  [Action.NotifyEVChargingSchedule]: schemas.NotifyEVChargingScheduleRequest,
  [Action.NotifyEvent]: schemas.NotifyEventRequest,
  [Action.NotifyMonitoringReport]: schemas.NotifyMonitoringReportRequest,
  [Action.NotifyReport]: schemas.NotifyReportRequest,
  [Action.PublishFirmware]: schemas.PublishFirmwareRequest,
  [Action.PublishFirmwareStatusNotification]: schemas.PublishFirmwareStatusNotificationRequest,
  [Action.ReportChargingProfiles]: schemas.ReportChargingProfilesRequest,
  [Action.RequestStartTransaction]: schemas.RequestStartTransactionRequest,
  [Action.RequestStopTransaction]: schemas.RequestStopTransactionRequest,
  [Action.ReservationStatusUpdate]: schemas.ReservationStatusUpdateRequest,
  [Action.ReserveNow]: schemas.ReserveNowRequest,
  [Action.Reset]: schemas.ResetRequest,
  [Action.SecurityEventNotification]: schemas.SecurityEventNotificationRequest,
  [Action.SendLocalList]: schemas.SendLocalListRequest,
  [Action.SetChargingProfile]: schemas.SetChargingProfileRequest,
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
  [Action.UpdateFirmware]: schemas.UpdateFirmwareRequest,
};

export const validateCall: ValidateFn<[MessageType.CALL, string, ...any], Call> = (arr): arr is Call => {
  validateCall.errors = null;
  if (!ensure.length(validateCall, arr, 4, 'Invalid OCPP call: bad length')) {
    return false;
  }
  const [,, action, payload] = arr;
  if (!ensure.keyOf(validateCall, action, Action, 'Invalid OCPP call: unknown action')) {
    return false;
  }
  if (!ensure.object(validateCall, payload, 'Invalid OCPP call: bad payload')) {
    return false;
  }
  const schema = schemasByCommand[action];
  const ajv = getAjv();
  if (!ajv.validate(schema, payload)) {
    ajvErrorsToString(validateCall, 'Invalid OCPP call', ajv);
    return false;
  }
  return true;
};
