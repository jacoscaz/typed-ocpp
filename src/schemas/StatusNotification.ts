
export const StatusNotificationSchema = {
  title: 'StatusNotificationRequest',
  type: 'object',
  properties: {
    connectorId: {
      type: 'integer',
    },
    errorCode: {
      type: 'string',
      enum: [
        'ConnectorLockFailure',
        'EVCommunicationError',
        'GroundFailure',
        'HighTemperature',
        'InternalError',
        'LocalListConflict',
        'NoError',
        'OtherError',
        'OverCurrentFailure',
        'PowerMeterFailure',
        'PowerSwitchFailure',
        'ReaderFailure',
        'ResetFailure',
        'UnderVoltage',
        'OverVoltage',
        'WeakSignal',
      ],
    },
    info: {
      type: 'string',
      maxLength: 50,
    },
    status: {
      type: 'string',
      enum: [
        'Available',
        'Preparing',
        'Charging',
        'SuspendedEVSE',
        'SuspendedEV',
        'Finishing',
        'Reserved',
        'Unavailable',
        'Faulted',
      ],
    },
    timestamp: {
      type: 'string',
      format: 'date-time',
    },
    vendorId: {
      type: 'string',
      maxLength: 255,
    },
    vendorErrorCode: {
      type: 'string',
      maxLength: 50,
    },
  },
  additionalProperties: false,
  required: [
    'connectorId',
    'errorCode',
    'status',
  ],
};

export default StatusNotificationSchema;
