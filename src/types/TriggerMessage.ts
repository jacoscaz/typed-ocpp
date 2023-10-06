
export interface TriggerMessage {
  requestedMessage:
    | "BootNotification"
    | "DiagnosticsStatusNotification"
    | "FirmwareStatusNotification"
    | "Heartbeat"
    | "MeterValues"
    | "StatusNotification";
  connectorId?: number;
}
