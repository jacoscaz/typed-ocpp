
export interface DataTransferResponse {
  status: "Accepted" | "Rejected" | "UnknownMessageId" | "UnknownVendorId";
  data?: string;
}
