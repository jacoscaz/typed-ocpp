
export interface SendLocalList {
  listVersion: number;
  localAuthorizationList?: {
    idTag: string;
    idTagInfo?: {
      status: "Accepted" | "Blocked" | "Expired" | "Invalid" | "ConcurrentTx";
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[];
  updateType: "Differential" | "Full";
}
