
export const ReserveNowSchema = {
  title: 'ReserveNowRequest',
  type: 'object',
  properties: {
    connectorId: {
      type: 'integer',
    },
    expiryDate: {
      type: 'string',
      format: 'date-time',
    },
    idTag: {
      type: 'string',
      maxLength: 20,
    },
    parentIdTag: {
      type: 'string',
      maxLength: 20,
    },
    reservationId: {
      type: 'integer',
    },
  },
  additionalProperties: false,
  required: [
    'connectorId',
    'expiryDate',
    'idTag',
    'reservationId',
  ],
};

export default ReserveNowSchema;
