
export const RemoteStopTransactionResponseSchema = {
  title: 'RemoteStopTransactionResponse',
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

export default RemoteStopTransactionResponseSchema;
