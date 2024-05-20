export const ChangeConfigurationRequest = {
  "title": "ChangeConfigurationRequest",
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "maxLength": 50
    },
    "value": {
      "type": "string",
      "maxLength": 500
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "value"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ChangeConfigurationRequest"
};