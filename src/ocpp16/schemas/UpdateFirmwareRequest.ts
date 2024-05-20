export const UpdateFirmwareRequest = {
  "title": "UpdateFirmwareRequest",
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "format": "uri"
    },
    "retries": {
      "type": "integer"
    },
    "retrieveDate": {
      "type": "string",
      "format": "date-time"
    },
    "retryInterval": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "retrieveDate"
  ],
  "$id": "urn:OCPP:1.6:2019:12:UpdateFirmwareRequest"
};