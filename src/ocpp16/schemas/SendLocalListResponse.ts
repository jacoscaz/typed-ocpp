export const SendLocalListResponse = {
  "title": "SendLocalListResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Failed",
        "NotSupported",
        "VersionMismatch"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:SendLocalListResponse"
};