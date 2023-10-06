
export const ChangeConfigurationSchema = {
  title: 'ChangeConfigurationRequest',
  type: 'object',
  properties: {
    key: {
      type: 'string',
      maxLength: 50,
    },
    value: {
      type: 'string',
      maxLength: 500,
    },
  },
  additionalProperties: false,
  required: [
    'key',
    'value',
  ],
};

export default ChangeConfigurationSchema;
