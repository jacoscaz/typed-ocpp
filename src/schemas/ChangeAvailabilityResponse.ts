
export const ChangeAvailabilityResponseSchema = {
  title: 'ChangeAvailabilityResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Rejected',
        'Scheduled',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default ChangeAvailabilityResponseSchema;
