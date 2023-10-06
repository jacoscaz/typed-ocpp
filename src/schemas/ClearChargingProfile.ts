
export const ClearChargingProfileSchema = {
  title: 'ClearChargingProfileRequest',
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    connectorId: {
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
    stackLevel: {
      type: 'integer',
    },
  },
  additionalProperties: false,
};

export default ClearChargingProfileSchema;
