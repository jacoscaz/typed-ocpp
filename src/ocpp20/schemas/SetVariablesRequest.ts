export const SetVariablesRequest = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "urn:OCPP:Cp:2:2020:3:SetVariablesRequest",
  "comment": "OCPP 2.0.1 FINAL",
  "definitions": {
    "CustomDataType": {
      "description": "This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.",
      "javaType": "CustomData",
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
      "javaType": "AttributeEnum",
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
      "javaType": "Component",
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
      "javaType": "EVSE",
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
      "javaType": "SetVariableData",
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
      "javaType": "Variable",
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
}