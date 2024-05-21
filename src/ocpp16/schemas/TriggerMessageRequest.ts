export const TriggerMessageRequest: any = {
  "title": "TriggerMessageRequest",
  "type": "object",
  "properties": {
    "requestedMessage": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "BootNotification",
        "DiagnosticsStatusNotification",
        "FirmwareStatusNotification",
        "Heartbeat",
        "MeterValues",
        "StatusNotification"
      ]
    },
    "connectorId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "requestedMessage"
  ],
  "$id": "urn:OCPP:1.6:2019:12:TriggerMessageRequest"
};