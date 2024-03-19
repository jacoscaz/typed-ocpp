
import {
  Authorize,
  BootNotification,
  CancelReservation,
  ChangeAvailability,
  ChangeConfiguration,
  ClearCache,
  ClearChargingProfile,
  DataTransfer,
  DiagnosticsStatusNotification,
  FirmwareStatusNotification,
  GetCompositeSchedule,
  GetConfiguration,
  GetDiagnostics,
  GetLocalListVersion,
  Heartbeat,
  MeterValues,
  RemoteStartTransaction,
  RemoteStopTransaction,
  ReserveNow,
  Reset,
  SendLocalList,
  SetChargingProfile,
  StartTransaction,
  StatusNotification,
  StopTransaction,
  TriggerMessage,
  UnlockConnector,
  UpdateFirmware,
  AuthorizeSchema,
  BootNotificationSchema,
  CancelReservationSchema,
  ChangeAvailabilitySchema,
  ChangeConfigurationSchema,
  ClearCacheSchema,
  ClearChargingProfileSchema,
  DataTransferSchema,
  DiagnosticsStatusNotificationSchema,
  FirmwareStatusNotificationSchema,
  GetCompositeScheduleSchema,
  GetConfigurationSchema,
  GetDiagnosticsSchema,
  GetLocalListVersionSchema,
  HeartbeatSchema,
  MeterValuesSchema,
  RemoteStartTransactionSchema,
  RemoteStopTransactionSchema,
  ReserveNowSchema,
  ResetSchema,
  SendLocalListSchema,
  SetChargingProfileSchema,
  StartTransactionSchema,
  StatusNotificationSchema,
  StopTransactionSchema,
  TriggerMessageSchema,
  UnlockConnectorSchema,
  UpdateFirmwareSchema,
} from './payloads.js';

import { Action, BaseMessage, MessageType } from './utils.js';
import { ajvErrorsToString, getAjv } from './ajv.js';
import * as ensure from './ensure.js';

