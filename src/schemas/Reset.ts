
export const ResetSchema = {
  title: 'ResetRequest',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: [
        'Hard',
        'Soft',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'type',
  ],
};

export default ResetSchema;
