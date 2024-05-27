

export const AuthorizeRequest: any = {
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
    "HashAlgorithmEnumType": {
      "description": "Used algorithms for the hashes provided.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "SHA256",
        "SHA384",
        "SHA512"
      ]
    },
    "IdTokenEnumType": {
      "description": "Enumeration of possible idToken types.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Central",
        "eMAID",
        "ISO14443",
        "ISO15693",
        "KeyCode",
        "Local",
        "MacAddress",
        "NoAuthorization"
      ]
    },
    "AdditionalInfoType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalIdToken": {
          "description": "This field specifies the additional IdToken.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "description": "This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "additionalIdToken",
        "type"
      ]
    },
    "IdTokenType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalInfo": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/AdditionalInfoType"
          },
          "minItems": 1
        },
        "idToken": {
          "description": "IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "$ref": "#/definitions/IdTokenEnumType"
        }
      },
      "required": [
        "idToken",
        "type"
      ]
    },
    "OCSPRequestDataType": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "hashAlgorithm": {
          "$ref": "#/definitions/HashAlgorithmEnumType"
        },
        "issuerNameHash": {
          "description": "Hashed value of the Issuer DN (Distinguished Name).\r\n\r\n",
          "type": "string",
          "maxLength": 128
        },
        "issuerKeyHash": {
          "description": "Hashed value of the issuers public key\r\n",
          "type": "string",
          "maxLength": 128
        },
        "serialNumber": {
          "description": "The serial number of the certificate.\r\n",
          "type": "string",
          "maxLength": 40
        },
        "responderURL": {
          "description": "This contains the responder URL (Case insensitive). \r\n\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "hashAlgorithm",
        "issuerNameHash",
        "issuerKeyHash",
        "serialNumber",
        "responderURL"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "idToken": {
      "$ref": "#/definitions/IdTokenType"
    },
    "certificate": {
      "description": "The X.509 certificated presented by EV and encoded in PEM format.\r\n",
      "type": "string",
      "maxLength": 5500
    },
    "iso15118CertificateHashData": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/OCSPRequestDataType"
      },
      "minItems": 1,
      "maxItems": 4
    }
  },
  "required": [
    "idToken"
  ]
};

export const AuthorizeResponse: any = {
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
    "AuthorizationStatusEnumType": {
      "description": "ID_ Token. Status. Authorization_ Status\r\nurn:x-oca:ocpp:uid:1:569372\r\nCurrent status of the ID Token.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Blocked",
        "ConcurrentTx",
        "Expired",
        "Invalid",
        "NoCredit",
        "NotAllowedTypeEVSE",
        "NotAtThisLocation",
        "NotAtThisTime",
        "Unknown"
      ]
    },
    "AuthorizeCertificateStatusEnumType": {
      "description": "Certificate status information. \r\n- if all certificates are valid: return 'Accepted'.\r\n- if one of the certificates was revoked, return 'CertificateRevoked'.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "SignatureError",
        "CertificateExpired",
        "CertificateRevoked",
        "NoCertificateAvailable",
        "CertChainError",
        "ContractCancelled"
      ]
    },
    "IdTokenEnumType": {
      "description": "Enumeration of possible idToken types.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Central",
        "eMAID",
        "ISO14443",
        "ISO15693",
        "KeyCode",
        "Local",
        "MacAddress",
        "NoAuthorization"
      ]
    },
    "MessageFormatEnumType": {
      "description": "Message_ Content. Format. Message_ Format_ Code\r\nurn:x-enexis:ecdm:uid:1:570848\r\nFormat of the message.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ASCII",
        "HTML",
        "URI",
        "UTF8"
      ]
    },
    "AdditionalInfoType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalIdToken": {
          "description": "This field specifies the additional IdToken.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "description": "This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "additionalIdToken",
        "type"
      ]
    },
    "IdTokenInfoType": {
      "description": "ID_ Token\r\nurn:x-oca:ocpp:uid:2:233247\r\nContains status information about an identifier.\r\nIt is advised to not stop charging for a token that expires during charging, as ExpiryDate is only used for caching purposes. If ExpiryDate is not given, the status has no end date.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "status": {
          "$ref": "#/definitions/AuthorizationStatusEnumType"
        },
        "cacheExpiryDateTime": {
          "description": "ID_ Token. Expiry. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569373\r\nDate and Time after which the token must be considered invalid.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "chargingPriority": {
          "description": "Priority from a business point of view. Default priority is 0, The range is from -9 to 9. Higher values indicate a higher priority. The chargingPriority in &lt;&lt;transactioneventresponse,TransactionEventResponse&gt;&gt; overrules this one. \r\n",
          "type": "integer"
        },
        "language1": {
          "description": "ID_ Token. Language1. Language_ Code\r\nurn:x-oca:ocpp:uid:1:569374\r\nPreferred user interface language of identifier user. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n\r\n",
          "type": "string",
          "maxLength": 8
        },
        "evseId": {
          "description": "Only used when the IdToken is only valid for one or more specific EVSEs, not for the entire Charging Station.\r\n\r\n",
          "type": "array",
          "additionalItems": false,
          "items": {
            "type": "integer"
          },
          "minItems": 1
        },
        "groupIdToken": {
          "$ref": "#/definitions/IdTokenType"
        },
        "language2": {
          "description": "ID_ Token. Language2. Language_ Code\r\nurn:x-oca:ocpp:uid:1:569375\r\nSecond preferred user interface language of identifier user. Don’t use when language1 is omitted, has to be different from language1. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n",
          "type": "string",
          "maxLength": 8
        },
        "personalMessage": {
          "$ref": "#/definitions/MessageContentType"
        }
      },
      "required": [
        "status"
      ]
    },
    "IdTokenType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalInfo": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/AdditionalInfoType"
          },
          "minItems": 1
        },
        "idToken": {
          "description": "IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "$ref": "#/definitions/IdTokenEnumType"
        }
      },
      "required": [
        "idToken",
        "type"
      ]
    },
    "MessageContentType": {
      "description": "Message_ Content\r\nurn:x-enexis:ecdm:uid:2:234490\r\nContains message details, for a message to be displayed on a Charging Station.\r\n\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "format": {
          "$ref": "#/definitions/MessageFormatEnumType"
        },
        "language": {
          "description": "Message_ Content. Language. Language_ Code\r\nurn:x-enexis:ecdm:uid:1:570849\r\nMessage language identifier. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n",
          "type": "string",
          "maxLength": 8
        },
        "content": {
          "description": "Message_ Content. Content. Message\r\nurn:x-enexis:ecdm:uid:1:570852\r\nMessage contents.\r\n\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "format",
        "content"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "idTokenInfo": {
      "$ref": "#/definitions/IdTokenInfoType"
    },
    "certificateStatus": {
      "$ref": "#/definitions/AuthorizeCertificateStatusEnumType"
    }
  },
  "required": [
    "idTokenInfo"
  ]
};

export const BootNotificationRequest: any = {
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
    "BootReasonEnumType": {
      "description": "This contains the reason for sending this message to the CSMS.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ApplicationReset",
        "FirmwareUpdate",
        "LocalReset",
        "PowerUp",
        "RemoteReset",
        "ScheduledReset",
        "Triggered",
        "Unknown",
        "Watchdog"
      ]
    },
    "ChargingStationType": {
      "description": "Charge_ Point\r\nurn:x-oca:ocpp:uid:2:233122\r\nThe physical system where an Electrical Vehicle (EV) can be charged.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "serialNumber": {
          "description": "Device. Serial_ Number. Serial_ Number\r\nurn:x-oca:ocpp:uid:1:569324\r\nVendor-specific device identifier.\r\n",
          "type": "string",
          "maxLength": 25
        },
        "model": {
          "description": "Device. Model. CI20_ Text\r\nurn:x-oca:ocpp:uid:1:569325\r\nDefines the model of the device.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "modem": {
          "$ref": "#/definitions/ModemType"
        },
        "vendorName": {
          "description": "Identifies the vendor (not necessarily in a unique manner).\r\n",
          "type": "string",
          "maxLength": 50
        },
        "firmwareVersion": {
          "description": "This contains the firmware version of the Charging Station.\r\n\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "model",
        "vendorName"
      ]
    },
    "ModemType": {
      "description": "Wireless_ Communication_ Module\r\nurn:x-oca:ocpp:uid:2:233306\r\nDefines parameters required for initiating and maintaining wireless communication with other devices.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "iccid": {
          "description": "Wireless_ Communication_ Module. ICCID. CI20_ Text\r\nurn:x-oca:ocpp:uid:1:569327\r\nThis contains the ICCID of the modem’s SIM card.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "imsi": {
          "description": "Wireless_ Communication_ Module. IMSI. CI20_ Text\r\nurn:x-oca:ocpp:uid:1:569328\r\nThis contains the IMSI of the modem’s SIM card.\r\n",
          "type": "string",
          "maxLength": 20
        }
      }
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "chargingStation": {
      "$ref": "#/definitions/ChargingStationType"
    },
    "reason": {
      "$ref": "#/definitions/BootReasonEnumType"
    }
  },
  "required": [
    "reason",
    "chargingStation"
  ]
};

export const BootNotificationResponse: any = {
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
    "RegistrationStatusEnumType": {
      "description": "This contains whether the Charging Station has been registered\r\nwithin the CSMS.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Pending",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "currentTime": {
      "description": "This contains the CSMS’s current time.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "interval": {
      "description": "When &lt;&lt;cmn_registrationstatusenumtype,Status&gt;&gt; is Accepted, this contains the heartbeat interval in seconds. If the CSMS returns something other than Accepted, the value of the interval field indicates the minimum wait time before sending a next BootNotification request.\r\n",
      "type": "integer"
    },
    "status": {
      "$ref": "#/definitions/RegistrationStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "currentTime",
    "interval",
    "status"
  ]
};

export const CancelReservationRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "reservationId": {
      "description": "Id of the reservation to cancel.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "reservationId"
  ]
};

export const CancelReservationResponse: any = {
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
    "CancelReservationStatusEnumType": {
      "description": "This indicates the success or failure of the canceling of a reservation by CSMS.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/CancelReservationStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const CertificateSignedRequest: any = {
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
    "CertificateSigningUseEnumType": {
      "description": "Indicates the type of the signed certificate that is returned. When omitted the certificate is used for both the 15118 connection (if implemented) and the Charging Station to CSMS connection. This field is required when a typeOfCertificate was included in the &lt;&lt;signcertificaterequest,SignCertificateRequest&gt;&gt; that requested this certificate to be signed AND both the 15118 connection and the Charging Station connection are implemented.\r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ChargingStationCertificate",
        "V2GCertificate"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "certificateChain": {
      "description": "The signed PEM encoded X.509 certificate. This can also contain the necessary sub CA certificates. In that case, the order of the bundle should follow the certificate chain, starting from the leaf certificate.\r\n\r\nThe Configuration Variable &lt;&lt;configkey-max-certificate-chain-size,MaxCertificateChainSize&gt;&gt; can be used to limit the maximum size of this field.\r\n",
      "type": "string",
      "maxLength": 10000
    },
    "certificateType": {
      "$ref": "#/definitions/CertificateSigningUseEnumType"
    }
  },
  "required": [
    "certificateChain"
  ]
};

export const CertificateSignedResponse: any = {
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
    "CertificateSignedStatusEnumType": {
      "description": "Returns whether certificate signing has been accepted, otherwise rejected.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/CertificateSignedStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const ChangeAvailabilityRequest: any = {
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
    "OperationalStatusEnumType": {
      "description": "This contains the type of availability change that the Charging Station should perform.\r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Inoperative",
        "Operative"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "evse": {
      "$ref": "#/definitions/EVSEType"
    },
    "operationalStatus": {
      "$ref": "#/definitions/OperationalStatusEnumType"
    }
  },
  "required": [
    "operationalStatus"
  ]
};

export const ChangeAvailabilityResponse: any = {
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
    "ChangeAvailabilityStatusEnumType": {
      "description": "This indicates whether the Charging Station is able to perform the availability change.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "Scheduled"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/ChangeAvailabilityStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const ClearCacheRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const ClearCacheResponse: any = {
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
    "ClearCacheStatusEnumType": {
      "description": "Accepted if the Charging Station has executed the request, otherwise rejected.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/ClearCacheStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const ClearChargingProfileRequest: any = {
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
    "ChargingProfilePurposeEnumType": {
      "description": "Charging_ Profile. Charging_ Profile_ Purpose. Charging_ Profile_ Purpose_ Code\r\nurn:x-oca:ocpp:uid:1:569231\r\nSpecifies to purpose of the charging profiles that will be cleared, if they meet the other criteria in the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ChargingStationExternalConstraints",
        "ChargingStationMaxProfile",
        "TxDefaultProfile",
        "TxProfile"
      ]
    },
    "ClearChargingProfileType": {
      "description": "Charging_ Profile\r\nurn:x-oca:ocpp:uid:2:233255\r\nA ChargingProfile consists of a ChargingSchedule, describing the amount of power or current that can be delivered per time interval.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evseId": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nSpecifies the id of the EVSE for which to clear charging profiles. An evseId of zero (0) specifies the charging profile for the overall Charging Station. Absence of this parameter means the clearing applies to all charging profiles that match the other criteria in the request.\r\n\r\n",
          "type": "integer"
        },
        "chargingProfilePurpose": {
          "$ref": "#/definitions/ChargingProfilePurposeEnumType"
        },
        "stackLevel": {
          "description": "Charging_ Profile. Stack_ Level. Counter\r\nurn:x-oca:ocpp:uid:1:569230\r\nSpecifies the stackLevel for which charging profiles will be cleared, if they meet the other criteria in the request.\r\n",
          "type": "integer"
        }
      }
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "chargingProfileId": {
      "description": "The Id of the charging profile to clear.\r\n",
      "type": "integer"
    },
    "chargingProfileCriteria": {
      "$ref": "#/definitions/ClearChargingProfileType"
    }
  }
};

export const ClearChargingProfileResponse: any = {
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
    "ClearChargingProfileStatusEnumType": {
      "description": "Indicates if the Charging Station was able to execute the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Unknown"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/ClearChargingProfileStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const ClearDisplayMessageRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "id": {
      "description": "Id of the message that SHALL be removed from the Charging Station.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "id"
  ]
};

export const ClearDisplayMessageResponse: any = {
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
    "ClearMessageStatusEnumType": {
      "description": "Returns whether the Charging Station has been able to remove the message.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Unknown"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/ClearMessageStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const ClearVariableMonitoringRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "id": {
      "description": "List of the monitors to be cleared, identified by there Id.\r\n",
      "type": "array",
      "additionalItems": false,
      "items": {
        "type": "integer"
      },
      "minItems": 1
    }
  },
  "required": [
    "id"
  ]
};

export const ClearVariableMonitoringResponse: any = {
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
    "ClearMonitoringStatusEnumType": {
      "description": "Result of the clear request for this monitor, identified by its Id.\r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "NotFound"
      ]
    },
    "ClearMonitoringResultType": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "status": {
          "$ref": "#/definitions/ClearMonitoringStatusEnumType"
        },
        "id": {
          "description": "Id of the monitor of which a clear was requested.\r\n\r\n",
          "type": "integer"
        },
        "statusInfo": {
          "$ref": "#/definitions/StatusInfoType"
        }
      },
      "required": [
        "status",
        "id"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "clearMonitoringResult": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/ClearMonitoringResultType"
      },
      "minItems": 1
    }
  },
  "required": [
    "clearMonitoringResult"
  ]
};

export const ClearedChargingLimitRequest: any = {
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
    "ChargingLimitSourceEnumType": {
      "description": "Source of the charging limit.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "EMS",
        "Other",
        "SO",
        "CSO"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "chargingLimitSource": {
      "$ref": "#/definitions/ChargingLimitSourceEnumType"
    },
    "evseId": {
      "description": "EVSE Identifier.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "chargingLimitSource"
  ]
};

export const ClearedChargingLimitResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const CostUpdatedRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "totalCost": {
      "description": "Current total cost, based on the information known by the CSMS, of the transaction including taxes. In the currency configured with the configuration Variable: [&lt;&lt;configkey-currency, Currency&gt;&gt;]\r\n\r\n",
      "type": "number"
    },
    "transactionId": {
      "description": "Transaction Id of the transaction the current cost are asked for.\r\n\r\n",
      "type": "string",
      "maxLength": 36
    }
  },
  "required": [
    "totalCost",
    "transactionId"
  ]
};

export const CostUpdatedResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const CustomerInformationRequest: any = {
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
    "HashAlgorithmEnumType": {
      "description": "Used algorithms for the hashes provided.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "SHA256",
        "SHA384",
        "SHA512"
      ]
    },
    "IdTokenEnumType": {
      "description": "Enumeration of possible idToken types.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Central",
        "eMAID",
        "ISO14443",
        "ISO15693",
        "KeyCode",
        "Local",
        "MacAddress",
        "NoAuthorization"
      ]
    },
    "AdditionalInfoType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalIdToken": {
          "description": "This field specifies the additional IdToken.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "description": "This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "additionalIdToken",
        "type"
      ]
    },
    "CertificateHashDataType": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "hashAlgorithm": {
          "$ref": "#/definitions/HashAlgorithmEnumType"
        },
        "issuerNameHash": {
          "description": "Hashed value of the Issuer DN (Distinguished Name).\r\n\r\n",
          "type": "string",
          "maxLength": 128
        },
        "issuerKeyHash": {
          "description": "Hashed value of the issuers public key\r\n",
          "type": "string",
          "maxLength": 128
        },
        "serialNumber": {
          "description": "The serial number of the certificate.\r\n",
          "type": "string",
          "maxLength": 40
        }
      },
      "required": [
        "hashAlgorithm",
        "issuerNameHash",
        "issuerKeyHash",
        "serialNumber"
      ]
    },
    "IdTokenType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalInfo": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/AdditionalInfoType"
          },
          "minItems": 1
        },
        "idToken": {
          "description": "IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "$ref": "#/definitions/IdTokenEnumType"
        }
      },
      "required": [
        "idToken",
        "type"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "customerCertificate": {
      "$ref": "#/definitions/CertificateHashDataType"
    },
    "idToken": {
      "$ref": "#/definitions/IdTokenType"
    },
    "requestId": {
      "description": "The Id of the request.\r\n\r\n",
      "type": "integer"
    },
    "report": {
      "description": "Flag indicating whether the Charging Station should return NotifyCustomerInformationRequest messages containing information about the customer referred to.\r\n",
      "type": "boolean"
    },
    "clear": {
      "description": "Flag indicating whether the Charging Station should clear all information about the customer referred to.\r\n",
      "type": "boolean"
    },
    "customerIdentifier": {
      "description": "A (e.g. vendor specific) identifier of the customer this request refers to. This field contains a custom identifier other than IdToken and Certificate.\r\nOne of the possible identifiers (customerIdentifier, customerIdToken or customerCertificate) should be in the request message.\r\n",
      "type": "string",
      "maxLength": 64
    }
  },
  "required": [
    "requestId",
    "report",
    "clear"
  ]
};

export const CustomerInformationResponse: any = {
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
    "CustomerInformationStatusEnumType": {
      "description": "Indicates whether the request was accepted.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "Invalid"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/CustomerInformationStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const DataTransferRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "messageId": {
      "description": "May be used to indicate a specific message or implementation.\r\n",
      "type": "string",
      "maxLength": 50
    },
    "data": {
      "description": "Data without specified length or format. This needs to be decided by both parties (Open to implementation).\r\n"
    },
    "vendorId": {
      "description": "This identifies the Vendor specific implementation\r\n\r\n",
      "type": "string",
      "maxLength": 255
    }
  },
  "required": [
    "vendorId"
  ]
};

export const DataTransferResponse: any = {
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
    "DataTransferStatusEnumType": {
      "description": "This indicates the success or failure of the data transfer.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "UnknownMessageId",
        "UnknownVendorId"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/DataTransferStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    },
    "data": {
      "description": "Data without specified length or format, in response to request.\r\n"
    }
  },
  "required": [
    "status"
  ]
};

export const DeleteCertificateRequest: any = {
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
    "HashAlgorithmEnumType": {
      "description": "Used algorithms for the hashes provided.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "SHA256",
        "SHA384",
        "SHA512"
      ]
    },
    "CertificateHashDataType": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "hashAlgorithm": {
          "$ref": "#/definitions/HashAlgorithmEnumType"
        },
        "issuerNameHash": {
          "description": "Hashed value of the Issuer DN (Distinguished Name).\r\n\r\n",
          "type": "string",
          "maxLength": 128
        },
        "issuerKeyHash": {
          "description": "Hashed value of the issuers public key\r\n",
          "type": "string",
          "maxLength": 128
        },
        "serialNumber": {
          "description": "The serial number of the certificate.\r\n",
          "type": "string",
          "maxLength": 40
        }
      },
      "required": [
        "hashAlgorithm",
        "issuerNameHash",
        "issuerKeyHash",
        "serialNumber"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "certificateHashData": {
      "$ref": "#/definitions/CertificateHashDataType"
    }
  },
  "required": [
    "certificateHashData"
  ]
};

