export const UnlockConnectorResponse: any = {
  "title": "UnlockConnectorResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Unlocked",
        "UnlockFailed",
        "NotSupported"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:UnlockConnectorResponse"
};