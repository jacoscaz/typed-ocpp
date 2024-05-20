
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
  NotImplemented = 'NotImplemented',
  NotSupported = 'NotSupported',
  InternalError = 'InternalError',
  ProtocolError = 'ProtocolError',
  SecurityError = 'SecurityError',
  FormationViolation = 'FormationViolation',
  PropertyConstraintViolation = 'PropertyConstraintViolation',
  OccurrenceConstraintViolation = 'OccurrenceConstraintViolation',
  TypeConstraintViolation = 'TypeConstraintViolation',
  GenericError = 'GenericError',
}

export enum MessageType {
  CALL = 2,
  CALLRESULT = 3,
  CALLERROR = 4,
}

export type BaseMessage<T extends MessageType, R extends any[]> = [msg_type: T, call_id: string, ...rest: R];

export type MeterValue = MeterValuesRequest['meterValue'][number];
export type SampledValue = MeterValue['sampledValue'][number];
export type Format = SampledValue['format'];
export type Unit = SampledValue['unit'];
export type Phase = SampledValue['phase'];
export type Measurand = SampledValue['measurand'];
export type Location = SampledValue['location'];
export type Context = SampledValue['context'];
