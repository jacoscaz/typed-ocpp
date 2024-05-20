export const CancelReservationResponse = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "urn:OCPP:1.6:2019:12:CancelReservationResponse",
    "title": "CancelReservationResponse",
    "type": "object",
    "properties": {
        "status": {
            "type": "string",
            "additionalProperties": false,
            "enum": [
                "Accepted",
                "Rejected"
            ]
        }
    },
    "additionalProperties": false,
    "required": [
        "status"
    ]
}