export const DeleteCertificateResponse: any = {
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
    "DeleteCertificateStatusEnumType": {
      "description": "Charging Station indicates if it can process the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Failed",
        "NotFound"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/DeleteCertificateStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const FirmwareStatusNotificationRequest: any = {
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
    "FirmwareStatusEnumType": {
      "description": "This contains the progress status of the firmware installation.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Downloaded",
        "DownloadFailed",
        "Downloading",
        "DownloadScheduled",
        "DownloadPaused",
        "Idle",
        "InstallationFailed",
        "Installing",
        "Installed",
        "InstallRebooting",
        "InstallScheduled",
        "InstallVerificationFailed",
        "InvalidSignature",
        "SignatureVerified"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/FirmwareStatusEnumType"
    },
    "requestId": {
      "description": "The request id that was provided in the\r\nUpdateFirmwareRequest that started this firmware update.\r\nThis field is mandatory, unless the message was triggered by a TriggerMessageRequest AND there is no firmware update ongoing.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "status"
  ]
};

export const FirmwareStatusNotificationResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const Get15118EVCertificateRequest: any = {
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
    "CertificateActionEnumType": {
      "description": "Defines whether certificate needs to be installed or updated.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Install",
        "Update"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "iso15118SchemaVersion": {
      "description": "Schema version currently used for the 15118 session between EV and Charging Station. Needed for parsing of the EXI stream by the CSMS.\r\n\r\n",
      "type": "string",
      "maxLength": 50
    },
    "action": {
      "$ref": "#/definitions/CertificateActionEnumType"
    },
    "exiRequest": {
      "description": "Raw CertificateInstallationReq request from EV, Base64 encoded.\r\n",
      "type": "string",
      "maxLength": 5600
    }
  },
  "required": [
    "iso15118SchemaVersion",
    "action",
    "exiRequest"
  ]
};

export const Get15118EVCertificateResponse: any = {
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
    "Iso15118EVCertificateStatusEnumType": {
      "description": "Indicates whether the message was processed properly.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Failed"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/Iso15118EVCertificateStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    },
    "exiResponse": {
      "description": "Raw CertificateInstallationRes response for the EV, Base64 encoded.\r\n",
      "type": "string",
      "maxLength": 5600
    }
  },
  "required": [
    "status",
    "exiResponse"
  ]
};

export const GetBaseReportRequest: any = {
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
    "ReportBaseEnumType": {
      "description": "This field specifies the report base.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ConfigurationInventory",
        "FullInventory",
        "SummaryInventory"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "requestId": {
      "description": "The Id of the request.\r\n",
      "type": "integer"
    },
    "reportBase": {
      "$ref": "#/definitions/ReportBaseEnumType"
    }
  },
  "required": [
    "requestId",
    "reportBase"
  ]
};

export const GetBaseReportResponse: any = {
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
    "GenericDeviceModelStatusEnumType": {
      "description": "This indicates whether the Charging Station is able to accept this request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "NotSupported",
        "EmptyResultSet"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GenericDeviceModelStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const GetCertificateStatusRequest: any = {
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
    "HashAlgorithmEnumType": {
      "description": "Used algorithms for the hashes provided.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "SHA256",
        "SHA384",
        "SHA512"
      ]
    },
    "OCSPRequestDataType": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "hashAlgorithm": {
          "$ref": "#/definitions/HashAlgorithmEnumType"
        },
        "issuerNameHash": {
          "description": "Hashed value of the Issuer DN (Distinguished Name).\r\n\r\n",
          "type": "string",
          "maxLength": 128
        },
        "issuerKeyHash": {
          "description": "Hashed value of the issuers public key\r\n",
          "type": "string",
          "maxLength": 128
        },
        "serialNumber": {
          "description": "The serial number of the certificate.\r\n",
          "type": "string",
          "maxLength": 40
        },
        "responderURL": {
          "description": "This contains the responder URL (Case insensitive). \r\n\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "hashAlgorithm",
        "issuerNameHash",
        "issuerKeyHash",
        "serialNumber",
        "responderURL"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "ocspRequestData": {
      "$ref": "#/definitions/OCSPRequestDataType"
    }
  },
  "required": [
    "ocspRequestData"
  ]
};

export const GetCertificateStatusResponse: any = {
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
    "GetCertificateStatusEnumType": {
      "description": "This indicates whether the charging station was able to retrieve the OCSP certificate status.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Failed"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GetCertificateStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    },
    "ocspResult": {
      "description": "OCSPResponse class as defined in &lt;&lt;ref-ocpp_security_24, IETF RFC 6960&gt;&gt;. DER encoded (as defined in &lt;&lt;ref-ocpp_security_24, IETF RFC 6960&gt;&gt;), and then base64 encoded. MAY only be omitted when status is not Accepted.\r\n",
      "type": "string",
      "maxLength": 5500
    }
  },
  "required": [
    "status"
  ]
};

export const GetChargingProfilesRequest: any = {
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
    "ChargingLimitSourceEnumType": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "EMS",
        "Other",
        "SO",
        "CSO"
      ]
    },
    "ChargingProfilePurposeEnumType": {
      "description": "Charging_ Profile. Charging_ Profile_ Purpose. Charging_ Profile_ Purpose_ Code\r\nurn:x-oca:ocpp:uid:1:569231\r\nDefines the purpose of the schedule transferred by this profile\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ChargingStationExternalConstraints",
        "ChargingStationMaxProfile",
        "TxDefaultProfile",
        "TxProfile"
      ]
    },
    "ChargingProfileCriterionType": {
      "description": "Charging_ Profile\r\nurn:x-oca:ocpp:uid:2:233255\r\nA ChargingProfile consists of ChargingSchedule, describing the amount of power or current that can be delivered per time interval.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "chargingProfilePurpose": {
          "$ref": "#/definitions/ChargingProfilePurposeEnumType"
        },
        "stackLevel": {
          "description": "Charging_ Profile. Stack_ Level. Counter\r\nurn:x-oca:ocpp:uid:1:569230\r\nValue determining level in hierarchy stack of profiles. Higher values have precedence over lower values. Lowest level is 0.\r\n",
          "type": "integer"
        },
        "chargingProfileId": {
          "description": "List of all the chargingProfileIds requested. Any ChargingProfile that matches one of these profiles will be reported. If omitted, the Charging Station SHALL not filter on chargingProfileId. This field SHALL NOT contain more ids than set in &lt;&lt;configkey-charging-profile-entries,ChargingProfileEntries.maxLimit&gt;&gt;\r\n\r\n",
          "type": "array",
          "additionalItems": false,
          "items": {
            "type": "integer"
          },
          "minItems": 1
        },
        "chargingLimitSource": {
          "description": "For which charging limit sources, charging profiles SHALL be reported. If omitted, the Charging Station SHALL not filter on chargingLimitSource.\r\n",
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ChargingLimitSourceEnumType"
          },
          "minItems": 1,
          "maxItems": 4
        }
      }
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "requestId": {
      "description": "Reference identification that is to be used by the Charging Station in the &lt;&lt;reportchargingprofilesrequest, ReportChargingProfilesRequest&gt;&gt; when provided.\r\n",
      "type": "integer"
    },
    "evseId": {
      "description": "For which EVSE installed charging profiles SHALL be reported. If 0, only charging profiles installed on the Charging Station itself (the grid connection) SHALL be reported. If omitted, all installed charging profiles SHALL be reported.\r\n",
      "type": "integer"
    },
    "chargingProfile": {
      "$ref": "#/definitions/ChargingProfileCriterionType"
    }
  },
  "required": [
    "requestId",
    "chargingProfile"
  ]
};

export const GetChargingProfilesResponse: any = {
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
    "GetChargingProfileStatusEnumType": {
      "description": "This indicates whether the Charging Station is able to process this request and will send &lt;&lt;reportchargingprofilesrequest, ReportChargingProfilesRequest&gt;&gt; messages.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "NoProfiles"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GetChargingProfileStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const GetCompositeScheduleRequest: any = {
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
    "ChargingRateUnitEnumType": {
      "description": "Can be used to force a power or current profile.\r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "W",
        "A"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "duration": {
      "description": "Length of the requested schedule in seconds.\r\n\r\n",
      "type": "integer"
    },
    "chargingRateUnit": {
      "$ref": "#/definitions/ChargingRateUnitEnumType"
    },
    "evseId": {
      "description": "The ID of the EVSE for which the schedule is requested. When evseid=0, the Charging Station will calculate the expected consumption for the grid connection.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "duration",
    "evseId"
  ]
};

export const GetCompositeScheduleResponse: any = {
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
    "ChargingRateUnitEnumType": {
      "description": "The unit of measure Limit is\r\nexpressed in.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "W",
        "A"
      ]
    },
    "GenericStatusEnumType": {
      "description": "The Charging Station will indicate if it was\r\nable to process the request\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "ChargingSchedulePeriodType": {
      "description": "Charging_ Schedule_ Period\r\nurn:x-oca:ocpp:uid:2:233257\r\nCharging schedule period structure defines a time period in a charging schedule.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startPeriod": {
          "description": "Charging_ Schedule_ Period. Start_ Period. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569240\r\nStart of the period, in seconds from the start of schedule. The value of StartPeriod also defines the stop time of the previous period.\r\n",
          "type": "integer"
        },
        "limit": {
          "description": "Charging_ Schedule_ Period. Limit. Measure\r\nurn:x-oca:ocpp:uid:1:569241\r\nCharging rate limit during the schedule period, in the applicable chargingRateUnit, for example in Amperes (A) or Watts (W). Accepts at most one digit fraction (e.g. 8.1).\r\n",
          "type": "number"
        },
        "numberPhases": {
          "description": "Charging_ Schedule_ Period. Number_ Phases. Counter\r\nurn:x-oca:ocpp:uid:1:569242\r\nThe number of phases that can be used for charging. If a number of phases is needed, numberPhases=3 will be assumed unless another number is given.\r\n",
          "type": "integer"
        },
        "phaseToUse": {
          "description": "Values: 1..3, Used if numberPhases=1 and if the EVSE is capable of switching the phase connected to the EV, i.e. ACPhaseSwitchingSupported is defined and true. It’s not allowed unless both conditions above are true. If both conditions are true, and phaseToUse is omitted, the Charging Station / EVSE will make the selection on its own.\r\n\r\n",
          "type": "integer"
        }
      },
      "required": [
        "startPeriod",
        "limit"
      ]
    },
    "CompositeScheduleType": {
      "description": "Composite_ Schedule\r\nurn:x-oca:ocpp:uid:2:233362\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "chargingSchedulePeriod": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ChargingSchedulePeriodType"
          },
          "minItems": 1
        },
        "evseId": {
          "description": "The ID of the EVSE for which the\r\nschedule is requested. When evseid=0, the\r\nCharging Station calculated the expected\r\nconsumption for the grid connection.\r\n",
          "type": "integer"
        },
        "duration": {
          "description": "Duration of the schedule in seconds.\r\n",
          "type": "integer"
        },
        "scheduleStart": {
          "description": "Composite_ Schedule. Start. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569456\r\nDate and time at which the schedule becomes active. All time measurements within the schedule are relative to this timestamp.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "chargingRateUnit": {
          "$ref": "#/definitions/ChargingRateUnitEnumType"
        }
      },
      "required": [
        "evseId",
        "duration",
        "scheduleStart",
        "chargingRateUnit",
        "chargingSchedulePeriod"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GenericStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    },
    "schedule": {
      "$ref": "#/definitions/CompositeScheduleType"
    }
  },
  "required": [
    "status"
  ]
};

export const GetDisplayMessagesRequest: any = {
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
    "MessagePriorityEnumType": {
      "description": "If provided the Charging Station shall return Display Messages with the given priority only.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "AlwaysFront",
        "InFront",
        "NormalCycle"
      ]
    },
    "MessageStateEnumType": {
      "description": "If provided the Charging Station shall return Display Messages with the given state only. \r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Charging",
        "Faulted",
        "Idle",
        "Unavailable"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "id": {
      "description": "If provided the Charging Station shall return Display Messages of the given ids. This field SHALL NOT contain more ids than set in &lt;&lt;configkey-number-of-display-messages,NumberOfDisplayMessages.maxLimit&gt;&gt;\r\n\r\n",
      "type": "array",
      "additionalItems": false,
      "items": {
        "type": "integer"
      },
      "minItems": 1
    },
    "requestId": {
      "description": "The Id of this request.\r\n",
      "type": "integer"
    },
    "priority": {
      "$ref": "#/definitions/MessagePriorityEnumType"
    },
    "state": {
      "$ref": "#/definitions/MessageStateEnumType"
    }
  },
  "required": [
    "requestId"
  ]
};

export const GetDisplayMessagesResponse: any = {
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
    "GetDisplayMessagesStatusEnumType": {
      "description": "Indicates if the Charging Station has Display Messages that match the request criteria in the &lt;&lt;getdisplaymessagesrequest,GetDisplayMessagesRequest&gt;&gt;\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Unknown"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GetDisplayMessagesStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const GetInstalledCertificateIdsRequest: any = {
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
    "GetCertificateIdUseEnumType": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "V2GRootCertificate",
        "MORootCertificate",
        "CSMSRootCertificate",
        "V2GCertificateChain",
        "ManufacturerRootCertificate"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "certificateType": {
      "description": "Indicates the type of certificates requested. When omitted, all certificate types are requested.\r\n",
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/GetCertificateIdUseEnumType"
      },
      "minItems": 1
    }
  }
};

export const GetInstalledCertificateIdsResponse: any = {
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
    "GetCertificateIdUseEnumType": {
      "description": "Indicates the type of the requested certificate(s).\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "V2GRootCertificate",
        "MORootCertificate",
        "CSMSRootCertificate",
        "V2GCertificateChain",
        "ManufacturerRootCertificate"
      ]
    },
    "GetInstalledCertificateStatusEnumType": {
      "description": "Charging Station indicates if it can process the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "NotFound"
      ]
    },
    "HashAlgorithmEnumType": {
      "description": "Used algorithms for the hashes provided.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "SHA256",
        "SHA384",
        "SHA512"
      ]
    },
    "CertificateHashDataChainType": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "certificateHashData": {
          "$ref": "#/definitions/CertificateHashDataType"
        },
        "certificateType": {
          "$ref": "#/definitions/GetCertificateIdUseEnumType"
        },
        "childCertificateHashData": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/CertificateHashDataType"
          },
          "minItems": 1,
          "maxItems": 4
        }
      },
      "required": [
        "certificateType",
        "certificateHashData"
      ]
    },
    "CertificateHashDataType": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "hashAlgorithm": {
          "$ref": "#/definitions/HashAlgorithmEnumType"
        },
        "issuerNameHash": {
          "description": "Hashed value of the Issuer DN (Distinguished Name).\r\n\r\n",
          "type": "string",
          "maxLength": 128
        },
        "issuerKeyHash": {
          "description": "Hashed value of the issuers public key\r\n",
          "type": "string",
          "maxLength": 128
        },
        "serialNumber": {
          "description": "The serial number of the certificate.\r\n",
          "type": "string",
          "maxLength": 40
        }
      },
      "required": [
        "hashAlgorithm",
        "issuerNameHash",
        "issuerKeyHash",
        "serialNumber"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GetInstalledCertificateStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    },
    "certificateHashDataChain": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/CertificateHashDataChainType"
      },
      "minItems": 1
    }
  },
  "required": [
    "status"
  ]
};

export const GetLocalListVersionRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const GetLocalListVersionResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "versionNumber": {
      "description": "This contains the current version number of the local authorization list in the Charging Station.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "versionNumber"
  ]
};

export const GetLogRequest: any = {
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
    "LogEnumType": {
      "description": "This contains the type of log file that the Charging Station\r\nshould send.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "DiagnosticsLog",
        "SecurityLog"
      ]
    },
    "LogParametersType": {
      "description": "Log\r\nurn:x-enexis:ecdm:uid:2:233373\r\nGeneric class for the configuration of logging entries.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "remoteLocation": {
          "description": "Log. Remote_ Location. URI\r\nurn:x-enexis:ecdm:uid:1:569484\r\nThe URL of the location at the remote system where the log should be stored.\r\n",
          "type": "string",
          "maxLength": 512
        },
        "oldestTimestamp": {
          "description": "Log. Oldest_ Timestamp. Date_ Time\r\nurn:x-enexis:ecdm:uid:1:569477\r\nThis contains the date and time of the oldest logging information to include in the diagnostics.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "latestTimestamp": {
          "description": "Log. Latest_ Timestamp. Date_ Time\r\nurn:x-enexis:ecdm:uid:1:569482\r\nThis contains the date and time of the latest logging information to include in the diagnostics.\r\n",
          "type": "string",
          "format": "date-time"
        }
      },
      "required": [
        "remoteLocation"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "log": {
      "$ref": "#/definitions/LogParametersType"
    },
    "logType": {
      "$ref": "#/definitions/LogEnumType"
    },
    "requestId": {
      "description": "The Id of this request\r\n",
      "type": "integer"
    },
    "retries": {
      "description": "This specifies how many times the Charging Station must try to upload the log before giving up. If this field is not present, it is left to Charging Station to decide how many times it wants to retry.\r\n",
      "type": "integer"
    },
    "retryInterval": {
      "description": "The interval in seconds after which a retry may be attempted. If this field is not present, it is left to Charging Station to decide how long to wait between attempts.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "logType",
    "requestId",
    "log"
  ]
};

export const GetLogResponse: any = {
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
    "LogStatusEnumType": {
      "description": "This field indicates whether the Charging Station was able to accept the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "AcceptedCanceled"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/LogStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    },
    "filename": {
      "description": "This contains the name of the log file that will be uploaded. This field is not present when no logging information is available.\r\n",
      "type": "string",
      "maxLength": 255
    }
  },
  "required": [
    "status"
  ]
};

export const GetMonitoringReportRequest: any = {
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
    "MonitoringCriterionEnumType": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ThresholdMonitoring",
        "DeltaMonitoring",
        "PeriodicMonitoring"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "ComponentVariableType": {
      "description": "Class to report components, variables and variable attributes and characteristics.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        }
      },
      "required": [
        "component"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "componentVariable": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/ComponentVariableType"
      },
      "minItems": 1
    },
    "requestId": {
      "description": "The Id of the request.\r\n",
      "type": "integer"
    },
    "monitoringCriteria": {
      "description": "This field contains criteria for components for which a monitoring report is requested\r\n",
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/MonitoringCriterionEnumType"
      },
      "minItems": 1,
      "maxItems": 3
    }
  },
  "required": [
    "requestId"
  ]
};

export const GetMonitoringReportResponse: any = {
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
    "GenericDeviceModelStatusEnumType": {
      "description": "This field indicates whether the Charging Station was able to accept the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "NotSupported",
        "EmptyResultSet"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GenericDeviceModelStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const GetReportRequest: any = {
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
    "ComponentCriterionEnumType": {
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Active",
        "Available",
        "Enabled",
        "Problem"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "ComponentVariableType": {
      "description": "Class to report components, variables and variable attributes and characteristics.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        }
      },
      "required": [
        "component"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "componentVariable": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/ComponentVariableType"
      },
      "minItems": 1
    },
    "requestId": {
      "description": "The Id of the request.\r\n",
      "type": "integer"
    },
    "componentCriteria": {
      "description": "This field contains criteria for components for which a report is requested\r\n",
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/ComponentCriterionEnumType"
      },
      "minItems": 1,
      "maxItems": 4
    }
  },
  "required": [
    "requestId"
  ]
};

export const GetReportResponse: any = {
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
    "GenericDeviceModelStatusEnumType": {
      "description": "This field indicates whether the Charging Station was able to accept the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "NotSupported",
        "EmptyResultSet"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GenericDeviceModelStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const GetTransactionStatusRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "transactionId": {
      "description": "The Id of the transaction for which the status is requested.\r\n",
      "type": "string",
      "maxLength": 36
    }
  }
};

export const GetTransactionStatusResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "ongoingIndicator": {
      "description": "Whether the transaction is still ongoing.\r\n",
      "type": "boolean"
    },
    "messagesInQueue": {
      "description": "Whether there are still message to be delivered.\r\n",
      "type": "boolean"
    }
  },
  "required": [
    "messagesInQueue"
  ]
};

export const GetVariablesRequest: any = {
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
    "AttributeEnumType": {
      "description": "Attribute type for which value is requested. When absent, default Actual is assumed.\r\n",
      "type": "string",
      "default": "Actual",
      "additionalProperties": false,
      "enum": [
        "Actual",
        "Target",
        "MinSet",
        "MaxSet"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "GetVariableDataType": {
      "description": "Class to hold parameters for GetVariables request.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "attributeType": {
          "$ref": "#/definitions/AttributeEnumType"
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        }
      },
      "required": [
        "component",
        "variable"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "getVariableData": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/GetVariableDataType"
      },
      "minItems": 1
    }
  },
  "required": [
    "getVariableData"
  ]
};

export const GetVariablesResponse: any = {
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
    "AttributeEnumType": {
      "description": "Attribute type for which value is requested. When absent, default Actual is assumed.\r\n",
      "type": "string",
      "default": "Actual",
      "additionalProperties": false,
      "enum": [
        "Actual",
        "Target",
        "MinSet",
        "MaxSet"
      ]
    },
    "GetVariableStatusEnumType": {
      "description": "Result status of getting the variable.\r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "UnknownComponent",
        "UnknownVariable",
        "NotSupportedAttributeType"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "GetVariableResultType": {
      "description": "Class to hold results of GetVariables request.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "attributeStatusInfo": {
          "$ref": "#/definitions/StatusInfoType"
        },
        "attributeStatus": {
          "$ref": "#/definitions/GetVariableStatusEnumType"
        },
        "attributeType": {
          "$ref": "#/definitions/AttributeEnumType"
        },
        "attributeValue": {
          "description": "Value of requested attribute type of component-variable. This field can only be empty when the given status is NOT accepted.\r\n\r\nThe Configuration Variable &lt;&lt;configkey-reporting-value-size,ReportingValueSize&gt;&gt; can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal. \r\n\r\n",
          "type": "string",
          "maxLength": 2500
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        }
      },
      "required": [
        "attributeStatus",
        "component",
        "variable"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "getVariableResult": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/GetVariableResultType"
      },
      "minItems": 1
    }
  },
  "required": [
    "getVariableResult"
  ]
};

export const HeartbeatRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const HeartbeatResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "currentTime": {
      "description": "Contains the current time of the CSMS.\r\n",
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "currentTime"
  ]
};

export const InstallCertificateRequest: any = {
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
    "InstallCertificateUseEnumType": {
      "description": "Indicates the certificate type that is sent.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "V2GRootCertificate",
        "MORootCertificate",
        "CSMSRootCertificate",
        "ManufacturerRootCertificate"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "certificateType": {
      "$ref": "#/definitions/InstallCertificateUseEnumType"
    },
    "certificate": {
      "description": "A PEM encoded X.509 certificate.\r\n",
      "type": "string",
      "maxLength": 5500
    }
  },
  "required": [
    "certificateType",
    "certificate"
  ]
};

