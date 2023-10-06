
export const BootNotificationResponseSchema = {
  title: 'BootNotificationResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Pending',
        'Rejected',
      ],
    },
    currentTime: {
      type: 'string',
      format: 'date-time',
    },
    interval: {
      type: 'number',
    },
  },
  additionalProperties: false,
  required: [
    'status',
    'currentTime',
    'interval',
  ],
};

export default BootNotificationResponseSchema;
