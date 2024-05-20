export const ChangeAvailabilityRequest = {
  "title": "ChangeAvailabilityRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "type": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Inoperative",
        "Operative"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "type"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ChangeAvailabilityRequest"
};