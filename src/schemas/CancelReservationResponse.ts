
export const CancelReservationResponseSchema = {
  title: 'CancelReservationResponse',
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

export default CancelReservationResponseSchema;
