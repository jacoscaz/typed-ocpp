
import {
  Call,
  AuthorizeCall,
  BootNotificationCall, 
  CancelReservationCall,
  ChangeAvailabilityCall,
  ChangeConfigurationCall,
  ClearCacheCall,
  ClearChargingProfileCall,
  DataTransferCall,
  DiagnosticsStatusNotificationCall,
  FirmwareStatusNotificationCall,
  GetCompositeScheduleCall,
  GetConfigurationCall,
  GetDiagnosticsCall,
  GetLocalListVersionCall,
  HeartbeatCall,
  MeterValuesCall,
  RemoteStartTransactionCall,
  RemoteStopTransactionCall,
  ReserveNowCall,
  ResetCall,
  SendLocalListCall,
  SetChargingProfileCall,
  StartTransactionCall,
  StatusNotificationCall,
  StopTransactionCall,
  TriggerMessageCall,
  UnlockConnectorCall,
  UpdateFirmwareCall,
} from './call.js';

import { Action, BaseMessage, MessageType } from './utils.js';
import { ajvErrorsToString, getAjv } from '../common/ajv.js';

import * as ensure from '../common/ensure.js';
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

export type CheckedCallResult<T extends Call> = T extends AuthorizeCall ? AuthorizeCallResult :
  T extends BootNotificationCall ? BootNotificationCallResult :
  T extends CancelReservationCall ? CancelReservationCallResult :
  T extends ChangeAvailabilityCall ? ChangeAvailabilityCallResult :
  T extends ChangeConfigurationCall ? ChangeConfigurationCallResult :
  T extends ClearCacheCall ? ClearCacheCallResult :
  T extends ClearChargingProfileCall ? ClearChargingProfileCallResult :
  T extends DataTransferCall ? DataTransferCallResult :
  T extends DiagnosticsStatusNotificationCall ? DiagnosticsStatusNotificationCallResult :
  T extends FirmwareStatusNotificationCall ? FirmwareStatusNotificationCallResult :
  T extends GetCompositeScheduleCall ? GetCompositeScheduleCallResult :
  T extends GetConfigurationCall ? GetConfigurationCallResult :
  T extends GetDiagnosticsCall ? GetDiagnosticsCallResult :
  T extends GetLocalListVersionCall ? GetLocalListVersionCallResult :
  T extends HeartbeatCall ? HeartbeatCallResult :
  T extends MeterValuesCall ? MeterValuesCallResult :
  T extends RemoteStartTransactionCall ? RemoteStartTransactionCallResult :
  T extends RemoteStopTransactionCall ? RemoteStopTransactionCallResult :
  T extends ReserveNowCall ? ReserveNowCallResult :
  T extends ResetCall ? ResetCallResult :
  T extends SendLocalListCall ? SendLocalListCallResult :
  T extends SetChargingProfileCall ? SetChargingProfileCallResult :
  T extends StartTransactionCall ? StartTransactionCallResult :
  T extends StatusNotificationCall ? StatusNotificationCallResult :
  T extends StopTransactionCall ? StopTransactionCallResult :
  T extends TriggerMessageCall ? TriggerMessageCallResult :
  T extends UnlockConnectorCall ? UnlockConnectorCallResult :
  T extends UpdateFirmwareCall ? UpdateFirmwareCallResult :
  never;

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
