
export const SendLocalListSchema = {
  title: 'SendLocalListRequest',
  type: 'object',
  properties: {
    listVersion: {
      type: 'integer',
    },
    localAuthorizationList: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          idTag: {
            type: 'string',
            maxLength: 20,
          },
          idTagInfo: {
            type: 'object',
            expiryDate: {
              type: 'string',
              format: 'date-time',
            },
            parentIdTag: {
              type: 'string',
              maxLength: 20,
            },
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
            },
            required: [
              'status',
            ],
          },
        },
        required: [
          'idTag',
        ],
      },
    },
    updateType: {
      type: 'string',
      enum: [
        'Differential',
        'Full',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'listVersion',
    'updateType',
  ],
};

export default SendLocalListSchema;
