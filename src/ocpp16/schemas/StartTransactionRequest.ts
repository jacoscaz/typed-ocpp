export const StartTransactionRequest: any = {
  "title": "StartTransactionRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "idTag": {
      "type": "string",
      "maxLength": 20
    },
    "meterStart": {
      "type": "integer"
    },
    "reservationId": {
      "type": "integer"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "idTag",
    "meterStart",
    "timestamp"
  ],
  "$id": "urn:OCPP:1.6:2019:12:StartTransactionRequest"
};