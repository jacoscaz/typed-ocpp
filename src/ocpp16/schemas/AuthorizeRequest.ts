export const AuthorizeRequest: any = {
  "title": "AuthorizeRequest",
  "type": "object",
  "properties": {
    "idTag": {
      "type": "string",
      "maxLength": 20
    }
  },
  "additionalProperties": false,
  "required": [
    "idTag"
  ],
  "$id": "urn:OCPP:1.6:2019:12:AuthorizeRequest"
};