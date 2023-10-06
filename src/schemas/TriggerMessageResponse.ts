
export const TriggerMessageResponseSchema = {
  title: 'TriggerMessageResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Rejected',
        'NotImplemented',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default TriggerMessageResponseSchema;
