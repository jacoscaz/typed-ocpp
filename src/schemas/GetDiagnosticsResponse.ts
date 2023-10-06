
export const GetDiagnosticsResponseSchema = {
  title: 'GetDiagnosticsResponse',
  type: 'object',
  properties: {
    fileName: {
      type: 'string',
      maxLength: 255,
    },
  },
  additionalProperties: false,
};

export default GetDiagnosticsResponseSchema;
