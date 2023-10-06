
export interface AuthorizeResponse {
  idTagInfo: {
    status: "Accepted" | "Blocked" | "Expired" | "Invalid" | "ConcurrentTx";
    expiryDate?: string;
    parentIdTag?: string;
    [k: string]: unknown;
  };
}
