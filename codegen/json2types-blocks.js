/**
 * Code blocks to be deduplicated by ./json2types.js . 
 */
export const deduplicate_blocks = { 
  OCPP16: [],
  OCPP20: [],
  OCPP21: [],
 };

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

deduplicate_blocks.OCPP20.push(`export interface StatusInfoType {
  customData?: CustomDataType;
  reasonCode: string;
  additionalInfo?: string;
}`);

deduplicate_blocks.OCPP21.push(`export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}`);

deduplicate_blocks.OCPP21.push(`export type GenericStatusEnumType = "Accepted" | "Rejected";`);

deduplicate_blocks.OCPP21.push(`export type HashAlgorithmEnumType = "SHA256" | "SHA384" | "SHA512";`);

deduplicate_blocks.OCPP21.push(`export type MessageFormatEnumType = "ASCII" | "HTML" | "URI" | "UTF8" | "QRCODE";`);


deduplicate_blocks.OCPP21.push(`export type AuthorizationStatusEnumType =
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

deduplicate_blocks.OCPP21.push(`export type EnergyTransferModeEnumType =
  | "AC_single_phase"
  | "AC_two_phase"
  | "AC_three_phase"
  | "DC"
  | "AC_BPT"
  | "AC_BPT_DER"
  | "AC_DER"
  | "DC_BPT"
  | "DC_ACDP"
  | "DC_ACDP_BPT"
  | "WPT";`);
deduplicate_blocks.OCPP21.push(`export type DayOfWeekEnumType = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";`);
deduplicate_blocks.OCPP21.push(`export type EvseKindEnumType = "AC" | "DC";`);


deduplicate_blocks.OCPP21.push(`export type CertificateSigningUseEnumType = "ChargingStationCertificate" | "V2GCertificate" | "V2G20Certificate";`);

deduplicate_blocks.OCPP21.push(`export type ChargingProfilePurposeEnumType =
  | "ChargingStationExternalConstraints"
  | "ChargingStationMaxProfile"
  | "TxDefaultProfile"
  | "TxProfile"
  | "PriorityCharging"
  | "LocalGeneration";`);

deduplicate_blocks.OCPP21.push(`export type DERControlEnumType =
  | "EnterService"
  | "FreqDroop"
  | "FreqWatt"
  | "FixedPFAbsorb"
  | "FixedPFInject"
  | "FixedVar"
  | "Gradients"
  | "HFMustTrip"
  | "HFMayTrip"
  | "HVMustTrip"
  | "HVMomCess"
  | "HVMayTrip"
  | "LimitMaxDischarge"
  | "LFMustTrip"
  | "LVMustTrip"
  | "LVMomCess"
  | "LVMayTrip"
  | "PowerMonitoringMustTrip"
  | "VoltVar"
  | "VoltWatt"
  | "WattPF"
  | "WattVar";`);

deduplicate_blocks.OCPP21.push(`export type DERControlStatusEnumType = "Accepted" | "Rejected" | "NotSupported" | "NotFound";`);

deduplicate_blocks.OCPP21.push(`export type DERControlStatusEnumType = "Accepted" | "Rejected" | "NotSupported" | "NotFound";`);

deduplicate_blocks.OCPP21.push(`export type GenericDeviceModelStatusEnumType = "Accepted" | "Rejected" | "NotSupported" | "EmptyResultSet";`);

deduplicate_blocks.OCPP21.push(`export type ChargingRateUnitEnumType = "W" | "A";`);

deduplicate_blocks.OCPP21.push(`export type DERControlEnumType =
  | "EnterService"
  | "FreqDroop"
  | "FreqWatt"
  | "FixedPFAbsorb"
  | "FixedPFInject"
  | "FixedVar"
  | "Gradients"
  | "HFMustTrip"
  | "HFMayTrip"
  | "HVMustTrip"
  | "HVMomCess"
  | "HVMayTrip"
  | "LimitMaxDischarge"
  | "LFMustTrip"
  | "LVMustTrip"
  | "LVMomCess"
  | "LVMayTrip"
  | "PowerMonitoringMustTrip"
  | "VoltVar"
  | "VoltWatt"
  | "WattPF"
  | "WattVar";`);

deduplicate_blocks.OCPP21.push(`export type AttributeEnumType = "Actual" | "Target" | "MinSet" | "MaxSet";`);

deduplicate_blocks.OCPP21.push(`export type MessagePriorityEnumType = "AlwaysFront" | "InFront" | "NormalCycle";`);
deduplicate_blocks.OCPP21.push(`export type MessageStateEnumType = "Charging" | "Faulted" | "Idle" | "Unavailable" | "Suspended" | "Discharging";`);
deduplicate_blocks.OCPP21.push(`export type MeasurandEnumType =
  | "Current.Export"
  | "Current.Export.Offered"
  | "Current.Export.Minimum"
  | "Current.Import"
  | "Current.Import.Offered"
  | "Current.Import.Minimum"
  | "Current.Offered"
  | "Display.PresentSOC"
  | "Display.MinimumSOC"
  | "Display.TargetSOC"
  | "Display.MaximumSOC"
  | "Display.RemainingTimeToMinimumSOC"
  | "Display.RemainingTimeToTargetSOC"
  | "Display.RemainingTimeToMaximumSOC"
  | "Display.ChargingComplete"
  | "Display.BatteryEnergyCapacity"
  | "Display.InletHot"
  | "Energy.Active.Export.Interval"
  | "Energy.Active.Export.Register"
  | "Energy.Active.Import.Interval"
  | "Energy.Active.Import.Register"
  | "Energy.Active.Import.CableLoss"
  | "Energy.Active.Import.LocalGeneration.Register"
  | "Energy.Active.Net"
  | "Energy.Active.Setpoint.Interval"
  | "Energy.Apparent.Export"
  | "Energy.Apparent.Import"
  | "Energy.Apparent.Net"
  | "Energy.Reactive.Export.Interval"
  | "Energy.Reactive.Export.Register"
  | "Energy.Reactive.Import.Interval"
  | "Energy.Reactive.Import.Register"
  | "Energy.Reactive.Net"
  | "EnergyRequest.Target"
  | "EnergyRequest.Minimum"
  | "EnergyRequest.Maximum"
  | "EnergyRequest.Minimum.V2X"
  | "EnergyRequest.Maximum.V2X"
  | "EnergyRequest.Bulk"
  | "Frequency"
  | "Power.Active.Export"
  | "Power.Active.Import"
  | "Power.Active.Setpoint"
  | "Power.Active.Residual"
  | "Power.Export.Minimum"
  | "Power.Export.Offered"
  | "Power.Factor"
  | "Power.Import.Offered"
  | "Power.Import.Minimum"
  | "Power.Offered"
  | "Power.Reactive.Export"
  | "Power.Reactive.Import"
  | "SoC"
  | "Voltage"
  | "Voltage.Minimum"
  | "Voltage.Maximum";`);
deduplicate_blocks.OCPP21.push(`export type ReadingContextEnumType =
  | "Interruption.Begin"
  | "Interruption.End"
  | "Other"
  | "Sample.Clock"
  | "Sample.Periodic"
  | "Transaction.Begin"
  | "Transaction.End"
  | "Trigger";`);
deduplicate_blocks.OCPP21.push(`export type PhaseEnumType = "L1" | "L2" | "L3" | "N" | "L1-N" | "L2-N" | "L3-N" | "L1-L2" | "L2-L3" | "L3-L1";`);
deduplicate_blocks.OCPP21.push(`export type LocationEnumType = "Body" | "Cable" | "EV" | "Inlet" | "Outlet" | "Upstream";`);

deduplicate_blocks.OCPP21.push(`export type OperationModeEnumType =
  | "Idle"
  | "ChargingOnly"
  | "CentralSetpoint"
  | "ExternalSetpoint"
  | "ExternalLimits"
  | "CentralFrequency"
  | "LocalFrequency"
  | "LocalLoadBalancing";`);
deduplicate_blocks.OCPP21.push(`export type CostKindEnumType = "CarbonDioxideEmission" | "RelativePricePercentage" | "RenewableGenerationPercentage";`);
deduplicate_blocks.OCPP21.push(`export type EventNotificationEnumType =
  | "HardWiredNotification"
  | "HardWiredMonitor"
  | "PreconfiguredMonitor"
  | "CustomMonitor";`);
deduplicate_blocks.OCPP21.push(`export type ChargingProfileStatusEnumType = "Accepted" | "Rejected";`);

deduplicate_blocks.OCPP21.push(`export type PowerDuringCessationEnumType = "Active" | "Reactive";`);
deduplicate_blocks.OCPP21.push(`export type DERUnitEnumType =
  | "Not_Applicable"
  | "PctMaxW"
  | "PctMaxVar"
  | "PctWAvail"
  | "PctVarAvail"
  | "PctEffectiveV";`);
deduplicate_blocks.OCPP21.push(`export type ChargingProfileKindEnumType = "Absolute" | "Recurring" | "Relative" | "Dynamic";`);
deduplicate_blocks.OCPP21.push(`export type RecurrencyKindEnumType = "Daily" | "Weekly";`);
deduplicate_blocks.OCPP21.push(`export type OperationModeEnumType =
  | "Idle"
  | "ChargingOnly"
  | "CentralSetpoint"
  | "ExternalSetpoint"
  | "ExternalLimits"
  | "CentralFrequency"
  | "LocalFrequency"
  | "LocalLoadBalancing";`);
deduplicate_blocks.OCPP21.push(`export type CostKindEnumType = "CarbonDioxideEmission" | "RelativePricePercentage" | "RenewableGenerationPercentage";`);
deduplicate_blocks.OCPP21.push(`export type RequestStartStopStatusEnumType = "Accepted" | "Rejected";`);

deduplicate_blocks.OCPP21.push(`export type MonitorEnumType =
  | "UpperThreshold"
  | "LowerThreshold"
  | "Delta"
  | "Periodic"
  | "PeriodicClockAligned"
  | "TargetDelta"
  | "TargetDeltaRelative";`);

deduplicate_blocks.OCPP21.push(`export type GetCertificateIdUseEnumType =
  | "V2GRootCertificate"
  | "MORootCertificate"
  | "CSMSRootCertificate"
  | "V2GCertificateChain"
  | "ManufacturerRootCertificate"
  | "OEMRootCertificate";`);

deduplicate_blocks.OCPP21.push(`export type CertificateStatusSourceEnumType = "CRL" | "OCSP";`);

deduplicate_blocks.OCPP21.push(`export interface StatusInfoType {
  reasonCode: string;
  additionalInfo?: string;
  customData?: CustomDataType;
}`);

deduplicate_blocks.OCPP21.push(`export interface EVSEType {
  id: number;
  connectorId?: number;
  customData?: CustomDataType;
}`);

deduplicate_blocks.OCPP21.push(`export interface IdTokenType {
  additionalInfo?: AdditionalInfoType[];
  idToken: string;
  type: string;
  customData?: CustomDataType;
}`);

deduplicate_blocks.OCPP21.push(`export interface ComponentType {
  evse?: EVSEType;
  name: string;
  instance?: string;
  customData?: CustomDataType;
}`);

deduplicate_blocks.OCPP21.push(`export interface VariableType {
  name: string;
  instance?: string;
  customData?: CustomDataType;
}`);

deduplicate_blocks.OCPP21.push(`export interface AddressType {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  postalCode?: string;
  country: string;
  customData?: CustomDataType;
}`);