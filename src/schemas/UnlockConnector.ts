
export const UnlockConnectorSchema = {
  title: 'UnlockConnectorRequest',
  type: 'object',
  properties: {
    connectorId: {
      type: 'integer',
    },
  },
  additionalProperties: false,
  required: [
    'connectorId',
  ],
};

export default UnlockConnectorSchema;
