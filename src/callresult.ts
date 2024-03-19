import {
  AuthorizeResponse,
  AuthorizeResponseSchema,
  BootNotificationResponse,
  BootNotificationResponseSchema,
  CancelReservationResponse,
  CancelReservationResponseSchema,
  ChangeAvailabilityResponse,
  ChangeAvailabilityResponseSchema,
  ChangeConfigurationResponse,
  ChangeConfigurationResponseSchema,
  ClearCacheResponse,
  ClearCacheResponseSchema,
  ClearChargingProfileResponse,
  ClearChargingProfileResponseSchema,
  DataTransferResponse,
  DataTransferResponseSchema,
  DiagnosticsStatusNotificationResponse,
  DiagnosticsStatusNotificationResponseSchema,
  FirmwareStatusNotificationResponse,
  FirmwareStatusNotificationResponseSchema,
  GetCompositeScheduleResponse,
  GetCompositeScheduleResponseSchema,
  GetConfigurationResponse,
  GetConfigurationResponseSchema,
  GetDiagnosticsResponse,
  GetDiagnosticsResponseSchema,
  GetLocalListVersionResponse,
  GetLocalListVersionResponseSchema,
  HeartbeatResponse,
  HeartbeatResponseSchema,
  MeterValuesResponse,
  MeterValuesResponseSchema,
  RemoteStartTransactionResponse,
  RemoteStartTransactionResponseSchema,
  RemoteStopTransactionResponse,
  RemoteStopTransactionResponseSchema,
  ReserveNowResponse,
  ReserveNowResponseSchema,
  ResetResponse,
  ResetResponseSchema,
  SendLocalListResponse,
  SendLocalListResponseSchema,
  SetChargingProfileResponse,
  SetChargingProfileResponseSchema,
  StartTransactionResponse,
  StartTransactionResponseSchema,
  StatusNotificationResponse,
  StatusNotificationResponseSchema,
  StopTransactionResponse,
  StopTransactionResponseSchema,
  TriggerMessageResponse,
  TriggerMessageResponseSchema,
  UnlockConnectorResponse,
  UnlockConnectorResponseSchema,
  UpdateFirmwareResponse,
  UpdateFirmwareResponseSchema,
} from './payloads.js';

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
import { ajvErrorsToString, getAjv } from './ajv.js';

import * as ensure from './ensure.js';

export type UncheckedCallResult<P extends Record<string, any> | null> = BaseMessage<MessageType.CALLRESULT, [payload: P]>;

