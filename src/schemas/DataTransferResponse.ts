
export const DataTransferResponseSchema = {
  title: 'DataTransferResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Rejected',
        'UnknownMessageId',
        'UnknownVendorId',
      ],
    },
    data: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default DataTransferResponseSchema;
