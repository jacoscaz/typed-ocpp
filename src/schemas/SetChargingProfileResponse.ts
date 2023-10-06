
export const SetChargingProfileResponseSchema = {
  title: 'SetChargingProfileResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Rejected',
        'NotSupported',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default SetChargingProfileResponseSchema;
