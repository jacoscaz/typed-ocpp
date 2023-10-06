
export const AuthorizeResponseSchema = {
  title: 'AuthorizeResponse',
  type: 'object',
  properties: {
    idTagInfo: {
      type: 'object',
      properties: {
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
        expiryDate: {
          type: 'string',
          format: 'date-time',
        },
        parentIdTag: {
          type: 'string',
          maxLength: 20,
        },
      },
      required: [
        'status',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'idTagInfo',
  ],
};

export default AuthorizeResponseSchema;
