export const GetCompositeScheduleRequest: any = {
  "title": "GetCompositeScheduleRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "duration": {
      "type": "integer"
    },
    "chargingRateUnit": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "A",
        "W"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "duration"
  ],
  "$id": "urn:OCPP:1.6:2019:12:GetCompositeScheduleRequest"
};