export const InstallCertificateResponse: any = {
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
    "InstallCertificateStatusEnumType": {
      "description": "Charging Station indicates if installation was successful.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "Failed"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/InstallCertificateStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const LogStatusNotificationRequest: any = {
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
    "UploadLogStatusEnumType": {
      "description": "This contains the status of the log upload.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "BadMessage",
        "Idle",
        "NotSupportedOperation",
        "PermissionDenied",
        "Uploaded",
        "UploadFailure",
        "Uploading",
        "AcceptedCanceled"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/UploadLogStatusEnumType"
    },
    "requestId": {
      "description": "The request id that was provided in GetLogRequest that started this log upload. This field is mandatory,\r\nunless the message was triggered by a TriggerMessageRequest AND there is no log upload ongoing.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "status"
  ]
};

export const LogStatusNotificationResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const MeterValuesRequest: any = {
  "description": "Request_ Body\r\nurn:x-enexis:ecdm:uid:2:234744\r\n",
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
    "LocationEnumType": {
      "description": "Sampled_ Value. Location. Location_ Code\r\nurn:x-oca:ocpp:uid:1:569265\r\nIndicates where the measured value has been sampled. Default =  \"Outlet\"\r\n\r\n",
      "type": "string",
      "default": "Outlet",
      "additionalProperties": false,
      "enum": [
        "Body",
        "Cable",
        "EV",
        "Inlet",
        "Outlet"
      ]
    },
    "MeasurandEnumType": {
      "description": "Sampled_ Value. Measurand. Measurand_ Code\r\nurn:x-oca:ocpp:uid:1:569263\r\nType of measurement. Default = \"Energy.Active.Import.Register\"\r\n",
      "type": "string",
      "default": "Energy.Active.Import.Register",
      "additionalProperties": false,
      "enum": [
        "Current.Export",
        "Current.Import",
        "Current.Offered",
        "Energy.Active.Export.Register",
        "Energy.Active.Import.Register",
        "Energy.Reactive.Export.Register",
        "Energy.Reactive.Import.Register",
        "Energy.Active.Export.Interval",
        "Energy.Active.Import.Interval",
        "Energy.Active.Net",
        "Energy.Reactive.Export.Interval",
        "Energy.Reactive.Import.Interval",
        "Energy.Reactive.Net",
        "Energy.Apparent.Net",
        "Energy.Apparent.Import",
        "Energy.Apparent.Export",
        "Frequency",
        "Power.Active.Export",
        "Power.Active.Import",
        "Power.Factor",
        "Power.Offered",
        "Power.Reactive.Export",
        "Power.Reactive.Import",
        "SoC",
        "Voltage"
      ]
    },
    "PhaseEnumType": {
      "description": "Sampled_ Value. Phase. Phase_ Code\r\nurn:x-oca:ocpp:uid:1:569264\r\nIndicates how the measured value is to be interpreted. For instance between L1 and neutral (L1-N) Please note that not all values of phase are applicable to all Measurands. When phase is absent, the measured value is interpreted as an overall value.\r\n",
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
    "ReadingContextEnumType": {
      "description": "Sampled_ Value. Context. Reading_ Context_ Code\r\nurn:x-oca:ocpp:uid:1:569261\r\nType of detail value: start, end or sample. Default = \"Sample.Periodic\"\r\n",
      "type": "string",
      "default": "Sample.Periodic",
      "additionalProperties": false,
      "enum": [
        "Interruption.Begin",
        "Interruption.End",
        "Other",
        "Sample.Clock",
        "Sample.Periodic",
        "Transaction.Begin",
        "Transaction.End",
        "Trigger"
      ]
    },
    "MeterValueType": {
      "description": "Meter_ Value\r\nurn:x-oca:ocpp:uid:2:233265\r\nCollection of one or more sampled values in MeterValuesRequest and TransactionEvent. All sampled values in a MeterValue are sampled at the same point in time.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "sampledValue": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/SampledValueType"
          },
          "minItems": 1
        },
        "timestamp": {
          "description": "Meter_ Value. Timestamp. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569259\r\nTimestamp for measured value(s).\r\n",
          "type": "string",
          "format": "date-time"
        }
      },
      "required": [
        "timestamp",
        "sampledValue"
      ]
    },
    "SampledValueType": {
      "description": "Sampled_ Value\r\nurn:x-oca:ocpp:uid:2:233266\r\nSingle sampled value in MeterValues. Each value can be accompanied by optional fields.\r\n\r\nTo save on mobile data usage, default values of all of the optional fields are such that. The value without any additional fields will be interpreted, as a register reading of active import energy in Wh (Watt-hour) units.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "value": {
          "description": "Sampled_ Value. Value. Measure\r\nurn:x-oca:ocpp:uid:1:569260\r\nIndicates the measured value.\r\n\r\n",
          "type": "number"
        },
        "context": {
          "$ref": "#/definitions/ReadingContextEnumType"
        },
        "measurand": {
          "$ref": "#/definitions/MeasurandEnumType"
        },
        "phase": {
          "$ref": "#/definitions/PhaseEnumType"
        },
        "location": {
          "$ref": "#/definitions/LocationEnumType"
        },
        "signedMeterValue": {
          "$ref": "#/definitions/SignedMeterValueType"
        },
        "unitOfMeasure": {
          "$ref": "#/definitions/UnitOfMeasureType"
        }
      },
      "required": [
        "value"
      ]
    },
    "SignedMeterValueType": {
      "description": "Represent a signed version of the meter value.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "signedMeterData": {
          "description": "Base64 encoded, contains the signed data which might contain more then just the meter value. It can contain information like timestamps, reference to a customer etc.\r\n",
          "type": "string",
          "maxLength": 2500
        },
        "signingMethod": {
          "description": "Method used to create the digital signature.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "encodingMethod": {
          "description": "Method used to encode the meter values before applying the digital signature algorithm.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "publicKey": {
          "description": "Base64 encoded, sending depends on configuration variable _PublicKeyWithSignedMeterValue_.\r\n",
          "type": "string",
          "maxLength": 2500
        }
      },
      "required": [
        "signedMeterData",
        "signingMethod",
        "encodingMethod",
        "publicKey"
      ]
    },
    "UnitOfMeasureType": {
      "description": "Represents a UnitOfMeasure with a multiplier\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "unit": {
          "description": "Unit of the value. Default = \"Wh\" if the (default) measurand is an \"Energy\" type.\r\nThis field SHALL use a value from the list Standardized Units of Measurements in Part 2 Appendices. \r\nIf an applicable unit is available in that list, otherwise a \"custom\" unit might be used.\r\n",
          "type": "string",
          "default": "Wh",
          "maxLength": 20
        },
        "multiplier": {
          "description": "Multiplier, this value represents the exponent to base 10. I.e. multiplier 3 means 10 raised to the 3rd power. Default is 0.\r\n",
          "type": "integer",
          "default": 0
        }
      }
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "evseId": {
      "description": "Request_ Body. EVSEID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:571101\r\nThis contains a number (&gt;0) designating an EVSE of the Charging Station. ‘0’ (zero) is used to designate the main power meter.\r\n",
      "type": "integer"
    },
    "meterValue": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/MeterValueType"
      },
      "minItems": 1
    }
  },
  "required": [
    "evseId",
    "meterValue"
  ]
};

export const MeterValuesResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const NotifyChargingLimitRequest: any = {
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
    "ChargingLimitSourceEnumType": {
      "description": "Charging_ Limit. Charging_ Limit_ Source. Charging_ Limit_ Source_ Code\r\nurn:x-enexis:ecdm:uid:1:570845\r\nRepresents the source of the charging limit.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "EMS",
        "Other",
        "SO",
        "CSO"
      ]
    },
    "ChargingRateUnitEnumType": {
      "description": "Charging_ Schedule. Charging_ Rate_ Unit. Charging_ Rate_ Unit_ Code\r\nurn:x-oca:ocpp:uid:1:569238\r\nThe unit of measure Limit is expressed in.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "W",
        "A"
      ]
    },
    "CostKindEnumType": {
      "description": "Cost. Cost_ Kind. Cost_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569243\r\nThe kind of cost referred to in the message element amount\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "CarbonDioxideEmission",
        "RelativePricePercentage",
        "RenewableGenerationPercentage"
      ]
    },
    "ChargingLimitType": {
      "description": "Charging_ Limit\r\nurn:x-enexis:ecdm:uid:2:234489\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "chargingLimitSource": {
          "$ref": "#/definitions/ChargingLimitSourceEnumType"
        },
        "isGridCritical": {
          "description": "Charging_ Limit. Is_ Grid_ Critical. Indicator\r\nurn:x-enexis:ecdm:uid:1:570847\r\nIndicates whether the charging limit is critical for the grid.\r\n",
          "type": "boolean"
        }
      },
      "required": [
        "chargingLimitSource"
      ]
    },
    "ChargingSchedulePeriodType": {
      "description": "Charging_ Schedule_ Period\r\nurn:x-oca:ocpp:uid:2:233257\r\nCharging schedule period structure defines a time period in a charging schedule.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startPeriod": {
          "description": "Charging_ Schedule_ Period. Start_ Period. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569240\r\nStart of the period, in seconds from the start of schedule. The value of StartPeriod also defines the stop time of the previous period.\r\n",
          "type": "integer"
        },
        "limit": {
          "description": "Charging_ Schedule_ Period. Limit. Measure\r\nurn:x-oca:ocpp:uid:1:569241\r\nCharging rate limit during the schedule period, in the applicable chargingRateUnit, for example in Amperes (A) or Watts (W). Accepts at most one digit fraction (e.g. 8.1).\r\n",
          "type": "number"
        },
        "numberPhases": {
          "description": "Charging_ Schedule_ Period. Number_ Phases. Counter\r\nurn:x-oca:ocpp:uid:1:569242\r\nThe number of phases that can be used for charging. If a number of phases is needed, numberPhases=3 will be assumed unless another number is given.\r\n",
          "type": "integer"
        },
        "phaseToUse": {
          "description": "Values: 1..3, Used if numberPhases=1 and if the EVSE is capable of switching the phase connected to the EV, i.e. ACPhaseSwitchingSupported is defined and true. It’s not allowed unless both conditions above are true. If both conditions are true, and phaseToUse is omitted, the Charging Station / EVSE will make the selection on its own.\r\n\r\n",
          "type": "integer"
        }
      },
      "required": [
        "startPeriod",
        "limit"
      ]
    },
    "ChargingScheduleType": {
      "description": "Charging_ Schedule\r\nurn:x-oca:ocpp:uid:2:233256\r\nCharging schedule structure defines a list of charging periods, as used in: GetCompositeSchedule.conf and ChargingProfile. \r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identifies the ChargingSchedule.\r\n",
          "type": "integer"
        },
        "startSchedule": {
          "description": "Charging_ Schedule. Start_ Schedule. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569237\r\nStarting point of an absolute schedule. If absent the schedule will be relative to start of charging.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "duration": {
          "description": "Charging_ Schedule. Duration. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569236\r\nDuration of the charging schedule in seconds. If the duration is left empty, the last period will continue indefinitely or until end of the transaction if chargingProfilePurpose = TxProfile.\r\n",
          "type": "integer"
        },
        "chargingRateUnit": {
          "$ref": "#/definitions/ChargingRateUnitEnumType"
        },
        "chargingSchedulePeriod": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ChargingSchedulePeriodType"
          },
          "minItems": 1,
          "maxItems": 1024
        },
        "minChargingRate": {
          "description": "Charging_ Schedule. Min_ Charging_ Rate. Numeric\r\nurn:x-oca:ocpp:uid:1:569239\r\nMinimum charging rate supported by the EV. The unit of measure is defined by the chargingRateUnit. This parameter is intended to be used by a local smart charging algorithm to optimize the power allocation for in the case a charging process is inefficient at lower charging rates. Accepts at most one digit fraction (e.g. 8.1)\r\n",
          "type": "number"
        },
        "salesTariff": {
          "$ref": "#/definitions/SalesTariffType"
        }
      },
      "required": [
        "id",
        "chargingRateUnit",
        "chargingSchedulePeriod"
      ]
    },
    "ConsumptionCostType": {
      "description": "Consumption_ Cost\r\nurn:x-oca:ocpp:uid:2:233259\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startValue": {
          "description": "Consumption_ Cost. Start_ Value. Numeric\r\nurn:x-oca:ocpp:uid:1:569246\r\nThe lowest level of consumption that defines the starting point of this consumption block. The block interval extends to the start of the next interval.\r\n",
          "type": "number"
        },
        "cost": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/CostType"
          },
          "minItems": 1,
          "maxItems": 3
        }
      },
      "required": [
        "startValue",
        "cost"
      ]
    },
    "CostType": {
      "description": "Cost\r\nurn:x-oca:ocpp:uid:2:233258\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "costKind": {
          "$ref": "#/definitions/CostKindEnumType"
        },
        "amount": {
          "description": "Cost. Amount. Amount\r\nurn:x-oca:ocpp:uid:1:569244\r\nThe estimated or actual cost per kWh\r\n",
          "type": "integer"
        },
        "amountMultiplier": {
          "description": "Cost. Amount_ Multiplier. Integer\r\nurn:x-oca:ocpp:uid:1:569245\r\nValues: -3..3, The amountMultiplier defines the exponent to base 10 (dec). The final value is determined by: amount * 10 ^ amountMultiplier\r\n",
          "type": "integer"
        }
      },
      "required": [
        "costKind",
        "amount"
      ]
    },
    "RelativeTimeIntervalType": {
      "description": "Relative_ Timer_ Interval\r\nurn:x-oca:ocpp:uid:2:233270\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "start": {
          "description": "Relative_ Timer_ Interval. Start. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569279\r\nStart of the interval, in seconds from NOW.\r\n",
          "type": "integer"
        },
        "duration": {
          "description": "Relative_ Timer_ Interval. Duration. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569280\r\nDuration of the interval, in seconds.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "start"
      ]
    },
    "SalesTariffEntryType": {
      "description": "Sales_ Tariff_ Entry\r\nurn:x-oca:ocpp:uid:2:233271\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "relativeTimeInterval": {
          "$ref": "#/definitions/RelativeTimeIntervalType"
        },
        "ePriceLevel": {
          "description": "Sales_ Tariff_ Entry. E_ Price_ Level. Unsigned_ Integer\r\nurn:x-oca:ocpp:uid:1:569281\r\nDefines the price level of this SalesTariffEntry (referring to NumEPriceLevels). Small values for the EPriceLevel represent a cheaper TariffEntry. Large values for the EPriceLevel represent a more expensive TariffEntry.\r\n",
          "type": "integer",
          "minimum": 0
        },
        "consumptionCost": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ConsumptionCostType"
          },
          "minItems": 1,
          "maxItems": 3
        }
      },
      "required": [
        "relativeTimeInterval"
      ]
    },
    "SalesTariffType": {
      "description": "Sales_ Tariff\r\nurn:x-oca:ocpp:uid:2:233272\r\nNOTE: This dataType is based on dataTypes from &lt;&lt;ref-ISOIEC15118-2,ISO 15118-2&gt;&gt;.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nSalesTariff identifier used to identify one sales tariff. An SAID remains a unique identifier for one schedule throughout a charging session.\r\n",
          "type": "integer"
        },
        "salesTariffDescription": {
          "description": "Sales_ Tariff. Sales. Tariff_ Description\r\nurn:x-oca:ocpp:uid:1:569283\r\nA human readable title/short description of the sales tariff e.g. for HMI display purposes.\r\n",
          "type": "string",
          "maxLength": 32
        },
        "numEPriceLevels": {
          "description": "Sales_ Tariff. Num_ E_ Price_ Levels. Counter\r\nurn:x-oca:ocpp:uid:1:569284\r\nDefines the overall number of distinct price levels used across all provided SalesTariff elements.\r\n",
          "type": "integer"
        },
        "salesTariffEntry": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/SalesTariffEntryType"
          },
          "minItems": 1,
          "maxItems": 1024
        }
      },
      "required": [
        "id",
        "salesTariffEntry"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "chargingSchedule": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/ChargingScheduleType"
      },
      "minItems": 1
    },
    "evseId": {
      "description": "The charging schedule contained in this notification applies to an EVSE. evseId must be &gt; 0.\r\n",
      "type": "integer"
    },
    "chargingLimit": {
      "$ref": "#/definitions/ChargingLimitType"
    }
  },
  "required": [
    "chargingLimit"
  ]
};

export const NotifyChargingLimitResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const NotifyCustomerInformationRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "data": {
      "description": "(Part of) the requested data. No format specified in which the data is returned. Should be human readable.\r\n",
      "type": "string",
      "maxLength": 512
    },
    "tbc": {
      "description": "“to be continued” indicator. Indicates whether another part of the monitoringData follows in an upcoming notifyMonitoringReportRequest message. Default value when omitted is false.\r\n",
      "type": "boolean",
      "default": false
    },
    "seqNo": {
      "description": "Sequence number of this message. First message starts at 0.\r\n",
      "type": "integer"
    },
    "generatedAt": {
      "description": " Timestamp of the moment this message was generated at the Charging Station.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "requestId": {
      "description": "The Id of the request.\r\n\r\n",
      "type": "integer"
    }
  },
  "required": [
    "data",
    "seqNo",
    "generatedAt",
    "requestId"
  ]
};

export const NotifyCustomerInformationResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const NotifyDisplayMessagesRequest: any = {
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
    "MessageFormatEnumType": {
      "description": "Message_ Content. Format. Message_ Format_ Code\r\nurn:x-enexis:ecdm:uid:1:570848\r\nFormat of the message.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ASCII",
        "HTML",
        "URI",
        "UTF8"
      ]
    },
    "MessagePriorityEnumType": {
      "description": "Message_ Info. Priority. Message_ Priority_ Code\r\nurn:x-enexis:ecdm:uid:1:569253\r\nWith what priority should this message be shown\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "AlwaysFront",
        "InFront",
        "NormalCycle"
      ]
    },
    "MessageStateEnumType": {
      "description": "Message_ Info. State. Message_ State_ Code\r\nurn:x-enexis:ecdm:uid:1:569254\r\nDuring what state should this message be shown. When omitted this message should be shown in any state of the Charging Station.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Charging",
        "Faulted",
        "Idle",
        "Unavailable"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "MessageContentType": {
      "description": "Message_ Content\r\nurn:x-enexis:ecdm:uid:2:234490\r\nContains message details, for a message to be displayed on a Charging Station.\r\n\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "format": {
          "$ref": "#/definitions/MessageFormatEnumType"
        },
        "language": {
          "description": "Message_ Content. Language. Language_ Code\r\nurn:x-enexis:ecdm:uid:1:570849\r\nMessage language identifier. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n",
          "type": "string",
          "maxLength": 8
        },
        "content": {
          "description": "Message_ Content. Content. Message\r\nurn:x-enexis:ecdm:uid:1:570852\r\nMessage contents.\r\n\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "format",
        "content"
      ]
    },
    "MessageInfoType": {
      "description": "Message_ Info\r\nurn:x-enexis:ecdm:uid:2:233264\r\nContains message details, for a message to be displayed on a Charging Station.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "display": {
          "$ref": "#/definitions/ComponentType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nMaster resource identifier, unique within an exchange context. It is defined within the OCPP context as a positive Integer value (greater or equal to zero).\r\n",
          "type": "integer"
        },
        "priority": {
          "$ref": "#/definitions/MessagePriorityEnumType"
        },
        "state": {
          "$ref": "#/definitions/MessageStateEnumType"
        },
        "startDateTime": {
          "description": "Message_ Info. Start. Date_ Time\r\nurn:x-enexis:ecdm:uid:1:569256\r\nFrom what date-time should this message be shown. If omitted: directly.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "endDateTime": {
          "description": "Message_ Info. End. Date_ Time\r\nurn:x-enexis:ecdm:uid:1:569257\r\nUntil what date-time should this message be shown, after this date/time this message SHALL be removed.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "transactionId": {
          "description": "During which transaction shall this message be shown.\r\nMessage SHALL be removed by the Charging Station after transaction has\r\nended.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "message": {
          "$ref": "#/definitions/MessageContentType"
        }
      },
      "required": [
        "id",
        "priority",
        "message"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "messageInfo": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/MessageInfoType"
      },
      "minItems": 1
    },
    "requestId": {
      "description": "The id of the &lt;&lt;getdisplaymessagesrequest,GetDisplayMessagesRequest&gt;&gt; that requested this message.\r\n",
      "type": "integer"
    },
    "tbc": {
      "description": "\"to be continued\" indicator. Indicates whether another part of the report follows in an upcoming NotifyDisplayMessagesRequest message. Default value when omitted is false.\r\n",
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "requestId"
  ]
};

export const NotifyDisplayMessagesResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const NotifyEVChargingNeedsRequest: any = {
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
    "EnergyTransferModeEnumType": {
      "description": "Charging_ Needs. Requested. Energy_ Transfer_ Mode_ Code\r\nurn:x-oca:ocpp:uid:1:569209\r\nMode of energy transfer requested by the EV.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "DC",
        "AC_single_phase",
        "AC_two_phase",
        "AC_three_phase"
      ]
    },
    "ACChargingParametersType": {
      "description": "AC_ Charging_ Parameters\r\nurn:x-oca:ocpp:uid:2:233250\r\nEV AC charging parameters.\r\n\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "energyAmount": {
          "description": "AC_ Charging_ Parameters. Energy_ Amount. Energy_ Amount\r\nurn:x-oca:ocpp:uid:1:569211\r\nAmount of energy requested (in Wh). This includes energy required for preconditioning.\r\n",
          "type": "integer"
        },
        "evMinCurrent": {
          "description": "AC_ Charging_ Parameters. EV_ Min. Current\r\nurn:x-oca:ocpp:uid:1:569212\r\nMinimum current (amps) supported by the electric vehicle (per phase).\r\n",
          "type": "integer"
        },
        "evMaxCurrent": {
          "description": "AC_ Charging_ Parameters. EV_ Max. Current\r\nurn:x-oca:ocpp:uid:1:569213\r\nMaximum current (amps) supported by the electric vehicle (per phase). Includes cable capacity.\r\n",
          "type": "integer"
        },
        "evMaxVoltage": {
          "description": "AC_ Charging_ Parameters. EV_ Max. Voltage\r\nurn:x-oca:ocpp:uid:1:569214\r\nMaximum voltage supported by the electric vehicle\r\n",
          "type": "integer"
        }
      },
      "required": [
        "energyAmount",
        "evMinCurrent",
        "evMaxCurrent",
        "evMaxVoltage"
      ]
    },
    "ChargingNeedsType": {
      "description": "Charging_ Needs\r\nurn:x-oca:ocpp:uid:2:233249\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "acChargingParameters": {
          "$ref": "#/definitions/ACChargingParametersType"
        },
        "dcChargingParameters": {
          "$ref": "#/definitions/DCChargingParametersType"
        },
        "requestedEnergyTransfer": {
          "$ref": "#/definitions/EnergyTransferModeEnumType"
        },
        "departureTime": {
          "description": "Charging_ Needs. Departure_ Time. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569223\r\nEstimated departure time of the EV.\r\n",
          "type": "string",
          "format": "date-time"
        }
      },
      "required": [
        "requestedEnergyTransfer"
      ]
    },
    "DCChargingParametersType": {
      "description": "DC_ Charging_ Parameters\r\nurn:x-oca:ocpp:uid:2:233251\r\nEV DC charging parameters\r\n\r\n\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evMaxCurrent": {
          "description": "DC_ Charging_ Parameters. EV_ Max. Current\r\nurn:x-oca:ocpp:uid:1:569215\r\nMaximum current (amps) supported by the electric vehicle. Includes cable capacity.\r\n",
          "type": "integer"
        },
        "evMaxVoltage": {
          "description": "DC_ Charging_ Parameters. EV_ Max. Voltage\r\nurn:x-oca:ocpp:uid:1:569216\r\nMaximum voltage supported by the electric vehicle\r\n",
          "type": "integer"
        },
        "energyAmount": {
          "description": "DC_ Charging_ Parameters. Energy_ Amount. Energy_ Amount\r\nurn:x-oca:ocpp:uid:1:569217\r\nAmount of energy requested (in Wh). This inludes energy required for preconditioning.\r\n",
          "type": "integer"
        },
        "evMaxPower": {
          "description": "DC_ Charging_ Parameters. EV_ Max. Power\r\nurn:x-oca:ocpp:uid:1:569218\r\nMaximum power (in W) supported by the electric vehicle. Required for DC charging.\r\n",
          "type": "integer"
        },
        "stateOfCharge": {
          "description": "DC_ Charging_ Parameters. State_ Of_ Charge. Numeric\r\nurn:x-oca:ocpp:uid:1:569219\r\nEnergy available in the battery (in percent of the battery capacity)\r\n",
          "type": "integer",
          "minimum": 0,
          "maximum": 100
        },
        "evEnergyCapacity": {
          "description": "DC_ Charging_ Parameters. EV_ Energy_ Capacity. Numeric\r\nurn:x-oca:ocpp:uid:1:569220\r\nCapacity of the electric vehicle battery (in Wh)\r\n",
          "type": "integer"
        },
        "fullSoC": {
          "description": "DC_ Charging_ Parameters. Full_ SOC. Percentage\r\nurn:x-oca:ocpp:uid:1:569221\r\nPercentage of SoC at which the EV considers the battery fully charged. (possible values: 0 - 100)\r\n",
          "type": "integer",
          "minimum": 0,
          "maximum": 100
        },
        "bulkSoC": {
          "description": "DC_ Charging_ Parameters. Bulk_ SOC. Percentage\r\nurn:x-oca:ocpp:uid:1:569222\r\nPercentage of SoC at which the EV considers a fast charging process to end. (possible values: 0 - 100)\r\n",
          "type": "integer",
          "minimum": 0,
          "maximum": 100
        }
      },
      "required": [
        "evMaxCurrent",
        "evMaxVoltage"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "maxScheduleTuples": {
      "description": "Contains the maximum schedule tuples the car supports per schedule.\r\n",
      "type": "integer"
    },
    "chargingNeeds": {
      "$ref": "#/definitions/ChargingNeedsType"
    },
    "evseId": {
      "description": "Defines the EVSE and connector to which the EV is connected. EvseId may not be 0.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "evseId",
    "chargingNeeds"
  ]
};

