/**
 * Code blocks to be deduplicated by ./json2types.js . 
 */
export const deduplicate_blocks = { 
  OCPP16: [],
  OCPP20: [],
 };

deduplicate_blocks.OCPP16.push(`export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}`);

deduplicate_blocks.OCPP20.push(`export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}`);

deduplicate_blocks.OCPP20.push(`export type HashAlgorithmEnumType = "SHA256" | "SHA384" | "SHA512";`);

deduplicate_blocks.OCPP20.push(`export type IdTokenEnumType =
  | "Central"
  | "eMAID"
  | "ISO14443"
  | "ISO15693"
  | "KeyCode"
  | "Local"
  | "MacAddress"
  | "NoAuthorization";`);

deduplicate_blocks.OCPP20.push(`export type CertificateSigningUseEnumType = "ChargingStationCertificate" | "V2GCertificate";`);

deduplicate_blocks.OCPP20.push(`export type PhaseEnumType = "L1" | "L2" | "L3" | "N" | "L1-N" | "L2-N" | "L3-N" | "L1-L2" | "L2-L3" | "L3-L1";`);

deduplicate_blocks.OCPP20.push(`export type LocationEnumType = "Body" | "Cable" | "EV" | "Inlet" | "Outlet";`);

deduplicate_blocks.OCPP20.push(`export type MessageFormatEnumType = "ASCII" | "HTML" | "URI" | "UTF8";`);

deduplicate_blocks.OCPP20.push(`export type AuthorizationStatusEnumType =
  | "Accepted"
  | "Blocked"
  | "ConcurrentTx"
  | "Expired"
  | "Invalid"
  | "NoCredit"
  | "NotAllowedTypeEVSE"
  | "NotAtThisLocation"
  | "NotAtThisTime"
  | "Unknown";`);

deduplicate_blocks.OCPP20.push(`export type AttributeEnumType = "Actual" | "Target" | "MinSet" | "MaxSet";`);

deduplicate_blocks.OCPP20.push(`export type MonitorEnumType = "UpperThreshold" | "LowerThreshold" | "Delta" | "Periodic" | "PeriodicClockAligned";`);

deduplicate_blocks.OCPP20.push(`export type GenericStatusEnumType = "Accepted" | "Rejected";`);

deduplicate_blocks.OCPP20.push(`export type GenericDeviceModelStatusEnumType = "Accepted" | "Rejected" | "NotSupported" | "EmptyResultSet";`);

deduplicate_blocks.OCPP20.push(`export type CostKindEnumType = "CarbonDioxideEmission" | "RelativePricePercentage" | "RenewableGenerationPercentage";`);

deduplicate_blocks.OCPP20.push(`export type ChargingRateUnitEnumType = "W" | "A";`);

deduplicate_blocks.OCPP20.push(`export type MessagePriorityEnumType = "AlwaysFront" | "InFront" | "NormalCycle";`);

deduplicate_blocks.OCPP20.push(`export type MessageStateEnumType = "Charging" | "Faulted" | "Idle" | "Unavailable";`);

deduplicate_blocks.OCPP20.push(`export type ReadingContextEnumType =
  | "Interruption.Begin"
  | "Interruption.End"
  | "Other"
  | "Sample.Clock"
  | "Sample.Periodic"
  | "Transaction.Begin"
  | "Transaction.End"
  | "Trigger";`);

deduplicate_blocks.OCPP20.push(`export type MeasurandEnumType =
  | "Current.Export"
  | "Current.Import"
  | "Current.Offered"
  | "Energy.Active.Export.Register"
  | "Energy.Active.Import.Register"
  | "Energy.Reactive.Export.Register"
  | "Energy.Reactive.Import.Register"
  | "Energy.Active.Export.Interval"
  | "Energy.Active.Import.Interval"
  | "Energy.Active.Net"
  | "Energy.Reactive.Export.Interval"
  | "Energy.Reactive.Import.Interval"
  | "Energy.Reactive.Net"
  | "Energy.Apparent.Net"
  | "Energy.Apparent.Import"
  | "Energy.Apparent.Export"
  | "Frequency"
  | "Power.Active.Export"
  | "Power.Active.Import"
  | "Power.Factor"
  | "Power.Offered"
  | "Power.Reactive.Export"
  | "Power.Reactive.Import"
  | "SoC"
  | "Voltage";`);

deduplicate_blocks.OCPP20.push(`export type RequestStartStopStatusEnumType = "Accepted" | "Rejected";`);

deduplicate_blocks.OCPP20.push(`export type ChargingProfilePurposeEnumType =
  | "ChargingStationExternalConstraints"
  | "ChargingStationMaxProfile"
  | "TxDefaultProfile"
  | "TxProfile";`);

deduplicate_blocks.OCPP20.push(`export type ChargingProfileKindEnumType = "Absolute" | "Recurring" | "Relative";`);

deduplicate_blocks.OCPP20.push(`export type RecurrencyKindEnumType = "Daily" | "Weekly";`);

deduplicate_blocks.OCPP20.push(`export type ChargingLimitSourceEnumType = "EMS" | "Other" | "SO" | "CSO";`);

deduplicate_blocks.OCPP20.push(`export type GetCertificateIdUseEnumType =
  | "V2GRootCertificate"
  | "MORootCertificate"
  | "CSMSRootCertificate"
  | "V2GCertificateChain"
  | "ManufacturerRootCertificate";`);

deduplicate_blocks.OCPP20.push(`/**
 * Element providing more information about the status.
 *
 */
export interface StatusInfoType {
  customData?: CustomDataType;
  /**
   * A predefined code for the reason why the status is returned in this response. The string is case-insensitive.
   *
   */
  reasonCode: string;
  /**
   * Additional text to provide detailed information.
   *
   */
  additionalInfo?: string;
}`);
