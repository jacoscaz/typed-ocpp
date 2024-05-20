export const DataTransferRequest = {
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
    "messageId": {
      "description": "May be used to indicate a specific message or implementation.\r\n",
      "type": "string",
      "maxLength": 50
    },
    "data": {
      "description": "Data without specified length or format. This needs to be decided by both parties (Open to implementation).\r\n"
    },
    "vendorId": {
      "description": "This identifies the Vendor specific implementation\r\n\r\n",
      "type": "string",
      "maxLength": 255
    }
  },
  "required": [
    "vendorId"
  ]
};