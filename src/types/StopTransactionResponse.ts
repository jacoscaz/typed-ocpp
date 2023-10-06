
export interface StopTransactionResponse {
  idTagInfo?: {
    expiryDate?: string;
    parentIdTag?: string;
    status: "Accepted" | "Blocked" | "Expired" | "Invalid" | "ConcurrentTx";
    [k: string]: unknown;
  };
}
