
export const ResetResponseSchema = {
  title: 'ResetResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Rejected',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default ResetResponseSchema;
