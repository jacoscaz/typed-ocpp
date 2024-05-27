

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

export const AuthorizeResponse: any = {
  "title": "AuthorizeResponse",
  "type": "object",
  "properties": {
    "idTagInfo": {
      "type": "object",
      "properties": {
        "expiryDate": {
          "type": "string",
          "format": "date-time"
        },
        "parentIdTag": {
          "type": "string",
          "maxLength": 20
        },
        "status": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "Accepted",
            "Blocked",
            "Expired",
            "Invalid",
            "ConcurrentTx"
          ]
        }
      },
      "additionalProperties": false,
      "required": [
        "status"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "idTagInfo"
  ],
  "$id": "urn:OCPP:1.6:2019:12:AuthorizeResponse"
};

export const BootNotificationRequest: any = {
  "title": "BootNotificationRequest",
  "type": "object",
  "properties": {
    "chargePointVendor": {
      "type": "string",
      "maxLength": 20
    },
    "chargePointModel": {
      "type": "string",
      "maxLength": 20
    },
    "chargePointSerialNumber": {
      "type": "string",
      "maxLength": 25
    },
    "chargeBoxSerialNumber": {
      "type": "string",
      "maxLength": 25
    },
    "firmwareVersion": {
      "type": "string",
      "maxLength": 50
    },
    "iccid": {
      "type": "string",
      "maxLength": 20
    },
    "imsi": {
      "type": "string",
      "maxLength": 20
    },
    "meterType": {
      "type": "string",
      "maxLength": 25
    },
    "meterSerialNumber": {
      "type": "string",
      "maxLength": 25
    }
  },
  "additionalProperties": false,
  "required": [
    "chargePointVendor",
    "chargePointModel"
  ],
  "$id": "urn:OCPP:1.6:2019:12:BootNotificationRequest"
};

export const BootNotificationResponse: any = {
  "title": "BootNotificationResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Pending",
        "Rejected"
      ]
    },
    "currentTime": {
      "type": "string",
      "format": "date-time"
    },
    "interval": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "status",
    "currentTime",
    "interval"
  ],
  "$id": "urn:OCPP:1.6:2019:12:BootNotificationResponse"
};

export const CancelReservationRequest: any = {
  "title": "CancelReservationRequest",
  "type": "object",
  "properties": {
    "reservationId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "reservationId"
  ],
  "$id": "urn:OCPP:1.6:2019:12:CancelReservationRequest"
};

export const CancelReservationResponse: any = {
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
  ],
  "$id": "urn:OCPP:1.6:2019:12:CancelReservationResponse"
};

export const ChangeAvailabilityRequest: any = {
  "title": "ChangeAvailabilityRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "type": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Inoperative",
        "Operative"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "type"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ChangeAvailabilityRequest"
};

export const ChangeAvailabilityResponse: any = {
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
  ],
  "$id": "urn:OCPP:1.6:2019:12:ChangeAvailabilityResponse"
};

export const ChangeConfigurationRequest: any = {
  "title": "ChangeConfigurationRequest",
  "type": "object",
  "properties": {
    "key": {
      "type": "string",
      "maxLength": 50
    },
    "value": {
      "type": "string",
      "maxLength": 500
    }
  },
  "additionalProperties": false,
  "required": [
    "key",
    "value"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ChangeConfigurationRequest"
};

export const ChangeConfigurationResponse: any = {
  "title": "ChangeConfigurationResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "RebootRequired",
        "NotSupported"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ChangeConfigurationResponse"
};

export const ClearCacheRequest: any = {
  "title": "ClearCacheRequest",
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:ClearCacheRequest"
};

export const ClearCacheResponse: any = {
  "title": "ClearCacheResponse",
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
  ],
  "$id": "urn:OCPP:1.6:2019:12:ClearCacheResponse"
};

