export const DiagnosticsStatusNotificationRequest: any = {
  "title": "DiagnosticsStatusNotificationRequest",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Idle",
        "Uploaded",
        "UploadFailed",
        "Uploading"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:DiagnosticsStatusNotificationRequest"
};