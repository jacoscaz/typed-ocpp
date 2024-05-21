export const ResetRequest: any = {
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
    },
    "ResetEnumType": {
      "description": "This contains the type of reset that the Charging Station or EVSE should perform.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Immediate",
        "OnIdle"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "type": {
      "$ref": "#/definitions/ResetEnumType"
    },
    "evseId": {
      "description": "This contains the ID of a specific EVSE that needs to be reset, instead of the entire Charging Station.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "type"
  ]
};