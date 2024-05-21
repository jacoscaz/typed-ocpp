export const BootNotificationResponse: any = {
  "title": "BootNotificationResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Pending",
        "Rejected"
      ]
    },
    "currentTime": {
      "type": "string",
      "format": "date-time"
    },
    "interval": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "status",
    "currentTime",
    "interval"
  ],
  "$id": "urn:OCPP:1.6:2019:12:BootNotificationResponse"
};