export const ClearChargingProfileRequest: any = {
  "title": "ClearChargingProfileRequest",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "connectorId": {
      "type": "integer"
    },
    "chargingProfilePurpose": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ChargePointMaxProfile",
        "TxDefaultProfile",
        "TxProfile"
      ]
    },
    "stackLevel": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:ClearChargingProfileRequest"
};

export const ClearChargingProfileResponse: any = {
  "title": "ClearChargingProfileResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Unknown"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ClearChargingProfileResponse"
};

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

export const DataTransferResponse: any = {
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
  ],
  "$id": "urn:OCPP:1.6:2019:12:DataTransferResponse"
};

export const DiagnosticsStatusNotificationRequest: any = {
  "title": "DiagnosticsStatusNotificationRequest",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Idle",
        "Uploaded",
        "UploadFailed",
        "Uploading"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:DiagnosticsStatusNotificationRequest"
};

export const DiagnosticsStatusNotificationResponse: any = {
  "title": "DiagnosticsStatusNotificationResponse",
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:DiagnosticsStatusNotificationResponse"
};

export const FirmwareStatusNotificationRequest: any = {
  "title": "FirmwareStatusNotificationRequest",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Downloaded",
        "DownloadFailed",
        "Downloading",
        "Idle",
        "InstallationFailed",
        "Installing",
        "Installed"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:FirmwareStatusNotificationRequest"
};

export const FirmwareStatusNotificationResponse: any = {
  "title": "FirmwareStatusNotificationResponse",
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:FirmwareStatusNotificationResponse"
};

export const GetCompositeScheduleRequest: any = {
  "title": "GetCompositeScheduleRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "duration": {
      "type": "integer"
    },
    "chargingRateUnit": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "A",
        "W"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "duration"
  ],
  "$id": "urn:OCPP:1.6:2019:12:GetCompositeScheduleRequest"
};

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

export const GetConfigurationRequest: any = {
  "title": "GetConfigurationRequest",
  "type": "object",
  "properties": {
    "key": {
      "type": "array",
      "items": {
        "type": "string",
        "maxLength": 50
      }
    }
  },
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:GetConfigurationRequest"
};

export const GetConfigurationResponse: any = {
  "title": "GetConfigurationResponse",
  "type": "object",
  "properties": {
    "configurationKey": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "maxLength": 50
          },
          "readonly": {
            "type": "boolean"
          },
          "value": {
            "type": "string",
            "maxLength": 500
          }
        },
        "additionalProperties": false,
        "required": [
          "key",
          "readonly"
        ]
      }
    },
    "unknownKey": {
      "type": "array",
      "items": {
        "type": "string",
        "maxLength": 50
      }
    }
  },
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:GetConfigurationResponse"
};

export const GetDiagnosticsRequest: any = {
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
  ],
  "$id": "urn:OCPP:1.6:2019:12:GetDiagnosticsRequest"
};

export const GetDiagnosticsResponse: any = {
  "title": "GetDiagnosticsResponse",
  "type": "object",
  "properties": {
    "fileName": {
      "type": "string",
      "maxLength": 255
    }
  },
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:GetDiagnosticsResponse"
};

export const GetLocalListVersionRequest: any = {
  "title": "GetLocalListVersionRequest",
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:GetLocalListVersionRequest"
};

export const GetLocalListVersionResponse: any = {
  "title": "GetLocalListVersionResponse",
  "type": "object",
  "properties": {
    "listVersion": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "listVersion"
  ],
  "$id": "urn:OCPP:1.6:2019:12:GetLocalListVersionResponse"
};

export const HeartbeatRequest: any = {
  "title": "HeartbeatRequest",
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:HeartbeatRequest"
};

export const HeartbeatResponse: any = {
  "title": "HeartbeatResponse",
  "type": "object",
  "properties": {
    "currentTime": {
      "type": "string",
      "format": "date-time"
    }
  },
  "additionalProperties": false,
  "required": [
    "currentTime"
  ],
  "$id": "urn:OCPP:1.6:2019:12:HeartbeatResponse"
};

