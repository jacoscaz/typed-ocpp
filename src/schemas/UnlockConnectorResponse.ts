
export const UnlockConnectorResponseSchema = {
  title: 'UnlockConnectorResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Unlocked',
        'UnlockFailed',
        'NotSupported',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default UnlockConnectorResponseSchema;
