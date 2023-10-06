
export const TriggerMessageSchema = {
  title: 'TriggerMessageRequest',
  type: 'object',
  properties: {
    requestedMessage: {
      type: 'string',
      enum: [
        'BootNotification',
        'DiagnosticsStatusNotification',
        'FirmwareStatusNotification',
        'Heartbeat',
        'MeterValues',
        'StatusNotification',
      ],
    },
    connectorId: {
      type: 'integer',
    },
  },
  additionalProperties: false,
  required: [
    'requestedMessage',
  ],
};

export default TriggerMessageSchema;
