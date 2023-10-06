
export const HeartbeatResponseSchema = {
  title: 'HeartbeatResponse',
  type: 'object',
  properties: {
    currentTime: {
      type: 'string',
      format: 'date-time',
    },
  },
  additionalProperties: false,
  required: [
    'currentTime',
  ],
};

export default HeartbeatResponseSchema;
