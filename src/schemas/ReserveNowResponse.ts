
export const ReserveNowResponseSchema = {
  title: 'ReserveNowResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Faulted',
        'Occupied',
        'Rejected',
        'Unavailable',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default ReserveNowResponseSchema;
