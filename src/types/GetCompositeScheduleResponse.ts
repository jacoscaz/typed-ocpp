
export interface GetCompositeScheduleResponse {
  status: "Accepted" | "Rejected";
  connectorId?: number;
  scheduleStart?: string;
  chargingSchedule?: {
    duration?: number;
    startSchedule?: string;
    chargingRateUnit: "A" | "W";
    chargingSchedulePeriod: {
      startPeriod: number;
      limit: number;
      numberPhases?: number;
      [k: string]: unknown;
    }[];
    minChargingRate?: number;
    [k: string]: unknown;
  };
}
