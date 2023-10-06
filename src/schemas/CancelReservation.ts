
export const CancelReservationSchema = {
  title: 'CancelReservationRequest',
  type: 'object',
  properties: {
    reservationId: {
      type: 'integer',
    },
  },
  additionalProperties: false,
  required: [
    'reservationId',
  ],
};

export default CancelReservationSchema;
