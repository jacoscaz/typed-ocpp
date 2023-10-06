
export interface StartTransactionResponse {
  idTagInfo: {
    expiryDate?: string;
    parentIdTag?: string;
    status: "Accepted" | "Blocked" | "Expired" | "Invalid" | "ConcurrentTx";
    [k: string]: unknown;
  };
  transactionId: number;
}
