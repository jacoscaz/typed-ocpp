export const GetDisplayMessagesRequest = {
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
    "MessagePriorityEnumType": {
      "description": "If provided the Charging Station shall return Display Messages with the given priority only.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "AlwaysFront",
        "InFront",
        "NormalCycle"
      ]
    },
    "MessageStateEnumType": {
      "description": "If provided the Charging Station shall return Display Messages with the given state only. \r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Charging",
        "Faulted",
        "Idle",
        "Unavailable"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "id": {
      "description": "If provided the Charging Station shall return Display Messages of the given ids. This field SHALL NOT contain more ids than set in &lt;&lt;configkey-number-of-display-messages,NumberOfDisplayMessages.maxLimit&gt;&gt;\r\n\r\n",
      "type": "array",
      "additionalItems": false,
      "items": {
        "type": "integer"
      },
      "minItems": 1
    },
    "requestId": {
      "description": "The Id of this request.\r\n",
      "type": "integer"
    },
    "priority": {
      "$ref": "#/definitions/MessagePriorityEnumType"
    },
    "state": {
      "$ref": "#/definitions/MessageStateEnumType"
    }
  },
  "required": [
    "requestId"
  ]
};