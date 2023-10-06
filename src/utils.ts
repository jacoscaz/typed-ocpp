
export enum OCPPAction {
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

export enum OCPPErrorCode {
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

export enum OCPPMessageType {
  CALL = 2,
  CALLRESULT = 3,
  CALLERROR = 4,
}

export type OCPPBaseMessage<T extends OCPPMessageType, R extends any[]> = [msg_type: T, call_id: string, ...rest: R];
