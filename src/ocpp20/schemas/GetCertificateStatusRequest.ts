export const GetCertificateStatusRequest = {
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