export const NotifyEVChargingNeedsResponse: any = {
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
    "NotifyEVChargingNeedsStatusEnumType": {
      "description": "Returns whether the CSMS has been able to process the message successfully. It does not imply that the evChargingNeeds can be met with the current charging profile.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "Processing"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/NotifyEVChargingNeedsStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const NotifyEVChargingScheduleRequest: any = {
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
    "ChargingRateUnitEnumType": {
      "description": "Charging_ Schedule. Charging_ Rate_ Unit. Charging_ Rate_ Unit_ Code\r\nurn:x-oca:ocpp:uid:1:569238\r\nThe unit of measure Limit is expressed in.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "W",
        "A"
      ]
    },
    "CostKindEnumType": {
      "description": "Cost. Cost_ Kind. Cost_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569243\r\nThe kind of cost referred to in the message element amount\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "CarbonDioxideEmission",
        "RelativePricePercentage",
        "RenewableGenerationPercentage"
      ]
    },
    "ChargingSchedulePeriodType": {
      "description": "Charging_ Schedule_ Period\r\nurn:x-oca:ocpp:uid:2:233257\r\nCharging schedule period structure defines a time period in a charging schedule.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startPeriod": {
          "description": "Charging_ Schedule_ Period. Start_ Period. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569240\r\nStart of the period, in seconds from the start of schedule. The value of StartPeriod also defines the stop time of the previous period.\r\n",
          "type": "integer"
        },
        "limit": {
          "description": "Charging_ Schedule_ Period. Limit. Measure\r\nurn:x-oca:ocpp:uid:1:569241\r\nCharging rate limit during the schedule period, in the applicable chargingRateUnit, for example in Amperes (A) or Watts (W). Accepts at most one digit fraction (e.g. 8.1).\r\n",
          "type": "number"
        },
        "numberPhases": {
          "description": "Charging_ Schedule_ Period. Number_ Phases. Counter\r\nurn:x-oca:ocpp:uid:1:569242\r\nThe number of phases that can be used for charging. If a number of phases is needed, numberPhases=3 will be assumed unless another number is given.\r\n",
          "type": "integer"
        },
        "phaseToUse": {
          "description": "Values: 1..3, Used if numberPhases=1 and if the EVSE is capable of switching the phase connected to the EV, i.e. ACPhaseSwitchingSupported is defined and true. It’s not allowed unless both conditions above are true. If both conditions are true, and phaseToUse is omitted, the Charging Station / EVSE will make the selection on its own.\r\n\r\n",
          "type": "integer"
        }
      },
      "required": [
        "startPeriod",
        "limit"
      ]
    },
    "ChargingScheduleType": {
      "description": "Charging_ Schedule\r\nurn:x-oca:ocpp:uid:2:233256\r\nCharging schedule structure defines a list of charging periods, as used in: GetCompositeSchedule.conf and ChargingProfile. \r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identifies the ChargingSchedule.\r\n",
          "type": "integer"
        },
        "startSchedule": {
          "description": "Charging_ Schedule. Start_ Schedule. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569237\r\nStarting point of an absolute schedule. If absent the schedule will be relative to start of charging.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "duration": {
          "description": "Charging_ Schedule. Duration. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569236\r\nDuration of the charging schedule in seconds. If the duration is left empty, the last period will continue indefinitely or until end of the transaction if chargingProfilePurpose = TxProfile.\r\n",
          "type": "integer"
        },
        "chargingRateUnit": {
          "$ref": "#/definitions/ChargingRateUnitEnumType"
        },
        "chargingSchedulePeriod": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ChargingSchedulePeriodType"
          },
          "minItems": 1,
          "maxItems": 1024
        },
        "minChargingRate": {
          "description": "Charging_ Schedule. Min_ Charging_ Rate. Numeric\r\nurn:x-oca:ocpp:uid:1:569239\r\nMinimum charging rate supported by the EV. The unit of measure is defined by the chargingRateUnit. This parameter is intended to be used by a local smart charging algorithm to optimize the power allocation for in the case a charging process is inefficient at lower charging rates. Accepts at most one digit fraction (e.g. 8.1)\r\n",
          "type": "number"
        },
        "salesTariff": {
          "$ref": "#/definitions/SalesTariffType"
        }
      },
      "required": [
        "id",
        "chargingRateUnit",
        "chargingSchedulePeriod"
      ]
    },
    "ConsumptionCostType": {
      "description": "Consumption_ Cost\r\nurn:x-oca:ocpp:uid:2:233259\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startValue": {
          "description": "Consumption_ Cost. Start_ Value. Numeric\r\nurn:x-oca:ocpp:uid:1:569246\r\nThe lowest level of consumption that defines the starting point of this consumption block. The block interval extends to the start of the next interval.\r\n",
          "type": "number"
        },
        "cost": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/CostType"
          },
          "minItems": 1,
          "maxItems": 3
        }
      },
      "required": [
        "startValue",
        "cost"
      ]
    },
    "CostType": {
      "description": "Cost\r\nurn:x-oca:ocpp:uid:2:233258\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "costKind": {
          "$ref": "#/definitions/CostKindEnumType"
        },
        "amount": {
          "description": "Cost. Amount. Amount\r\nurn:x-oca:ocpp:uid:1:569244\r\nThe estimated or actual cost per kWh\r\n",
          "type": "integer"
        },
        "amountMultiplier": {
          "description": "Cost. Amount_ Multiplier. Integer\r\nurn:x-oca:ocpp:uid:1:569245\r\nValues: -3..3, The amountMultiplier defines the exponent to base 10 (dec). The final value is determined by: amount * 10 ^ amountMultiplier\r\n",
          "type": "integer"
        }
      },
      "required": [
        "costKind",
        "amount"
      ]
    },
    "RelativeTimeIntervalType": {
      "description": "Relative_ Timer_ Interval\r\nurn:x-oca:ocpp:uid:2:233270\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "start": {
          "description": "Relative_ Timer_ Interval. Start. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569279\r\nStart of the interval, in seconds from NOW.\r\n",
          "type": "integer"
        },
        "duration": {
          "description": "Relative_ Timer_ Interval. Duration. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569280\r\nDuration of the interval, in seconds.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "start"
      ]
    },
    "SalesTariffEntryType": {
      "description": "Sales_ Tariff_ Entry\r\nurn:x-oca:ocpp:uid:2:233271\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "relativeTimeInterval": {
          "$ref": "#/definitions/RelativeTimeIntervalType"
        },
        "ePriceLevel": {
          "description": "Sales_ Tariff_ Entry. E_ Price_ Level. Unsigned_ Integer\r\nurn:x-oca:ocpp:uid:1:569281\r\nDefines the price level of this SalesTariffEntry (referring to NumEPriceLevels). Small values for the EPriceLevel represent a cheaper TariffEntry. Large values for the EPriceLevel represent a more expensive TariffEntry.\r\n",
          "type": "integer",
          "minimum": 0
        },
        "consumptionCost": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ConsumptionCostType"
          },
          "minItems": 1,
          "maxItems": 3
        }
      },
      "required": [
        "relativeTimeInterval"
      ]
    },
    "SalesTariffType": {
      "description": "Sales_ Tariff\r\nurn:x-oca:ocpp:uid:2:233272\r\nNOTE: This dataType is based on dataTypes from &lt;&lt;ref-ISOIEC15118-2,ISO 15118-2&gt;&gt;.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nSalesTariff identifier used to identify one sales tariff. An SAID remains a unique identifier for one schedule throughout a charging session.\r\n",
          "type": "integer"
        },
        "salesTariffDescription": {
          "description": "Sales_ Tariff. Sales. Tariff_ Description\r\nurn:x-oca:ocpp:uid:1:569283\r\nA human readable title/short description of the sales tariff e.g. for HMI display purposes.\r\n",
          "type": "string",
          "maxLength": 32
        },
        "numEPriceLevels": {
          "description": "Sales_ Tariff. Num_ E_ Price_ Levels. Counter\r\nurn:x-oca:ocpp:uid:1:569284\r\nDefines the overall number of distinct price levels used across all provided SalesTariff elements.\r\n",
          "type": "integer"
        },
        "salesTariffEntry": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/SalesTariffEntryType"
          },
          "minItems": 1,
          "maxItems": 1024
        }
      },
      "required": [
        "id",
        "salesTariffEntry"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "timeBase": {
      "description": "Periods contained in the charging profile are relative to this point in time.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "chargingSchedule": {
      "$ref": "#/definitions/ChargingScheduleType"
    },
    "evseId": {
      "description": "The charging schedule contained in this notification applies to an EVSE. EvseId must be &gt; 0.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "timeBase",
    "evseId",
    "chargingSchedule"
  ]
};

export const NotifyEVChargingScheduleResponse: any = {
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
    "GenericStatusEnumType": {
      "description": "Returns whether the CSMS has been able to process the message successfully. It does not imply any approval of the charging schedule.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GenericStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const NotifyEventRequest: any = {
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
    "EventNotificationEnumType": {
      "description": "Specifies the event notification type of the message.\r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "HardWiredNotification",
        "HardWiredMonitor",
        "PreconfiguredMonitor",
        "CustomMonitor"
      ]
    },
    "EventTriggerEnumType": {
      "description": "Type of monitor that triggered this event, e.g. exceeding a threshold value.\r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Alerting",
        "Delta",
        "Periodic"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EventDataType": {
      "description": "Class to report an event notification for a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "eventId": {
          "description": "Identifies the event. This field can be referred to as a cause by other events.\r\n\r\n",
          "type": "integer"
        },
        "timestamp": {
          "description": "Timestamp of the moment the report was generated.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "trigger": {
          "$ref": "#/definitions/EventTriggerEnumType"
        },
        "cause": {
          "description": "Refers to the Id of an event that is considered to be the cause for this event.\r\n\r\n",
          "type": "integer"
        },
        "actualValue": {
          "description": "Actual value (_attributeType_ Actual) of the variable.\r\n\r\nThe Configuration Variable &lt;&lt;configkey-reporting-value-size,ReportingValueSize&gt;&gt; can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal. \r\n\r\n",
          "type": "string",
          "maxLength": 2500
        },
        "techCode": {
          "description": "Technical (error) code as reported by component.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "techInfo": {
          "description": "Technical detail information as reported by component.\r\n",
          "type": "string",
          "maxLength": 500
        },
        "cleared": {
          "description": "_Cleared_ is set to true to report the clearing of a monitored situation, i.e. a 'return to normal'. \r\n\r\n",
          "type": "boolean"
        },
        "transactionId": {
          "description": "If an event notification is linked to a specific transaction, this field can be used to specify its transactionId.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variableMonitoringId": {
          "description": "Identifies the VariableMonitoring which triggered the event.\r\n",
          "type": "integer"
        },
        "eventNotificationType": {
          "$ref": "#/definitions/EventNotificationEnumType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        }
      },
      "required": [
        "eventId",
        "timestamp",
        "trigger",
        "actualValue",
        "eventNotificationType",
        "component",
        "variable"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "generatedAt": {
      "description": "Timestamp of the moment this message was generated at the Charging Station.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "tbc": {
      "description": "“to be continued” indicator. Indicates whether another part of the report follows in an upcoming notifyEventRequest message. Default value when omitted is false. \r\n",
      "type": "boolean",
      "default": false
    },
    "seqNo": {
      "description": "Sequence number of this message. First message starts at 0.\r\n",
      "type": "integer"
    },
    "eventData": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/EventDataType"
      },
      "minItems": 1
    }
  },
  "required": [
    "generatedAt",
    "seqNo",
    "eventData"
  ]
};

export const NotifyEventResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const NotifyMonitoringReportRequest: any = {
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
    "MonitorEnumType": {
      "description": "The type of this monitor, e.g. a threshold, delta or periodic monitor. \r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "UpperThreshold",
        "LowerThreshold",
        "Delta",
        "Periodic",
        "PeriodicClockAligned"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "MonitoringDataType": {
      "description": "Class to hold parameters of SetVariableMonitoring request.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        },
        "variableMonitoring": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/VariableMonitoringType"
          },
          "minItems": 1
        }
      },
      "required": [
        "component",
        "variable",
        "variableMonitoring"
      ]
    },
    "VariableMonitoringType": {
      "description": "A monitoring setting for a variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identifies the monitor.\r\n",
          "type": "integer"
        },
        "transaction": {
          "description": "Monitor only active when a transaction is ongoing on a component relevant to this transaction. \r\n",
          "type": "boolean"
        },
        "value": {
          "description": "Value for threshold or delta monitoring.\r\nFor Periodic or PeriodicClockAligned this is the interval in seconds.\r\n",
          "type": "number"
        },
        "type": {
          "$ref": "#/definitions/MonitorEnumType"
        },
        "severity": {
          "description": "The severity that will be assigned to an event that is triggered by this monitor. The severity range is 0-9, with 0 as the highest and 9 as the lowest severity level.\r\n\r\nThe severity levels have the following meaning: +\r\n*0-Danger* +\r\nIndicates lives are potentially in danger. Urgent attention is needed and action should be taken immediately. +\r\n*1-Hardware Failure* +\r\nIndicates that the Charging Station is unable to continue regular operations due to Hardware issues. Action is required. +\r\n*2-System Failure* +\r\nIndicates that the Charging Station is unable to continue regular operations due to software or minor hardware issues. Action is required. +\r\n*3-Critical* +\r\nIndicates a critical error. Action is required. +\r\n*4-Error* +\r\nIndicates a non-urgent error. Action is required. +\r\n*5-Alert* +\r\nIndicates an alert event. Default severity for any type of monitoring event.  +\r\n*6-Warning* +\r\nIndicates a warning event. Action may be required. +\r\n*7-Notice* +\r\nIndicates an unusual event. No immediate action is required. +\r\n*8-Informational* +\r\nIndicates a regular operational event. May be used for reporting, measuring throughput, etc. No action is required. +\r\n*9-Debug* +\r\nIndicates information useful to developers for debugging, not useful during operations.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id",
        "transaction",
        "value",
        "type",
        "severity"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "monitor": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/MonitoringDataType"
      },
      "minItems": 1
    },
    "requestId": {
      "description": "The id of the GetMonitoringRequest that requested this report.\r\n\r\n",
      "type": "integer"
    },
    "tbc": {
      "description": "“to be continued” indicator. Indicates whether another part of the monitoringData follows in an upcoming notifyMonitoringReportRequest message. Default value when omitted is false.\r\n",
      "type": "boolean",
      "default": false
    },
    "seqNo": {
      "description": "Sequence number of this message. First message starts at 0.\r\n",
      "type": "integer"
    },
    "generatedAt": {
      "description": "Timestamp of the moment this message was generated at the Charging Station.\r\n",
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "requestId",
    "seqNo",
    "generatedAt"
  ]
};

export const NotifyMonitoringReportResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const NotifyReportRequest: any = {
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
    "AttributeEnumType": {
      "description": "Attribute: Actual, MinSet, MaxSet, etc.\r\nDefaults to Actual if absent.\r\n",
      "type": "string",
      "default": "Actual",
      "additionalProperties": false,
      "enum": [
        "Actual",
        "Target",
        "MinSet",
        "MaxSet"
      ]
    },
    "DataEnumType": {
      "description": "Data type of this variable.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "string",
        "decimal",
        "integer",
        "dateTime",
        "boolean",
        "OptionList",
        "SequenceList",
        "MemberList"
      ]
    },
    "MutabilityEnumType": {
      "description": "Defines the mutability of this attribute. Default is ReadWrite when omitted.\r\n",
      "type": "string",
      "default": "ReadWrite",
      "additionalProperties": false,
      "enum": [
        "ReadOnly",
        "WriteOnly",
        "ReadWrite"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "ReportDataType": {
      "description": "Class to report components, variables and variable attributes and characteristics.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        },
        "variableAttribute": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/VariableAttributeType"
          },
          "minItems": 1,
          "maxItems": 4
        },
        "variableCharacteristics": {
          "$ref": "#/definitions/VariableCharacteristicsType"
        }
      },
      "required": [
        "component",
        "variable",
        "variableAttribute"
      ]
    },
    "VariableAttributeType": {
      "description": "Attribute data of a variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "type": {
          "$ref": "#/definitions/AttributeEnumType"
        },
        "value": {
          "description": "Value of the attribute. May only be omitted when mutability is set to 'WriteOnly'.\r\n\r\nThe Configuration Variable &lt;&lt;configkey-reporting-value-size,ReportingValueSize&gt;&gt; can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal. \r\n",
          "type": "string",
          "maxLength": 2500
        },
        "mutability": {
          "$ref": "#/definitions/MutabilityEnumType"
        },
        "persistent": {
          "description": "If true, value will be persistent across system reboots or power down. Default when omitted is false.\r\n",
          "type": "boolean",
          "default": false
        },
        "constant": {
          "description": "If true, value that will never be changed by the Charging Station at runtime. Default when omitted is false.\r\n",
          "type": "boolean",
          "default": false
        }
      }
    },
    "VariableCharacteristicsType": {
      "description": "Fixed read-only parameters of a variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "unit": {
          "description": "Unit of the variable. When the transmitted value has a unit, this field SHALL be included.\r\n",
          "type": "string",
          "maxLength": 16
        },
        "dataType": {
          "$ref": "#/definitions/DataEnumType"
        },
        "minLimit": {
          "description": "Minimum possible value of this variable.\r\n",
          "type": "number"
        },
        "maxLimit": {
          "description": "Maximum possible value of this variable. When the datatype of this Variable is String, OptionList, SequenceList or MemberList, this field defines the maximum length of the (CSV) string.\r\n",
          "type": "number"
        },
        "valuesList": {
          "description": "Allowed values when variable is Option/Member/SequenceList. \r\n\r\n* OptionList: The (Actual) Variable value must be a single value from the reported (CSV) enumeration list.\r\n\r\n* MemberList: The (Actual) Variable value  may be an (unordered) (sub-)set of the reported (CSV) valid values list.\r\n\r\n* SequenceList: The (Actual) Variable value  may be an ordered (priority, etc)  (sub-)set of the reported (CSV) valid values.\r\n\r\nThis is a comma separated list.\r\n\r\nThe Configuration Variable &lt;&lt;configkey-configuration-value-size,ConfigurationValueSize&gt;&gt; can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal. \r\n\r\n",
          "type": "string",
          "maxLength": 1000
        },
        "supportsMonitoring": {
          "description": "Flag indicating if this variable supports monitoring. \r\n",
          "type": "boolean"
        }
      },
      "required": [
        "dataType",
        "supportsMonitoring"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "requestId": {
      "description": "The id of the GetReportRequest  or GetBaseReportRequest that requested this report\r\n",
      "type": "integer"
    },
    "generatedAt": {
      "description": "Timestamp of the moment this message was generated at the Charging Station.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "reportData": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/ReportDataType"
      },
      "minItems": 1
    },
    "tbc": {
      "description": "“to be continued” indicator. Indicates whether another part of the report follows in an upcoming notifyReportRequest message. Default value when omitted is false.\r\n\r\n",
      "type": "boolean",
      "default": false
    },
    "seqNo": {
      "description": "Sequence number of this message. First message starts at 0.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "requestId",
    "generatedAt",
    "seqNo"
  ]
};

export const NotifyReportResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const PublishFirmwareRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "location": {
      "description": "This contains a string containing a URI pointing to a\r\nlocation from which to retrieve the firmware.\r\n",
      "type": "string",
      "maxLength": 512
    },
    "retries": {
      "description": "This specifies how many times Charging Station must try\r\nto download the firmware before giving up. If this field is not\r\npresent, it is left to Charging Station to decide how many times it wants to retry.\r\n",
      "type": "integer"
    },
    "checksum": {
      "description": "The MD5 checksum over the entire firmware file as a hexadecimal string of length 32. \r\n",
      "type": "string",
      "maxLength": 32
    },
    "requestId": {
      "description": "The Id of the request.\r\n",
      "type": "integer"
    },
    "retryInterval": {
      "description": "The interval in seconds\r\nafter which a retry may be\r\nattempted. If this field is not\r\npresent, it is left to Charging\r\nStation to decide how long to wait\r\nbetween attempts.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "location",
    "checksum",
    "requestId"
  ]
};