export const MeterValuesRequest: any = {
  "title": "MeterValuesRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "transactionId": {
      "type": "integer"
    },
    "meterValue": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "timestamp": {
            "type": "string",
            "format": "date-time"
          },
          "sampledValue": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "value": {
                  "type": "string"
                },
                "context": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "Interruption.Begin",
                    "Interruption.End",
                    "Sample.Clock",
                    "Sample.Periodic",
                    "Transaction.Begin",
                    "Transaction.End",
                    "Trigger",
                    "Other"
                  ]
                },
                "format": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "Raw",
                    "SignedData"
                  ]
                },
                "measurand": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "Energy.Active.Export.Register",
                    "Energy.Active.Import.Register",
                    "Energy.Reactive.Export.Register",
                    "Energy.Reactive.Import.Register",
                    "Energy.Active.Export.Interval",
                    "Energy.Active.Import.Interval",
                    "Energy.Reactive.Export.Interval",
                    "Energy.Reactive.Import.Interval",
                    "Power.Active.Export",
                    "Power.Active.Import",
                    "Power.Offered",
                    "Power.Reactive.Export",
                    "Power.Reactive.Import",
                    "Power.Factor",
                    "Current.Import",
                    "Current.Export",
                    "Current.Offered",
                    "Voltage",
                    "Frequency",
                    "Temperature",
                    "SoC",
                    "RPM"
                  ]
                },
                "phase": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "L1",
                    "L2",
                    "L3",
                    "N",
                    "L1-N",
                    "L2-N",
                    "L3-N",
                    "L1-L2",
                    "L2-L3",
                    "L3-L1"
                  ]
                },
                "location": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "Cable",
                    "EV",
                    "Inlet",
                    "Outlet",
                    "Body"
                  ]
                },
                "unit": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "Wh",
                    "kWh",
                    "varh",
                    "kvarh",
                    "W",
                    "kW",
                    "VA",
                    "kVA",
                    "var",
                    "kvar",
                    "A",
                    "V",
                    "K",
                    "Celcius",
                    "Celsius",
                    "Fahrenheit",
                    "Percent"
                  ]
                }
              },
              "additionalProperties": false,
              "required": [
                "value"
              ]
            }
          }
        },
        "additionalProperties": false,
        "required": [
          "timestamp",
          "sampledValue"
        ]
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "meterValue"
  ],
  "$id": "urn:OCPP:1.6:2019:12:MeterValuesRequest"
};

export const MeterValuesResponse: any = {
  "title": "MeterValuesResponse",
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:MeterValuesResponse"
};

export const RemoteStartTransactionRequest: any = {
  "title": "RemoteStartTransactionRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "idTag": {
      "type": "string",
      "maxLength": 20
    },
    "chargingProfile": {
      "type": "object",
      "properties": {
        "chargingProfileId": {
          "type": "integer"
        },
        "transactionId": {
          "type": "integer"
        },
        "stackLevel": {
          "type": "integer"
        },
        "chargingProfilePurpose": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "ChargePointMaxProfile",
            "TxDefaultProfile",
            "TxProfile"
          ]
        },
        "chargingProfileKind": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "Absolute",
            "Recurring",
            "Relative"
          ]
        },
        "recurrencyKind": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "Daily",
            "Weekly"
          ]
        },
        "validFrom": {
          "type": "string",
          "format": "date-time"
        },
        "validTo": {
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
        "chargingProfileId",
        "stackLevel",
        "chargingProfilePurpose",
        "chargingProfileKind",
        "chargingSchedule"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "idTag"
  ],
  "$id": "urn:OCPP:1.6:2019:12:RemoteStartTransactionRequest"
};

export const RemoteStartTransactionResponse: any = {
  "title": "RemoteStartTransactionResponse",
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
  ],
  "$id": "urn:OCPP:1.6:2019:12:RemoteStartTransactionResponse"
};

