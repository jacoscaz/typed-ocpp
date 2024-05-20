export const NotifyMonitoringReportRequest = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "urn:OCPP:Cp:2:2020:3:NotifyMonitoringReportRequest",
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
    "MonitorEnumType": {
      "description": "The type of this monitor, e.g. a threshold, delta or periodic monitor. \r\n",
      "javaType": "MonitorEnum",
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
    "MonitoringDataType": {
      "description": "Class to hold parameters of SetVariableMonitoring request.\r\n",
      "javaType": "MonitoringData",
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
      "javaType": "VariableMonitoring",
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
}