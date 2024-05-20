export const NotifyDisplayMessagesRequest = {
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
    "MessageFormatEnumType": {
      "description": "Message_ Content. Format. Message_ Format_ Code\r\nurn:x-enexis:ecdm:uid:1:570848\r\nFormat of the message.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ASCII",
        "HTML",
        "URI",
        "UTF8"
      ]
    },
    "MessagePriorityEnumType": {
      "description": "Message_ Info. Priority. Message_ Priority_ Code\r\nurn:x-enexis:ecdm:uid:1:569253\r\nWith what priority should this message be shown\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "AlwaysFront",
        "InFront",
        "NormalCycle"
      ]
    },
    "MessageStateEnumType": {
      "description": "Message_ Info. State. Message_ State_ Code\r\nurn:x-enexis:ecdm:uid:1:569254\r\nDuring what state should this message be shown. When omitted this message should be shown in any state of the Charging Station.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Charging",
        "Faulted",
        "Idle",
        "Unavailable"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
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
    },
    "MessageContentType": {
      "description": "Message_ Content\r\nurn:x-enexis:ecdm:uid:2:234490\r\nContains message details, for a message to be displayed on a Charging Station.\r\n\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "format": {
          "$ref": "#/definitions/MessageFormatEnumType"
        },
        "language": {
          "description": "Message_ Content. Language. Language_ Code\r\nurn:x-enexis:ecdm:uid:1:570849\r\nMessage language identifier. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n",
          "type": "string",
          "maxLength": 8
        },
        "content": {
          "description": "Message_ Content. Content. Message\r\nurn:x-enexis:ecdm:uid:1:570852\r\nMessage contents.\r\n\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "format",
        "content"
      ]
    },
    "MessageInfoType": {
      "description": "Message_ Info\r\nurn:x-enexis:ecdm:uid:2:233264\r\nContains message details, for a message to be displayed on a Charging Station.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "display": {
          "$ref": "#/definitions/ComponentType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nMaster resource identifier, unique within an exchange context. It is defined within the OCPP context as a positive Integer value (greater or equal to zero).\r\n",
          "type": "integer"
        },
        "priority": {
          "$ref": "#/definitions/MessagePriorityEnumType"
        },
        "state": {
          "$ref": "#/definitions/MessageStateEnumType"
        },
        "startDateTime": {
          "description": "Message_ Info. Start. Date_ Time\r\nurn:x-enexis:ecdm:uid:1:569256\r\nFrom what date-time should this message be shown. If omitted: directly.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "endDateTime": {
          "description": "Message_ Info. End. Date_ Time\r\nurn:x-enexis:ecdm:uid:1:569257\r\nUntil what date-time should this message be shown, after this date/time this message SHALL be removed.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "transactionId": {
          "description": "During which transaction shall this message be shown.\r\nMessage SHALL be removed by the Charging Station after transaction has\r\nended.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "message": {
          "$ref": "#/definitions/MessageContentType"
        }
      },
      "required": [
        "id",
        "priority",
        "message"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "messageInfo": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/MessageInfoType"
      },
      "minItems": 1
    },
    "requestId": {
      "description": "The id of the &lt;&lt;getdisplaymessagesrequest,GetDisplayMessagesRequest&gt;&gt; that requested this message.\r\n",
      "type": "integer"
    },
    "tbc": {
      "description": "\"to be continued\" indicator. Indicates whether another part of the report follows in an upcoming NotifyDisplayMessagesRequest message. Default value when omitted is false.\r\n",
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "requestId"
  ]
};