export  type AuthorizeCallResult = UncheckedCallResult<AuthorizeResponse>;
export  type BootNotificationCallResult = UncheckedCallResult<BootNotificationResponse>;
export  type CancelReservationCallResult = UncheckedCallResult<CancelReservationResponse>;
export  type ChangeAvailabilityCallResult = UncheckedCallResult<ChangeAvailabilityResponse>;
export  type ChangeConfigurationCallResult = UncheckedCallResult<ChangeConfigurationResponse>;
export  type ClearCacheCallResult = UncheckedCallResult<ClearCacheResponse>;
export  type ClearChargingProfileCallResult = UncheckedCallResult<ClearChargingProfileResponse>;
export  type DataTransferCallResult = UncheckedCallResult<DataTransferResponse>;
export  type DiagnosticsStatusNotificationCallResult = UncheckedCallResult<DiagnosticsStatusNotificationResponse>;
export  type FirmwareStatusNotificationCallResult = UncheckedCallResult<FirmwareStatusNotificationResponse>;
export  type GetCompositeScheduleCallResult = UncheckedCallResult<GetCompositeScheduleResponse>;
export  type GetConfigurationCallResult = UncheckedCallResult<GetConfigurationResponse>;
export  type GetDiagnosticsCallResult = UncheckedCallResult<GetDiagnosticsResponse>;
export  type GetLocalListVersionCallResult = UncheckedCallResult<GetLocalListVersionResponse>;
export  type HeartbeatCallResult = UncheckedCallResult<HeartbeatResponse>;
export  type MeterValuesCallResult = UncheckedCallResult<MeterValuesResponse>;
export  type RemoteStartTransactionCallResult = UncheckedCallResult<RemoteStartTransactionResponse>;
export  type RemoteStopTransactionCallResult = UncheckedCallResult<RemoteStopTransactionResponse>;
export  type ReserveNowCallResult = UncheckedCallResult<ReserveNowResponse>;
export  type ResetCallResult = UncheckedCallResult<ResetResponse>;
export  type SendLocalListCallResult = UncheckedCallResult<SendLocalListResponse>;
export  type SetChargingProfileCallResult = UncheckedCallResult<SetChargingProfileResponse>;
export  type StartTransactionCallResult = UncheckedCallResult<StartTransactionResponse>;
export  type StatusNotificationCallResult = UncheckedCallResult<StatusNotificationResponse>;
export  type StopTransactionCallResult = UncheckedCallResult<StopTransactionResponse>;
export  type TriggerMessageCallResult = UncheckedCallResult<TriggerMessageResponse>;
export  type UnlockConnectorCallResult = UncheckedCallResult<UnlockConnectorResponse>;
export  type UpdateFirmwareCallResult = UncheckedCallResult<UpdateFirmwareResponse>;

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
  [Action.Authorize]: AuthorizeResponseSchema,
  [Action.BootNotification]: BootNotificationResponseSchema,
  [Action.CancelReservation]: CancelReservationResponseSchema,
  [Action.ChangeAvailability]: ChangeAvailabilityResponseSchema,
  [Action.ChangeConfiguration]: ChangeConfigurationResponseSchema,
  [Action.ClearCache]: ClearCacheResponseSchema,
  [Action.ClearChargingProfile]: ClearChargingProfileResponseSchema,
  [Action.DataTransfer]: DataTransferResponseSchema,
  [Action.DiagnosticsStatusNotification]: DiagnosticsStatusNotificationResponseSchema,
  [Action.FirmwareStatusNotification]: FirmwareStatusNotificationResponseSchema,
  [Action.GetCompositeSchedule]: GetCompositeScheduleResponseSchema,
  [Action.GetConfiguration]: GetConfigurationResponseSchema,
  [Action.GetDiagnostics]: GetDiagnosticsResponseSchema,
  [Action.GetLocalListVersion]: GetLocalListVersionResponseSchema,
  [Action.Heartbeat]: HeartbeatResponseSchema,
  [Action.MeterValues]: MeterValuesResponseSchema,
  [Action.RemoteStartTransaction]: RemoteStartTransactionResponseSchema,
  [Action.RemoteStopTransaction]: RemoteStopTransactionResponseSchema,
  [Action.ReserveNow]: ReserveNowResponseSchema,
  [Action.Reset]: ResetResponseSchema,
  [Action.SendLocalList]: SendLocalListResponseSchema,
  [Action.SetChargingProfile]: SetChargingProfileResponseSchema,
  [Action.StartTransaction]: StartTransactionResponseSchema,
  [Action.StatusNotification]: StatusNotificationResponseSchema,
  [Action.StopTransaction]: StopTransactionResponseSchema,
  [Action.TriggerMessage]: TriggerMessageResponseSchema,
  [Action.UnlockConnector]: UnlockConnectorResponseSchema,
  [Action.UpdateFirmware]: UpdateFirmwareResponseSchema,
};

export const parseCallResult = (arr: [MessageType.CALLRESULT, string, ...any]): UncheckedCallResult<any> => {
  ensure.length(arr, 3, 'Invalid OCPP call result: bad length');
  ensure.object(arr[2], 'Invalid OCPP call result: bad payload');
  return arr as UncheckedCallResult<any>;
};

export const checkCallResult = <T extends Call>(
  result: UncheckedCallResult<any>, call: T
): T extends AuthorizeCall ? AuthorizeCallResult :
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
