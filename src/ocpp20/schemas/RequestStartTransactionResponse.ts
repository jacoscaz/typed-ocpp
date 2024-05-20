export const RequestStartTransactionResponse = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "urn:OCPP:Cp:2:2020:3:RequestStartTransactionResponse",
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
    "RequestStartStopStatusEnumType": {
      "description": "Status indicating whether the Charging Station accepts the request to start a transaction.\r\n",
      "javaType": "RequestStartStopStatusEnum",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
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
      "$ref": "#/definitions/RequestStartStopStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    },
    "transactionId": {
      "description": "When the transaction was already started by the Charging Station before the RequestStartTransactionRequest was received, for example: cable plugged in first. This contains the transactionId of the already started transaction.\r\n",
      "type": "string",
      "maxLength": 36
    }
  },
  "required": [
    "status"
  ]
}