export const PublishFirmwareResponse: any = {
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
    "GenericStatusEnumType": {
      "description": "Indicates whether the request was accepted.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GenericStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const PublishFirmwareStatusNotificationRequest: any = {
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
    "PublishFirmwareStatusEnumType": {
      "description": "This contains the progress status of the publishfirmware\r\ninstallation.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Idle",
        "DownloadScheduled",
        "Downloading",
        "Downloaded",
        "Published",
        "DownloadFailed",
        "DownloadPaused",
        "InvalidChecksum",
        "ChecksumVerified",
        "PublishFailed"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/PublishFirmwareStatusEnumType"
    },
    "location": {
      "description": "Required if status is Published. Can be multiple URI’s, if the Local Controller supports e.g. HTTP, HTTPS, and FTP.\r\n",
      "type": "array",
      "additionalItems": false,
      "items": {
        "type": "string",
        "maxLength": 512
      },
      "minItems": 1
    },
    "requestId": {
      "description": "The request id that was\r\nprovided in the\r\nPublishFirmwareRequest which\r\ntriggered this action.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "status"
  ]
};

export const PublishFirmwareStatusNotificationResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const ReportChargingProfilesRequest: any = {
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
    "ChargingLimitSourceEnumType": {
      "description": "Source that has installed this charging profile.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "EMS",
        "Other",
        "SO",
        "CSO"
      ]
    },
    "ChargingProfileKindEnumType": {
      "description": "Charging_ Profile. Charging_ Profile_ Kind. Charging_ Profile_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569232\r\nIndicates the kind of schedule.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Absolute",
        "Recurring",
        "Relative"
      ]
    },
    "ChargingProfilePurposeEnumType": {
      "description": "Charging_ Profile. Charging_ Profile_ Purpose. Charging_ Profile_ Purpose_ Code\r\nurn:x-oca:ocpp:uid:1:569231\r\nDefines the purpose of the schedule transferred by this profile\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ChargingStationExternalConstraints",
        "ChargingStationMaxProfile",
        "TxDefaultProfile",
        "TxProfile"
      ]
    },
    "ChargingRateUnitEnumType": {
      "description": "Charging_ Schedule. Charging_ Rate_ Unit. Charging_ Rate_ Unit_ Code\r\nurn:x-oca:ocpp:uid:1:569238\r\nThe unit of measure Limit is expressed in.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "W",
        "A"
      ]
    },
    "CostKindEnumType": {
      "description": "Cost. Cost_ Kind. Cost_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569243\r\nThe kind of cost referred to in the message element amount\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "CarbonDioxideEmission",
        "RelativePricePercentage",
        "RenewableGenerationPercentage"
      ]
    },
    "RecurrencyKindEnumType": {
      "description": "Charging_ Profile. Recurrency_ Kind. Recurrency_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569233\r\nIndicates the start point of a recurrence.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Daily",
        "Weekly"
      ]
    },
    "ChargingProfileType": {
      "description": "Charging_ Profile\r\nurn:x-oca:ocpp:uid:2:233255\r\nA ChargingProfile consists of ChargingSchedule, describing the amount of power or current that can be delivered per time interval.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nId of ChargingProfile.\r\n",
          "type": "integer"
        },
        "stackLevel": {
          "description": "Charging_ Profile. Stack_ Level. Counter\r\nurn:x-oca:ocpp:uid:1:569230\r\nValue determining level in hierarchy stack of profiles. Higher values have precedence over lower values. Lowest level is 0.\r\n",
          "type": "integer"
        },
        "chargingProfilePurpose": {
          "$ref": "#/definitions/ChargingProfilePurposeEnumType"
        },
        "chargingProfileKind": {
          "$ref": "#/definitions/ChargingProfileKindEnumType"
        },
        "recurrencyKind": {
          "$ref": "#/definitions/RecurrencyKindEnumType"
        },
        "validFrom": {
          "description": "Charging_ Profile. Valid_ From. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569234\r\nPoint in time at which the profile starts to be valid. If absent, the profile is valid as soon as it is received by the Charging Station.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "validTo": {
          "description": "Charging_ Profile. Valid_ To. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569235\r\nPoint in time at which the profile stops to be valid. If absent, the profile is valid until it is replaced by another profile.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "chargingSchedule": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ChargingScheduleType"
          },
          "minItems": 1,
          "maxItems": 3
        },
        "transactionId": {
          "description": "SHALL only be included if ChargingProfilePurpose is set to TxProfile. The transactionId is used to match the profile to a specific transaction.\r\n",
          "type": "string",
          "maxLength": 36
        }
      },
      "required": [
        "id",
        "stackLevel",
        "chargingProfilePurpose",
        "chargingProfileKind",
        "chargingSchedule"
      ]
    },
    "ChargingSchedulePeriodType": {
      "description": "Charging_ Schedule_ Period\r\nurn:x-oca:ocpp:uid:2:233257\r\nCharging schedule period structure defines a time period in a charging schedule.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startPeriod": {
          "description": "Charging_ Schedule_ Period. Start_ Period. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569240\r\nStart of the period, in seconds from the start of schedule. The value of StartPeriod also defines the stop time of the previous period.\r\n",
          "type": "integer"
        },
        "limit": {
          "description": "Charging_ Schedule_ Period. Limit. Measure\r\nurn:x-oca:ocpp:uid:1:569241\r\nCharging rate limit during the schedule period, in the applicable chargingRateUnit, for example in Amperes (A) or Watts (W). Accepts at most one digit fraction (e.g. 8.1).\r\n",
          "type": "number"
        },
        "numberPhases": {
          "description": "Charging_ Schedule_ Period. Number_ Phases. Counter\r\nurn:x-oca:ocpp:uid:1:569242\r\nThe number of phases that can be used for charging. If a number of phases is needed, numberPhases=3 will be assumed unless another number is given.\r\n",
          "type": "integer"
        },
        "phaseToUse": {
          "description": "Values: 1..3, Used if numberPhases=1 and if the EVSE is capable of switching the phase connected to the EV, i.e. ACPhaseSwitchingSupported is defined and true. It’s not allowed unless both conditions above are true. If both conditions are true, and phaseToUse is omitted, the Charging Station / EVSE will make the selection on its own.\r\n\r\n",
          "type": "integer"
        }
      },
      "required": [
        "startPeriod",
        "limit"
      ]
    },
    "ChargingScheduleType": {
      "description": "Charging_ Schedule\r\nurn:x-oca:ocpp:uid:2:233256\r\nCharging schedule structure defines a list of charging periods, as used in: GetCompositeSchedule.conf and ChargingProfile. \r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identifies the ChargingSchedule.\r\n",
          "type": "integer"
        },
        "startSchedule": {
          "description": "Charging_ Schedule. Start_ Schedule. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569237\r\nStarting point of an absolute schedule. If absent the schedule will be relative to start of charging.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "duration": {
          "description": "Charging_ Schedule. Duration. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569236\r\nDuration of the charging schedule in seconds. If the duration is left empty, the last period will continue indefinitely or until end of the transaction if chargingProfilePurpose = TxProfile.\r\n",
          "type": "integer"
        },
        "chargingRateUnit": {
          "$ref": "#/definitions/ChargingRateUnitEnumType"
        },
        "chargingSchedulePeriod": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ChargingSchedulePeriodType"
          },
          "minItems": 1,
          "maxItems": 1024
        },
        "minChargingRate": {
          "description": "Charging_ Schedule. Min_ Charging_ Rate. Numeric\r\nurn:x-oca:ocpp:uid:1:569239\r\nMinimum charging rate supported by the EV. The unit of measure is defined by the chargingRateUnit. This parameter is intended to be used by a local smart charging algorithm to optimize the power allocation for in the case a charging process is inefficient at lower charging rates. Accepts at most one digit fraction (e.g. 8.1)\r\n",
          "type": "number"
        },
        "salesTariff": {
          "$ref": "#/definitions/SalesTariffType"
        }
      },
      "required": [
        "id",
        "chargingRateUnit",
        "chargingSchedulePeriod"
      ]
    },
    "ConsumptionCostType": {
      "description": "Consumption_ Cost\r\nurn:x-oca:ocpp:uid:2:233259\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startValue": {
          "description": "Consumption_ Cost. Start_ Value. Numeric\r\nurn:x-oca:ocpp:uid:1:569246\r\nThe lowest level of consumption that defines the starting point of this consumption block. The block interval extends to the start of the next interval.\r\n",
          "type": "number"
        },
        "cost": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/CostType"
          },
          "minItems": 1,
          "maxItems": 3
        }
      },
      "required": [
        "startValue",
        "cost"
      ]
    },
    "CostType": {
      "description": "Cost\r\nurn:x-oca:ocpp:uid:2:233258\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "costKind": {
          "$ref": "#/definitions/CostKindEnumType"
        },
        "amount": {
          "description": "Cost. Amount. Amount\r\nurn:x-oca:ocpp:uid:1:569244\r\nThe estimated or actual cost per kWh\r\n",
          "type": "integer"
        },
        "amountMultiplier": {
          "description": "Cost. Amount_ Multiplier. Integer\r\nurn:x-oca:ocpp:uid:1:569245\r\nValues: -3..3, The amountMultiplier defines the exponent to base 10 (dec). The final value is determined by: amount * 10 ^ amountMultiplier\r\n",
          "type": "integer"
        }
      },
      "required": [
        "costKind",
        "amount"
      ]
    },
    "RelativeTimeIntervalType": {
      "description": "Relative_ Timer_ Interval\r\nurn:x-oca:ocpp:uid:2:233270\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "start": {
          "description": "Relative_ Timer_ Interval. Start. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569279\r\nStart of the interval, in seconds from NOW.\r\n",
          "type": "integer"
        },
        "duration": {
          "description": "Relative_ Timer_ Interval. Duration. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569280\r\nDuration of the interval, in seconds.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "start"
      ]
    },
    "SalesTariffEntryType": {
      "description": "Sales_ Tariff_ Entry\r\nurn:x-oca:ocpp:uid:2:233271\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "relativeTimeInterval": {
          "$ref": "#/definitions/RelativeTimeIntervalType"
        },
        "ePriceLevel": {
          "description": "Sales_ Tariff_ Entry. E_ Price_ Level. Unsigned_ Integer\r\nurn:x-oca:ocpp:uid:1:569281\r\nDefines the price level of this SalesTariffEntry (referring to NumEPriceLevels). Small values for the EPriceLevel represent a cheaper TariffEntry. Large values for the EPriceLevel represent a more expensive TariffEntry.\r\n",
          "type": "integer",
          "minimum": 0
        },
        "consumptionCost": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ConsumptionCostType"
          },
          "minItems": 1,
          "maxItems": 3
        }
      },
      "required": [
        "relativeTimeInterval"
      ]
    },
    "SalesTariffType": {
      "description": "Sales_ Tariff\r\nurn:x-oca:ocpp:uid:2:233272\r\nNOTE: This dataType is based on dataTypes from &lt;&lt;ref-ISOIEC15118-2,ISO 15118-2&gt;&gt;.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nSalesTariff identifier used to identify one sales tariff. An SAID remains a unique identifier for one schedule throughout a charging session.\r\n",
          "type": "integer"
        },
        "salesTariffDescription": {
          "description": "Sales_ Tariff. Sales. Tariff_ Description\r\nurn:x-oca:ocpp:uid:1:569283\r\nA human readable title/short description of the sales tariff e.g. for HMI display purposes.\r\n",
          "type": "string",
          "maxLength": 32
        },
        "numEPriceLevels": {
          "description": "Sales_ Tariff. Num_ E_ Price_ Levels. Counter\r\nurn:x-oca:ocpp:uid:1:569284\r\nDefines the overall number of distinct price levels used across all provided SalesTariff elements.\r\n",
          "type": "integer"
        },
        "salesTariffEntry": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/SalesTariffEntryType"
          },
          "minItems": 1,
          "maxItems": 1024
        }
      },
      "required": [
        "id",
        "salesTariffEntry"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "requestId": {
      "description": "Id used to match the &lt;&lt;getchargingprofilesrequest, GetChargingProfilesRequest&gt;&gt; message with the resulting ReportChargingProfilesRequest messages. When the CSMS provided a requestId in the &lt;&lt;getchargingprofilesrequest, GetChargingProfilesRequest&gt;&gt;, this field SHALL contain the same value.\r\n",
      "type": "integer"
    },
    "chargingLimitSource": {
      "$ref": "#/definitions/ChargingLimitSourceEnumType"
    },
    "chargingProfile": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/ChargingProfileType"
      },
      "minItems": 1
    },
    "tbc": {
      "description": "To Be Continued. Default value when omitted: false. false indicates that there are no further messages as part of this report.\r\n",
      "type": "boolean",
      "default": false
    },
    "evseId": {
      "description": "The evse to which the charging profile applies. If evseId = 0, the message contains an overall limit for the Charging Station.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "requestId",
    "chargingLimitSource",
    "evseId",
    "chargingProfile"
  ]
};

export const ReportChargingProfilesResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const RequestStartTransactionRequest: any = {
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
    "ChargingProfileKindEnumType": {
      "description": "Charging_ Profile. Charging_ Profile_ Kind. Charging_ Profile_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569232\r\nIndicates the kind of schedule.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Absolute",
        "Recurring",
        "Relative"
      ]
    },
    "ChargingProfilePurposeEnumType": {
      "description": "Charging_ Profile. Charging_ Profile_ Purpose. Charging_ Profile_ Purpose_ Code\r\nurn:x-oca:ocpp:uid:1:569231\r\nDefines the purpose of the schedule transferred by this profile\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ChargingStationExternalConstraints",
        "ChargingStationMaxProfile",
        "TxDefaultProfile",
        "TxProfile"
      ]
    },
    "ChargingRateUnitEnumType": {
      "description": "Charging_ Schedule. Charging_ Rate_ Unit. Charging_ Rate_ Unit_ Code\r\nurn:x-oca:ocpp:uid:1:569238\r\nThe unit of measure Limit is expressed in.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "W",
        "A"
      ]
    },
    "CostKindEnumType": {
      "description": "Cost. Cost_ Kind. Cost_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569243\r\nThe kind of cost referred to in the message element amount\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "CarbonDioxideEmission",
        "RelativePricePercentage",
        "RenewableGenerationPercentage"
      ]
    },
    "IdTokenEnumType": {
      "description": "Enumeration of possible idToken types.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Central",
        "eMAID",
        "ISO14443",
        "ISO15693",
        "KeyCode",
        "Local",
        "MacAddress",
        "NoAuthorization"
      ]
    },
    "RecurrencyKindEnumType": {
      "description": "Charging_ Profile. Recurrency_ Kind. Recurrency_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569233\r\nIndicates the start point of a recurrence.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Daily",
        "Weekly"
      ]
    },
    "AdditionalInfoType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalIdToken": {
          "description": "This field specifies the additional IdToken.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "description": "This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "additionalIdToken",
        "type"
      ]
    },
    "ChargingProfileType": {
      "description": "Charging_ Profile\r\nurn:x-oca:ocpp:uid:2:233255\r\nA ChargingProfile consists of ChargingSchedule, describing the amount of power or current that can be delivered per time interval.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nId of ChargingProfile.\r\n",
          "type": "integer"
        },
        "stackLevel": {
          "description": "Charging_ Profile. Stack_ Level. Counter\r\nurn:x-oca:ocpp:uid:1:569230\r\nValue determining level in hierarchy stack of profiles. Higher values have precedence over lower values. Lowest level is 0.\r\n",
          "type": "integer"
        },
        "chargingProfilePurpose": {
          "$ref": "#/definitions/ChargingProfilePurposeEnumType"
        },
        "chargingProfileKind": {
          "$ref": "#/definitions/ChargingProfileKindEnumType"
        },
        "recurrencyKind": {
          "$ref": "#/definitions/RecurrencyKindEnumType"
        },
        "validFrom": {
          "description": "Charging_ Profile. Valid_ From. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569234\r\nPoint in time at which the profile starts to be valid. If absent, the profile is valid as soon as it is received by the Charging Station.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "validTo": {
          "description": "Charging_ Profile. Valid_ To. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569235\r\nPoint in time at which the profile stops to be valid. If absent, the profile is valid until it is replaced by another profile.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "chargingSchedule": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ChargingScheduleType"
          },
          "minItems": 1,
          "maxItems": 3
        },
        "transactionId": {
          "description": "SHALL only be included if ChargingProfilePurpose is set to TxProfile. The transactionId is used to match the profile to a specific transaction.\r\n",
          "type": "string",
          "maxLength": 36
        }
      },
      "required": [
        "id",
        "stackLevel",
        "chargingProfilePurpose",
        "chargingProfileKind",
        "chargingSchedule"
      ]
    },
    "ChargingSchedulePeriodType": {
      "description": "Charging_ Schedule_ Period\r\nurn:x-oca:ocpp:uid:2:233257\r\nCharging schedule period structure defines a time period in a charging schedule.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startPeriod": {
          "description": "Charging_ Schedule_ Period. Start_ Period. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569240\r\nStart of the period, in seconds from the start of schedule. The value of StartPeriod also defines the stop time of the previous period.\r\n",
          "type": "integer"
        },
        "limit": {
          "description": "Charging_ Schedule_ Period. Limit. Measure\r\nurn:x-oca:ocpp:uid:1:569241\r\nCharging rate limit during the schedule period, in the applicable chargingRateUnit, for example in Amperes (A) or Watts (W). Accepts at most one digit fraction (e.g. 8.1).\r\n",
          "type": "number"
        },
        "numberPhases": {
          "description": "Charging_ Schedule_ Period. Number_ Phases. Counter\r\nurn:x-oca:ocpp:uid:1:569242\r\nThe number of phases that can be used for charging. If a number of phases is needed, numberPhases=3 will be assumed unless another number is given.\r\n",
          "type": "integer"
        },
        "phaseToUse": {
          "description": "Values: 1..3, Used if numberPhases=1 and if the EVSE is capable of switching the phase connected to the EV, i.e. ACPhaseSwitchingSupported is defined and true. It’s not allowed unless both conditions above are true. If both conditions are true, and phaseToUse is omitted, the Charging Station / EVSE will make the selection on its own.\r\n\r\n",
          "type": "integer"
        }
      },
      "required": [
        "startPeriod",
        "limit"
      ]
    },
    "ChargingScheduleType": {
      "description": "Charging_ Schedule\r\nurn:x-oca:ocpp:uid:2:233256\r\nCharging schedule structure defines a list of charging periods, as used in: GetCompositeSchedule.conf and ChargingProfile. \r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identifies the ChargingSchedule.\r\n",
          "type": "integer"
        },
        "startSchedule": {
          "description": "Charging_ Schedule. Start_ Schedule. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569237\r\nStarting point of an absolute schedule. If absent the schedule will be relative to start of charging.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "duration": {
          "description": "Charging_ Schedule. Duration. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569236\r\nDuration of the charging schedule in seconds. If the duration is left empty, the last period will continue indefinitely or until end of the transaction if chargingProfilePurpose = TxProfile.\r\n",
          "type": "integer"
        },
        "chargingRateUnit": {
          "$ref": "#/definitions/ChargingRateUnitEnumType"
        },
        "chargingSchedulePeriod": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ChargingSchedulePeriodType"
          },
          "minItems": 1,
          "maxItems": 1024
        },
        "minChargingRate": {
          "description": "Charging_ Schedule. Min_ Charging_ Rate. Numeric\r\nurn:x-oca:ocpp:uid:1:569239\r\nMinimum charging rate supported by the EV. The unit of measure is defined by the chargingRateUnit. This parameter is intended to be used by a local smart charging algorithm to optimize the power allocation for in the case a charging process is inefficient at lower charging rates. Accepts at most one digit fraction (e.g. 8.1)\r\n",
          "type": "number"
        },
        "salesTariff": {
          "$ref": "#/definitions/SalesTariffType"
        }
      },
      "required": [
        "id",
        "chargingRateUnit",
        "chargingSchedulePeriod"
      ]
    },
    "ConsumptionCostType": {
      "description": "Consumption_ Cost\r\nurn:x-oca:ocpp:uid:2:233259\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startValue": {
          "description": "Consumption_ Cost. Start_ Value. Numeric\r\nurn:x-oca:ocpp:uid:1:569246\r\nThe lowest level of consumption that defines the starting point of this consumption block. The block interval extends to the start of the next interval.\r\n",
          "type": "number"
        },
        "cost": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/CostType"
          },
          "minItems": 1,
          "maxItems": 3
        }
      },
      "required": [
        "startValue",
        "cost"
      ]
    },
    "CostType": {
      "description": "Cost\r\nurn:x-oca:ocpp:uid:2:233258\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "costKind": {
          "$ref": "#/definitions/CostKindEnumType"
        },
        "amount": {
          "description": "Cost. Amount. Amount\r\nurn:x-oca:ocpp:uid:1:569244\r\nThe estimated or actual cost per kWh\r\n",
          "type": "integer"
        },
        "amountMultiplier": {
          "description": "Cost. Amount_ Multiplier. Integer\r\nurn:x-oca:ocpp:uid:1:569245\r\nValues: -3..3, The amountMultiplier defines the exponent to base 10 (dec). The final value is determined by: amount * 10 ^ amountMultiplier\r\n",
          "type": "integer"
        }
      },
      "required": [
        "costKind",
        "amount"
      ]
    },
    "IdTokenType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalInfo": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/AdditionalInfoType"
          },
          "minItems": 1
        },
        "idToken": {
          "description": "IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "$ref": "#/definitions/IdTokenEnumType"
        }
      },
      "required": [
        "idToken",
        "type"
      ]
    },
    "RelativeTimeIntervalType": {
      "description": "Relative_ Timer_ Interval\r\nurn:x-oca:ocpp:uid:2:233270\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "start": {
          "description": "Relative_ Timer_ Interval. Start. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569279\r\nStart of the interval, in seconds from NOW.\r\n",
          "type": "integer"
        },
        "duration": {
          "description": "Relative_ Timer_ Interval. Duration. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569280\r\nDuration of the interval, in seconds.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "start"
      ]
    },
    "SalesTariffEntryType": {
      "description": "Sales_ Tariff_ Entry\r\nurn:x-oca:ocpp:uid:2:233271\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "relativeTimeInterval": {
          "$ref": "#/definitions/RelativeTimeIntervalType"
        },
        "ePriceLevel": {
          "description": "Sales_ Tariff_ Entry. E_ Price_ Level. Unsigned_ Integer\r\nurn:x-oca:ocpp:uid:1:569281\r\nDefines the price level of this SalesTariffEntry (referring to NumEPriceLevels). Small values for the EPriceLevel represent a cheaper TariffEntry. Large values for the EPriceLevel represent a more expensive TariffEntry.\r\n",
          "type": "integer",
          "minimum": 0
        },
        "consumptionCost": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ConsumptionCostType"
          },
          "minItems": 1,
          "maxItems": 3
        }
      },
      "required": [
        "relativeTimeInterval"
      ]
    },
    "SalesTariffType": {
      "description": "Sales_ Tariff\r\nurn:x-oca:ocpp:uid:2:233272\r\nNOTE: This dataType is based on dataTypes from &lt;&lt;ref-ISOIEC15118-2,ISO 15118-2&gt;&gt;.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nSalesTariff identifier used to identify one sales tariff. An SAID remains a unique identifier for one schedule throughout a charging session.\r\n",
          "type": "integer"
        },
        "salesTariffDescription": {
          "description": "Sales_ Tariff. Sales. Tariff_ Description\r\nurn:x-oca:ocpp:uid:1:569283\r\nA human readable title/short description of the sales tariff e.g. for HMI display purposes.\r\n",
          "type": "string",
          "maxLength": 32
        },
        "numEPriceLevels": {
          "description": "Sales_ Tariff. Num_ E_ Price_ Levels. Counter\r\nurn:x-oca:ocpp:uid:1:569284\r\nDefines the overall number of distinct price levels used across all provided SalesTariff elements.\r\n",
          "type": "integer"
        },
        "salesTariffEntry": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/SalesTariffEntryType"
          },
          "minItems": 1,
          "maxItems": 1024
        }
      },
      "required": [
        "id",
        "salesTariffEntry"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "evseId": {
      "description": "Number of the EVSE on which to start the transaction. EvseId SHALL be &gt; 0\r\n",
      "type": "integer"
    },
    "groupIdToken": {
      "$ref": "#/definitions/IdTokenType"
    },
    "idToken": {
      "$ref": "#/definitions/IdTokenType"
    },
    "remoteStartId": {
      "description": "Id given by the server to this start request. The Charging Station might return this in the &lt;&lt;transactioneventrequest, TransactionEventRequest&gt;&gt;, letting the server know which transaction was started for this request. Use to start a transaction.\r\n",
      "type": "integer"
    },
    "chargingProfile": {
      "$ref": "#/definitions/ChargingProfileType"
    }
  },
  "required": [
    "remoteStartId",
    "idToken"
  ]
};

