
export const GetCompositeScheduleResponseSchema = {
  title: 'GetCompositeScheduleResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [
        'Accepted',
        'Rejected',
      ],
    },
    connectorId: {
      type: 'integer',
    },
    scheduleStart: {
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
  additionalProperties: false,
  required: [
    'status',
  ],
};

export default GetCompositeScheduleResponseSchema;
