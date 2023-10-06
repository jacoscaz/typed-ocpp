
export const RemoteStartTransactionSchema = {
  title: 'RemoteStartTransactionRequest',
  type: 'object',
  properties: {
    connectorId: {
      type: 'integer',
    },
    idTag: {
      type: 'string',
      maxLength: 20,
    },
    chargingProfile: {
      type: 'object',
      properties: {
        chargingProfileId: {
          type: 'integer',
        },
        transactionId: {
          type: 'integer',
        },
        stackLevel: {
          type: 'integer',
        },
        chargingProfilePurpose: {
          type: 'string',
          enum: [
            'ChargePointMaxProfile',
            'TxDefaultProfile',
            'TxProfile',
          ],
        },
        chargingProfileKind: {
          type: 'string',
          enum: [
            'Absolute',
            'Recurring',
            'Relative',
          ],
        },
        recurrencyKind: {
          type: 'string',
          enum: [
            'Daily',
            'Weekly',
          ],
        },
        validFrom: {
          type: 'string',
          format: 'date-time',
        },
        validTo: {
          type: 'string',
          format: 'date-time',
        },
        chargingSchedule: {
          type: 'object',
          properties: {
            duration: {
              type: 'integer',
            },
            startSchedule: {
              type: 'string',
              format: 'date-time',
            },
            chargingRateUnit: {
              type: 'string',
              enum: [
                'A',
                'W',
              ],
            },
            chargingSchedulePeriod: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  startPeriod: {
                    type: 'integer',
                  },
                  limit: {
                    type: 'number',
                  },
                  numberPhases: {
                    type: 'integer',
                  },
                },
                required: [
                  'startPeriod',
                  'limit',
                ],
              },
            },
            minChargingRate: {
              type: 'number',
            },
          },
          required: [
            'chargingRateUnit',
            'chargingSchedulePeriod',
          ],
        },
      },
      required: [
        'chargingProfileId',
        'stackLevel',
        'chargingProfilePurpose',
        'chargingProfileKind',
        'chargingSchedule',
      ],
    },
  },
  additionalProperties: false,
  required: [
    'idTag',
  ],
};

export default RemoteStartTransactionSchema;
