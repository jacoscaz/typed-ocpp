export const ResetRequest = {
  "title": "ResetRequest",
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Hard",
        "Soft"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "type"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ResetRequest"
};