export const RequestStartTransactionResponse: any = {
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
    "RequestStartStopStatusEnumType": {
      "description": "Status indicating whether the Charging Station accepts the request to start a transaction.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/RequestStartStopStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    },
    "transactionId": {
      "description": "When the transaction was already started by the Charging Station before the RequestStartTransactionRequest was received, for example: cable plugged in first. This contains the transactionId of the already started transaction.\r\n",
      "type": "string",
      "maxLength": 36
    }
  },
  "required": [
    "status"
  ]
};

export const RequestStopTransactionRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "transactionId": {
      "description": "The identifier of the transaction which the Charging Station is requested to stop.\r\n",
      "type": "string",
      "maxLength": 36
    }
  },
  "required": [
    "transactionId"
  ]
};

export const RequestStopTransactionResponse: any = {
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
    "RequestStartStopStatusEnumType": {
      "description": "Status indicating whether Charging Station accepts the request to stop a transaction.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/RequestStartStopStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const ReservationStatusUpdateRequest: any = {
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

export const ReservationStatusUpdateResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const ReserveNowRequest: any = {
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
    "ConnectorEnumType": {
      "description": "This field specifies the connector type.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "cCCS1",
        "cCCS2",
        "cG105",
        "cTesla",
        "cType1",
        "cType2",
        "s309-1P-16A",
        "s309-1P-32A",
        "s309-3P-16A",
        "s309-3P-32A",
        "sBS1361",
        "sCEE-7-7",
        "sType2",
        "sType3",
        "Other1PhMax16A",
        "Other1PhOver16A",
        "Other3Ph",
        "Pan",
        "wInductive",
        "wResonant",
        "Undetermined",
        "Unknown"
      ]
    },
    "IdTokenEnumType": {
      "description": "Enumeration of possible idToken types.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Central",
        "eMAID",
        "ISO14443",
        "ISO15693",
        "KeyCode",
        "Local",
        "MacAddress",
        "NoAuthorization"
      ]
    },
    "AdditionalInfoType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalIdToken": {
          "description": "This field specifies the additional IdToken.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "description": "This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "additionalIdToken",
        "type"
      ]
    },
    "IdTokenType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalInfo": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/AdditionalInfoType"
          },
          "minItems": 1
        },
        "idToken": {
          "description": "IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "$ref": "#/definitions/IdTokenEnumType"
        }
      },
      "required": [
        "idToken",
        "type"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "id": {
      "description": "Id of reservation.\r\n",
      "type": "integer"
    },
    "expiryDateTime": {
      "description": "Date and time at which the reservation expires.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "connectorType": {
      "$ref": "#/definitions/ConnectorEnumType"
    },
    "idToken": {
      "$ref": "#/definitions/IdTokenType"
    },
    "evseId": {
      "description": "This contains ID of the evse to be reserved.\r\n",
      "type": "integer"
    },
    "groupIdToken": {
      "$ref": "#/definitions/IdTokenType"
    }
  },
  "required": [
    "id",
    "expiryDateTime",
    "idToken"
  ]
};

export const ReserveNowResponse: any = {
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
    "ReserveNowStatusEnumType": {
      "description": "This indicates the success or failure of the reservation.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Faulted",
        "Occupied",
        "Rejected",
        "Unavailable"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/ReserveNowStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const ResetRequest: any = {
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
    "ResetEnumType": {
      "description": "This contains the type of reset that the Charging Station or EVSE should perform.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Immediate",
        "OnIdle"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "type": {
      "$ref": "#/definitions/ResetEnumType"
    },
    "evseId": {
      "description": "This contains the ID of a specific EVSE that needs to be reset, instead of the entire Charging Station.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "type"
  ]
};

export const ResetResponse: any = {
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
    "ResetStatusEnumType": {
      "description": "This indicates whether the Charging Station is able to perform the reset.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "Scheduled"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/ResetStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const SecurityEventNotificationRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "type": {
      "description": "Type of the security event. This value should be taken from the Security events list.\r\n",
      "type": "string",
      "maxLength": 50
    },
    "timestamp": {
      "description": "Date and time at which the event occurred.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "techInfo": {
      "description": "Additional information about the occurred security event.\r\n",
      "type": "string",
      "maxLength": 255
    }
  },
  "required": [
    "type",
    "timestamp"
  ]
};

export const SecurityEventNotificationResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const SendLocalListRequest: any = {
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
    "AuthorizationStatusEnumType": {
      "description": "ID_ Token. Status. Authorization_ Status\r\nurn:x-oca:ocpp:uid:1:569372\r\nCurrent status of the ID Token.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Blocked",
        "ConcurrentTx",
        "Expired",
        "Invalid",
        "NoCredit",
        "NotAllowedTypeEVSE",
        "NotAtThisLocation",
        "NotAtThisTime",
        "Unknown"
      ]
    },
    "IdTokenEnumType": {
      "description": "Enumeration of possible idToken types.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Central",
        "eMAID",
        "ISO14443",
        "ISO15693",
        "KeyCode",
        "Local",
        "MacAddress",
        "NoAuthorization"
      ]
    },
    "MessageFormatEnumType": {
      "description": "Message_ Content. Format. Message_ Format_ Code\r\nurn:x-enexis:ecdm:uid:1:570848\r\nFormat of the message.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ASCII",
        "HTML",
        "URI",
        "UTF8"
      ]
    },
    "UpdateEnumType": {
      "description": "This contains the type of update (full or differential) of this request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Differential",
        "Full"
      ]
    },
    "AdditionalInfoType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalIdToken": {
          "description": "This field specifies the additional IdToken.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "description": "This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "additionalIdToken",
        "type"
      ]
    },
    "AuthorizationData": {
      "description": "Contains the identifier to use for authorization.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "idToken": {
          "$ref": "#/definitions/IdTokenType"
        },
        "idTokenInfo": {
          "$ref": "#/definitions/IdTokenInfoType"
        }
      },
      "required": [
        "idToken"
      ]
    },
    "IdTokenInfoType": {
      "description": "ID_ Token\r\nurn:x-oca:ocpp:uid:2:233247\r\nContains status information about an identifier.\r\nIt is advised to not stop charging for a token that expires during charging, as ExpiryDate is only used for caching purposes. If ExpiryDate is not given, the status has no end date.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "status": {
          "$ref": "#/definitions/AuthorizationStatusEnumType"
        },
        "cacheExpiryDateTime": {
          "description": "ID_ Token. Expiry. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569373\r\nDate and Time after which the token must be considered invalid.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "chargingPriority": {
          "description": "Priority from a business point of view. Default priority is 0, The range is from -9 to 9. Higher values indicate a higher priority. The chargingPriority in &lt;&lt;transactioneventresponse,TransactionEventResponse&gt;&gt; overrules this one. \r\n",
          "type": "integer"
        },
        "language1": {
          "description": "ID_ Token. Language1. Language_ Code\r\nurn:x-oca:ocpp:uid:1:569374\r\nPreferred user interface language of identifier user. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n\r\n",
          "type": "string",
          "maxLength": 8
        },
        "evseId": {
          "description": "Only used when the IdToken is only valid for one or more specific EVSEs, not for the entire Charging Station.\r\n\r\n",
          "type": "array",
          "additionalItems": false,
          "items": {
            "type": "integer"
          },
          "minItems": 1
        },
        "groupIdToken": {
          "$ref": "#/definitions/IdTokenType"
        },
        "language2": {
          "description": "ID_ Token. Language2. Language_ Code\r\nurn:x-oca:ocpp:uid:1:569375\r\nSecond preferred user interface language of identifier user. Don’t use when language1 is omitted, has to be different from language1. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n",
          "type": "string",
          "maxLength": 8
        },
        "personalMessage": {
          "$ref": "#/definitions/MessageContentType"
        }
      },
      "required": [
        "status"
      ]
    },
    "IdTokenType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalInfo": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/AdditionalInfoType"
          },
          "minItems": 1
        },
        "idToken": {
          "description": "IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "$ref": "#/definitions/IdTokenEnumType"
        }
      },
      "required": [
        "idToken",
        "type"
      ]
    },
    "MessageContentType": {
      "description": "Message_ Content\r\nurn:x-enexis:ecdm:uid:2:234490\r\nContains message details, for a message to be displayed on a Charging Station.\r\n\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "format": {
          "$ref": "#/definitions/MessageFormatEnumType"
        },
        "language": {
          "description": "Message_ Content. Language. Language_ Code\r\nurn:x-enexis:ecdm:uid:1:570849\r\nMessage language identifier. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n",
          "type": "string",
          "maxLength": 8
        },
        "content": {
          "description": "Message_ Content. Content. Message\r\nurn:x-enexis:ecdm:uid:1:570852\r\nMessage contents.\r\n\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "format",
        "content"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "localAuthorizationList": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/AuthorizationData"
      },
      "minItems": 1
    },
    "versionNumber": {
      "description": "In case of a full update this is the version number of the full list. In case of a differential update it is the version number of the list after the update has been applied.\r\n",
      "type": "integer"
    },
    "updateType": {
      "$ref": "#/definitions/UpdateEnumType"
    }
  },
  "required": [
    "versionNumber",
    "updateType"
  ]
};

export const SendLocalListResponse: any = {
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
    "SendLocalListStatusEnumType": {
      "description": "This indicates whether the Charging Station has successfully received and applied the update of the Local Authorization List.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Failed",
        "VersionMismatch"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/SendLocalListStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const SetChargingProfileRequest: any = {
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
    "ChargingProfileKindEnumType": {
      "description": "Charging_ Profile. Charging_ Profile_ Kind. Charging_ Profile_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569232\r\nIndicates the kind of schedule.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Absolute",
        "Recurring",
        "Relative"
      ]
    },
    "ChargingProfilePurposeEnumType": {
      "description": "Charging_ Profile. Charging_ Profile_ Purpose. Charging_ Profile_ Purpose_ Code\r\nurn:x-oca:ocpp:uid:1:569231\r\nDefines the purpose of the schedule transferred by this profile\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ChargingStationExternalConstraints",
        "ChargingStationMaxProfile",
        "TxDefaultProfile",
        "TxProfile"
      ]
    },
    "ChargingRateUnitEnumType": {
      "description": "Charging_ Schedule. Charging_ Rate_ Unit. Charging_ Rate_ Unit_ Code\r\nurn:x-oca:ocpp:uid:1:569238\r\nThe unit of measure Limit is expressed in.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "W",
        "A"
      ]
    },
    "CostKindEnumType": {
      "description": "Cost. Cost_ Kind. Cost_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569243\r\nThe kind of cost referred to in the message element amount\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "CarbonDioxideEmission",
        "RelativePricePercentage",
        "RenewableGenerationPercentage"
      ]
    },
    "RecurrencyKindEnumType": {
      "description": "Charging_ Profile. Recurrency_ Kind. Recurrency_ Kind_ Code\r\nurn:x-oca:ocpp:uid:1:569233\r\nIndicates the start point of a recurrence.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Daily",
        "Weekly"
      ]
    },
    "ChargingProfileType": {
      "description": "Charging_ Profile\r\nurn:x-oca:ocpp:uid:2:233255\r\nA ChargingProfile consists of ChargingSchedule, describing the amount of power or current that can be delivered per time interval.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nId of ChargingProfile.\r\n",
          "type": "integer"
        },
        "stackLevel": {
          "description": "Charging_ Profile. Stack_ Level. Counter\r\nurn:x-oca:ocpp:uid:1:569230\r\nValue determining level in hierarchy stack of profiles. Higher values have precedence over lower values. Lowest level is 0.\r\n",
          "type": "integer"
        },
        "chargingProfilePurpose": {
          "$ref": "#/definitions/ChargingProfilePurposeEnumType"
        },
        "chargingProfileKind": {
          "$ref": "#/definitions/ChargingProfileKindEnumType"
        },
        "recurrencyKind": {
          "$ref": "#/definitions/RecurrencyKindEnumType"
        },
        "validFrom": {
          "description": "Charging_ Profile. Valid_ From. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569234\r\nPoint in time at which the profile starts to be valid. If absent, the profile is valid as soon as it is received by the Charging Station.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "validTo": {
          "description": "Charging_ Profile. Valid_ To. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569235\r\nPoint in time at which the profile stops to be valid. If absent, the profile is valid until it is replaced by another profile.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "chargingSchedule": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ChargingScheduleType"
          },
          "minItems": 1,
          "maxItems": 3
        },
        "transactionId": {
          "description": "SHALL only be included if ChargingProfilePurpose is set to TxProfile. The transactionId is used to match the profile to a specific transaction.\r\n",
          "type": "string",
          "maxLength": 36
        }
      },
      "required": [
        "id",
        "stackLevel",
        "chargingProfilePurpose",
        "chargingProfileKind",
        "chargingSchedule"
      ]
    },
    "ChargingSchedulePeriodType": {
      "description": "Charging_ Schedule_ Period\r\nurn:x-oca:ocpp:uid:2:233257\r\nCharging schedule period structure defines a time period in a charging schedule.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startPeriod": {
          "description": "Charging_ Schedule_ Period. Start_ Period. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569240\r\nStart of the period, in seconds from the start of schedule. The value of StartPeriod also defines the stop time of the previous period.\r\n",
          "type": "integer"
        },
        "limit": {
          "description": "Charging_ Schedule_ Period. Limit. Measure\r\nurn:x-oca:ocpp:uid:1:569241\r\nCharging rate limit during the schedule period, in the applicable chargingRateUnit, for example in Amperes (A) or Watts (W). Accepts at most one digit fraction (e.g. 8.1).\r\n",
          "type": "number"
        },
        "numberPhases": {
          "description": "Charging_ Schedule_ Period. Number_ Phases. Counter\r\nurn:x-oca:ocpp:uid:1:569242\r\nThe number of phases that can be used for charging. If a number of phases is needed, numberPhases=3 will be assumed unless another number is given.\r\n",
          "type": "integer"
        },
        "phaseToUse": {
          "description": "Values: 1..3, Used if numberPhases=1 and if the EVSE is capable of switching the phase connected to the EV, i.e. ACPhaseSwitchingSupported is defined and true. It’s not allowed unless both conditions above are true. If both conditions are true, and phaseToUse is omitted, the Charging Station / EVSE will make the selection on its own.\r\n\r\n",
          "type": "integer"
        }
      },
      "required": [
        "startPeriod",
        "limit"
      ]
    },
    "ChargingScheduleType": {
      "description": "Charging_ Schedule\r\nurn:x-oca:ocpp:uid:2:233256\r\nCharging schedule structure defines a list of charging periods, as used in: GetCompositeSchedule.conf and ChargingProfile. \r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identifies the ChargingSchedule.\r\n",
          "type": "integer"
        },
        "startSchedule": {
          "description": "Charging_ Schedule. Start_ Schedule. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569237\r\nStarting point of an absolute schedule. If absent the schedule will be relative to start of charging.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "duration": {
          "description": "Charging_ Schedule. Duration. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569236\r\nDuration of the charging schedule in seconds. If the duration is left empty, the last period will continue indefinitely or until end of the transaction if chargingProfilePurpose = TxProfile.\r\n",
          "type": "integer"
        },
        "chargingRateUnit": {
          "$ref": "#/definitions/ChargingRateUnitEnumType"
        },
        "chargingSchedulePeriod": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ChargingSchedulePeriodType"
          },
          "minItems": 1,
          "maxItems": 1024
        },
        "minChargingRate": {
          "description": "Charging_ Schedule. Min_ Charging_ Rate. Numeric\r\nurn:x-oca:ocpp:uid:1:569239\r\nMinimum charging rate supported by the EV. The unit of measure is defined by the chargingRateUnit. This parameter is intended to be used by a local smart charging algorithm to optimize the power allocation for in the case a charging process is inefficient at lower charging rates. Accepts at most one digit fraction (e.g. 8.1)\r\n",
          "type": "number"
        },
        "salesTariff": {
          "$ref": "#/definitions/SalesTariffType"
        }
      },
      "required": [
        "id",
        "chargingRateUnit",
        "chargingSchedulePeriod"
      ]
    },
    "ConsumptionCostType": {
      "description": "Consumption_ Cost\r\nurn:x-oca:ocpp:uid:2:233259\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "startValue": {
          "description": "Consumption_ Cost. Start_ Value. Numeric\r\nurn:x-oca:ocpp:uid:1:569246\r\nThe lowest level of consumption that defines the starting point of this consumption block. The block interval extends to the start of the next interval.\r\n",
          "type": "number"
        },
        "cost": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/CostType"
          },
          "minItems": 1,
          "maxItems": 3
        }
      },
      "required": [
        "startValue",
        "cost"
      ]
    },
    "CostType": {
      "description": "Cost\r\nurn:x-oca:ocpp:uid:2:233258\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "costKind": {
          "$ref": "#/definitions/CostKindEnumType"
        },
        "amount": {
          "description": "Cost. Amount. Amount\r\nurn:x-oca:ocpp:uid:1:569244\r\nThe estimated or actual cost per kWh\r\n",
          "type": "integer"
        },
        "amountMultiplier": {
          "description": "Cost. Amount_ Multiplier. Integer\r\nurn:x-oca:ocpp:uid:1:569245\r\nValues: -3..3, The amountMultiplier defines the exponent to base 10 (dec). The final value is determined by: amount * 10 ^ amountMultiplier\r\n",
          "type": "integer"
        }
      },
      "required": [
        "costKind",
        "amount"
      ]
    },
    "RelativeTimeIntervalType": {
      "description": "Relative_ Timer_ Interval\r\nurn:x-oca:ocpp:uid:2:233270\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "start": {
          "description": "Relative_ Timer_ Interval. Start. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569279\r\nStart of the interval, in seconds from NOW.\r\n",
          "type": "integer"
        },
        "duration": {
          "description": "Relative_ Timer_ Interval. Duration. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569280\r\nDuration of the interval, in seconds.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "start"
      ]
    },
    "SalesTariffEntryType": {
      "description": "Sales_ Tariff_ Entry\r\nurn:x-oca:ocpp:uid:2:233271\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "relativeTimeInterval": {
          "$ref": "#/definitions/RelativeTimeIntervalType"
        },
        "ePriceLevel": {
          "description": "Sales_ Tariff_ Entry. E_ Price_ Level. Unsigned_ Integer\r\nurn:x-oca:ocpp:uid:1:569281\r\nDefines the price level of this SalesTariffEntry (referring to NumEPriceLevels). Small values for the EPriceLevel represent a cheaper TariffEntry. Large values for the EPriceLevel represent a more expensive TariffEntry.\r\n",
          "type": "integer",
          "minimum": 0
        },
        "consumptionCost": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/ConsumptionCostType"
          },
          "minItems": 1,
          "maxItems": 3
        }
      },
      "required": [
        "relativeTimeInterval"
      ]
    },
    "SalesTariffType": {
      "description": "Sales_ Tariff\r\nurn:x-oca:ocpp:uid:2:233272\r\nNOTE: This dataType is based on dataTypes from &lt;&lt;ref-ISOIEC15118-2,ISO 15118-2&gt;&gt;.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nSalesTariff identifier used to identify one sales tariff. An SAID remains a unique identifier for one schedule throughout a charging session.\r\n",
          "type": "integer"
        },
        "salesTariffDescription": {
          "description": "Sales_ Tariff. Sales. Tariff_ Description\r\nurn:x-oca:ocpp:uid:1:569283\r\nA human readable title/short description of the sales tariff e.g. for HMI display purposes.\r\n",
          "type": "string",
          "maxLength": 32
        },
        "numEPriceLevels": {
          "description": "Sales_ Tariff. Num_ E_ Price_ Levels. Counter\r\nurn:x-oca:ocpp:uid:1:569284\r\nDefines the overall number of distinct price levels used across all provided SalesTariff elements.\r\n",
          "type": "integer"
        },
        "salesTariffEntry": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/SalesTariffEntryType"
          },
          "minItems": 1,
          "maxItems": 1024
        }
      },
      "required": [
        "id",
        "salesTariffEntry"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "evseId": {
      "description": "For TxDefaultProfile an evseId=0 applies the profile to each individual evse. For ChargingStationMaxProfile and ChargingStationExternalConstraints an evseId=0 contains an overal limit for the whole Charging Station.\r\n",
      "type": "integer"
    },
    "chargingProfile": {
      "$ref": "#/definitions/ChargingProfileType"
    }
  },
  "required": [
    "evseId",
    "chargingProfile"
  ]
};

