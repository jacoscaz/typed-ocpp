
export const FirmwareStatusNotificationSchema = {
  title: 'FirmwareStatusNotificationRequest',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Downloaded',
        'DownloadFailed',
        'Downloading',
        'Idle',
        'InstallationFailed',
        'Installing',
        'Installed',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default FirmwareStatusNotificationSchema;
