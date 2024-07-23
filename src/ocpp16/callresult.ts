
import { Call } from './call.js';

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

const CallResultTypesByAction = {
  [Action.Authorize]: EMPTY as AuthorizeCallResult,
  [Action.BootNotification]: EMPTY as BootNotificationCallResult,
  [Action.CancelReservation]: EMPTY as CancelReservationCallResult,
  [Action.ChangeAvailability]: EMPTY as ChangeAvailabilityCallResult,
  [Action.ChangeConfiguration]: EMPTY as ChangeConfigurationCallResult,
  [Action.ClearCache]: EMPTY as ClearCacheCallResult,
  [Action.ClearChargingProfile]: EMPTY as ClearChargingProfileCallResult,
  [Action.DataTransfer]: EMPTY as DataTransferCallResult,
  [Action.DiagnosticsStatusNotification]: EMPTY as DiagnosticsStatusNotificationCallResult,
  [Action.FirmwareStatusNotification]: EMPTY as FirmwareStatusNotificationCallResult,
  [Action.GetCompositeSchedule]: EMPTY as GetCompositeScheduleCallResult,
  [Action.GetConfiguration]: EMPTY as GetConfigurationCallResult,
  [Action.GetDiagnostics]: EMPTY as GetDiagnosticsCallResult,
  [Action.GetLocalListVersion]: EMPTY as GetLocalListVersionCallResult,
  [Action.Heartbeat]: EMPTY as HeartbeatCallResult,
  [Action.MeterValues]: EMPTY as MeterValuesCallResult,
  [Action.RemoteStartTransaction]: EMPTY as RemoteStartTransactionCallResult,
  [Action.RemoteStopTransaction]: EMPTY as RemoteStopTransactionCallResult,
  [Action.ReserveNow]: EMPTY as ReserveNowCallResult,
  [Action.Reset]: EMPTY as ResetCallResult,
  [Action.SendLocalList]: EMPTY as SendLocalListCallResult,
  [Action.SetChargingProfile]: EMPTY as SetChargingProfileCallResult,
  [Action.StartTransaction]: EMPTY as StartTransactionCallResult,
  [Action.StatusNotification]: EMPTY as StatusNotificationCallResult,
  [Action.StopTransaction]: EMPTY as StopTransactionCallResult,
  [Action.TriggerMessage]: EMPTY as TriggerMessageCallResult,
  [Action.UnlockConnector]: EMPTY as UnlockConnectorCallResult,
  [Action.UpdateFirmware]: EMPTY as UpdateFirmwareCallResult,
} satisfies Record<Action, CallResult>;

export type CheckedCallResult<C extends Call> = (typeof CallResultTypesByAction)[C[2]];

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
