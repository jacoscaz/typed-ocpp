export const FirmwareStatusNotificationRequest = {
  "title": "FirmwareStatusNotificationRequest",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Downloaded",
        "DownloadFailed",
        "Downloading",
        "Idle",
        "InstallationFailed",
        "Installing",
        "Installed"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:FirmwareStatusNotificationRequest"
};