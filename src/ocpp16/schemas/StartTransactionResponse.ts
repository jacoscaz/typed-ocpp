export const StartTransactionResponse: any = {
  "title": "StartTransactionResponse",
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
    },
    "transactionId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "idTagInfo",
    "transactionId"
  ],
  "$id": "urn:OCPP:1.6:2019:12:StartTransactionResponse"
};