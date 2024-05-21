export const ReserveNowResponse: any = {
  "title": "ReserveNowResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Faulted",
        "Occupied",
        "Rejected",
        "Unavailable"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ReserveNowResponse"
};