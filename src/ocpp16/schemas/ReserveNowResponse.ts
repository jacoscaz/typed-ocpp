export const ReserveNowResponse = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "urn:OCPP:1.6:2019:12:ReserveNowResponse",
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
    ]
}
