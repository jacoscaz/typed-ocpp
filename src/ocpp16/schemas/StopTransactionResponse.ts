export const StopTransactionResponse: any = {
  "title": "StopTransactionResponse",
  "type": "object",
  "properties": {
    "idTagInfo": {
      "type": "object",
      "properties": {
        "expiryDate": {
          "type": "string",
          "format": "date-time"
        },
        "parentIdTag": {
          "type": "string",
          "maxLength": 20
        },
        "status": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "Accepted",
            "Blocked",
            "Expired",
            "Invalid",
            "ConcurrentTx"
          ]
        }
      },
      "additionalProperties": false,
      "required": [
        "status"
      ]
    }
  },
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:StopTransactionResponse"
};