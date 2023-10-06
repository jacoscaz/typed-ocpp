
export interface ReserveNowResponse {
  status: "Accepted" | "Faulted" | "Occupied" | "Rejected" | "Unavailable";
}
