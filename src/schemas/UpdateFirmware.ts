
export const UpdateFirmwareSchema = {
  title: 'UpdateFirmwareRequest',
  type: 'object',
  properties: {
    location: {
      type: 'string',
      format: 'uri',
    },
    retries: {
      type: 'number',
    },
    retrieveDate: {
      type: 'string',
      format: 'date-time',
    },
    retryInterval: {
      type: 'number',
    },
  },
  additionalProperties: false,
  required: [
    'location',
    'retrieveDate',
  ],
};

export default UpdateFirmwareSchema;
