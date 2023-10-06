
export const GetLocalListVersionResponseSchema = {
  title: 'GetLocalListVersionResponse',
  type: 'object',
  properties: {
    listVersion: {
      type: 'integer',
    },
  },
  additionalProperties: false,
  required: [
    'listVersion',
  ],
};

export default GetLocalListVersionResponseSchema;
