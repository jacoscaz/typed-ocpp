
import type { JSONSchemaType } from 'ajv';
import type { Call } from './call.js';
import type { BaseMessage } from './utils.js';
import type { WithErrorsArr, ValidateFn } from '../common/utils.js';

import { EMPTY_ARR, assign } from '../common/utils.js';
import { validate } from '../common/ajv.js';
import { Action, MessageType } from './utils.js';
import * as schemas from './schemas.js';
import * as types from './types.js';

export type UncheckedCallResult<P extends {} = {}> = BaseMessage<MessageType.CALLRESULT, [payload: P]>;

const unchecked_call_result_schema: JSONSchemaType<UncheckedCallResult<{}>> = {
  type: 'array',
  items: [
    { type: 'number', enum: [MessageType.CALLRESULT] },
    { type: 'string' },
    { type: 'object', additionalProperties: true },
  ],
  minItems: 3,
  maxItems: 3,
};

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

export const validateCallResult: ValidateFn<any, UncheckedCallResult> = assign(
  (arr: any): arr is UncheckedCallResult => {
    if (!validate<UncheckedCallResult>(arr, unchecked_call_result_schema, 'Invalid OCPP call result')) {
      validateCallResult.errors = validate.errors;
      return false;
    }
    validateCallResult.errors = EMPTY_ARR;
    return true;
  },
  { errors: EMPTY_ARR },
);

export interface CallResultTypesByAction extends Record<Action, CallResult> {
  [Action.Authorize]: AuthorizeCallResult,
  [Action.BootNotification]: BootNotificationCallResult,
  [Action.CancelReservation]: CancelReservationCallResult,
  [Action.CertificateSigned]: CertificateSignedCallResult,
  [Action.ChangeAvailability]: ChangeAvailabilityCallResult,
  [Action.ClearCache]: ClearCacheCallResult,
  [Action.ClearChargingProfile]: ClearChargingProfileCallResult,
  [Action.ClearDisplayMessage]: ClearDisplayMessageCallResult,
  [Action.ClearedChargingLimit]: ClearedChargingLimitCallResult,
  [Action.ClearVariableMonitoring]: ClearVariableMonitoringCallResult,
  [Action.CostUpdated]: CostUpdatedCallResult,
  [Action.CustomerInformation]: CustomerInformationCallResult,
  [Action.DataTransfer]: DataTransferCallResult,
  [Action.DeleteCertificate]: DeleteCertificateCallResult,
  [Action.FirmwareStatusNotification]: FirmwareStatusNotificationCallResult,
  [Action.Get15118EVCertificate]: Get15118EVCertificateCallResult,
  [Action.GetBaseReport]: GetBaseReportCallResult,
  [Action.GetCertificateStatus]: GetCertificateStatusCallResult,
  [Action.GetChargingProfiles]: GetChargingProfilesCallResult,
  [Action.GetCompositeSchedule]: GetCompositeScheduleCallResult,
  [Action.GetDisplayMessages]: GetDisplayMessagesCallResult,
  [Action.GetInstalledCertificateIds]: GetInstalledCertificateIdsCallResult,
  [Action.GetLocalListVersion]: GetLocalListVersionCallResult,
  [Action.GetLog]: GetLogCallResult,
  [Action.GetMonitoringReport]: GetMonitoringReportCallResult,
  [Action.GetReport]: GetReportCallResult,
  [Action.GetTransactionStatus]: GetTransactionStatusCallResult,
  [Action.GetVariables]: GetVariablesCallResult,
  [Action.Heartbeat]: HeartbeatCallResult,
  [Action.InstallCertificate]: InstallCertificateCallResult,
  [Action.LogStatusNotification]: LogStatusNotificationCallResult,
  [Action.MeterValues]: MeterValuesCallResult,
  [Action.NotifyChargingLimit]: NotifyChargingLimitCallResult,
  [Action.NotifyCustomerInformation]: NotifyCustomerInformationCallResult,
  [Action.NotifyDisplayMessages]: NotifyDisplayMessagesCallResult,
  [Action.NotifyEVChargingNeeds]: NotifyEVChargingNeedsCallResult,
  [Action.NotifyEVChargingSchedule]: NotifyEVChargingScheduleCallResult,
  [Action.NotifyEvent]: NotifyEventCallResult,
  [Action.NotifyMonitoringReport]: NotifyMonitoringReportCallResult,
  [Action.NotifyReport]: NotifyReportCallResult,
  [Action.PublishFirmware]: PublishFirmwareCallResult,
  [Action.PublishFirmwareStatusNotification]: PublishFirmwareStatusNotificationCallResult,
  [Action.ReportChargingProfiles]: ReportChargingProfilesCallResult,
  [Action.RequestStartTransaction]: RequestStartTransactionCallResult,
  [Action.RequestStopTransaction]: RequestStopTransactionCallResult,
  [Action.ReservationStatusUpdate]: ReservationStatusUpdateCallResult,
  [Action.ReserveNow]: ReserveNowCallResult,
  [Action.Reset]: ResetCallResult,
  [Action.SecurityEventNotification]: SecurityEventNotificationCallResult,
  [Action.SendLocalList]: SendLocalListCallResult,
  [Action.SetChargingProfile]: SetChargingProfileCallResult,
  [Action.SetDisplayMessage]: SetDisplayMessageCallResult,
  [Action.SetMonitoringBase]: SetMonitoringBaseCallResult,
  [Action.SetMonitoringLevel]: SetMonitoringLevelCallResult,
  [Action.SetNetworkProfile]: SetNetworkProfileCallResult,
  [Action.SetVariableMonitoring]: SetVariableMonitoringCallResult,
  [Action.SetVariables]: SetVariablesCallResult,
  [Action.SignCertificate]: SignCertificateCallResult,
  [Action.StatusNotification]: StatusNotificationCallResult,
  [Action.TransactionEvent]: TransactionEventCallResult,
  [Action.TriggerMessage]: TriggerMessageCallResult,
  [Action.UnlockConnector]: UnlockConnectorCallResult,
  [Action.UnpublishFirmware]: UnpublishFirmwareCallResult,
  [Action.UpdateFirmware]: UpdateFirmwareCallResult,
};

export type CheckedCallResult<C extends Call> = CallResultTypesByAction[C[2]];

export interface CheckCallResultFn extends WithErrorsArr {
  <C extends Call>(value: CheckedCallResult<Call>, call: C): value is CheckedCallResult<C>;
  errors: string[];
}

export const checkCallResult: CheckCallResultFn = assign(
  <C extends Call>(result: CheckedCallResult<Call>, call: C): result is CheckedCallResult<C> => {
    const [, call_id, payload] = result;
    if (call_id !== call[1]) {
      checkCallResult.errors = [`Invalid OCPP call result: id ${call_id} does not equal call id ${call[1]}`];
      return false;
    }
    const schema = schemasByCommand[call[2]];
    if (!validate<CallResult[2]>(payload, schema as JSONSchemaType<CallResult[2]>, 'Invalid OCPP call result')) {
      checkCallResult.errors = validate.errors;
      return false;
    }
    checkCallResult.errors = EMPTY_ARR;
    return true;
  },
  { errors: EMPTY_ARR },
);
