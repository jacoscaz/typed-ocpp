export const GetDiagnosticsRequest = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "urn:OCPP:1.6:2019:12:GetDiagnosticsRequest",
    "title": "GetDiagnosticsRequest",
    "type": "object",
    "properties": {
        "location": {
            "type": "string",
            "format": "uri"
        },
        "retries": {
            "type": "integer"
        },
        "retryInterval": {
            "type": "integer"
        },
        "startTime": {
            "type": "string",
            "format": "date-time"
        },
        "stopTime": {
            "type": "string",
            "format": "date-time"
        }
    },
    "additionalProperties": false,
    "required": [
        "location"
    ]
}
