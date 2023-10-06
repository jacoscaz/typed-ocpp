
export const ChangeConfigurationResponseSchema = {
  title: 'ChangeConfigurationResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Rejected',
        'RebootRequired',
        'NotSupported',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default ChangeConfigurationResponseSchema;
