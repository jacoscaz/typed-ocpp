export const InstallCertificateResponse = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "urn:OCPP:Cp:2:2020:3:InstallCertificateResponse",
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
    "InstallCertificateStatusEnumType": {
      "description": "Charging Station indicates if installation was successful.\r\n",
      "javaType": "InstallCertificateStatusEnum",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "Failed"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "javaType": "StatusInfo",
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
      "$ref": "#/definitions/InstallCertificateStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
}