export const GetInstalledCertificateIdsResponse = {
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