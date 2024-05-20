
import {
  Call,
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

import { Action, BaseMessage, MessageType } from './utils.js';
import { ajvErrorsToString, getAjv } from '../common/ajv.js';

import * as ensure from '../common/ensure.js';
import * as schemas from './schemas.js';
import * as types from './types.js';

export type UncheckedCallResult<P extends Record<string, any> | null> = BaseMessage<MessageType.CALLRESULT, [payload: P]>;

export type AuthorizeCallResult = UncheckedCallResult<types.AuthorizeResponse>;
export type BootNotificationCallResult = UncheckedCallResult<types.BootNotificationResponse>;
export type CancelReservationCallResult = UncheckedCallResult<types.CancelReservationResponse>;
export type CertificateSignedCallResult = UncheckedCallResult<types.CertificateSignedResponse>;
export type ChangeAvailabilityCallResult = UncheckedCallResult<types.ChangeAvailabilityResponse>;
export type ClearCacheCallResult = UncheckedCallResult<types.ClearCacheResponse>;
export type ClearChargingProfileCallResult = UncheckedCallResult<types.ClearChargingProfileResponse>;
export type ClearDisplayMessageCallResult = UncheckedCallResult<types.ClearDisplayMessageResponse>;
export type ClearedChargingLimitCallResult = UncheckedCallResult<types.ClearedChargingLimitResponse>;
export type ClearVariableMonitoringCallResult = UncheckedCallResult<types.ClearVariableMonitoringResponse>;
export type CostUpdatedCallResult = UncheckedCallResult<types.CostUpdatedResponse>;
export type CustomerInformationCallResult = UncheckedCallResult<types.CustomerInformationResponse>;
export type DataTransferCallResult = UncheckedCallResult<types.DataTransferResponse>;
export type DeleteCertificateCallResult = UncheckedCallResult<types.DeleteCertificateResponse>;
export type FirmwareStatusNotificationCallResult = UncheckedCallResult<types.FirmwareStatusNotificationResponse>;
export type Get15118EVCertificateCallResult = UncheckedCallResult<types.Get15118EVCertificateResponse>;
export type GetBaseReportCallResult = UncheckedCallResult<types.GetBaseReportResponse>;
export type GetCertificateStatusCallResult = UncheckedCallResult<types.GetCertificateStatusResponse>;
export type GetChargingProfilesCallResult = UncheckedCallResult<types.GetChargingProfilesResponse>;
export type GetCompositeScheduleCallResult = UncheckedCallResult<types.GetCompositeScheduleResponse>;
export type GetDisplayMessagesCallResult = UncheckedCallResult<types.GetDisplayMessagesResponse>;
export type GetInstalledCertificateIdsCallResult = UncheckedCallResult<types.GetInstalledCertificateIdsResponse>;
export type GetLocalListVersionCallResult = UncheckedCallResult<types.GetLocalListVersionResponse>;
export type GetLogCallResult = UncheckedCallResult<types.GetLogResponse>;
export type GetMonitoringReportCallResult = UncheckedCallResult<types.GetMonitoringReportResponse>;
export type GetReportCallResult = UncheckedCallResult<types.GetReportResponse>;
export type GetTransactionStatusCallResult = UncheckedCallResult<types.GetTransactionStatusResponse>;
export type GetVariablesCallResult = UncheckedCallResult<types.GetVariablesResponse>;
export type HeartbeatCallResult = UncheckedCallResult<types.HeartbeatResponse>;
export type InstallCertificateCallResult = UncheckedCallResult<types.InstallCertificateResponse>;
export type LogStatusNotificationCallResult = UncheckedCallResult<types.LogStatusNotificationResponse>;
export type MeterValuesCallResult = UncheckedCallResult<types.MeterValuesResponse>;
export type NotifyChargingLimitCallResult = UncheckedCallResult<types.NotifyChargingLimitResponse>;
export type NotifyCustomerInformationCallResult = UncheckedCallResult<types.NotifyCustomerInformationResponse>;
export type NotifyDisplayMessagesCallResult = UncheckedCallResult<types.NotifyDisplayMessagesResponse>;
export type NotifyEVChargingNeedsCallResult = UncheckedCallResult<types.NotifyEVChargingNeedsResponse>;
export type NotifyEVChargingScheduleCallResult = UncheckedCallResult<types.NotifyEVChargingScheduleResponse>;
export type NotifyEventCallResult = UncheckedCallResult<types.NotifyEventResponse>;
export type NotifyMonitoringReportCallResult = UncheckedCallResult<types.NotifyMonitoringReportResponse>;
export type NotifyReportCallResult = UncheckedCallResult<types.NotifyReportResponse>;
export type PublishFirmwareCallResult = UncheckedCallResult<types.PublishFirmwareResponse>;
export type PublishFirmwareStatusNotificationCallResult = UncheckedCallResult<types.PublishFirmwareStatusNotificationResponse>;
export type ReportChargingProfilesCallResult = UncheckedCallResult<types.ReportChargingProfilesResponse>;
export type RequestStartTransactionCallResult = UncheckedCallResult<types.RequestStartTransactionResponse>;
export type RequestStopTransactionCallResult = UncheckedCallResult<types.RequestStopTransactionResponse>;
export type ReservationStatusUpdateCallResult = UncheckedCallResult<types.ReservationStatusUpdateResponse>;
export type ReserveNowCallResult = UncheckedCallResult<types.ReserveNowResponse>;
export type ResetCallResult = UncheckedCallResult<types.ResetResponse>;
export type SecurityEventNotificationCallResult = UncheckedCallResult<types.SecurityEventNotificationResponse>;
export type SendLocalListCallResult = UncheckedCallResult<types.SendLocalListResponse>;
export type SetChargingProfileCallResult = UncheckedCallResult<types.SetChargingProfileResponse>;
export type SetDisplayMessageCallResult = UncheckedCallResult<types.SetDisplayMessageResponse>;
export type SetMonitoringBaseCallResult = UncheckedCallResult<types.SetMonitoringBaseResponse>;
export type SetMonitoringLevelCallResult = UncheckedCallResult<types.SetMonitoringLevelResponse>;
export type SetNetworkProfileCallResult = UncheckedCallResult<types.SetNetworkProfileResponse>;
export type SetVariableMonitoringCallResult = UncheckedCallResult<types.SetVariableMonitoringResponse>;
export type SetVariablesCallResult = UncheckedCallResult<types.SetVariablesResponse>;
export type SignCertificateCallResult = UncheckedCallResult<types.SignCertificateResponse>;
export type StatusNotificationCallResult = UncheckedCallResult<types.StatusNotificationResponse>;
export type TransactionEventCallResult = UncheckedCallResult<types.TransactionEventResponse>;
export type TriggerMessageCallResult = UncheckedCallResult<types.TriggerMessageResponse>;
export type UnlockConnectorCallResult = UncheckedCallResult<types.UnlockConnectorResponse>;
export type UnpublishFirmwareCallResult = UncheckedCallResult<types.UnpublishFirmwareResponse>;
export type UpdateFirmwareCallResult = UncheckedCallResult<types.UpdateFirmwareResponse>;


export type CallResult = 
  | AuthorizeCallResult
  | BootNotificationCallResult
  | CancelReservationCallResult
  | CertificateSignedCallResult
  | ChangeAvailabilityCallResult
  | ClearCacheCallResult
  | ClearChargingProfileCallResult
  | ClearDisplayMessageCallResult
  | ClearedChargingLimitCallResult
  | ClearVariableMonitoringCallResult
  | CostUpdatedCallResult
  | CustomerInformationCallResult
  | DataTransferCallResult
  | DeleteCertificateCallResult
  | FirmwareStatusNotificationCallResult
  | Get15118EVCertificateCallResult
  | GetBaseReportCallResult
  | GetCertificateStatusCallResult
  | GetChargingProfilesCallResult
  | GetCompositeScheduleCallResult
  | GetDisplayMessagesCallResult
  | GetInstalledCertificateIdsCallResult
  | GetLocalListVersionCallResult
  | GetLogCallResult
  | GetMonitoringReportCallResult
  | GetReportCallResult
  | GetTransactionStatusCallResult
  | GetVariablesCallResult
  | HeartbeatCallResult
  | InstallCertificateCallResult
  | LogStatusNotificationCallResult
  | MeterValuesCallResult
  | NotifyChargingLimitCallResult
  | NotifyCustomerInformationCallResult
  | NotifyDisplayMessagesCallResult
  | NotifyEVChargingNeedsCallResult
  | NotifyEVChargingScheduleCallResult
  | NotifyEventCallResult
  | NotifyMonitoringReportCallResult
  | NotifyReportCallResult
  | PublishFirmwareCallResult
  | PublishFirmwareStatusNotificationCallResult
  | ReportChargingProfilesCallResult
  | RequestStartTransactionCallResult
  | RequestStopTransactionCallResult
  | ReservationStatusUpdateCallResult
  | ReserveNowCallResult
  | ResetCallResult
  | SecurityEventNotificationCallResult
  | SendLocalListCallResult
  | SetChargingProfileCallResult
  | SetDisplayMessageCallResult
  | SetMonitoringBaseCallResult
  | SetMonitoringLevelCallResult
  | SetNetworkProfileCallResult
  | SetVariableMonitoringCallResult
  | SetVariablesCallResult
  | SignCertificateCallResult
  | StatusNotificationCallResult
  | TransactionEventCallResult
  | TriggerMessageCallResult
  | UnlockConnectorCallResult
  | UnpublishFirmwareCallResult
  | UpdateFirmwareCallResult
;

const schemasByCommand: Record<Action, object> = {
  [Action.Authorize]: schemas.AuthorizeResponse,
  [Action.BootNotification]: schemas.BootNotificationResponse,
  [Action.CancelReservation]: schemas.CancelReservationResponse,
  [Action.CertificateSigned]: schemas.CertificateSignedResponse,
  [Action.ChangeAvailability]: schemas.ChangeAvailabilityResponse,
  [Action.ClearCache]: schemas.ClearCacheResponse,
  [Action.ClearChargingProfile]: schemas.ClearChargingProfileResponse,
  [Action.ClearDisplayMessage]: schemas.ClearDisplayMessageResponse,
  [Action.ClearedChargingLimit]: schemas.ClearedChargingLimitResponse,
  [Action.ClearVariableMonitoring]: schemas.ClearVariableMonitoringResponse,
  [Action.CostUpdated]: schemas.CostUpdatedResponse,
  [Action.CustomerInformation]: schemas.CustomerInformationResponse,
  [Action.DataTransfer]: schemas.DataTransferResponse,
  [Action.DeleteCertificate]: schemas.DeleteCertificateResponse,
  [Action.FirmwareStatusNotification]: schemas.FirmwareStatusNotificationResponse,
  [Action.Get15118EVCertificate]: schemas.Get15118EVCertificateResponse,
  [Action.GetBaseReport]: schemas.GetBaseReportResponse,
  [Action.GetCertificateStatus]: schemas.GetCertificateStatusResponse,
  [Action.GetChargingProfiles]: schemas.GetChargingProfilesResponse,
  [Action.GetCompositeSchedule]: schemas.GetCompositeScheduleResponse,
  [Action.GetDisplayMessages]: schemas.GetDisplayMessagesResponse,
  [Action.GetInstalledCertificateIds]: schemas.GetInstalledCertificateIdsResponse,
  [Action.GetLocalListVersion]: schemas.GetLocalListVersionResponse,
  [Action.GetLog]: schemas.GetLogResponse,
  [Action.GetMonitoringReport]: schemas.GetMonitoringReportResponse,
  [Action.GetReport]: schemas.GetReportResponse,
  [Action.GetTransactionStatus]: schemas.GetTransactionStatusResponse,
  [Action.GetVariables]: schemas.GetVariablesResponse,
  [Action.Heartbeat]: schemas.HeartbeatResponse,
  [Action.InstallCertificate]: schemas.InstallCertificateResponse,
  [Action.LogStatusNotification]: schemas.LogStatusNotificationResponse,
  [Action.MeterValues]: schemas.MeterValuesResponse,
  [Action.NotifyChargingLimit]: schemas.NotifyChargingLimitResponse,
  [Action.NotifyCustomerInformation]: schemas.NotifyCustomerInformationResponse,
  [Action.NotifyDisplayMessages]: schemas.NotifyDisplayMessagesResponse,
  [Action.NotifyEVChargingNeeds]: schemas.NotifyEVChargingNeedsResponse,
  [Action.NotifyEVChargingSchedule]: schemas.NotifyEVChargingScheduleResponse,
  [Action.NotifyEvent]: schemas.NotifyEventResponse,
  [Action.NotifyMonitoringReport]: schemas.NotifyMonitoringReportResponse,
  [Action.NotifyReport]: schemas.NotifyReportResponse,
  [Action.PublishFirmware]: schemas.PublishFirmwareResponse,
  [Action.PublishFirmwareStatusNotification]: schemas.PublishFirmwareStatusNotificationResponse,
  [Action.ReportChargingProfiles]: schemas.ReportChargingProfilesResponse,
  [Action.RequestStartTransaction]: schemas.RequestStartTransactionResponse,
  [Action.RequestStopTransaction]: schemas.RequestStopTransactionResponse,
  [Action.ReservationStatusUpdate]: schemas.ReservationStatusUpdateResponse,
  [Action.ReserveNow]: schemas.ReserveNowResponse,
  [Action.Reset]: schemas.ResetResponse,
  [Action.SecurityEventNotification]: schemas.SecurityEventNotificationResponse,
  [Action.SendLocalList]: schemas.SendLocalListResponse,
  [Action.SetChargingProfile]: schemas.SetChargingProfileResponse,
  [Action.SetDisplayMessage]: schemas.SetDisplayMessageResponse,
  [Action.SetMonitoringBase]: schemas.SetMonitoringBaseResponse,
  [Action.SetMonitoringLevel]: schemas.SetMonitoringLevelResponse,
  [Action.SetNetworkProfile]: schemas.SetNetworkProfileResponse,
  [Action.SetVariableMonitoring]: schemas.SetVariableMonitoringResponse,
  [Action.SetVariables]: schemas.SetVariablesResponse,
  [Action.SignCertificate]: schemas.SignCertificateResponse,
  [Action.StatusNotification]: schemas.StatusNotificationResponse,
  [Action.TransactionEvent]: schemas.TransactionEventResponse,
  [Action.TriggerMessage]: schemas.TriggerMessageResponse,
  [Action.UnlockConnector]: schemas.UnlockConnectorResponse,
  [Action.UnpublishFirmware]: schemas.UnpublishFirmwareResponse,
  [Action.UpdateFirmware]: schemas.UpdateFirmwareResponse,
};

export const parseCallResult = (arr: [MessageType.CALLRESULT, string, ...any]): UncheckedCallResult<any> => {
  ensure.length(arr, 3, 'Invalid OCPP call result: bad length');
  ensure.object(arr[2], 'Invalid OCPP call result: bad payload');
  return arr as UncheckedCallResult<any>;
};

export const checkCallResult = <T extends Call>(result: UncheckedCallResult<any>, call: T): 
  T extends AuthorizeCall ? AuthorizeCallResult :
  T extends BootNotificationCall ? BootNotificationCallResult :
  T extends CancelReservationCall ? CancelReservationCallResult :
  T extends CertificateSignedCall ? CertificateSignedCallResult :
  T extends ChangeAvailabilityCall ? ChangeAvailabilityCallResult :
  T extends ClearCacheCall ? ClearCacheCallResult :
  T extends ClearChargingProfileCall ? ClearChargingProfileCallResult :
  T extends ClearDisplayMessageCall ? ClearDisplayMessageCallResult :
  T extends ClearedChargingLimitCall ? ClearedChargingLimitCallResult :
  T extends ClearVariableMonitoringCall ? ClearVariableMonitoringCallResult :
  T extends CostUpdatedCall ? CostUpdatedCallResult :
  T extends CustomerInformationCall ? CustomerInformationCallResult :
  T extends DataTransferCall ? DataTransferCallResult :
  T extends DeleteCertificateCall ? DeleteCertificateCallResult :
  T extends FirmwareStatusNotificationCall ? FirmwareStatusNotificationCallResult :
  T extends Get15118EVCertificateCall ? Get15118EVCertificateCallResult :
  T extends GetBaseReportCall ? GetBaseReportCallResult :
  T extends GetCertificateStatusCall ? GetCertificateStatusCallResult :
  T extends GetChargingProfilesCall ? GetChargingProfilesCallResult :
  T extends GetCompositeScheduleCall ? GetCompositeScheduleCallResult :
  T extends GetDisplayMessagesCall ? GetDisplayMessagesCallResult :
  T extends GetInstalledCertificateIdsCall ? GetInstalledCertificateIdsCallResult :
  T extends GetLocalListVersionCall ? GetLocalListVersionCallResult :
  T extends GetLogCall ? GetLogCallResult :
  T extends GetMonitoringReportCall ? GetMonitoringReportCallResult :
  T extends GetReportCall ? GetReportCallResult :
  T extends GetTransactionStatusCall ? GetTransactionStatusCallResult :
  T extends GetVariablesCall ? GetVariablesCallResult :
  T extends HeartbeatCall ? HeartbeatCallResult :
  T extends InstallCertificateCall ? InstallCertificateCallResult :
  T extends LogStatusNotificationCall ? LogStatusNotificationCallResult :
  T extends MeterValuesCall ? MeterValuesCallResult :
  T extends NotifyChargingLimitCall ? NotifyChargingLimitCallResult :
  T extends NotifyCustomerInformationCall ? NotifyCustomerInformationCallResult :
  T extends NotifyDisplayMessagesCall ? NotifyDisplayMessagesCallResult :
  T extends NotifyEVChargingNeedsCall ? NotifyEVChargingNeedsCallResult :
  T extends NotifyEVChargingScheduleCall ? NotifyEVChargingScheduleCallResult :
  T extends NotifyEventCall ? NotifyEventCallResult :
  T extends NotifyMonitoringReportCall ? NotifyMonitoringReportCallResult :
  T extends NotifyReportCall ? NotifyReportCallResult :
  T extends PublishFirmwareCall ? PublishFirmwareCallResult :
  T extends PublishFirmwareStatusNotificationCall ? PublishFirmwareStatusNotificationCallResult :
  T extends ReportChargingProfilesCall ? ReportChargingProfilesCallResult :
  T extends RequestStartTransactionCall ? RequestStartTransactionCallResult :
  T extends RequestStopTransactionCall ? RequestStopTransactionCallResult :
  T extends ReservationStatusUpdateCall ? ReservationStatusUpdateCallResult :
  T extends ReserveNowCall ? ReserveNowCallResult :
  T extends ResetCall ? ResetCallResult :
  T extends SecurityEventNotificationCall ? SecurityEventNotificationCallResult :
  T extends SendLocalListCall ? SendLocalListCallResult :
  T extends SetChargingProfileCall ? SetChargingProfileCallResult :
  T extends SetDisplayMessageCall ? SetDisplayMessageCallResult :
  T extends SetMonitoringBaseCall ? SetMonitoringBaseCallResult :
  T extends SetMonitoringLevelCall ? SetMonitoringLevelCallResult :
  T extends SetNetworkProfileCall ? SetNetworkProfileCallResult :
  T extends SetVariableMonitoringCall ? SetVariableMonitoringCallResult :
  T extends SetVariablesCall ? SetVariablesCallResult :
  T extends SignCertificateCall ? SignCertificateCallResult :
  T extends StatusNotificationCall ? StatusNotificationCallResult :
  T extends TransactionEventCall ? TransactionEventCallResult :
  T extends TriggerMessageCall ? TriggerMessageCallResult :
  T extends UnlockConnectorCall ? UnlockConnectorCallResult :
  T extends UnpublishFirmwareCall ? UnpublishFirmwareCallResult :
  T extends UpdateFirmwareCall ? UpdateFirmwareCallResult :
  never => {
  ensure.equal(result[1], call[1], `Invalid OCPP call result: id ${result[1]} does not equal call id ${call[1]}`);
  const schema = schemasByCommand[call[2]];
  const ajv = getAjv();
  if (!ajv.validate(schema, result[2])) {
    throw new Error(`Invalid OCPP call result: ${ajvErrorsToString(ajv)}`);
  }
  // @ts-ignore
  return result;
};
