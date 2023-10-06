
export const RemoteStartTransactionResponseSchema = {
  title: 'RemoteStartTransactionResponse',
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

export default RemoteStartTransactionResponseSchema;