export const RemoteStopTransactionRequest: any = {
  "title": "RemoteStopTransactionRequest",
  "type": "object",
  "properties": {
    "transactionId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "transactionId"
  ],
  "$id": "urn:OCPP:1.6:2019:12:RemoteStopTransactionRequest"
};

export const RemoteStopTransactionResponse: any = {
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
  ],
  "$id": "urn:OCPP:1.6:2019:12:RemoteStopTransactionResponse"
};

export const ReserveNowRequest: any = {
  "title": "ReserveNowRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "expiryDate": {
      "type": "string",
      "format": "date-time"
    },
    "idTag": {
      "type": "string",
      "maxLength": 20
    },
    "parentIdTag": {
      "type": "string",
      "maxLength": 20
    },
    "reservationId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "expiryDate",
    "idTag",
    "reservationId"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ReserveNowRequest"
};

export const ReserveNowResponse: any = {
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
  ],
  "$id": "urn:OCPP:1.6:2019:12:ReserveNowResponse"
};

export const ResetRequest: any = {
  "title": "ResetRequest",
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Hard",
        "Soft"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "type"
  ],
  "$id": "urn:OCPP:1.6:2019:12:ResetRequest"
};

export const ResetResponse: any = {
  "title": "ResetResponse",
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
  ],
  "$id": "urn:OCPP:1.6:2019:12:ResetResponse"
};

export const SendLocalListRequest: any = {
  "title": "SendLocalListRequest",
  "type": "object",
  "properties": {
    "listVersion": {
      "type": "integer"
    },
    "localAuthorizationList": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "idTag": {
            "type": "string",
            "maxLength": 20
          },
          "idTagInfo": {
            "type": "object",
            "properties": {
              "expiryDate": {
                "type": "string",
                "format": "date-time"
              },
              "parentIdTag": {
                "type": "string",
                "maxLength": 20
              },
              "status": {
                "type": "string",
                "additionalProperties": false,
                "enum": [
                  "Accepted",
                  "Blocked",
                  "Expired",
                  "Invalid",
                  "ConcurrentTx"
                ]
              }
            },
            "additionalProperties": false,
            "required": [
              "status"
            ]
          }
        },
        "additionalProperties": false,
        "required": [
          "idTag"
        ]
      }
    },
    "updateType": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Differential",
        "Full"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "listVersion",
    "updateType"
  ],
  "$id": "urn:OCPP:1.6:2019:12:SendLocalListRequest"
};

export const SendLocalListResponse: any = {
  "title": "SendLocalListResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Failed",
        "NotSupported",
        "VersionMismatch"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:SendLocalListResponse"
};

export const SetChargingProfileRequest: any = {
  "title": "SetChargingProfileRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "csChargingProfiles": {
      "type": "object",
      "properties": {
        "chargingProfileId": {
          "type": "integer"
        },
        "transactionId": {
          "type": "integer"
        },
        "stackLevel": {
          "type": "integer"
        },
        "chargingProfilePurpose": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "ChargePointMaxProfile",
            "TxDefaultProfile",
            "TxProfile"
          ]
        },
        "chargingProfileKind": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "Absolute",
            "Recurring",
            "Relative"
          ]
        },
        "recurrencyKind": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "Daily",
            "Weekly"
          ]
        },
        "validFrom": {
          "type": "string",
          "format": "date-time"
        },
        "validTo": {
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
        "chargingProfileId",
        "stackLevel",
        "chargingProfilePurpose",
        "chargingProfileKind",
        "chargingSchedule"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "csChargingProfiles"
  ],
  "$id": "urn:OCPP:1.6:2019:12:SetChargingProfileRequest"
};

export const SetChargingProfileResponse: any = {
  "title": "SetChargingProfileResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "NotSupported"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:SetChargingProfileResponse"
};

