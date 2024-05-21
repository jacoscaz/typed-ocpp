export const FirmwareStatusNotificationRequest: any = {
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
    "FirmwareStatusEnumType": {
      "description": "This contains the progress status of the firmware installation.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Downloaded",
        "DownloadFailed",
        "Downloading",
        "DownloadScheduled",
        "DownloadPaused",
        "Idle",
        "InstallationFailed",
        "Installing",
        "Installed",
        "InstallRebooting",
        "InstallScheduled",
        "InstallVerificationFailed",
        "InvalidSignature",
        "SignatureVerified"
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
      "$ref": "#/definitions/FirmwareStatusEnumType"
    },
    "requestId": {
      "description": "The request id that was provided in the\r\nUpdateFirmwareRequest that started this firmware update.\r\nThis field is mandatory, unless the message was triggered by a TriggerMessageRequest AND there is no firmware update ongoing.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "status"
  ]
};