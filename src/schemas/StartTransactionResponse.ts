
export const StartTransactionResponseSchema = {
  title: 'StartTransactionResponse',
  type: 'object',
  properties: {
    idTagInfo: {
      type: 'object',
      properties: {
        expiryDate: {
          type: 'string',
          format: 'date-time',
        },
        parentIdTag: {
          type: 'string',
          maxLength: 20,
        },
        status: {
          type: 'string',
          enum: [
            'Accepted',
            'Blocked',
            'Expired',
            'Invalid',
            'ConcurrentTx',
          ],
        },
      },
      required: [
        'status',
      ],
    },
    transactionId: {
      type: 'integer',
    },
  },
  additionalProperties: false,
  required: [
    'idTagInfo',
    'transactionId',
  ],
};

export default StartTransactionResponseSchema;
