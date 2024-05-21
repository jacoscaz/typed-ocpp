export const GetCompositeScheduleResponse: any = {
  "title": "GetCompositeScheduleResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "connectorId": {
      "type": "integer"
    },
    "scheduleStart": {
      "type": "string",
      "format": "date-time"
    },
    "chargingSchedule": {
      "type": "object",
      "properties": {
        "duration": {
          "type": "integer"
        },
        "startSchedule": {
          "type": "string",
          "format": "date-time"
        },
        "chargingRateUnit": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "A",
            "W"
          ]
        },
        "chargingSchedulePeriod": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "startPeriod": {
                "type": "integer"
              },
              "limit": {
                "type": "number",
                "multipleOf": 0.1
              },
              "numberPhases": {
                "type": "integer"
              }
            },
            "additionalProperties": false,
            "required": [
              "startPeriod",
              "limit"
            ]
          }
        },
        "minChargingRate": {
          "type": "number",
          "multipleOf": 0.1
        }
      },
      "additionalProperties": false,
      "required": [
        "chargingRateUnit",
        "chargingSchedulePeriod"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:GetCompositeScheduleResponse"
};