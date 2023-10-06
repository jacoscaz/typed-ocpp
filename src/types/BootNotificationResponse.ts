
export interface BootNotificationResponse {
  status: "Accepted" | "Pending" | "Rejected";
  currentTime: string;
  interval: number;
}
