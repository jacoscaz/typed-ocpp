export const DataTransferResponse: any = {
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
    "DataTransferStatusEnumType": {
      "description": "This indicates the success or failure of the data transfer.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "UnknownMessageId",
        "UnknownVendorId"
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
      "$ref": "#/definitions/DataTransferStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    },
    "data": {
      "description": "Data without specified length or format, in response to request.\r\n"
    }
  },
  "required": [
    "status"
  ]
};