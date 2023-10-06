
export interface GetConfigurationResponse {
  configurationKey?: {
    key: string;
    readonly: boolean;
    value?: string;
    [k: string]: unknown;
  }[];
  unknownKey?: string[];
}
