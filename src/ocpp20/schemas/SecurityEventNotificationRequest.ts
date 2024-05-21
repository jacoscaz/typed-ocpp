export const SecurityEventNotificationRequest: any = {
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
    "type": {
      "description": "Type of the security event. This value should be taken from the Security events list.\r\n",
      "type": "string",
      "maxLength": 50
    },
    "timestamp": {
      "description": "Date and time at which the event occurred.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "techInfo": {
      "description": "Additional information about the occurred security event.\r\n",
      "type": "string",
      "maxLength": 255
    }
  },
  "required": [
    "type",
    "timestamp"
  ]
};