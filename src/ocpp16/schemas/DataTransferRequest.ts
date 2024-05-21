export const DataTransferRequest: any = {
  "title": "DataTransferRequest",
  "type": "object",
  "properties": {
    "vendorId": {
      "type": "string",
      "maxLength": 255
    },
    "messageId": {
      "type": "string",
      "maxLength": 50
    },
    "data": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "vendorId"
  ],
  "$id": "urn:OCPP:1.6:2019:12:DataTransferRequest"
};