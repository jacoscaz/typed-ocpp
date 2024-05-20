export const SignCertificateRequest = {
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