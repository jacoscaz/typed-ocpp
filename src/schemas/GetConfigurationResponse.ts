
export const GetConfigurationResponseSchema = {
  title: 'GetConfigurationResponse',
  type: 'object',
  properties: {
    configurationKey: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            maxLength: 50,
          },
          readonly: {
            type: 'boolean',
          },
          value: {
            type: 'string',
            maxLength: 500,
          },
        },
        required: [
          'key',
          'readonly',
        ],
      },
    },
    unknownKey: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 50,
      },
    },
  },
  additionalProperties: false,
};

export default GetConfigurationResponseSchema;
