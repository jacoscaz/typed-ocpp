export const ReservationStatusUpdateRequest = {
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
    "ReservationUpdateStatusEnumType": {
      "description": "The updated reservation status.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Expired",
        "Removed"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "reservationId": {
      "description": "The ID of the reservation.\r\n",
      "type": "integer"
    },
    "reservationUpdateStatus": {
      "$ref": "#/definitions/ReservationUpdateStatusEnumType"
    }
  },
  "required": [
    "reservationId",
    "reservationUpdateStatus"
  ]
};