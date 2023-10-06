
export const ClearCacheResponseSchema = {
  title: 'ClearCacheResponse',
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

export default ClearCacheResponseSchema;
