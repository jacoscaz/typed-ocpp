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
  OCPPAuthorizeCall,
  OCPPBootNotificationCall, OCPPCall,
  OCPPCancelReservationCall,
  OCPPChangeAvailabilityCall,
  OCPPChangeConfigurationCall,
  OCPPClearCacheCall,
  OCPPClearChargingProfileCall,
  OCPPDataTransferCall,
  OCPPDiagnosticsStatusNotificationCall,
  OCPPFirmwareStatusNotificationCall,
  OCPPGetCompositeScheduleCall,
  OCPPGetConfigurationCall,
  OCPPGetDiagnosticsCall,
  OCPPGetLocalListVersionCall,
  OCPPHeartbeatCall,
  OCPPMeterValuesCall,
  OCPPRemoteStartTransactionCall,
  OCPPRemoteStopTransactionCall,
  OCPPReserveNowCall,
  OCPPResetCall,
  OCPPSendLocalListCall,
  OCPPSetChargingProfileCall,
  OCPPStartTransactionCall,
  OCPPStatusNotificationCall,
  OCPPStopTransactionCall,
  OCPPTriggerMessageCall,
  OCPPUnlockConnectorCall,
  OCPPUpdateFirmwareCall,
} from './call.js';

import { OCPPAction, OCPPBaseMessage, OCPPMessageType } from './utils.js';
import { ajvErrorsToString, getAjv } from './ajv.js';

import * as ensure from './ensure.js';

export type OCPPUncheckedCallResult<P extends Record<string, any> | null> = OCPPBaseMessage<OCPPMessageType.CALLRESULT, [payload: P]>;

export  type OCPPAuthorizeCallResult = OCPPUncheckedCallResult<AuthorizeResponse>;
export  type OCPPBootNotificationCallResult = OCPPUncheckedCallResult<BootNotificationResponse>;
export  type OCPPCancelReservationCallResult = OCPPUncheckedCallResult<CancelReservationResponse>;
export  type OCPPChangeAvailabilityCallResult = OCPPUncheckedCallResult<ChangeAvailabilityResponse>;
export  type OCPPChangeConfigurationCallResult = OCPPUncheckedCallResult<ChangeConfigurationResponse>;
export  type OCPPClearCacheCallResult = OCPPUncheckedCallResult<ClearCacheResponse>;
export  type OCPPClearChargingProfileCallResult = OCPPUncheckedCallResult<ClearChargingProfileResponse>;
export  type OCPPDataTransferCallResult = OCPPUncheckedCallResult<DataTransferResponse>;
export  type OCPPDiagnosticsStatusNotificationCallResult = OCPPUncheckedCallResult<DiagnosticsStatusNotificationResponse>;
export  type OCPPFirmwareStatusNotificationCallResult = OCPPUncheckedCallResult<FirmwareStatusNotificationResponse>;
export  type OCPPGetCompositeScheduleCallResult = OCPPUncheckedCallResult<GetCompositeScheduleResponse>;
export  type OCPPGetConfigurationCallResult = OCPPUncheckedCallResult<GetConfigurationResponse>;
export  type OCPPGetDiagnosticsCallResult = OCPPUncheckedCallResult<GetDiagnosticsResponse>;
export  type OCPPGetLocalListVersionCallResult = OCPPUncheckedCallResult<GetLocalListVersionResponse>;
export  type OCPPHeartbeatCallResult = OCPPUncheckedCallResult<HeartbeatResponse>;
export  type OCPPMeterValuesCallResult = OCPPUncheckedCallResult<MeterValuesResponse>;
export  type OCPPRemoteStartTransactionCallResult = OCPPUncheckedCallResult<RemoteStartTransactionResponse>;
export  type OCPPRemoteStopTransactionCallResult = OCPPUncheckedCallResult<RemoteStopTransactionResponse>;
export  type OCPPReserveNowCallResult = OCPPUncheckedCallResult<ReserveNowResponse>;
export  type OCPPResetCallResult = OCPPUncheckedCallResult<ResetResponse>;
export  type OCPPSendLocalListCallResult = OCPPUncheckedCallResult<SendLocalListResponse>;
export  type OCPPSetChargingProfileCallResult = OCPPUncheckedCallResult<SetChargingProfileResponse>;
export  type OCPPStartTransactionCallResult = OCPPUncheckedCallResult<StartTransactionResponse>;
export  type OCPPStatusNotificationCallResult = OCPPUncheckedCallResult<StatusNotificationResponse>;
export  type OCPPStopTransactionCallResult = OCPPUncheckedCallResult<StopTransactionResponse>;
export  type OCPPTriggerMessageCallResult = OCPPUncheckedCallResult<TriggerMessageResponse>;
export  type OCPPUnlockConnectorCallResult = OCPPUncheckedCallResult<UnlockConnectorResponse>;
export  type OCPPUpdateFirmwareCallResult = OCPPUncheckedCallResult<UpdateFirmwareResponse>;

