export const TriggerMessageResponse: any = {
  "title": "TriggerMessageResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "NotImplemented"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:TriggerMessageResponse"
};