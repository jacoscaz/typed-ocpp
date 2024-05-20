export const ChangeAvailabilityResponse = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "urn:OCPP:1.6:2019:12:ChangeAvailabilityResponse",
    "title": "ChangeAvailabilityResponse",
    "type": "object",
    "properties": {
        "status": {
            "type": "string",
            "additionalProperties": false,
            "enum": [
                "Accepted",
                "Rejected",
                "Scheduled"
            ]
        }
    },
    "additionalProperties": false,
    "required": [
        "status"
    ]
}