export type AuthorizeCall = BaseMessage<MessageType.CALL, [action: Action.Authorize, payload: Authorize]>;
export type BootNotificationCall = BaseMessage<MessageType.CALL, [action: Action.BootNotification, payload: BootNotification]>;
export type CancelReservationCall = BaseMessage<MessageType.CALL, [action: Action.CancelReservation, payload: CancelReservation]>;
export type ChangeAvailabilityCall = BaseMessage<MessageType.CALL, [action: Action.ChangeAvailability, payload: ChangeAvailability]>;
export type ChangeConfigurationCall = BaseMessage<MessageType.CALL, [action: Action.ChangeConfiguration, payload: ChangeConfiguration]>;
export type ClearCacheCall = BaseMessage<MessageType.CALL, [action: Action.ClearCache, payload: ClearCache]>;
export type ClearChargingProfileCall = BaseMessage<MessageType.CALL, [action: Action.ClearChargingProfile, payload: ClearChargingProfile]>;
export type DataTransferCall = BaseMessage<MessageType.CALL, [action: Action.DataTransfer, payload: DataTransfer]>;
export type DiagnosticsStatusNotificationCall = BaseMessage<MessageType.CALL, [action: Action.DiagnosticsStatusNotification, payload: DiagnosticsStatusNotification]>;
export type FirmwareStatusNotificationCall = BaseMessage<MessageType.CALL, [action: Action.FirmwareStatusNotification, payload: FirmwareStatusNotification]>;
export type GetCompositeScheduleCall = BaseMessage<MessageType.CALL, [action: Action.GetCompositeSchedule, payload: GetCompositeSchedule]>;
export type GetConfigurationCall = BaseMessage<MessageType.CALL, [action: Action.GetConfiguration, payload: GetConfiguration]>;
export type GetDiagnosticsCall = BaseMessage<MessageType.CALL, [action: Action.GetDiagnostics, payload: GetDiagnostics]>;
export type GetLocalListVersionCall = BaseMessage<MessageType.CALL, [action: Action.GetLocalListVersion, payload: GetLocalListVersion]>;
export type HeartbeatCall = BaseMessage<MessageType.CALL, [action: Action.Heartbeat, payload: Heartbeat]>;
export type MeterValuesCall = BaseMessage<MessageType.CALL, [action: Action.MeterValues, payload: MeterValues]>;
export type RemoteStartTransactionCall = BaseMessage<MessageType.CALL, [action: Action.RemoteStartTransaction, payload: RemoteStartTransaction]>;
export type RemoteStopTransactionCall = BaseMessage<MessageType.CALL, [action: Action.RemoteStopTransaction, payload: RemoteStopTransaction]>;
export type ReserveNowCall = BaseMessage<MessageType.CALL, [action: Action.ReserveNow, payload: ReserveNow]>;
export type ResetCall = BaseMessage<MessageType.CALL, [action: Action.Reset, payload: Reset]>;
export type SendLocalListCall = BaseMessage<MessageType.CALL, [action: Action.SendLocalList, payload: SendLocalList]>;
export type SetChargingProfileCall = BaseMessage<MessageType.CALL, [action: Action.SetChargingProfile, payload: SetChargingProfile]>;
export type StartTransactionCall = BaseMessage<MessageType.CALL, [action: Action.StartTransaction, payload: StartTransaction]>;
export type StatusNotificationCall = BaseMessage<MessageType.CALL, [action: Action.StatusNotification, payload: StatusNotification]>;
export type StopTransactionCall = BaseMessage<MessageType.CALL, [action: Action.StopTransaction, payload: StopTransaction]>;
export type TriggerMessageCall = BaseMessage<MessageType.CALL, [action: Action.TriggerMessage, payload: TriggerMessage]>;
export type UnlockConnectorCall = BaseMessage<MessageType.CALL, [action: Action.UnlockConnector, payload: UnlockConnector]>;
export type UpdateFirmwareCall = BaseMessage<MessageType.CALL, [action: Action.UpdateFirmware, payload: UpdateFirmware]>;

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
  [Action.Authorize]: AuthorizeSchema,
  [Action.BootNotification]: BootNotificationSchema,
  [Action.CancelReservation]: CancelReservationSchema,
  [Action.ChangeAvailability]: ChangeAvailabilitySchema,
  [Action.ChangeConfiguration]: ChangeConfigurationSchema,
  [Action.ClearCache]: ClearCacheSchema,
  [Action.ClearChargingProfile]: ClearChargingProfileSchema,
  [Action.DataTransfer]: DataTransferSchema,
  [Action.DiagnosticsStatusNotification]: DiagnosticsStatusNotificationSchema,
  [Action.FirmwareStatusNotification]: FirmwareStatusNotificationSchema,
  [Action.GetCompositeSchedule]: GetCompositeScheduleSchema,
  [Action.GetConfiguration]: GetConfigurationSchema,
  [Action.GetDiagnostics]: GetDiagnosticsSchema,
  [Action.GetLocalListVersion]: GetLocalListVersionSchema,
  [Action.Heartbeat]: HeartbeatSchema,
  [Action.MeterValues]: MeterValuesSchema,
  [Action.RemoteStartTransaction]: RemoteStartTransactionSchema,
  [Action.RemoteStopTransaction]: RemoteStopTransactionSchema,
  [Action.ReserveNow]: ReserveNowSchema,
  [Action.Reset]: ResetSchema,
  [Action.SendLocalList]: SendLocalListSchema,
  [Action.SetChargingProfile]: SetChargingProfileSchema,
  [Action.StartTransaction]: StartTransactionSchema,
  [Action.StatusNotification]: StatusNotificationSchema,
  [Action.StopTransaction]: StopTransactionSchema,
  [Action.TriggerMessage]: TriggerMessageSchema,
  [Action.UnlockConnector]: UnlockConnectorSchema,
  [Action.UpdateFirmware]: UpdateFirmwareSchema,
};

export const parseCall = (arr: [MessageType.CALL, string, ...any]): Call => {
  arr = ensure.length(arr, 4, 'Invalid OCPP call: bad length');
  const action = ensure.keyOf(arr[2], Action, 'Invalid OCPP call: unknown action');
  const payload = ensure.object(arr[3], 'Invalid OCPP call: bad payload');
  const schema = schemasByCommand[action];
  const ajv = getAjv();
  if (!ajv.validate(schema, payload)) {
    throw new Error(`Invalid OCPP call: ${ajvErrorsToString(ajv)}`);
  }
  return arr as Call;
};