export const SetChargingProfileResponse: any = {
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
    "ChargingProfileStatusEnumType": {
      "description": "Returns whether the Charging Station has been able to process the message successfully. This does not guarantee the schedule will be followed to the letter. There might be other constraints the Charging Station may need to take into account.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/ChargingProfileStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const SetDisplayMessageRequest: any = {
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
    "MessageFormatEnumType": {
      "description": "Message_ Content. Format. Message_ Format_ Code\r\nurn:x-enexis:ecdm:uid:1:570848\r\nFormat of the message.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ASCII",
        "HTML",
        "URI",
        "UTF8"
      ]
    },
    "MessagePriorityEnumType": {
      "description": "Message_ Info. Priority. Message_ Priority_ Code\r\nurn:x-enexis:ecdm:uid:1:569253\r\nWith what priority should this message be shown\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "AlwaysFront",
        "InFront",
        "NormalCycle"
      ]
    },
    "MessageStateEnumType": {
      "description": "Message_ Info. State. Message_ State_ Code\r\nurn:x-enexis:ecdm:uid:1:569254\r\nDuring what state should this message be shown. When omitted this message should be shown in any state of the Charging Station.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Charging",
        "Faulted",
        "Idle",
        "Unavailable"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "MessageContentType": {
      "description": "Message_ Content\r\nurn:x-enexis:ecdm:uid:2:234490\r\nContains message details, for a message to be displayed on a Charging Station.\r\n\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "format": {
          "$ref": "#/definitions/MessageFormatEnumType"
        },
        "language": {
          "description": "Message_ Content. Language. Language_ Code\r\nurn:x-enexis:ecdm:uid:1:570849\r\nMessage language identifier. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n",
          "type": "string",
          "maxLength": 8
        },
        "content": {
          "description": "Message_ Content. Content. Message\r\nurn:x-enexis:ecdm:uid:1:570852\r\nMessage contents.\r\n\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "format",
        "content"
      ]
    },
    "MessageInfoType": {
      "description": "Message_ Info\r\nurn:x-enexis:ecdm:uid:2:233264\r\nContains message details, for a message to be displayed on a Charging Station.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "display": {
          "$ref": "#/definitions/ComponentType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nMaster resource identifier, unique within an exchange context. It is defined within the OCPP context as a positive Integer value (greater or equal to zero).\r\n",
          "type": "integer"
        },
        "priority": {
          "$ref": "#/definitions/MessagePriorityEnumType"
        },
        "state": {
          "$ref": "#/definitions/MessageStateEnumType"
        },
        "startDateTime": {
          "description": "Message_ Info. Start. Date_ Time\r\nurn:x-enexis:ecdm:uid:1:569256\r\nFrom what date-time should this message be shown. If omitted: directly.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "endDateTime": {
          "description": "Message_ Info. End. Date_ Time\r\nurn:x-enexis:ecdm:uid:1:569257\r\nUntil what date-time should this message be shown, after this date/time this message SHALL be removed.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "transactionId": {
          "description": "During which transaction shall this message be shown.\r\nMessage SHALL be removed by the Charging Station after transaction has\r\nended.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "message": {
          "$ref": "#/definitions/MessageContentType"
        }
      },
      "required": [
        "id",
        "priority",
        "message"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "message": {
      "$ref": "#/definitions/MessageInfoType"
    }
  },
  "required": [
    "message"
  ]
};

export const SetDisplayMessageResponse: any = {
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
    "DisplayMessageStatusEnumType": {
      "description": "This indicates whether the Charging Station is able to display the message.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "NotSupportedMessageFormat",
        "Rejected",
        "NotSupportedPriority",
        "NotSupportedState",
        "UnknownTransaction"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/DisplayMessageStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const SetMonitoringBaseRequest: any = {
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
    "MonitoringBaseEnumType": {
      "description": "Specify which monitoring base will be set\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "All",
        "FactoryDefault",
        "HardWiredOnly"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "monitoringBase": {
      "$ref": "#/definitions/MonitoringBaseEnumType"
    }
  },
  "required": [
    "monitoringBase"
  ]
};

export const SetMonitoringBaseResponse: any = {
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
    "GenericDeviceModelStatusEnumType": {
      "description": "Indicates whether the Charging Station was able to accept the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "NotSupported",
        "EmptyResultSet"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GenericDeviceModelStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const SetMonitoringLevelRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "severity": {
      "description": "The Charging Station SHALL only report events with a severity number lower than or equal to this severity.\r\nThe severity range is 0-9, with 0 as the highest and 9 as the lowest severity level.\r\n\r\nThe severity levels have the following meaning: +\r\n*0-Danger* +\r\nIndicates lives are potentially in danger. Urgent attention is needed and action should be taken immediately. +\r\n*1-Hardware Failure* +\r\nIndicates that the Charging Station is unable to continue regular operations due to Hardware issues. Action is required. +\r\n*2-System Failure* +\r\nIndicates that the Charging Station is unable to continue regular operations due to software or minor hardware issues. Action is required. +\r\n*3-Critical* +\r\nIndicates a critical error. Action is required. +\r\n*4-Error* +\r\nIndicates a non-urgent error. Action is required. +\r\n*5-Alert* +\r\nIndicates an alert event. Default severity for any type of monitoring event.  +\r\n*6-Warning* +\r\nIndicates a warning event. Action may be required. +\r\n*7-Notice* +\r\nIndicates an unusual event. No immediate action is required. +\r\n*8-Informational* +\r\nIndicates a regular operational event. May be used for reporting, measuring throughput, etc. No action is required. +\r\n*9-Debug* +\r\nIndicates information useful to developers for debugging, not useful during operations.\r\n\r\n\r\n",
      "type": "integer"
    }
  },
  "required": [
    "severity"
  ]
};

export const SetMonitoringLevelResponse: any = {
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
    "GenericStatusEnumType": {
      "description": "Indicates whether the Charging Station was able to accept the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GenericStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const SetNetworkProfileRequest: any = {
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
    "APNAuthenticationEnumType": {
      "description": "APN. APN_ Authentication. APN_ Authentication_ Code\r\nurn:x-oca:ocpp:uid:1:568828\r\nAuthentication method.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "CHAP",
        "NONE",
        "PAP",
        "AUTO"
      ]
    },
    "OCPPInterfaceEnumType": {
      "description": "Applicable Network Interface.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Wired0",
        "Wired1",
        "Wired2",
        "Wired3",
        "Wireless0",
        "Wireless1",
        "Wireless2",
        "Wireless3"
      ]
    },
    "OCPPTransportEnumType": {
      "description": "Communication_ Function. OCPP_ Transport. OCPP_ Transport_ Code\r\nurn:x-oca:ocpp:uid:1:569356\r\nDefines the transport protocol (e.g. SOAP or JSON). Note: SOAP is not supported in OCPP 2.0, but is supported by other versions of OCPP.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "JSON",
        "SOAP"
      ]
    },
    "OCPPVersionEnumType": {
      "description": "Communication_ Function. OCPP_ Version. OCPP_ Version_ Code\r\nurn:x-oca:ocpp:uid:1:569355\r\nDefines the OCPP version used for this communication function.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "OCPP12",
        "OCPP15",
        "OCPP16",
        "OCPP20"
      ]
    },
    "VPNEnumType": {
      "description": "VPN. Type. VPN_ Code\r\nurn:x-oca:ocpp:uid:1:569277\r\nType of VPN\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "IKEv2",
        "IPSec",
        "L2TP",
        "PPTP"
      ]
    },
    "APNType": {
      "description": "APN\r\nurn:x-oca:ocpp:uid:2:233134\r\nCollection of configuration data needed to make a data-connection over a cellular network.\r\n\r\nNOTE: When asking a GSM modem to dial in, it is possible to specify which mobile operator should be used. This can be done with the mobile country code (MCC) in combination with a mobile network code (MNC). Example: If your preferred network is Vodafone Netherlands, the MCC=204 and the MNC=04 which means the key PreferredNetwork = 20404 Some modems allows to specify a preferred network, which means, if this network is not available, a different network is used. If you specify UseOnlyPreferredNetwork and this network is not available, the modem will not dial in.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "apn": {
          "description": "APN. APN. URI\r\nurn:x-oca:ocpp:uid:1:568814\r\nThe Access Point Name as an URL.\r\n",
          "type": "string",
          "maxLength": 512
        },
        "apnUserName": {
          "description": "APN. APN. User_ Name\r\nurn:x-oca:ocpp:uid:1:568818\r\nAPN username.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "apnPassword": {
          "description": "APN. APN. Password\r\nurn:x-oca:ocpp:uid:1:568819\r\nAPN Password.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "simPin": {
          "description": "APN. SIMPIN. PIN_ Code\r\nurn:x-oca:ocpp:uid:1:568821\r\nSIM card pin code.\r\n",
          "type": "integer"
        },
        "preferredNetwork": {
          "description": "APN. Preferred_ Network. Mobile_ Network_ ID\r\nurn:x-oca:ocpp:uid:1:568822\r\nPreferred network, written as MCC and MNC concatenated. See note.\r\n",
          "type": "string",
          "maxLength": 6
        },
        "useOnlyPreferredNetwork": {
          "description": "APN. Use_ Only_ Preferred_ Network. Indicator\r\nurn:x-oca:ocpp:uid:1:568824\r\nDefault: false. Use only the preferred Network, do\r\nnot dial in when not available. See Note.\r\n",
          "type": "boolean",
          "default": false
        },
        "apnAuthentication": {
          "$ref": "#/definitions/APNAuthenticationEnumType"
        }
      },
      "required": [
        "apn",
        "apnAuthentication"
      ]
    },
    "NetworkConnectionProfileType": {
      "description": "Communication_ Function\r\nurn:x-oca:ocpp:uid:2:233304\r\nThe NetworkConnectionProfile defines the functional and technical parameters of a communication link.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "apn": {
          "$ref": "#/definitions/APNType"
        },
        "ocppVersion": {
          "$ref": "#/definitions/OCPPVersionEnumType"
        },
        "ocppTransport": {
          "$ref": "#/definitions/OCPPTransportEnumType"
        },
        "ocppCsmsUrl": {
          "description": "Communication_ Function. OCPP_ Central_ System_ URL. URI\r\nurn:x-oca:ocpp:uid:1:569357\r\nURL of the CSMS(s) that this Charging Station  communicates with.\r\n",
          "type": "string",
          "maxLength": 512
        },
        "messageTimeout": {
          "description": "Duration in seconds before a message send by the Charging Station via this network connection times-out.\r\nThe best setting depends on the underlying network and response times of the CSMS.\r\nIf you are looking for a some guideline: use 30 seconds as a starting point.\r\n",
          "type": "integer"
        },
        "securityProfile": {
          "description": "This field specifies the security profile used when connecting to the CSMS with this NetworkConnectionProfile.\r\n",
          "type": "integer"
        },
        "ocppInterface": {
          "$ref": "#/definitions/OCPPInterfaceEnumType"
        },
        "vpn": {
          "$ref": "#/definitions/VPNType"
        }
      },
      "required": [
        "ocppVersion",
        "ocppTransport",
        "ocppCsmsUrl",
        "messageTimeout",
        "securityProfile",
        "ocppInterface"
      ]
    },
    "VPNType": {
      "description": "VPN\r\nurn:x-oca:ocpp:uid:2:233268\r\nVPN Configuration settings\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "server": {
          "description": "VPN. Server. URI\r\nurn:x-oca:ocpp:uid:1:569272\r\nVPN Server Address\r\n",
          "type": "string",
          "maxLength": 512
        },
        "user": {
          "description": "VPN. User. User_ Name\r\nurn:x-oca:ocpp:uid:1:569273\r\nVPN User\r\n",
          "type": "string",
          "maxLength": 20
        },
        "group": {
          "description": "VPN. Group. Group_ Name\r\nurn:x-oca:ocpp:uid:1:569274\r\nVPN group.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "password": {
          "description": "VPN. Password. Password\r\nurn:x-oca:ocpp:uid:1:569275\r\nVPN Password.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "key": {
          "description": "VPN. Key. VPN_ Key\r\nurn:x-oca:ocpp:uid:1:569276\r\nVPN shared secret.\r\n",
          "type": "string",
          "maxLength": 255
        },
        "type": {
          "$ref": "#/definitions/VPNEnumType"
        }
      },
      "required": [
        "server",
        "user",
        "password",
        "key",
        "type"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "configurationSlot": {
      "description": "Slot in which the configuration should be stored.\r\n",
      "type": "integer"
    },
    "connectionData": {
      "$ref": "#/definitions/NetworkConnectionProfileType"
    }
  },
  "required": [
    "configurationSlot",
    "connectionData"
  ]
};

export const SetNetworkProfileResponse: any = {
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
    "SetNetworkProfileStatusEnumType": {
      "description": "Result of operation.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "Failed"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/SetNetworkProfileStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const SetVariableMonitoringRequest: any = {
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
    "MonitorEnumType": {
      "description": "The type of this monitor, e.g. a threshold, delta or periodic monitor. \r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "UpperThreshold",
        "LowerThreshold",
        "Delta",
        "Periodic",
        "PeriodicClockAligned"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "SetMonitoringDataType": {
      "description": "Class to hold parameters of SetVariableMonitoring request.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "An id SHALL only be given to replace an existing monitor. The Charging Station handles the generation of id's for new monitors.\r\n\r\n",
          "type": "integer"
        },
        "transaction": {
          "description": "Monitor only active when a transaction is ongoing on a component relevant to this transaction. Default = false.\r\n\r\n",
          "type": "boolean",
          "default": false
        },
        "value": {
          "description": "Value for threshold or delta monitoring.\r\nFor Periodic or PeriodicClockAligned this is the interval in seconds.\r\n\r\n",
          "type": "number"
        },
        "type": {
          "$ref": "#/definitions/MonitorEnumType"
        },
        "severity": {
          "description": "The severity that will be assigned to an event that is triggered by this monitor. The severity range is 0-9, with 0 as the highest and 9 as the lowest severity level.\r\n\r\nThe severity levels have the following meaning: +\r\n*0-Danger* +\r\nIndicates lives are potentially in danger. Urgent attention is needed and action should be taken immediately. +\r\n*1-Hardware Failure* +\r\nIndicates that the Charging Station is unable to continue regular operations due to Hardware issues. Action is required. +\r\n*2-System Failure* +\r\nIndicates that the Charging Station is unable to continue regular operations due to software or minor hardware issues. Action is required. +\r\n*3-Critical* +\r\nIndicates a critical error. Action is required. +\r\n*4-Error* +\r\nIndicates a non-urgent error. Action is required. +\r\n*5-Alert* +\r\nIndicates an alert event. Default severity for any type of monitoring event.  +\r\n*6-Warning* +\r\nIndicates a warning event. Action may be required. +\r\n*7-Notice* +\r\nIndicates an unusual event. No immediate action is required. +\r\n*8-Informational* +\r\nIndicates a regular operational event. May be used for reporting, measuring throughput, etc. No action is required. +\r\n*9-Debug* +\r\nIndicates information useful to developers for debugging, not useful during operations.\r\n\r\n",
          "type": "integer"
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        }
      },
      "required": [
        "value",
        "type",
        "severity",
        "component",
        "variable"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "setMonitoringData": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/SetMonitoringDataType"
      },
      "minItems": 1
    }
  },
  "required": [
    "setMonitoringData"
  ]
};

export const SetVariableMonitoringResponse: any = {
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
    "MonitorEnumType": {
      "description": "The type of this monitor, e.g. a threshold, delta or periodic monitor. \r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "UpperThreshold",
        "LowerThreshold",
        "Delta",
        "Periodic",
        "PeriodicClockAligned"
      ]
    },
    "SetMonitoringStatusEnumType": {
      "description": "Status is OK if a value could be returned. Otherwise this will indicate the reason why a value could not be returned.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "UnknownComponent",
        "UnknownVariable",
        "UnsupportedMonitorType",
        "Rejected",
        "Duplicate"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "SetMonitoringResultType": {
      "description": "Class to hold result of SetVariableMonitoring request.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Id given to the VariableMonitor by the Charging Station. The Id is only returned when status is accepted. Installed VariableMonitors should have unique id's but the id's of removed Installed monitors should have unique id's but the id's of removed monitors MAY be reused.\r\n",
          "type": "integer"
        },
        "statusInfo": {
          "$ref": "#/definitions/StatusInfoType"
        },
        "status": {
          "$ref": "#/definitions/SetMonitoringStatusEnumType"
        },
        "type": {
          "$ref": "#/definitions/MonitorEnumType"
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        },
        "severity": {
          "description": "The severity that will be assigned to an event that is triggered by this monitor. The severity range is 0-9, with 0 as the highest and 9 as the lowest severity level.\r\n\r\nThe severity levels have the following meaning: +\r\n*0-Danger* +\r\nIndicates lives are potentially in danger. Urgent attention is needed and action should be taken immediately. +\r\n*1-Hardware Failure* +\r\nIndicates that the Charging Station is unable to continue regular operations due to Hardware issues. Action is required. +\r\n*2-System Failure* +\r\nIndicates that the Charging Station is unable to continue regular operations due to software or minor hardware issues. Action is required. +\r\n*3-Critical* +\r\nIndicates a critical error. Action is required. +\r\n*4-Error* +\r\nIndicates a non-urgent error. Action is required. +\r\n*5-Alert* +\r\nIndicates an alert event. Default severity for any type of monitoring event.  +\r\n*6-Warning* +\r\nIndicates a warning event. Action may be required. +\r\n*7-Notice* +\r\nIndicates an unusual event. No immediate action is required. +\r\n*8-Informational* +\r\nIndicates a regular operational event. May be used for reporting, measuring throughput, etc. No action is required. +\r\n*9-Debug* +\r\nIndicates information useful to developers for debugging, not useful during operations.\r\n\r\n",
          "type": "integer"
        }
      },
      "required": [
        "status",
        "type",
        "severity",
        "component",
        "variable"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "setMonitoringResult": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/SetMonitoringResultType"
      },
      "minItems": 1
    }
  },
  "required": [
    "setMonitoringResult"
  ]
};

export const SetVariablesRequest: any = {
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
    "AttributeEnumType": {
      "description": "Type of attribute: Actual, Target, MinSet, MaxSet. Default is Actual when omitted.\r\n",
      "type": "string",
      "default": "Actual",
      "additionalProperties": false,
      "enum": [
        "Actual",
        "Target",
        "MinSet",
        "MaxSet"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "SetVariableDataType": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "attributeType": {
          "$ref": "#/definitions/AttributeEnumType"
        },
        "attributeValue": {
          "description": "Value to be assigned to attribute of variable.\r\n\r\nThe Configuration Variable &lt;&lt;configkey-configuration-value-size,ConfigurationValueSize&gt;&gt; can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal. \r\n",
          "type": "string",
          "maxLength": 1000
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        }
      },
      "required": [
        "attributeValue",
        "component",
        "variable"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "setVariableData": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/SetVariableDataType"
      },
      "minItems": 1
    }
  },
  "required": [
    "setVariableData"
  ]
};

export const SetVariablesResponse: any = {
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
    "AttributeEnumType": {
      "description": "Type of attribute: Actual, Target, MinSet, MaxSet. Default is Actual when omitted.\r\n",
      "type": "string",
      "default": "Actual",
      "additionalProperties": false,
      "enum": [
        "Actual",
        "Target",
        "MinSet",
        "MaxSet"
      ]
    },
    "SetVariableStatusEnumType": {
      "description": "Result status of setting the variable.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "UnknownComponent",
        "UnknownVariable",
        "NotSupportedAttributeType",
        "RebootRequired"
      ]
    },
    "ComponentType": {
      "description": "A physical or logical component\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "evse": {
          "$ref": "#/definitions/EVSEType"
        },
        "name": {
          "description": "Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "SetVariableResultType": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "attributeType": {
          "$ref": "#/definitions/AttributeEnumType"
        },
        "attributeStatus": {
          "$ref": "#/definitions/SetVariableStatusEnumType"
        },
        "attributeStatusInfo": {
          "$ref": "#/definitions/StatusInfoType"
        },
        "component": {
          "$ref": "#/definitions/ComponentType"
        },
        "variable": {
          "$ref": "#/definitions/VariableType"
        }
      },
      "required": [
        "attributeStatus",
        "component",
        "variable"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    },
    "VariableType": {
      "description": "Reference key to a component-variable.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "name": {
          "description": "Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "instance": {
          "description": "Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "name"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "setVariableResult": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/SetVariableResultType"
      },
      "minItems": 1
    }
  },
  "required": [
    "setVariableResult"
  ]
};

export const SignCertificateRequest: any = {
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
    "CertificateSigningUseEnumType": {
      "description": "Indicates the type of certificate that is to be signed. When omitted the certificate is to be used for both the 15118 connection (if implemented) and the Charging Station to CSMS connection.\r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ChargingStationCertificate",
        "V2GCertificate"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "csr": {
      "description": "The Charging Station SHALL send the public key in form of a Certificate Signing Request (CSR) as described in RFC 2986 [22] and then PEM encoded, using the &lt;&lt;signcertificaterequest,SignCertificateRequest&gt;&gt; message.\r\n",
      "type": "string",
      "maxLength": 5500
    },
    "certificateType": {
      "$ref": "#/definitions/CertificateSigningUseEnumType"
    }
  },
  "required": [
    "csr"
  ]
};

export const SignCertificateResponse: any = {
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
    "GenericStatusEnumType": {
      "description": "Specifies whether the CSMS can process the request.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/GenericStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const StatusNotificationRequest: any = {
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
    "ConnectorStatusEnumType": {
      "description": "This contains the current status of the Connector.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Available",
        "Occupied",
        "Reserved",
        "Unavailable",
        "Faulted"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "timestamp": {
      "description": "The time for which the status is reported. If absent time of receipt of the message will be assumed.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "connectorStatus": {
      "$ref": "#/definitions/ConnectorStatusEnumType"
    },
    "evseId": {
      "description": "The id of the EVSE to which the connector belongs for which the the status is reported.\r\n",
      "type": "integer"
    },
    "connectorId": {
      "description": "The id of the connector within the EVSE for which the status is reported.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "timestamp",
    "connectorStatus",
    "evseId",
    "connectorId"
  ]
};

export const StatusNotificationResponse: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    }
  }
};

