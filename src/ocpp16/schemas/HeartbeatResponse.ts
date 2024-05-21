export const HeartbeatResponse: any = {
  "title": "HeartbeatResponse",
  "type": "object",
  "properties": {
    "currentTime": {
      "type": "string",
      "format": "date-time"
    }
  },
  "additionalProperties": false,
  "required": [
    "currentTime"
  ],
  "$id": "urn:OCPP:1.6:2019:12:HeartbeatResponse"
};