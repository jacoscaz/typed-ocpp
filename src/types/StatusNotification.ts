
export interface StatusNotification {
  connectorId: number;
  errorCode:
    | "ConnectorLockFailure"
    | "EVCommunicationError"
    | "GroundFailure"
    | "HighTemperature"
    | "InternalError"
    | "LocalListConflict"
    | "NoError"
    | "OtherError"
    | "OverCurrentFailure"
    | "PowerMeterFailure"
    | "PowerSwitchFailure"
    | "ReaderFailure"
    | "ResetFailure"
    | "UnderVoltage"
    | "OverVoltage"
    | "WeakSignal";
  info?: string;
  status:
    | "Available"
    | "Preparing"
    | "Charging"
    | "SuspendedEVSE"
    | "SuspendedEV"
    | "Finishing"
    | "Reserved"
    | "Unavailable"
    | "Faulted";
  timestamp?: string;
  vendorId?: string;
  vendorErrorCode?: string;
}
