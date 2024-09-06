
import type { JSONSchemaType } from 'ajv';
import type { WithErrorsArr, ValidateFn } from '../common/utils';

import { Call } from './call.js';

import { validate } from '../common/ajv.js';

import { Action, BaseMessage, MessageType } from './utils.js';

import * as schemas from './schemas.js';
import * as types from './types.js';

export type UncheckedCallResult<P extends {}> = BaseMessage<MessageType.CALLRESULT, [payload: P]>;

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

export  type AuthorizeCallResult = UncheckedCallResult<types.AuthorizeResponse>;
export  type BootNotificationCallResult = UncheckedCallResult<types.BootNotificationResponse>;
export  type CancelReservationCallResult = UncheckedCallResult<types.CancelReservationResponse>;
export  type ChangeAvailabilityCallResult = UncheckedCallResult<types.ChangeAvailabilityResponse>;
export  type ChangeConfigurationCallResult = UncheckedCallResult<types.ChangeConfigurationResponse>;
export  type ClearCacheCallResult = UncheckedCallResult<types.ClearCacheResponse>;
export  type ClearChargingProfileCallResult = UncheckedCallResult<types.ClearChargingProfileResponse>;
export  type DataTransferCallResult = UncheckedCallResult<types.DataTransferResponse>;
export  type DiagnosticsStatusNotificationCallResult = UncheckedCallResult<types.DiagnosticsStatusNotificationResponse>;
export  type FirmwareStatusNotificationCallResult = UncheckedCallResult<types.FirmwareStatusNotificationResponse>;
export  type GetCompositeScheduleCallResult = UncheckedCallResult<types.GetCompositeScheduleResponse>;
export  type GetConfigurationCallResult = UncheckedCallResult<types.GetConfigurationResponse>;
export  type GetDiagnosticsCallResult = UncheckedCallResult<types.GetDiagnosticsResponse>;
export  type GetLocalListVersionCallResult = UncheckedCallResult<types.GetLocalListVersionResponse>;
export  type HeartbeatCallResult = UncheckedCallResult<types.HeartbeatResponse>;
export  type MeterValuesCallResult = UncheckedCallResult<types.MeterValuesResponse>;
export  type RemoteStartTransactionCallResult = UncheckedCallResult<types.RemoteStartTransactionResponse>;
export  type RemoteStopTransactionCallResult = UncheckedCallResult<types.RemoteStopTransactionResponse>;
export  type ReserveNowCallResult = UncheckedCallResult<types.ReserveNowResponse>;
export  type ResetCallResult = UncheckedCallResult<types.ResetResponse>;
export  type SendLocalListCallResult = UncheckedCallResult<types.SendLocalListResponse>;
export  type SetChargingProfileCallResult = UncheckedCallResult<types.SetChargingProfileResponse>;
export  type StartTransactionCallResult = UncheckedCallResult<types.StartTransactionResponse>;
export  type StatusNotificationCallResult = UncheckedCallResult<types.StatusNotificationResponse>;
export  type StopTransactionCallResult = UncheckedCallResult<types.StopTransactionResponse>;
export  type TriggerMessageCallResult = UncheckedCallResult<types.TriggerMessageResponse>;
export  type UnlockConnectorCallResult = UncheckedCallResult<types.UnlockConnectorResponse>;
export  type UpdateFirmwareCallResult = UncheckedCallResult<types.UpdateFirmwareResponse>;

export type CallResult = 
  | AuthorizeCallResult
  | BootNotificationCallResult
  | CancelReservationCallResult
  | ChangeAvailabilityCallResult
  | ChangeConfigurationCallResult
  | ClearCacheCallResult
  | ClearChargingProfileCallResult
  | DataTransferCallResult
  | DiagnosticsStatusNotificationCallResult
  | FirmwareStatusNotificationCallResult
  | GetCompositeScheduleCallResult
  | GetConfigurationCallResult
  | GetDiagnosticsCallResult
  | GetLocalListVersionCallResult
  | HeartbeatCallResult
  | MeterValuesCallResult
  | RemoteStartTransactionCallResult
  | RemoteStopTransactionCallResult
  | ReserveNowCallResult
  | ResetCallResult
  | SendLocalListCallResult
  | SetChargingProfileCallResult
  | StartTransactionCallResult
  | StatusNotificationCallResult
  | StopTransactionCallResult
  | TriggerMessageCallResult
  | UnlockConnectorCallResult
  | UpdateFirmwareCallResult
;

