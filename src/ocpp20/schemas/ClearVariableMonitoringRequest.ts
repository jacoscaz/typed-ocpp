export const ClearVariableMonitoringRequest: any = {
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
    "id": {
      "description": "List of the monitors to be cleared, identified by there Id.\r\n",
      "type": "array",
      "additionalItems": false,
      "items": {
        "type": "integer"
      },
      "minItems": 1
    }
  },
  "required": [
    "id"
  ]
};