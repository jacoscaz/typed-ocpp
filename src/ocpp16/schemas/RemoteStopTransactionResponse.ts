export const RemoteStopTransactionResponse = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "urn:OCPP:1.6:2019:12:RemoteStopTransactionResponse",
    "title": "RemoteStopTransactionResponse",
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
