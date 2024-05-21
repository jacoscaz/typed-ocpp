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