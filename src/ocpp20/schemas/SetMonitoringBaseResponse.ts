export const SetMonitoringBaseResponse = {
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
    "GenericDeviceModelStatusEnumType": {
      "description": "Indicates whether the Charging Station was able to accept the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "NotSupported",
        "EmptyResultSet"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GenericDeviceModelStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};