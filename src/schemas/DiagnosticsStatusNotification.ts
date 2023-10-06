
export const DiagnosticsStatusNotificationSchema = {
  title: 'DiagnosticsStatusNotificationRequest',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Idle',
        'Uploaded',
        'UploadFailed',
        'Uploading',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default DiagnosticsStatusNotificationSchema;
