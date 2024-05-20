export const GetCompositeScheduleRequest = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "urn:OCPP:Cp:2:2020:3:GetCompositeScheduleRequest",
  "comment": "OCPP 2.0.1 FINAL",
  "definitions": {
    "CustomDataType": {
      "description": "This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.",
      "javaType": "CustomData",
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
    "ChargingRateUnitEnumType": {
      "description": "Can be used to force a power or current profile.\r\n\r\n",
      "javaType": "ChargingRateUnitEnum",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "W",
        "A"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "duration": {
      "description": "Length of the requested schedule in seconds.\r\n\r\n",
      "type": "integer"
    },
    "chargingRateUnit": {
      "$ref": "#/definitions/ChargingRateUnitEnumType"
    },
    "evseId": {
      "description": "The ID of the EVSE for which the schedule is requested. When evseid=0, the Charging Station will calculate the expected consumption for the grid connection.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "duration",
    "evseId"
  ]
}