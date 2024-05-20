
import type { MeterValuesRequest } from './types/MeterValuesRequest';

export enum Action {
  Authorize = 'Authorize',
  BootNotification = 'BootNotification',
  CancelReservation = 'CancelReservation',
  ChangeAvailability = 'ChangeAvailability',
  ChangeConfiguration = 'ChangeConfiguration',
  ClearCache = 'ClearCache',
  ClearChargingProfile = 'ClearChargingProfile',
  DataTransfer = 'DataTransfer',
  DiagnosticsStatusNotification = 'DiagnosticsStatusNotification',
  FirmwareStatusNotification = 'FirmwareStatusNotification',
  GetCompositeSchedule = 'GetCompositeSchedule',
  GetConfiguration = 'GetConfiguration',
  GetDiagnostics = 'GetDiagnostics',
  GetLocalListVersion = 'GetLocalListVersion',
  Heartbeat = 'Heartbeat',
  MeterValues = 'MeterValues',
  RemoteStartTransaction = 'RemoteStartTransaction',
  RemoteStopTransaction = 'RemoteStopTransaction',
  ReserveNow = 'ReserveNow',
  Reset = 'Reset',
  SendLocalList = 'SendLocalList',
  SetChargingProfile = 'SetChargingProfile',
  StartTransaction = 'StartTransaction',
  StatusNotification = 'StatusNotification',
  StopTransaction = 'StopTransaction',
  TriggerMessage = 'TriggerMessage',
  UnlockConnector = 'UnlockConnector',
  UpdateFirmware = 'UpdateFirmware'
}

export enum ErrorCode {
  FormationViolation = 'FormationViolation',
  GenericError = 'GenericError',
  InternalError = 'InternalError',
  NotImplemented = 'NotImplemented',
  NotSupported = 'NotSupported',
  OccurrenceConstraintViolation = 'OccurrenceConstraintViolation',
  PropertyConstraintViolation = 'PropertyConstraintViolation',
  ProtocolError = 'ProtocolError',
  SecurityError = 'SecurityError',
  TypeConstraintViolation = 'TypeConstraintViolation',
}

export enum MessageType {
  CALL = 2,
  CALLRESULT = 3,
  CALLERROR = 4,
}

export type BaseMessage<T extends MessageType, R extends any[]> = [msg_type: T, call_id: string, ...rest: R];

export type MeterValue = Exclude<MeterValuesRequest['meterValue'][number], undefined>;
export type SampledValue = Exclude<MeterValue['sampledValue'][number], undefined>;
export type Format = Exclude<SampledValue['format'], undefined>;
export type Unit = Exclude<SampledValue['unit'], undefined>;
export type Phase = Exclude<SampledValue['phase'], undefined>;
export type Measurand = Exclude<SampledValue['measurand'], undefined>;
export type Location = Exclude<SampledValue['location'], undefined>;
export type Context = Exclude<SampledValue['context'], undefined>;
