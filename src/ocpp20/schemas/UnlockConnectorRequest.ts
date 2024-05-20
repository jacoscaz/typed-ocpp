export const UnlockConnectorRequest = {
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
    "evseId": {
      "description": "This contains the identifier of the EVSE for which a connector needs to be unlocked.\r\n",
      "type": "integer"
    },
    "connectorId": {
      "description": "This contains the identifier of the connector that needs to be unlocked.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "evseId",
    "connectorId"
  ]
};