export const TransactionEventRequest: any = {
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
    "ChargingStateEnumType": {
      "description": "Transaction. State. Transaction_ State_ Code\r\nurn:x-oca:ocpp:uid:1:569419\r\nCurrent charging state, is required when state\r\nhas changed.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Charging",
        "EVConnected",
        "SuspendedEV",
        "SuspendedEVSE",
        "Idle"
      ]
    },
    "IdTokenEnumType": {
      "description": "Enumeration of possible idToken types.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Central",
        "eMAID",
        "ISO14443",
        "ISO15693",
        "KeyCode",
        "Local",
        "MacAddress",
        "NoAuthorization"
      ]
    },
    "LocationEnumType": {
      "description": "Sampled_ Value. Location. Location_ Code\r\nurn:x-oca:ocpp:uid:1:569265\r\nIndicates where the measured value has been sampled. Default =  \"Outlet\"\r\n\r\n",
      "type": "string",
      "default": "Outlet",
      "additionalProperties": false,
      "enum": [
        "Body",
        "Cable",
        "EV",
        "Inlet",
        "Outlet"
      ]
    },
    "MeasurandEnumType": {
      "description": "Sampled_ Value. Measurand. Measurand_ Code\r\nurn:x-oca:ocpp:uid:1:569263\r\nType of measurement. Default = \"Energy.Active.Import.Register\"\r\n",
      "type": "string",
      "default": "Energy.Active.Import.Register",
      "additionalProperties": false,
      "enum": [
        "Current.Export",
        "Current.Import",
        "Current.Offered",
        "Energy.Active.Export.Register",
        "Energy.Active.Import.Register",
        "Energy.Reactive.Export.Register",
        "Energy.Reactive.Import.Register",
        "Energy.Active.Export.Interval",
        "Energy.Active.Import.Interval",
        "Energy.Active.Net",
        "Energy.Reactive.Export.Interval",
        "Energy.Reactive.Import.Interval",
        "Energy.Reactive.Net",
        "Energy.Apparent.Net",
        "Energy.Apparent.Import",
        "Energy.Apparent.Export",
        "Frequency",
        "Power.Active.Export",
        "Power.Active.Import",
        "Power.Factor",
        "Power.Offered",
        "Power.Reactive.Export",
        "Power.Reactive.Import",
        "SoC",
        "Voltage"
      ]
    },
    "PhaseEnumType": {
      "description": "Sampled_ Value. Phase. Phase_ Code\r\nurn:x-oca:ocpp:uid:1:569264\r\nIndicates how the measured value is to be interpreted. For instance between L1 and neutral (L1-N) Please note that not all values of phase are applicable to all Measurands. When phase is absent, the measured value is interpreted as an overall value.\r\n",
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
    "ReadingContextEnumType": {
      "description": "Sampled_ Value. Context. Reading_ Context_ Code\r\nurn:x-oca:ocpp:uid:1:569261\r\nType of detail value: start, end or sample. Default = \"Sample.Periodic\"\r\n",
      "type": "string",
      "default": "Sample.Periodic",
      "additionalProperties": false,
      "enum": [
        "Interruption.Begin",
        "Interruption.End",
        "Other",
        "Sample.Clock",
        "Sample.Periodic",
        "Transaction.Begin",
        "Transaction.End",
        "Trigger"
      ]
    },
    "ReasonEnumType": {
      "description": "Transaction. Stopped_ Reason. EOT_ Reason_ Code\r\nurn:x-oca:ocpp:uid:1:569413\r\nThis contains the reason why the transaction was stopped. MAY only be omitted when Reason is \"Local\".\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "DeAuthorized",
        "EmergencyStop",
        "EnergyLimitReached",
        "EVDisconnected",
        "GroundFault",
        "ImmediateReset",
        "Local",
        "LocalOutOfCredit",
        "MasterPass",
        "Other",
        "OvercurrentFault",
        "PowerLoss",
        "PowerQuality",
        "Reboot",
        "Remote",
        "SOCLimitReached",
        "StoppedByEV",
        "TimeLimitReached",
        "Timeout"
      ]
    },
    "TransactionEventEnumType": {
      "description": "This contains the type of this event.\r\nThe first TransactionEvent of a transaction SHALL contain: \"Started\" The last TransactionEvent of a transaction SHALL contain: \"Ended\" All others SHALL contain: \"Updated\"\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Ended",
        "Started",
        "Updated"
      ]
    },
    "TriggerReasonEnumType": {
      "description": "Reason the Charging Station sends this message to the CSMS\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Authorized",
        "CablePluggedIn",
        "ChargingRateChanged",
        "ChargingStateChanged",
        "Deauthorized",
        "EnergyLimitReached",
        "EVCommunicationLost",
        "EVConnectTimeout",
        "MeterValueClock",
        "MeterValuePeriodic",
        "TimeLimitReached",
        "Trigger",
        "UnlockCommand",
        "StopAuthorized",
        "EVDeparted",
        "EVDetected",
        "RemoteStop",
        "RemoteStart",
        "AbnormalCondition",
        "SignedDataReceived",
        "ResetCommand"
      ]
    },
    "AdditionalInfoType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalIdToken": {
          "description": "This field specifies the additional IdToken.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "description": "This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "additionalIdToken",
        "type"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    },
    "IdTokenType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalInfo": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/AdditionalInfoType"
          },
          "minItems": 1
        },
        "idToken": {
          "description": "IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "$ref": "#/definitions/IdTokenEnumType"
        }
      },
      "required": [
        "idToken",
        "type"
      ]
    },
    "MeterValueType": {
      "description": "Meter_ Value\r\nurn:x-oca:ocpp:uid:2:233265\r\nCollection of one or more sampled values in MeterValuesRequest and TransactionEvent. All sampled values in a MeterValue are sampled at the same point in time.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "sampledValue": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/SampledValueType"
          },
          "minItems": 1
        },
        "timestamp": {
          "description": "Meter_ Value. Timestamp. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569259\r\nTimestamp for measured value(s).\r\n",
          "type": "string",
          "format": "date-time"
        }
      },
      "required": [
        "timestamp",
        "sampledValue"
      ]
    },
    "SampledValueType": {
      "description": "Sampled_ Value\r\nurn:x-oca:ocpp:uid:2:233266\r\nSingle sampled value in MeterValues. Each value can be accompanied by optional fields.\r\n\r\nTo save on mobile data usage, default values of all of the optional fields are such that. The value without any additional fields will be interpreted, as a register reading of active import energy in Wh (Watt-hour) units.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "value": {
          "description": "Sampled_ Value. Value. Measure\r\nurn:x-oca:ocpp:uid:1:569260\r\nIndicates the measured value.\r\n\r\n",
          "type": "number"
        },
        "context": {
          "$ref": "#/definitions/ReadingContextEnumType"
        },
        "measurand": {
          "$ref": "#/definitions/MeasurandEnumType"
        },
        "phase": {
          "$ref": "#/definitions/PhaseEnumType"
        },
        "location": {
          "$ref": "#/definitions/LocationEnumType"
        },
        "signedMeterValue": {
          "$ref": "#/definitions/SignedMeterValueType"
        },
        "unitOfMeasure": {
          "$ref": "#/definitions/UnitOfMeasureType"
        }
      },
      "required": [
        "value"
      ]
    },
    "SignedMeterValueType": {
      "description": "Represent a signed version of the meter value.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "signedMeterData": {
          "description": "Base64 encoded, contains the signed data which might contain more then just the meter value. It can contain information like timestamps, reference to a customer etc.\r\n",
          "type": "string",
          "maxLength": 2500
        },
        "signingMethod": {
          "description": "Method used to create the digital signature.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "encodingMethod": {
          "description": "Method used to encode the meter values before applying the digital signature algorithm.\r\n",
          "type": "string",
          "maxLength": 50
        },
        "publicKey": {
          "description": "Base64 encoded, sending depends on configuration variable _PublicKeyWithSignedMeterValue_.\r\n",
          "type": "string",
          "maxLength": 2500
        }
      },
      "required": [
        "signedMeterData",
        "signingMethod",
        "encodingMethod",
        "publicKey"
      ]
    },
    "TransactionType": {
      "description": "Transaction\r\nurn:x-oca:ocpp:uid:2:233318\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "transactionId": {
          "description": "This contains the Id of the transaction.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "chargingState": {
          "$ref": "#/definitions/ChargingStateEnumType"
        },
        "timeSpentCharging": {
          "description": "Transaction. Time_ Spent_ Charging. Elapsed_ Time\r\nurn:x-oca:ocpp:uid:1:569415\r\nContains the total time that energy flowed from EVSE to EV during the transaction (in seconds). Note that timeSpentCharging is smaller or equal to the duration of the transaction.\r\n",
          "type": "integer"
        },
        "stoppedReason": {
          "$ref": "#/definitions/ReasonEnumType"
        },
        "remoteStartId": {
          "description": "The ID given to remote start request (&lt;&lt;requeststarttransactionrequest, RequestStartTransactionRequest&gt;&gt;. This enables to CSMS to match the started transaction to the given start request.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "transactionId"
      ]
    },
    "UnitOfMeasureType": {
      "description": "Represents a UnitOfMeasure with a multiplier\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "unit": {
          "description": "Unit of the value. Default = \"Wh\" if the (default) measurand is an \"Energy\" type.\r\nThis field SHALL use a value from the list Standardized Units of Measurements in Part 2 Appendices. \r\nIf an applicable unit is available in that list, otherwise a \"custom\" unit might be used.\r\n",
          "type": "string",
          "default": "Wh",
          "maxLength": 20
        },
        "multiplier": {
          "description": "Multiplier, this value represents the exponent to base 10. I.e. multiplier 3 means 10 raised to the 3rd power. Default is 0.\r\n",
          "type": "integer",
          "default": 0
        }
      }
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "eventType": {
      "$ref": "#/definitions/TransactionEventEnumType"
    },
    "meterValue": {
      "type": "array",
      "additionalItems": false,
      "items": {
        "$ref": "#/definitions/MeterValueType"
      },
      "minItems": 1
    },
    "timestamp": {
      "description": "The date and time at which this transaction event occurred.\r\n",
      "type": "string",
      "format": "date-time"
    },
    "triggerReason": {
      "$ref": "#/definitions/TriggerReasonEnumType"
    },
    "seqNo": {
      "description": "Incremental sequence number, helps with determining if all messages of a transaction have been received.\r\n",
      "type": "integer"
    },
    "offline": {
      "description": "Indication that this transaction event happened when the Charging Station was offline. Default = false, meaning: the event occurred when the Charging Station was online.\r\n",
      "type": "boolean",
      "default": false
    },
    "numberOfPhasesUsed": {
      "description": "If the Charging Station is able to report the number of phases used, then it SHALL provide it. When omitted the CSMS may be able to determine the number of phases used via device management.\r\n",
      "type": "integer"
    },
    "cableMaxCurrent": {
      "description": "The maximum current of the connected cable in Ampere (A).\r\n",
      "type": "integer"
    },
    "reservationId": {
      "description": "This contains the Id of the reservation that terminates as a result of this transaction.\r\n",
      "type": "integer"
    },
    "transactionInfo": {
      "$ref": "#/definitions/TransactionType"
    },
    "evse": {
      "$ref": "#/definitions/EVSEType"
    },
    "idToken": {
      "$ref": "#/definitions/IdTokenType"
    }
  },
  "required": [
    "eventType",
    "timestamp",
    "triggerReason",
    "seqNo",
    "transactionInfo"
  ]
};

export const TransactionEventResponse: any = {
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
    "AuthorizationStatusEnumType": {
      "description": "ID_ Token. Status. Authorization_ Status\r\nurn:x-oca:ocpp:uid:1:569372\r\nCurrent status of the ID Token.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Blocked",
        "ConcurrentTx",
        "Expired",
        "Invalid",
        "NoCredit",
        "NotAllowedTypeEVSE",
        "NotAtThisLocation",
        "NotAtThisTime",
        "Unknown"
      ]
    },
    "IdTokenEnumType": {
      "description": "Enumeration of possible idToken types.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Central",
        "eMAID",
        "ISO14443",
        "ISO15693",
        "KeyCode",
        "Local",
        "MacAddress",
        "NoAuthorization"
      ]
    },
    "MessageFormatEnumType": {
      "description": "Message_ Content. Format. Message_ Format_ Code\r\nurn:x-enexis:ecdm:uid:1:570848\r\nFormat of the message.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "ASCII",
        "HTML",
        "URI",
        "UTF8"
      ]
    },
    "AdditionalInfoType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalIdToken": {
          "description": "This field specifies the additional IdToken.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "description": "This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.\r\n",
          "type": "string",
          "maxLength": 50
        }
      },
      "required": [
        "additionalIdToken",
        "type"
      ]
    },
    "IdTokenInfoType": {
      "description": "ID_ Token\r\nurn:x-oca:ocpp:uid:2:233247\r\nContains status information about an identifier.\r\nIt is advised to not stop charging for a token that expires during charging, as ExpiryDate is only used for caching purposes. If ExpiryDate is not given, the status has no end date.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "status": {
          "$ref": "#/definitions/AuthorizationStatusEnumType"
        },
        "cacheExpiryDateTime": {
          "description": "ID_ Token. Expiry. Date_ Time\r\nurn:x-oca:ocpp:uid:1:569373\r\nDate and Time after which the token must be considered invalid.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "chargingPriority": {
          "description": "Priority from a business point of view. Default priority is 0, The range is from -9 to 9. Higher values indicate a higher priority. The chargingPriority in &lt;&lt;transactioneventresponse,TransactionEventResponse&gt;&gt; overrules this one. \r\n",
          "type": "integer"
        },
        "language1": {
          "description": "ID_ Token. Language1. Language_ Code\r\nurn:x-oca:ocpp:uid:1:569374\r\nPreferred user interface language of identifier user. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n\r\n",
          "type": "string",
          "maxLength": 8
        },
        "evseId": {
          "description": "Only used when the IdToken is only valid for one or more specific EVSEs, not for the entire Charging Station.\r\n\r\n",
          "type": "array",
          "additionalItems": false,
          "items": {
            "type": "integer"
          },
          "minItems": 1
        },
        "groupIdToken": {
          "$ref": "#/definitions/IdTokenType"
        },
        "language2": {
          "description": "ID_ Token. Language2. Language_ Code\r\nurn:x-oca:ocpp:uid:1:569375\r\nSecond preferred user interface language of identifier user. Don’t use when language1 is omitted, has to be different from language1. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n",
          "type": "string",
          "maxLength": 8
        },
        "personalMessage": {
          "$ref": "#/definitions/MessageContentType"
        }
      },
      "required": [
        "status"
      ]
    },
    "IdTokenType": {
      "description": "Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "additionalInfo": {
          "type": "array",
          "additionalItems": false,
          "items": {
            "$ref": "#/definitions/AdditionalInfoType"
          },
          "minItems": 1
        },
        "idToken": {
          "description": "IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.\r\n",
          "type": "string",
          "maxLength": 36
        },
        "type": {
          "$ref": "#/definitions/IdTokenEnumType"
        }
      },
      "required": [
        "idToken",
        "type"
      ]
    },
    "MessageContentType": {
      "description": "Message_ Content\r\nurn:x-enexis:ecdm:uid:2:234490\r\nContains message details, for a message to be displayed on a Charging Station.\r\n\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "format": {
          "$ref": "#/definitions/MessageFormatEnumType"
        },
        "language": {
          "description": "Message_ Content. Language. Language_ Code\r\nurn:x-enexis:ecdm:uid:1:570849\r\nMessage language identifier. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.\r\n",
          "type": "string",
          "maxLength": 8
        },
        "content": {
          "description": "Message_ Content. Content. Message\r\nurn:x-enexis:ecdm:uid:1:570852\r\nMessage contents.\r\n\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "format",
        "content"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "totalCost": {
      "description": "SHALL only be sent when charging has ended. Final total cost of this transaction, including taxes. In the currency configured with the Configuration Variable: &lt;&lt;configkey-currency,`Currency`&gt;&gt;. When omitted, the transaction was NOT free. To indicate a free transaction, the CSMS SHALL send 0.00.\r\n\r\n",
      "type": "number"
    },
    "chargingPriority": {
      "description": "Priority from a business point of view. Default priority is 0, The range is from -9 to 9. Higher values indicate a higher priority. The chargingPriority in &lt;&lt;transactioneventresponse,TransactionEventResponse&gt;&gt; is temporarily, so it may not be set in the &lt;&lt;cmn_idtokeninfotype,IdTokenInfoType&gt;&gt; afterwards. Also the chargingPriority in &lt;&lt;transactioneventresponse,TransactionEventResponse&gt;&gt; overrules the one in &lt;&lt;cmn_idtokeninfotype,IdTokenInfoType&gt;&gt;.  \r\n",
      "type": "integer"
    },
    "idTokenInfo": {
      "$ref": "#/definitions/IdTokenInfoType"
    },
    "updatedPersonalMessage": {
      "$ref": "#/definitions/MessageContentType"
    }
  }
};

export const TriggerMessageRequest: any = {
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
    "MessageTriggerEnumType": {
      "description": "Type of message to be triggered.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "BootNotification",
        "LogStatusNotification",
        "FirmwareStatusNotification",
        "Heartbeat",
        "MeterValues",
        "SignChargingStationCertificate",
        "SignV2GCertificate",
        "StatusNotification",
        "TransactionEvent",
        "SignCombinedCertificate",
        "PublishFirmwareStatusNotification"
      ]
    },
    "EVSEType": {
      "description": "EVSE\r\nurn:x-oca:ocpp:uid:2:233123\r\nElectric Vehicle Supply Equipment\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "id": {
          "description": "Identified_ Object. MRID. Numeric_ Identifier\r\nurn:x-enexis:ecdm:uid:1:569198\r\nEVSE Identifier. This contains a number (&gt; 0) designating an EVSE of the Charging Station.\r\n",
          "type": "integer"
        },
        "connectorId": {
          "description": "An id to designate a specific connector (on an EVSE) by connector index number.\r\n",
          "type": "integer"
        }
      },
      "required": [
        "id"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "evse": {
      "$ref": "#/definitions/EVSEType"
    },
    "requestedMessage": {
      "$ref": "#/definitions/MessageTriggerEnumType"
    }
  },
  "required": [
    "requestedMessage"
  ]
};

export const TriggerMessageResponse: any = {
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
    "TriggerMessageStatusEnumType": {
      "description": "Indicates whether the Charging Station will send the requested notification or not.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "NotImplemented"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/TriggerMessageStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const UnlockConnectorRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "evseId": {
      "description": "This contains the identifier of the EVSE for which a connector needs to be unlocked.\r\n",
      "type": "integer"
    },
    "connectorId": {
      "description": "This contains the identifier of the connector that needs to be unlocked.\r\n",
      "type": "integer"
    }
  },
  "required": [
    "evseId",
    "connectorId"
  ]
};

export const UnlockConnectorResponse: any = {
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
    "UnlockStatusEnumType": {
      "description": "This indicates whether the Charging Station has unlocked the connector.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Unlocked",
        "UnlockFailed",
        "OngoingAuthorizedTransaction",
        "UnknownConnector"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/UnlockStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};

export const UnpublishFirmwareRequest: any = {
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
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "checksum": {
      "description": "The MD5 checksum over the entire firmware file as a hexadecimal string of length 32. \r\n",
      "type": "string",
      "maxLength": 32
    }
  },
  "required": [
    "checksum"
  ]
};

export const UnpublishFirmwareResponse: any = {
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
    "UnpublishFirmwareStatusEnumType": {
      "description": "Indicates whether the Local Controller succeeded in unpublishing the firmware.\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "DownloadOngoing",
        "NoFirmware",
        "Unpublished"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/UnpublishFirmwareStatusEnumType"
    }
  },
  "required": [
    "status"
  ]
};

export const UpdateFirmwareRequest: any = {
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
    "FirmwareType": {
      "description": "Firmware\r\nurn:x-enexis:ecdm:uid:2:233291\r\nRepresents a copy of the firmware that can be loaded/updated on the Charging Station.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "location": {
          "description": "Firmware. Location. URI\r\nurn:x-enexis:ecdm:uid:1:569460\r\nURI defining the origin of the firmware.\r\n",
          "type": "string",
          "maxLength": 512
        },
        "retrieveDateTime": {
          "description": "Firmware. Retrieve. Date_ Time\r\nurn:x-enexis:ecdm:uid:1:569461\r\nDate and time at which the firmware shall be retrieved.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "installDateTime": {
          "description": "Firmware. Install. Date_ Time\r\nurn:x-enexis:ecdm:uid:1:569462\r\nDate and time at which the firmware shall be installed.\r\n",
          "type": "string",
          "format": "date-time"
        },
        "signingCertificate": {
          "description": "Certificate with which the firmware was signed.\r\nPEM encoded X.509 certificate.\r\n",
          "type": "string",
          "maxLength": 5500
        },
        "signature": {
          "description": "Firmware. Signature. Signature\r\nurn:x-enexis:ecdm:uid:1:569464\r\nBase64 encoded firmware signature.\r\n",
          "type": "string",
          "maxLength": 800
        }
      },
      "required": [
        "location",
        "retrieveDateTime"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "retries": {
      "description": "This specifies how many times Charging Station must try to download the firmware before giving up. If this field is not present, it is left to Charging Station to decide how many times it wants to retry.\r\n",
      "type": "integer"
    },
    "retryInterval": {
      "description": "The interval in seconds after which a retry may be attempted. If this field is not present, it is left to Charging Station to decide how long to wait between attempts.\r\n",
      "type": "integer"
    },
    "requestId": {
      "description": "The Id of this request\r\n",
      "type": "integer"
    },
    "firmware": {
      "$ref": "#/definitions/FirmwareType"
    }
  },
  "required": [
    "requestId",
    "firmware"
  ]
};

export const UpdateFirmwareResponse: any = {
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
    "UpdateFirmwareStatusEnumType": {
      "description": "This field indicates whether the Charging Station was able to accept the request.\r\n\r\n",
      "type": "string",
      "additionalProperties": false,
      "enum": [
        "Accepted",
        "Rejected",
        "AcceptedCanceled",
        "InvalidCertificate",
        "RevokedCertificate"
      ]
    },
    "StatusInfoType": {
      "description": "Element providing more information about the status.\r\n",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "customData": {
          "$ref": "#/definitions/CustomDataType"
        },
        "reasonCode": {
          "description": "A predefined code for the reason why the status is returned in this response. The string is case-insensitive.\r\n",
          "type": "string",
          "maxLength": 20
        },
        "additionalInfo": {
          "description": "Additional text to provide detailed information.\r\n",
          "type": "string",
          "maxLength": 512
        }
      },
      "required": [
        "reasonCode"
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "customData": {
      "$ref": "#/definitions/CustomDataType"
    },
    "status": {
      "$ref": "#/definitions/UpdateFirmwareStatusEnumType"
    },
    "statusInfo": {
      "$ref": "#/definitions/StatusInfoType"
    }
  },
  "required": [
    "status"
  ]
};