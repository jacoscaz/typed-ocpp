export const InstallCertificateRequest = {
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