export type OCPPCallResult = OCPPAuthorizeCallResult
  | OCPPBootNotificationCallResult
  | OCPPCancelReservationCallResult
  | OCPPChangeAvailabilityCallResult
  | OCPPChangeConfigurationCallResult
  | OCPPClearCacheCallResult
  | OCPPClearChargingProfileCallResult
  | OCPPDataTransferCallResult
  | OCPPDiagnosticsStatusNotificationCallResult
  | OCPPFirmwareStatusNotificationCallResult
  | OCPPGetCompositeScheduleCallResult
  | OCPPGetConfigurationCallResult
  | OCPPGetDiagnosticsCallResult
  | OCPPGetLocalListVersionCallResult
  | OCPPHeartbeatCallResult
  | OCPPMeterValuesCallResult
  | OCPPRemoteStartTransactionCallResult
  | OCPPRemoteStopTransactionCallResult
  | OCPPReserveNowCallResult
  | OCPPResetCallResult
  | OCPPSendLocalListCallResult
  | OCPPSetChargingProfileCallResult
  | OCPPStartTransactionCallResult
  | OCPPStatusNotificationCallResult
  | OCPPStopTransactionCallResult
  | OCPPTriggerMessageCallResult
  | OCPPUnlockConnectorCallResult
  | OCPPUpdateFirmwareCallResult
;

const schemasByCommand: Record<OCPPAction, object> = {
  [OCPPAction.Authorize]: AuthorizeResponseSchema,
  [OCPPAction.BootNotification]: BootNotificationResponseSchema,
  [OCPPAction.CancelReservation]: CancelReservationResponseSchema,
  [OCPPAction.ChangeAvailability]: ChangeAvailabilityResponseSchema,
  [OCPPAction.ChangeConfiguration]: ChangeConfigurationResponseSchema,
  [OCPPAction.ClearCache]: ClearCacheResponseSchema,
  [OCPPAction.ClearChargingProfile]: ClearChargingProfileResponseSchema,
  [OCPPAction.DataTransfer]: DataTransferResponseSchema,
  [OCPPAction.DiagnosticsStatusNotification]: DiagnosticsStatusNotificationResponseSchema,
  [OCPPAction.FirmwareStatusNotification]: FirmwareStatusNotificationResponseSchema,
  [OCPPAction.GetCompositeSchedule]: GetCompositeScheduleResponseSchema,
  [OCPPAction.GetConfiguration]: GetConfigurationResponseSchema,
  [OCPPAction.GetDiagnostics]: GetDiagnosticsResponseSchema,
  [OCPPAction.GetLocalListVersion]: GetLocalListVersionResponseSchema,
  [OCPPAction.Heartbeat]: HeartbeatResponseSchema,
  [OCPPAction.MeterValues]: MeterValuesResponseSchema,
  [OCPPAction.RemoteStartTransaction]: RemoteStartTransactionResponseSchema,
  [OCPPAction.RemoteStopTransaction]: RemoteStopTransactionResponseSchema,
  [OCPPAction.ReserveNow]: ReserveNowResponseSchema,
  [OCPPAction.Reset]: ResetResponseSchema,
  [OCPPAction.SendLocalList]: SendLocalListResponseSchema,
  [OCPPAction.SetChargingProfile]: SetChargingProfileResponseSchema,
  [OCPPAction.StartTransaction]: StartTransactionResponseSchema,
  [OCPPAction.StatusNotification]: StatusNotificationResponseSchema,
  [OCPPAction.StopTransaction]: StopTransactionResponseSchema,
  [OCPPAction.TriggerMessage]: TriggerMessageResponseSchema,
  [OCPPAction.UnlockConnector]: UnlockConnectorResponseSchema,
  [OCPPAction.UpdateFirmware]: UpdateFirmwareResponseSchema,
};

