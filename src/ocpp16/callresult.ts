
import { AuthorizeCall, Call } from './call.js';

import { ajvErrorsToString, getAjv } from '../common/ajv.js';
import { EMPTY } from '../common/utils.js';
import * as ensure from '../common/ensure.js';

import { Action, BaseMessage, MessageType } from './utils.js';

import * as schemas from './schemas.js';
import * as types from './types.js';

export type UncheckedCallResult<P extends Record<string, any> | null> = BaseMessage<MessageType.CALLRESULT, [payload: P]>;

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

export const parseCallResult = (arr: [MessageType.CALLRESULT, string, ...any]): UncheckedCallResult<any> => {
  ensure.length(arr, 3, 'Invalid OCPP call result: bad length');
  ensure.object(arr[2], 'Invalid OCPP call result: bad payload');
  return arr as UncheckedCallResult<any>;
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

export const checkCallResult = <T extends Call>(result: UncheckedCallResult<any>, call: T): CheckedCallResult<T> => {
  ensure.equal(result[1], call[1], `Invalid OCPP call result: id ${result[1]} does not equal call id ${call[1]}`);
  const schema = schemasByCommand[call[2]];
  const ajv = getAjv();
  if (!ajv.validate(schema, result[2])) {
    throw new Error(`Invalid OCPP call result: ${ajvErrorsToString(ajv)}`);
  }
  // @ts-ignore
  return result;
};
