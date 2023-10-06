
export const GetConfigurationSchema = {
  title: 'GetConfigurationRequest',
  type: 'object',
  properties: {
    key: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 50,
      },
    },
  },
  additionalProperties: false,
};

export default GetConfigurationSchema;
