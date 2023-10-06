
export const ClearChargingProfileResponseSchema = {
  title: 'ClearChargingProfileResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Unknown',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default ClearChargingProfileResponseSchema;
