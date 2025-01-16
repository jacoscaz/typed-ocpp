
import type { JSONSchemaType } from 'ajv';
import type { BaseMessage } from './utils.js';

import { EMPTY_ARR, assign, type ValidateFn } from '../common/utils.js';
import { Action, MessageType } from './utils.js';
import { validate } from '../common/ajv.js';
import * as schemas from './schemas.js';
import * as types from './types.js';

export type AuthorizeCall = BaseMessage<MessageType.CALL, [action: Action.Authorize, payload: types.AuthorizeRequest]>;
export type BootNotificationCall = BaseMessage<MessageType.CALL, [action: Action.BootNotification, payload: types.BootNotificationRequest]>;
export type CancelReservationCall = BaseMessage<MessageType.CALL, [action: Action.CancelReservation, payload: types.CancelReservationRequest]>;
export type ChangeAvailabilityCall = BaseMessage<MessageType.CALL, [action: Action.ChangeAvailability, payload: types.ChangeAvailabilityRequest]>;
export type ChangeConfigurationCall = BaseMessage<MessageType.CALL, [action: Action.ChangeConfiguration, payload: types.ChangeConfigurationRequest]>;
export type ClearCacheCall = BaseMessage<MessageType.CALL, [action: Action.ClearCache, payload: types.ClearCacheRequest]>;
export type ClearChargingProfileCall = BaseMessage<MessageType.CALL, [action: Action.ClearChargingProfile, payload: types.ClearChargingProfileRequest]>;
export type DataTransferCall = BaseMessage<MessageType.CALL, [action: Action.DataTransfer, types.DataTransferRequest]>;
export type DiagnosticsStatusNotificationCall = BaseMessage<MessageType.CALL, [action: Action.DiagnosticsStatusNotification, payload: types.DiagnosticsStatusNotificationRequest]>;
export type FirmwareStatusNotificationCall = BaseMessage<MessageType.CALL, [action: Action.FirmwareStatusNotification, payload: types.FirmwareStatusNotificationRequest]>;
export type GetCompositeScheduleCall = BaseMessage<MessageType.CALL, [action: Action.GetCompositeSchedule, payload: types.GetCompositeScheduleRequest]>;
export type GetConfigurationCall = BaseMessage<MessageType.CALL, [action: Action.GetConfiguration, payload: types.GetConfigurationRequest]>;
export type GetDiagnosticsCall = BaseMessage<MessageType.CALL, [action: Action.GetDiagnostics, payload: types.GetDiagnosticsRequest]>;
export type GetLocalListVersionCall = BaseMessage<MessageType.CALL, [action: Action.GetLocalListVersion, payload: types.GetLocalListVersionRequest]>;
export type HeartbeatCall = BaseMessage<MessageType.CALL, [action: Action.Heartbeat, payload: types.HeartbeatRequest]>;
export type MeterValuesCall = BaseMessage<MessageType.CALL, [action: Action.MeterValues, payload: types.MeterValuesRequest]>;
export type RemoteStartTransactionCall = BaseMessage<MessageType.CALL, [action: Action.RemoteStartTransaction, payload: types.RemoteStartTransactionRequest]>;
export type RemoteStopTransactionCall = BaseMessage<MessageType.CALL, [action: Action.RemoteStopTransaction, payload: types.RemoteStopTransactionRequest]>;
export type ReserveNowCall = BaseMessage<MessageType.CALL, [action: Action.ReserveNow, payload: types.ReserveNowRequest]>;
export type ResetCall = BaseMessage<MessageType.CALL, [action: Action.Reset, payload: types.ResetRequest]>;
export type SendLocalListCall = BaseMessage<MessageType.CALL, [action: Action.SendLocalList, payload: types.SendLocalListRequest]>;
export type SetChargingProfileCall = BaseMessage<MessageType.CALL, [action: Action.SetChargingProfile, payload: types.SetChargingProfileRequest]>;
export type StartTransactionCall = BaseMessage<MessageType.CALL, [action: Action.StartTransaction, payload: types.StartTransactionRequest]>;
export type StatusNotificationCall = BaseMessage<MessageType.CALL, [action: Action.StatusNotification, payload: types.StatusNotificationRequest]>;
export type StopTransactionCall = BaseMessage<MessageType.CALL, [action: Action.StopTransaction, payload: types.StopTransactionRequest]>;
export type TriggerMessageCall = BaseMessage<MessageType.CALL, [action: Action.TriggerMessage, payload: types.TriggerMessageRequest]>;
export type UnlockConnectorCall = BaseMessage<MessageType.CALL, [action: Action.UnlockConnector, payload: types.UnlockConnectorRequest]>;
export type UpdateFirmwareCall = BaseMessage<MessageType.CALL, [action: Action.UpdateFirmware, payload: types.UpdateFirmwareRequest]>;