export const StartTransactionRequest: any = {
  "title": "StartTransactionRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "idTag": {
      "type": "string",
      "maxLength": 20
    },
    "meterStart": {
      "type": "integer"
    },
    "reservationId": {
      "type": "integer"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "idTag",
    "meterStart",
    "timestamp"
  ],
  "$id": "urn:OCPP:1.6:2019:12:StartTransactionRequest"
};

export const StartTransactionResponse: any = {
  "title": "StartTransactionResponse",
  "type": "object",
  "properties": {
    "idTagInfo": {
      "type": "object",
      "properties": {
        "expiryDate": {
          "type": "string",
          "format": "date-time"
        },
        "parentIdTag": {
          "type": "string",
          "maxLength": 20
        },
        "status": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "Accepted",
            "Blocked",
            "Expired",
            "Invalid",
            "ConcurrentTx"
          ]
        }
      },
      "additionalProperties": false,
      "required": [
        "status"
      ]
    },
    "transactionId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "idTagInfo",
    "transactionId"
  ],
  "$id": "urn:OCPP:1.6:2019:12:StartTransactionResponse"
};

export const StatusNotificationRequest: any = {
  "title": "StatusNotificationRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    },
    "errorCode": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ConnectorLockFailure",
        "EVCommunicationError",
        "GroundFailure",
        "HighTemperature",
        "InternalError",
        "LocalListConflict",
        "NoError",
        "OtherError",
        "OverCurrentFailure",
        "PowerMeterFailure",
        "PowerSwitchFailure",
        "ReaderFailure",
        "ResetFailure",
        "UnderVoltage",
        "OverVoltage",
        "WeakSignal"
      ]
    },
    "info": {
      "type": "string",
      "maxLength": 50
    },
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Available",
        "Preparing",
        "Charging",
        "SuspendedEVSE",
        "SuspendedEV",
        "Finishing",
        "Reserved",
        "Unavailable",
        "Faulted"
      ]
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    },
    "vendorId": {
      "type": "string",
      "maxLength": 255
    },
    "vendorErrorCode": {
      "type": "string",
      "maxLength": 50
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId",
    "errorCode",
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:StatusNotificationRequest"
};

export const StatusNotificationResponse: any = {
  "title": "StatusNotificationResponse",
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:StatusNotificationResponse"
};

export const StopTransactionRequest: any = {
  "title": "StopTransactionRequest",
  "type": "object",
  "properties": {
    "idTag": {
      "type": "string",
      "maxLength": 20
    },
    "meterStop": {
      "type": "integer"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    },
    "transactionId": {
      "type": "integer"
    },
    "reason": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "EmergencyStop",
        "EVDisconnected",
        "HardReset",
        "Local",
        "Other",
        "PowerLoss",
        "Reboot",
        "Remote",
        "SoftReset",
        "UnlockCommand",
        "DeAuthorized"
      ]
    },
    "transactionData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "timestamp": {
            "type": "string",
            "format": "date-time"
          },
          "sampledValue": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "value": {
                  "type": "string"
                },
                "context": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "Interruption.Begin",
                    "Interruption.End",
                    "Sample.Clock",
                    "Sample.Periodic",
                    "Transaction.Begin",
                    "Transaction.End",
                    "Trigger",
                    "Other"
                  ]
                },
                "format": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "Raw",
                    "SignedData"
                  ]
                },
                "measurand": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "Energy.Active.Export.Register",
                    "Energy.Active.Import.Register",
                    "Energy.Reactive.Export.Register",
                    "Energy.Reactive.Import.Register",
                    "Energy.Active.Export.Interval",
                    "Energy.Active.Import.Interval",
                    "Energy.Reactive.Export.Interval",
                    "Energy.Reactive.Import.Interval",
                    "Power.Active.Export",
                    "Power.Active.Import",
                    "Power.Offered",
                    "Power.Reactive.Export",
                    "Power.Reactive.Import",
                    "Power.Factor",
                    "Current.Import",
                    "Current.Export",
                    "Current.Offered",
                    "Voltage",
                    "Frequency",
                    "Temperature",
                    "SoC",
                    "RPM"
                  ]
                },
                "phase": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "L1",
                    "L2",
                    "L3",
                    "N",
                    "L1-N",
                    "L2-N",
                    "L3-N",
                    "L1-L2",
                    "L2-L3",
                    "L3-L1"
                  ]
                },
                "location": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "Cable",
                    "EV",
                    "Inlet",
                    "Outlet",
                    "Body"
                  ]
                },
                "unit": {
                  "type": "string",
                  "additionalProperties": false,
                  "enum": [
                    "Wh",
                    "kWh",
                    "varh",
                    "kvarh",
                    "W",
                    "kW",
                    "VA",
                    "kVA",
                    "var",
                    "kvar",
                    "A",
                    "V",
                    "K",
                    "Celcius",
                    "Fahrenheit",
                    "Percent"
                  ]
                }
              },
              "additionalProperties": false,
              "required": [
                "value"
              ]
            }
          }
        },
        "additionalProperties": false,
        "required": [
          "timestamp",
          "sampledValue"
        ]
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "transactionId",
    "timestamp",
    "meterStop"
  ],
  "$id": "urn:OCPP:1.6:2019:12:StopTransactionRequest"
};

