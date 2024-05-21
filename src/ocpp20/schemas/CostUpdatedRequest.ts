export const CostUpdatedRequest: any = {
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
    "totalCost": {
      "description": "Current total cost, based on the information known by the CSMS, of the transaction including taxes. In the currency configured with the configuration Variable: [&lt;&lt;configkey-currency, Currency&gt;&gt;]\r\n\r\n",
      "type": "number"
    },
    "transactionId": {
      "description": "Transaction Id of the transaction the current cost are asked for.\r\n\r\n",
      "type": "string",
      "maxLength": 36
    }
  },
  "required": [
    "totalCost",
    "transactionId"
  ]
};