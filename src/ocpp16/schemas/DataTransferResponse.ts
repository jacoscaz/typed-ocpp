export const DataTransferResponse = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "urn:OCPP:1.6:2019:12:DataTransferResponse",
    "title": "DataTransferResponse",
    "type": "object",
    "properties": {
        "status": {
            "type": "string",
            "additionalProperties": false,
            "enum": [
                "Accepted",
                "Rejected",
                "UnknownMessageId",
                "UnknownVendorId"
            ]
        },
        "data": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": [
        "status"
    ]
}
