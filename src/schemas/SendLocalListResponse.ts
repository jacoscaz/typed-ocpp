
export const SendLocalListResponseSchema = {
  title: 'SendLocalListResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Failed',
        'NotSupported',
        'VersionMismatch',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default SendLocalListResponseSchema;
