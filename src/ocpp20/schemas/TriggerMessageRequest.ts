export const TriggerMessageRequest = {
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
    "MessageTriggerEnumType": {
      "description": "Type of message to be triggered.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "BootNotification",
        "LogStatusNotification",
        "FirmwareStatusNotification",
        "Heartbeat",
        "MeterValues",
        "SignChargingStationCertificate",
        "SignV2GCertificate",
        "StatusNotification",
        "TransactionEvent",
        "SignCombinedCertificate",
        "PublishFirmwareStatusNotification"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "evse": {
      "$ref": "#/definitions/EVSEType"
    },
    "requestedMessage": {
      "$ref": "#/definitions/MessageTriggerEnumType"
    }
  },
  "required": [
    "requestedMessage"
  ]
};