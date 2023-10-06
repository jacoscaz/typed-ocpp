
export interface ClearChargingProfile {
  id?: number;
  connectorId?: number;
  chargingProfilePurpose?: "ChargePointMaxProfile" | "TxDefaultProfile" | "TxProfile";
  stackLevel?: number;
}
