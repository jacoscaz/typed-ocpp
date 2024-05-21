export const ReserveNowRequest: any = {
  "title": "ReserveNowRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "expiryDate": {
      "type": "string",
      "format": "date-time"
    },
    "idTag": {
      "type": "string",
      "maxLength": 20
    },
    "parentIdTag": {
      "type": "string",
      "maxLength": 20
    },
    "reservationId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "expiryDate",
    "idTag",
    "reservationId"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ReserveNowRequest"
};