const schemasByCommand: Record<Action, object> = {
  [Action.Authorize]: schemas.AuthorizeResponse,
  [Action.BootNotification]: schemas.BootNotificationResponse,
  [Action.CancelReservation]: schemas.CancelReservationResponse,
  [Action.ChangeAvailability]: schemas.ChangeAvailabilityResponse,
  [Action.ChangeConfiguration]: schemas.ChangeConfigurationResponse,
  [Action.ClearCache]: schemas.ClearCacheResponse,
  [Action.ClearChargingProfile]: schemas.ClearChargingProfileResponse,
  [Action.DataTransfer]: schemas.DataTransferResponse,
  [Action.DiagnosticsStatusNotification]: schemas.DiagnosticsStatusNotificationResponse,
  [Action.FirmwareStatusNotification]: schemas.FirmwareStatusNotificationResponse,
  [Action.GetCompositeSchedule]: schemas.GetCompositeScheduleResponse,
  [Action.GetConfiguration]: schemas.GetConfigurationResponse,
  [Action.GetDiagnostics]: schemas.GetDiagnosticsResponse,
  [Action.GetLocalListVersion]: schemas.GetLocalListVersionResponse,
  [Action.Heartbeat]: schemas.HeartbeatResponse,
  [Action.MeterValues]: schemas.MeterValuesResponse,
  [Action.RemoteStartTransaction]: schemas.RemoteStartTransactionResponse,
  [Action.RemoteStopTransaction]: schemas.RemoteStopTransactionResponse,
  [Action.ReserveNow]: schemas.ReserveNowResponse,
  [Action.Reset]: schemas.ResetResponse,
  [Action.SendLocalList]: schemas.SendLocalListResponse,
  [Action.SetChargingProfile]: schemas.SetChargingProfileResponse,
  [Action.StartTransaction]: schemas.StartTransactionResponse,
  [Action.StatusNotification]: schemas.StatusNotificationResponse,
  [Action.StopTransaction]: schemas.StopTransactionResponse,
  [Action.TriggerMessage]: schemas.TriggerMessageResponse,
  [Action.UnlockConnector]: schemas.UnlockConnectorResponse,
  [Action.UpdateFirmware]: schemas.UpdateFirmwareResponse,
};

export const validateCallResult: ValidateFn<any, UncheckedCallResult<any>> = (arr): arr is UncheckedCallResult<any> => {
  validateCallResult.errors = null;
  if (!validate<UncheckedCallResult<{}>>(arr, unchecked_call_result_schema, 'Invalid OCPP call result')) {
    validateCallResult.errors = validate.errors;
    return false;
  }
  return true;
};

export interface CallResultTypesByAction extends Record<Action, CallResult> {
  [Action.Authorize]: AuthorizeCallResult,
  [Action.BootNotification]: BootNotificationCallResult,
  [Action.CancelReservation]: CancelReservationCallResult,
  [Action.ChangeAvailability]: ChangeAvailabilityCallResult,
  [Action.ChangeConfiguration]: ChangeConfigurationCallResult,
  [Action.ClearCache]: ClearCacheCallResult,
  [Action.ClearChargingProfile]: ClearChargingProfileCallResult,
  [Action.DataTransfer]: DataTransferCallResult,
  [Action.DiagnosticsStatusNotification]: DiagnosticsStatusNotificationCallResult,
  [Action.FirmwareStatusNotification]: FirmwareStatusNotificationCallResult,
  [Action.GetCompositeSchedule]: GetCompositeScheduleCallResult,
  [Action.GetConfiguration]: GetConfigurationCallResult,
  [Action.GetDiagnostics]: GetDiagnosticsCallResult,
  [Action.GetLocalListVersion]: GetLocalListVersionCallResult,
  [Action.Heartbeat]: HeartbeatCallResult,
  [Action.MeterValues]: MeterValuesCallResult,
  [Action.RemoteStartTransaction]: RemoteStartTransactionCallResult,
  [Action.RemoteStopTransaction]: RemoteStopTransactionCallResult,
  [Action.ReserveNow]: ReserveNowCallResult,
  [Action.Reset]: ResetCallResult,
  [Action.SendLocalList]: SendLocalListCallResult,
  [Action.SetChargingProfile]: SetChargingProfileCallResult,
  [Action.StartTransaction]: StartTransactionCallResult,
  [Action.StatusNotification]: StatusNotificationCallResult,
  [Action.StopTransaction]: StopTransactionCallResult,
  [Action.TriggerMessage]: TriggerMessageCallResult,
  [Action.UnlockConnector]: UnlockConnectorCallResult,
  [Action.UpdateFirmware]: UpdateFirmwareCallResult,
};

export type CheckedCallResult<C extends Call> = CallResultTypesByAction[C[2]];

export interface CheckCallResultFn extends WithErrorsArr {
  <C extends Call>(value: UncheckedCallResult<any>, call: C): value is CheckedCallResult<C>;
}

export const checkCallResult: CheckCallResultFn = <C extends Call>(result: UncheckedCallResult<any>, call: C): result is CheckedCallResult<C> => {
  checkCallResult.errors = null;
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
  return true;
};