export const parseCallResult = (arr: [OCPPMessageType.CALLRESULT, string, ...any]): OCPPUncheckedCallResult<any> => {
  ensure.length(arr, 3, 'Invalid OCPP call result: bad length');
  ensure.object(arr[2], 'Invalid OCPP call result: bad payload');
  return arr as OCPPUncheckedCallResult<any>;
};

export const checkCallResult = <T extends OCPPCall>(
  result: OCPPUncheckedCallResult<any>, call: T
): T extends OCPPAuthorizeCall ? OCPPAuthorizeCallResult :
  T extends OCPPBootNotificationCall ? OCPPBootNotificationCallResult :
  T extends OCPPCancelReservationCall ? OCPPCancelReservationCallResult :
  T extends OCPPChangeAvailabilityCall ? OCPPChangeAvailabilityCallResult :
  T extends OCPPChangeConfigurationCall ? OCPPChangeConfigurationCallResult :
  T extends OCPPClearCacheCall ? OCPPClearCacheCallResult :
  T extends OCPPClearChargingProfileCall ? OCPPClearChargingProfileCallResult :
  T extends OCPPDataTransferCall ? OCPPDataTransferCallResult :
  T extends OCPPDiagnosticsStatusNotificationCall ? OCPPDiagnosticsStatusNotificationCallResult :
  T extends OCPPFirmwareStatusNotificationCall ? OCPPFirmwareStatusNotificationCallResult :
  T extends OCPPGetCompositeScheduleCall ? OCPPGetCompositeScheduleCallResult :
  T extends OCPPGetConfigurationCall ? OCPPGetConfigurationCallResult :
  T extends OCPPGetDiagnosticsCall ? OCPPGetDiagnosticsCallResult :
  T extends OCPPGetLocalListVersionCall ? OCPPGetLocalListVersionCallResult :
  T extends OCPPHeartbeatCall ? OCPPHeartbeatCallResult :
  T extends OCPPMeterValuesCall ? OCPPMeterValuesCallResult :
  T extends OCPPRemoteStartTransactionCall ? OCPPRemoteStartTransactionCallResult :
  T extends OCPPRemoteStopTransactionCall ? OCPPRemoteStopTransactionCallResult :
  T extends OCPPReserveNowCall ? OCPPReserveNowCallResult :
  T extends OCPPResetCall ? OCPPResetCallResult :
  T extends OCPPSendLocalListCall ? OCPPSendLocalListCallResult :
  T extends OCPPSetChargingProfileCall ? OCPPSetChargingProfileCallResult :
  T extends OCPPStartTransactionCall ? OCPPStartTransactionCallResult :
  T extends OCPPStatusNotificationCall ? OCPPStatusNotificationCallResult :
  T extends OCPPStopTransactionCall ? OCPPStopTransactionCallResult :
  T extends OCPPTriggerMessageCall ? OCPPTriggerMessageCallResult :
  T extends OCPPUnlockConnectorCall ? OCPPUnlockConnectorCallResult :
  T extends OCPPUpdateFirmwareCall ? OCPPUpdateFirmwareCallResult :
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
