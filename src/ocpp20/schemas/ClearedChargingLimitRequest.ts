export const ClearedChargingLimitRequest = {
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
    "ChargingLimitSourceEnumType": {
      "description": "Source of the charging limit.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "EMS",
        "Other",
        "SO",
        "CSO"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "chargingLimitSource": {
      "$ref": "#/definitions/ChargingLimitSourceEnumType"
    },
    "evseId": {
      "description": "EVSE Identifier.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "chargingLimitSource"
  ]
};