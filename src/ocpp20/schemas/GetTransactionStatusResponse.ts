export const GetTransactionStatusResponse: any = {
  "definitions": {
    "CustomDataType": {
      "description": "This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.",
      "type": "object",
      "properties": {
        "vendorId": {
          "type": "string",
          "maxLength": 255
        }
      },
      "required": [
        "vendorId"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "ongoingIndicator": {
      "description": "Whether the transaction is still ongoing.\r\n",
      "type": "boolean"
    },
    "messagesInQueue": {
      "description": "Whether there are still message to be delivered.\r\n",
      "type": "boolean"
    }
  },
  "required": [
    "messagesInQueue"
  ]
};