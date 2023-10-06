
export const RemoteStopTransactionSchema = {
  title: 'RemoteStopTransactionRequest',
  type: 'object',
  properties: {
    transactionId: {
      type: 'integer',
    },
  },
  additionalProperties: false,
  required: [
    'transactionId',
  ],
};

export default RemoteStopTransactionSchema;
