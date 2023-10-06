
export const AuthorizeSchema = {
  title: 'AuthorizeRequest',
  type: 'object',
  properties: {
    idTag: {
      type: 'string',
      maxLength: 20,
    },
  },
  additionalProperties: false,
  required: [
    'idTag',
  ],
};

export default AuthorizeSchema;