export type Call = AuthorizeCall
  | BootNotificationCall
  | CancelReservationCall
  | ChangeAvailabilityCall
  | ChangeConfigurationCall
  | ClearCacheCall
  | ClearChargingProfileCall
  | DataTransferCall
  | DiagnosticsStatusNotificationCall
  | FirmwareStatusNotificationCall
  | GetCompositeScheduleCall
  | GetConfigurationCall
  | GetDiagnosticsCall
  | GetLocalListVersionCall
  | HeartbeatCall
  | MeterValuesCall
  | RemoteStartTransactionCall
  | RemoteStopTransactionCall
  | ReserveNowCall
  | ResetCall
  | SendLocalListCall
  | SetChargingProfileCall
  | StartTransactionCall
  | StatusNotificationCall
  | StopTransactionCall
  | TriggerMessageCall
  | UnlockConnectorCall
  | UpdateFirmwareCall
;

const schemasByCommand: Record<Action, object> = {
  [Action.Authorize]: schemas.AuthorizeRequest,
  [Action.BootNotification]: schemas.BootNotificationRequest,
  [Action.CancelReservation]: schemas.CancelReservationRequest,
  [Action.ChangeAvailability]: schemas.ChangeAvailabilityRequest,
  [Action.ChangeConfiguration]: schemas.ChangeConfigurationRequest,
  [Action.ClearCache]: schemas.ClearCacheRequest,
  [Action.ClearChargingProfile]: schemas.ClearChargingProfileRequest,
  [Action.DataTransfer]: schemas.DataTransferRequest,
  [Action.DiagnosticsStatusNotification]: schemas.DiagnosticsStatusNotificationRequest,
  [Action.FirmwareStatusNotification]: schemas.FirmwareStatusNotificationRequest,
  [Action.GetCompositeSchedule]: schemas.GetCompositeScheduleRequest,
  [Action.GetConfiguration]: schemas.GetConfigurationRequest,
  [Action.GetDiagnostics]: schemas.GetDiagnosticsRequest,
  [Action.GetLocalListVersion]: schemas.GetLocalListVersionRequest,
  [Action.Heartbeat]: schemas.HeartbeatRequest,
  [Action.MeterValues]: schemas.MeterValuesRequest,
  [Action.RemoteStartTransaction]: schemas.RemoteStartTransactionRequest,
  [Action.RemoteStopTransaction]: schemas.RemoteStopTransactionRequest,
  [Action.ReserveNow]: schemas.ReserveNowRequest,
  [Action.Reset]: schemas.ResetRequest,
  [Action.SendLocalList]: schemas.SendLocalListRequest,
  [Action.SetChargingProfile]: schemas.SetChargingProfileRequest,
  [Action.StartTransaction]: schemas.StartTransactionRequest,
  [Action.StatusNotification]: schemas.StatusNotificationRequest,
  [Action.StopTransaction]: schemas.StopTransactionRequest,
  [Action.TriggerMessage]: schemas.TriggerMessageRequest,
  [Action.UnlockConnector]: schemas.UnlockConnectorRequest,
  [Action.UpdateFirmware]: schemas.UpdateFirmwareRequest,
};

type BaseCall = BaseMessage<MessageType.CALL, [action: Action, payload: {}]>;

const basecall_schema: JSONSchemaType<BaseCall> = {
  type: 'array',
  items: [
    { type: 'number', enum: [MessageType.CALL] },
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
  { errors: EMPTY_ARR },
);

validateCall.errors = EMPTY_ARR;
