export const StatusNotificationRequest = {
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
    "ConnectorStatusEnumType": {
      "description": "This contains the current status of the Connector.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Available",
        "Occupied",
        "Reserved",
        "Unavailable",
        "Faulted"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "timestamp": {
      "description": "The time for which the status is reported. If absent time of receipt of the message will be assumed.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "connectorStatus": {
      "$ref": "#/definitions/ConnectorStatusEnumType"
    },
    "evseId": {
      "description": "The id of the EVSE to which the connector belongs for which the the status is reported.\r\n",
      "type": "integer"
    },
    "connectorId": {
      "description": "The id of the connector within the EVSE for which the status is reported.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "timestamp",
    "connectorStatus",
    "evseId",
    "connectorId"
  ]
};