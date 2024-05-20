export const GetInstalledCertificateIdsRequest = {
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