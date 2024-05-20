export const PublishFirmwareStatusNotificationRequest = {
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
    "PublishFirmwareStatusEnumType": {
      "description": "This contains the progress status of the publishfirmware\r\ninstallation.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Idle",
        "DownloadScheduled",
        "Downloading",
        "Downloaded",
        "Published",
        "DownloadFailed",
        "DownloadPaused",
        "InvalidChecksum",
        "ChecksumVerified",
        "PublishFailed"
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
      "$ref": "#/definitions/PublishFirmwareStatusEnumType"
    },
    "location": {
      "description": "Required if status is Published. Can be multiple URI’s, if the Local Controller supports e.g. HTTP, HTTPS, and FTP.\r\n",
      "type": "array",
      "additionalItems": false,
      "items": {
        "type": "string",
        "maxLength": 512
      },
      "minItems": 1
    },
    "requestId": {
      "description": "The request id that was\r\nprovided in the\r\nPublishFirmwareRequest which\r\ntriggered this action.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "status"
  ]
};