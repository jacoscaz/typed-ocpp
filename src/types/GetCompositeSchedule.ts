
export interface GetCompositeSchedule {
  connectorId: number;
  duration: number;
  chargingRateUnit?: "A" | "W";
}
