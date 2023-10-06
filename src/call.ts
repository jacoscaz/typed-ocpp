
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

import { OCPPAction, OCPPBaseMessage, OCPPMessageType } from './utils.js';
import { ajvErrorsToString, getAjv } from './ajv.js';
import * as ensure from './ensure.js';

export type OCPPAuthorizeCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.Authorize, payload: Authorize]>;
export type OCPPBootNotificationCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.BootNotification, payload: BootNotification]>;
export type OCPPCancelReservationCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.CancelReservation, payload: CancelReservation]>;
export type OCPPChangeAvailabilityCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.ChangeAvailability, payload: ChangeAvailability]>;
export type OCPPChangeConfigurationCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.ChangeConfiguration, payload: ChangeConfiguration]>;
export type OCPPClearCacheCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.ClearCache, payload: ClearCache]>;
export type OCPPClearChargingProfileCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.ClearChargingProfile, payload: ClearChargingProfile]>;
export type OCPPDataTransferCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.DataTransfer, payload: DataTransfer]>;
export type OCPPDiagnosticsStatusNotificationCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.DiagnosticsStatusNotification, payload: DiagnosticsStatusNotification]>;
export type OCPPFirmwareStatusNotificationCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.FirmwareStatusNotification, payload: FirmwareStatusNotification]>;
export type OCPPGetCompositeScheduleCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.GetCompositeSchedule, payload: GetCompositeSchedule]>;
export type OCPPGetConfigurationCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.GetConfiguration, payload: GetConfiguration]>;
export type OCPPGetDiagnosticsCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.GetDiagnostics, payload: GetDiagnostics]>;
export type OCPPGetLocalListVersionCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.GetLocalListVersion, payload: GetLocalListVersion]>;
export type OCPPHeartbeatCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.Heartbeat, payload: Heartbeat]>;
export type OCPPMeterValuesCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.MeterValues, payload: MeterValues]>;
export type OCPPRemoteStartTransactionCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.RemoteStartTransaction, payload: RemoteStartTransaction]>;
export type OCPPRemoteStopTransactionCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.RemoteStopTransaction, payload: RemoteStopTransaction]>;
export type OCPPReserveNowCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.ReserveNow, payload: ReserveNow]>;
export type OCPPResetCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.Reset, payload: Reset]>;
export type OCPPSendLocalListCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.SendLocalList, payload: SendLocalList]>;
export type OCPPSetChargingProfileCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.SetChargingProfile, payload: SetChargingProfile]>;
export type OCPPStartTransactionCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.StartTransaction, payload: StartTransaction]>;
export type OCPPStatusNotificationCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.StatusNotification, payload: StatusNotification]>;
export type OCPPStopTransactionCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.StopTransaction, payload: StopTransaction]>;
export type OCPPTriggerMessageCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.TriggerMessage, payload: TriggerMessage]>;
export type OCPPUnlockConnectorCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.UnlockConnector, payload: UnlockConnector]>;
export type OCPPUpdateFirmwareCall = OCPPBaseMessage<OCPPMessageType.CALL, [action: OCPPAction.UpdateFirmware, payload: UpdateFirmware]>;

export type OCPPCall = OCPPAuthorizeCall
  | OCPPBootNotificationCall
  | OCPPCancelReservationCall
  | OCPPChangeAvailabilityCall
  | OCPPChangeConfigurationCall
  | OCPPClearCacheCall
  | OCPPClearChargingProfileCall
  | OCPPDataTransferCall
  | OCPPDiagnosticsStatusNotificationCall
  | OCPPFirmwareStatusNotificationCall
  | OCPPGetCompositeScheduleCall
  | OCPPGetConfigurationCall
  | OCPPGetDiagnosticsCall
  | OCPPGetLocalListVersionCall
  | OCPPHeartbeatCall
  | OCPPMeterValuesCall
  | OCPPRemoteStartTransactionCall
  | OCPPRemoteStopTransactionCall
  | OCPPReserveNowCall
  | OCPPResetCall
  | OCPPSendLocalListCall
  | OCPPSetChargingProfileCall
  | OCPPStartTransactionCall
  | OCPPStatusNotificationCall
  | OCPPStopTransactionCall
  | OCPPTriggerMessageCall
  | OCPPUnlockConnectorCall
  | OCPPUpdateFirmwareCall
;

const schemasByCommand: Record<OCPPAction, object> = {
  [OCPPAction.Authorize]: AuthorizeSchema,
  [OCPPAction.BootNotification]: BootNotificationSchema,
  [OCPPAction.CancelReservation]: CancelReservationSchema,
  [OCPPAction.ChangeAvailability]: ChangeAvailabilitySchema,
  [OCPPAction.ChangeConfiguration]: ChangeConfigurationSchema,
  [OCPPAction.ClearCache]: ClearCacheSchema,
  [OCPPAction.ClearChargingProfile]: ClearChargingProfileSchema,
  [OCPPAction.DataTransfer]: DataTransferSchema,
  [OCPPAction.DiagnosticsStatusNotification]: DiagnosticsStatusNotificationSchema,
  [OCPPAction.FirmwareStatusNotification]: FirmwareStatusNotificationSchema,
  [OCPPAction.GetCompositeSchedule]: GetCompositeScheduleSchema,
  [OCPPAction.GetConfiguration]: GetConfigurationSchema,
  [OCPPAction.GetDiagnostics]: GetDiagnosticsSchema,
  [OCPPAction.GetLocalListVersion]: GetLocalListVersionSchema,
  [OCPPAction.Heartbeat]: HeartbeatSchema,
  [OCPPAction.MeterValues]: MeterValuesSchema,
  [OCPPAction.RemoteStartTransaction]: RemoteStartTransactionSchema,
  [OCPPAction.RemoteStopTransaction]: RemoteStopTransactionSchema,
  [OCPPAction.ReserveNow]: ReserveNowSchema,
  [OCPPAction.Reset]: ResetSchema,
  [OCPPAction.SendLocalList]: SendLocalListSchema,
  [OCPPAction.SetChargingProfile]: SetChargingProfileSchema,
  [OCPPAction.StartTransaction]: StartTransactionSchema,
  [OCPPAction.StatusNotification]: StatusNotificationSchema,
  [OCPPAction.StopTransaction]: StopTransactionSchema,
  [OCPPAction.TriggerMessage]: TriggerMessageSchema,
  [OCPPAction.UnlockConnector]: UnlockConnectorSchema,
  [OCPPAction.UpdateFirmware]: UpdateFirmwareSchema,
};

export const parseCall = (arr: [OCPPMessageType.CALL, string, ...any]): OCPPCall => {
  arr = ensure.length(arr, 4, 'Invalid OCPP call: bad length');
  const action = ensure.keyOf(arr[2], OCPPAction, 'Invalid OCPP call: unknown action');
  const payload = ensure.object(arr[3], 'Invalid OCPP call: bad payload');
  const schema = schemasByCommand[action];
  const ajv = getAjv();
  if (!ajv.validate(schema, payload)) {
    throw new Error(`Invalid OCPP call: ${ajvErrorsToString(ajv)}`);
  }
  return arr as OCPPCall;
};