export const StopTransactionResponse: any = {
  "title": "StopTransactionResponse",
  "type": "object",
  "properties": {
    "idTagInfo": {
      "type": "object",
      "properties": {
        "expiryDate": {
          "type": "string",
          "format": "date-time"
        },
        "parentIdTag": {
          "type": "string",
          "maxLength": 20
        },
        "status": {
          "type": "string",
          "additionalProperties": false,
          "enum": [
            "Accepted",
            "Blocked",
            "Expired",
            "Invalid",
            "ConcurrentTx"
          ]
        }
      },
      "additionalProperties": false,
      "required": [
        "status"
      ]
    }
  },
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:StopTransactionResponse"
};

export const TriggerMessageRequest: any = {
  "title": "TriggerMessageRequest",
  "type": "object",
  "properties": {
    "requestedMessage": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "BootNotification",
        "DiagnosticsStatusNotification",
        "FirmwareStatusNotification",
        "Heartbeat",
        "MeterValues",
        "StatusNotification"
      ]
    },
    "connectorId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "requestedMessage"
  ],
  "$id": "urn:OCPP:1.6:2019:12:TriggerMessageRequest"
};

export const TriggerMessageResponse: any = {
  "title": "TriggerMessageResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "NotImplemented"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:TriggerMessageResponse"
};

export const UnlockConnectorRequest: any = {
  "title": "UnlockConnectorRequest",
  "type": "object",
  "properties": {
    "connectorId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "connectorId"
  ],
  "$id": "urn:OCPP:1.6:2019:12:UnlockConnectorRequest"
};

export const UnlockConnectorResponse: any = {
  "title": "UnlockConnectorResponse",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Unlocked",
        "UnlockFailed",
        "NotSupported"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "status"
  ],
  "$id": "urn:OCPP:1.6:2019:12:UnlockConnectorResponse"
};

export const UpdateFirmwareRequest: any = {
  "title": "UpdateFirmwareRequest",
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "format": "uri"
    },
    "retries": {
      "type": "integer"
    },
    "retrieveDate": {
      "type": "string",
      "format": "date-time"
    },
    "retryInterval": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "location",
    "retrieveDate"
  ],
  "$id": "urn:OCPP:1.6:2019:12:UpdateFirmwareRequest"
};

export const UpdateFirmwareResponse: any = {
  "title": "UpdateFirmwareResponse",
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$id": "urn:OCPP:1.6:2019:12:UpdateFirmwareResponse"
};