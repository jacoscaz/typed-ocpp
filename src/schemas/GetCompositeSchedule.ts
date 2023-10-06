
export const GetCompositeScheduleSchema = {
  title: 'GetCompositeScheduleRequest',
  type: 'object',
  properties: {
    connectorId: {
      type: 'integer',
    },
    duration: {
      type: 'integer',
    },
    chargingRateUnit: {
      type: 'string',
      enum: [
        'A',
        'W',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'connectorId',
    'duration',
  ],
};

export default GetCompositeScheduleSchema;
