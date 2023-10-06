
export const ChangeAvailabilitySchema = {
  title: 'ChangeAvailabilityRequest',
  type: 'object',
  properties: {
    connectorId: {
      type: 'integer',
    },
    type: {
      type: 'string',
      enum: [
        'Inoperative',
        'Operative',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'connectorId',
    'type',
  ],
};

export default ChangeAvailabilitySchema;
