export const LogStatusNotificationRequest = {
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
    "UploadLogStatusEnumType": {
      "description": "This contains the status of the log upload.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "BadMessage",
        "Idle",
        "NotSupportedOperation",
        "PermissionDenied",
        "Uploaded",
        "UploadFailure",
        "Uploading",
        "AcceptedCanceled"
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
      "$ref": "#/definitions/UploadLogStatusEnumType"
    },
    "requestId": {
      "description": "The request id that was provided in GetLogRequest that started this log upload. This field is mandatory,\r\nunless the message was triggered by a TriggerMessageRequest AND there is no log upload ongoing.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "status"
  ]
};