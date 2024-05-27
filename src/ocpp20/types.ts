





export interface AuthorizeRequest {
  customData?: CustomDataType;
  idToken: IdTokenType;

  certificate?: string;

  iso15118CertificateHashData?:
    | [OCSPRequestDataType]
    | [OCSPRequestDataType, OCSPRequestDataType]
    | [OCSPRequestDataType, OCSPRequestDataType, OCSPRequestDataType]
    | [OCSPRequestDataType, OCSPRequestDataType, OCSPRequestDataType, OCSPRequestDataType];
}


export interface IdTokenType {
  customData?: CustomDataType;

  additionalInfo?: [AdditionalInfoType, ...AdditionalInfoType[]];

  idToken: string;
  type: IdTokenEnumType;
}

export interface AdditionalInfoType {
  customData?: CustomDataType;

  additionalIdToken: string;

  type: string;
}
export interface OCSPRequestDataType {
  customData?: CustomDataType;
  hashAlgorithm: HashAlgorithmEnumType;

  issuerNameHash: string;

  issuerKeyHash: string;

  serialNumber: string;

  responderURL: string;
}






export type AuthorizeCertificateStatusEnumType =
  | "Accepted"
  | "SignatureError"
  | "CertificateExpired"
  | "CertificateRevoked"
  | "NoCertificateAvailable"
  | "CertChainError"
  | "ContractCancelled";

export interface AuthorizeResponse {
  customData?: CustomDataType;
  idTokenInfo: IdTokenInfoType;
  certificateStatus?: AuthorizeCertificateStatusEnumType;
}


export interface IdTokenInfoType {
  customData?: CustomDataType;
  status: AuthorizationStatusEnumType;

  cacheExpiryDateTime?: string;

  chargingPriority?: number;

  language1?: string;

  evseId?: [number, ...number[]];
  groupIdToken?: IdTokenType;

  language2?: string;
  personalMessage?: MessageContentType;
}

export interface IdTokenType {
  customData?: CustomDataType;

  additionalInfo?: [AdditionalInfoType, ...AdditionalInfoType[]];

  idToken: string;
  type: IdTokenEnumType;
}

export interface AdditionalInfoType {
  customData?: CustomDataType;

  additionalIdToken: string;

  type: string;
}

export interface MessageContentType {
  customData?: CustomDataType;
  format: MessageFormatEnumType;

  language?: string;

  content: string;
}



export type BootReasonEnumType =
  | "ApplicationReset"
  | "FirmwareUpdate"
  | "LocalReset"
  | "PowerUp"
  | "RemoteReset"
  | "ScheduledReset"
  | "Triggered"
  | "Unknown"
  | "Watchdog";

export interface BootNotificationRequest {
  customData?: CustomDataType;
  chargingStation: ChargingStationType;
  reason: BootReasonEnumType;
}


export interface ChargingStationType {
  customData?: CustomDataType;

  serialNumber?: string;

  model: string;
  modem?: ModemType;

  vendorName: string;

  firmwareVersion?: string;
}

export interface ModemType {
  customData?: CustomDataType;

  iccid?: string;

  imsi?: string;
}



export type RegistrationStatusEnumType = "Accepted" | "Pending" | "Rejected";

export interface BootNotificationResponse {
  customData?: CustomDataType;

  currentTime: string;

  interval: number;
  status: RegistrationStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface CancelReservationRequest {
  customData?: CustomDataType;

  reservationId: number;
}




export type CancelReservationStatusEnumType = "Accepted" | "Rejected";

export interface CancelReservationResponse {
  customData?: CustomDataType;
  status: CancelReservationStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}





export interface CertificateSignedRequest {
  customData?: CustomDataType;

  certificateChain: string;
  certificateType?: CertificateSigningUseEnumType;
}




export type CertificateSignedStatusEnumType = "Accepted" | "Rejected";

export interface CertificateSignedResponse {
  customData?: CustomDataType;
  status: CertificateSignedStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type OperationalStatusEnumType = "Inoperative" | "Operative";

export interface ChangeAvailabilityRequest {
  customData?: CustomDataType;
  evse?: EVSEType;
  operationalStatus: OperationalStatusEnumType;
}


export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}



export type ChangeAvailabilityStatusEnumType = "Accepted" | "Rejected" | "Scheduled";

export interface ChangeAvailabilityResponse {
  customData?: CustomDataType;
  status: ChangeAvailabilityStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface ClearCacheRequest {
  customData?: CustomDataType;
}




export type ClearCacheStatusEnumType = "Accepted" | "Rejected";

export interface ClearCacheResponse {
  customData?: CustomDataType;
  status: ClearCacheStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}





export interface ClearChargingProfileRequest {
  customData?: CustomDataType;

  chargingProfileId?: number;
  chargingProfileCriteria?: ClearChargingProfileType;
}


export interface ClearChargingProfileType {
  customData?: CustomDataType;

  evseId?: number;
  chargingProfilePurpose?: ChargingProfilePurposeEnumType;

  stackLevel?: number;
}



export type ClearChargingProfileStatusEnumType = "Accepted" | "Unknown";

export interface ClearChargingProfileResponse {
  customData?: CustomDataType;
  status: ClearChargingProfileStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface ClearDisplayMessageRequest {
  customData?: CustomDataType;

  id: number;
}




export type ClearMessageStatusEnumType = "Accepted" | "Unknown";

export interface ClearDisplayMessageResponse {
  customData?: CustomDataType;
  status: ClearMessageStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface ClearVariableMonitoringRequest {
  customData?: CustomDataType;

  id: [number, ...number[]];
}




export type ClearMonitoringStatusEnumType = "Accepted" | "Rejected" | "NotFound";

export interface ClearVariableMonitoringResponse {
  customData?: CustomDataType;

  clearMonitoringResult: [ClearMonitoringResultType, ...ClearMonitoringResultType[]];
}


export interface ClearMonitoringResultType {
  customData?: CustomDataType;
  status: ClearMonitoringStatusEnumType;

  id: number;
  statusInfo?: StatusInfoType;
}

export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}





export interface ClearedChargingLimitRequest {
  customData?: CustomDataType;
  chargingLimitSource: ChargingLimitSourceEnumType;

  evseId?: number;
}




export interface ClearedChargingLimitResponse {
  customData?: CustomDataType;
}




export interface CostUpdatedRequest {
  customData?: CustomDataType;

  totalCost: number;

  transactionId: string;
}




export interface CostUpdatedResponse {
  customData?: CustomDataType;
}







export interface CustomerInformationRequest {
  customData?: CustomDataType;
  customerCertificate?: CertificateHashDataType;
  idToken?: IdTokenType;

  requestId: number;

  report: boolean;

  clear: boolean;

  customerIdentifier?: string;
}


export interface CertificateHashDataType {
  customData?: CustomDataType;
  hashAlgorithm: HashAlgorithmEnumType;

  issuerNameHash: string;

  issuerKeyHash: string;

  serialNumber: string;
}

export interface IdTokenType {
  customData?: CustomDataType;

  additionalInfo?: [AdditionalInfoType, ...AdditionalInfoType[]];

  idToken: string;
  type: IdTokenEnumType;
}

export interface AdditionalInfoType {
  customData?: CustomDataType;

  additionalIdToken: string;

  type: string;
}



export type CustomerInformationStatusEnumType = "Accepted" | "Rejected" | "Invalid";

export interface CustomerInformationResponse {
  customData?: CustomDataType;
  status: CustomerInformationStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface DataTransferRequest {
  customData?: CustomDataType;

  messageId?: string;

  data?: {
    [k: string]: unknown;
  };

  vendorId: string;
}




export type DataTransferStatusEnumType = "Accepted" | "Rejected" | "UnknownMessageId" | "UnknownVendorId";

export interface DataTransferResponse {
  customData?: CustomDataType;
  status: DataTransferStatusEnumType;
  statusInfo?: StatusInfoType;

  data?: {
    [k: string]: unknown;
  };
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}





export interface DeleteCertificateRequest {
  customData?: CustomDataType;
  certificateHashData: CertificateHashDataType;
}


export interface CertificateHashDataType {
  customData?: CustomDataType;
  hashAlgorithm: HashAlgorithmEnumType;

  issuerNameHash: string;

  issuerKeyHash: string;

  serialNumber: string;
}



export type DeleteCertificateStatusEnumType = "Accepted" | "Failed" | "NotFound";

export interface DeleteCertificateResponse {
  customData?: CustomDataType;
  status: DeleteCertificateStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type FirmwareStatusEnumType =
  | "Downloaded"
  | "DownloadFailed"
  | "Downloading"
  | "DownloadScheduled"
  | "DownloadPaused"
  | "Idle"
  | "InstallationFailed"
  | "Installing"
  | "Installed"
  | "InstallRebooting"
  | "InstallScheduled"
  | "InstallVerificationFailed"
  | "InvalidSignature"
  | "SignatureVerified";

export interface FirmwareStatusNotificationRequest {
  customData?: CustomDataType;
  status: FirmwareStatusEnumType;

  requestId?: number;
}




export interface FirmwareStatusNotificationResponse {
  customData?: CustomDataType;
}




export type CertificateActionEnumType = "Install" | "Update";

export interface Get15118EVCertificateRequest {
  customData?: CustomDataType;

  iso15118SchemaVersion: string;
  action: CertificateActionEnumType;

  exiRequest: string;
}




export type Iso15118EVCertificateStatusEnumType = "Accepted" | "Failed";

export interface Get15118EVCertificateResponse {
  customData?: CustomDataType;
  status: Iso15118EVCertificateStatusEnumType;
  statusInfo?: StatusInfoType;

  exiResponse: string;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type ReportBaseEnumType = "ConfigurationInventory" | "FullInventory" | "SummaryInventory";

export interface GetBaseReportRequest {
  customData?: CustomDataType;

  requestId: number;
  reportBase: ReportBaseEnumType;
}






export interface GetBaseReportResponse {
  customData?: CustomDataType;
  status: GenericDeviceModelStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}





export interface GetCertificateStatusRequest {
  customData?: CustomDataType;
  ocspRequestData: OCSPRequestDataType;
}


export interface OCSPRequestDataType {
  customData?: CustomDataType;
  hashAlgorithm: HashAlgorithmEnumType;

  issuerNameHash: string;

  issuerKeyHash: string;

  serialNumber: string;

  responderURL: string;
}



export type GetCertificateStatusEnumType = "Accepted" | "Failed";

export interface GetCertificateStatusResponse {
  customData?: CustomDataType;
  status: GetCertificateStatusEnumType;
  statusInfo?: StatusInfoType;

  ocspResult?: string;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}






export interface GetChargingProfilesRequest {
  customData?: CustomDataType;

  requestId: number;

  evseId?: number;
  chargingProfile: ChargingProfileCriterionType;
}


export interface ChargingProfileCriterionType {
  customData?: CustomDataType;
  chargingProfilePurpose?: ChargingProfilePurposeEnumType;

  stackLevel?: number;

  chargingProfileId?: [number, ...number[]];

  chargingLimitSource?:
    | [ChargingLimitSourceEnumType]
    | [ChargingLimitSourceEnumType, ChargingLimitSourceEnumType]
    | [ChargingLimitSourceEnumType, ChargingLimitSourceEnumType, ChargingLimitSourceEnumType]
    | [
        ChargingLimitSourceEnumType,
        ChargingLimitSourceEnumType,
        ChargingLimitSourceEnumType,
        ChargingLimitSourceEnumType
      ];
}



export type GetChargingProfileStatusEnumType = "Accepted" | "NoProfiles";

export interface GetChargingProfilesResponse {
  customData?: CustomDataType;
  status: GetChargingProfileStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}





export interface GetCompositeScheduleRequest {
  customData?: CustomDataType;

  duration: number;
  chargingRateUnit?: ChargingRateUnitEnumType;

  evseId: number;
}







export interface GetCompositeScheduleResponse {
  customData?: CustomDataType;
  status: GenericStatusEnumType;
  statusInfo?: StatusInfoType;
  schedule?: CompositeScheduleType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}

export interface CompositeScheduleType {
  customData?: CustomDataType;

  chargingSchedulePeriod: [ChargingSchedulePeriodType, ...ChargingSchedulePeriodType[]];

  evseId: number;

  duration: number;

  scheduleStart: string;
  chargingRateUnit: ChargingRateUnitEnumType;
}

export interface ChargingSchedulePeriodType {
  customData?: CustomDataType;

  startPeriod: number;

  limit: number;

  numberPhases?: number;

  phaseToUse?: number;
}






export interface GetDisplayMessagesRequest {
  customData?: CustomDataType;

  id?: [number, ...number[]];

  requestId: number;
  priority?: MessagePriorityEnumType;
  state?: MessageStateEnumType;
}




export type GetDisplayMessagesStatusEnumType = "Accepted" | "Unknown";

export interface GetDisplayMessagesResponse {
  customData?: CustomDataType;
  status: GetDisplayMessagesStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}





export interface GetInstalledCertificateIdsRequest {
  customData?: CustomDataType;

  certificateType?: [GetCertificateIdUseEnumType, ...GetCertificateIdUseEnumType[]];
}




export type GetInstalledCertificateStatusEnumType = "Accepted" | "NotFound";




export interface GetInstalledCertificateIdsResponse {
  customData?: CustomDataType;
  status: GetInstalledCertificateStatusEnumType;
  statusInfo?: StatusInfoType;

  certificateHashDataChain?: [CertificateHashDataChainType, ...CertificateHashDataChainType[]];
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}
export interface CertificateHashDataChainType {
  customData?: CustomDataType;
  certificateHashData: CertificateHashDataType;
  certificateType: GetCertificateIdUseEnumType;

  childCertificateHashData?:
    | [CertificateHashDataType]
    | [CertificateHashDataType, CertificateHashDataType]
    | [CertificateHashDataType, CertificateHashDataType, CertificateHashDataType]
    | [CertificateHashDataType, CertificateHashDataType, CertificateHashDataType, CertificateHashDataType];
}
export interface CertificateHashDataType {
  customData?: CustomDataType;
  hashAlgorithm: HashAlgorithmEnumType;

  issuerNameHash: string;

  issuerKeyHash: string;

  serialNumber: string;
}



export interface GetLocalListVersionRequest {
  customData?: CustomDataType;
}




export interface GetLocalListVersionResponse {
  customData?: CustomDataType;

  versionNumber: number;
}




export type LogEnumType = "DiagnosticsLog" | "SecurityLog";

export interface GetLogRequest {
  customData?: CustomDataType;
  log: LogParametersType;
  logType: LogEnumType;

  requestId: number;

  retries?: number;

  retryInterval?: number;
}


export interface LogParametersType {
  customData?: CustomDataType;

  remoteLocation: string;

  oldestTimestamp?: string;

  latestTimestamp?: string;
}



export type LogStatusEnumType = "Accepted" | "Rejected" | "AcceptedCanceled";

export interface GetLogResponse {
  customData?: CustomDataType;
  status: LogStatusEnumType;
  statusInfo?: StatusInfoType;

  filename?: string;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type MonitoringCriterionEnumType = "ThresholdMonitoring" | "DeltaMonitoring" | "PeriodicMonitoring";

export interface GetMonitoringReportRequest {
  customData?: CustomDataType;

  componentVariable?: [ComponentVariableType, ...ComponentVariableType[]];

  requestId: number;

  monitoringCriteria?:
    | [MonitoringCriterionEnumType]
    | [MonitoringCriterionEnumType, MonitoringCriterionEnumType]
    | [MonitoringCriterionEnumType, MonitoringCriterionEnumType, MonitoringCriterionEnumType];
}


export interface ComponentVariableType {
  customData?: CustomDataType;
  component: ComponentType;
  variable?: VariableType;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}





export interface GetMonitoringReportResponse {
  customData?: CustomDataType;
  status: GenericDeviceModelStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type ComponentCriterionEnumType = "Active" | "Available" | "Enabled" | "Problem";

export interface GetReportRequest {
  customData?: CustomDataType;

  componentVariable?: [ComponentVariableType, ...ComponentVariableType[]];

  requestId: number;

  componentCriteria?:
    | [ComponentCriterionEnumType]
    | [ComponentCriterionEnumType, ComponentCriterionEnumType]
    | [ComponentCriterionEnumType, ComponentCriterionEnumType, ComponentCriterionEnumType]
    | [ComponentCriterionEnumType, ComponentCriterionEnumType, ComponentCriterionEnumType, ComponentCriterionEnumType];
}


export interface ComponentVariableType {
  customData?: CustomDataType;
  component: ComponentType;
  variable?: VariableType;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}





export interface GetReportResponse {
  customData?: CustomDataType;
  status: GenericDeviceModelStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface GetTransactionStatusRequest {
  customData?: CustomDataType;

  transactionId?: string;
}




export interface GetTransactionStatusResponse {
  customData?: CustomDataType;

  ongoingIndicator?: boolean;

  messagesInQueue: boolean;
}






export interface GetVariablesRequest {
  customData?: CustomDataType;

  getVariableData: [GetVariableDataType, ...GetVariableDataType[]];
}


export interface GetVariableDataType {
  customData?: CustomDataType;
  attributeType?: AttributeEnumType;
  component: ComponentType;
  variable: VariableType;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}



export type GetVariableStatusEnumType =
  | "Accepted"
  | "Rejected"
  | "UnknownComponent"
  | "UnknownVariable"
  | "NotSupportedAttributeType";



export interface GetVariablesResponse {
  customData?: CustomDataType;

  getVariableResult: [GetVariableResultType, ...GetVariableResultType[]];
}


export interface GetVariableResultType {
  customData?: CustomDataType;
  attributeStatusInfo?: StatusInfoType;
  attributeStatus: GetVariableStatusEnumType;
  attributeType?: AttributeEnumType;

  attributeValue?: string;
  component: ComponentType;
  variable: VariableType;
}

export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}



export interface HeartbeatRequest {
  customData?: CustomDataType;
}




export interface HeartbeatResponse {
  customData?: CustomDataType;

  currentTime: string;
}




export type InstallCertificateUseEnumType =
  | "V2GRootCertificate"
  | "MORootCertificate"
  | "CSMSRootCertificate"
  | "ManufacturerRootCertificate";

export interface InstallCertificateRequest {
  customData?: CustomDataType;
  certificateType: InstallCertificateUseEnumType;

  certificate: string;
}




export type InstallCertificateStatusEnumType = "Accepted" | "Rejected" | "Failed";

export interface InstallCertificateResponse {
  customData?: CustomDataType;
  status: InstallCertificateStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type UploadLogStatusEnumType =
  | "BadMessage"
  | "Idle"
  | "NotSupportedOperation"
  | "PermissionDenied"
  | "Uploaded"
  | "UploadFailure"
  | "Uploading"
  | "AcceptedCanceled";

export interface LogStatusNotificationRequest {
  customData?: CustomDataType;
  status: UploadLogStatusEnumType;

  requestId?: number;
}




export interface LogStatusNotificationResponse {
  customData?: CustomDataType;
}








export interface MeterValuesRequest {
  customData?: CustomDataType;

  evseId: number;

  meterValue: [MeterValueType, ...MeterValueType[]];
}


export interface MeterValueType {
  customData?: CustomDataType;

  sampledValue: [SampledValueType, ...SampledValueType[]];

  timestamp: string;
}

export interface SampledValueType {
  customData?: CustomDataType;

  value: number;
  context?: ReadingContextEnumType;
  measurand?: MeasurandEnumType;
  phase?: PhaseEnumType;
  location?: LocationEnumType;
  signedMeterValue?: SignedMeterValueType;
  unitOfMeasure?: UnitOfMeasureType;
}

export interface SignedMeterValueType {
  customData?: CustomDataType;

  signedMeterData: string;

  signingMethod: string;

  encodingMethod: string;

  publicKey: string;
}

export interface UnitOfMeasureType {
  customData?: CustomDataType;

  unit?: string;

  multiplier?: number;
}



export interface MeterValuesResponse {
  customData?: CustomDataType;
}








export interface NotifyChargingLimitRequest {
  customData?: CustomDataType;

  chargingSchedule?: [ChargingScheduleType, ...ChargingScheduleType[]];

  evseId?: number;
  chargingLimit: ChargingLimitType;
}


export interface ChargingScheduleType {
  customData?: CustomDataType;

  id: number;

  startSchedule?: string;

  duration?: number;
  chargingRateUnit: ChargingRateUnitEnumType;

  chargingSchedulePeriod: [ChargingSchedulePeriodType, ...ChargingSchedulePeriodType[]];

  minChargingRate?: number;
  salesTariff?: SalesTariffType;
}

export interface ChargingSchedulePeriodType {
  customData?: CustomDataType;

  startPeriod: number;

  limit: number;

  numberPhases?: number;

  phaseToUse?: number;
}

export interface SalesTariffType {
  customData?: CustomDataType;

  id: number;

  salesTariffDescription?: string;

  numEPriceLevels?: number;

  salesTariffEntry: [SalesTariffEntryType, ...SalesTariffEntryType[]];
}

export interface SalesTariffEntryType {
  customData?: CustomDataType;
  relativeTimeInterval: RelativeTimeIntervalType;

  ePriceLevel?: number;

  consumptionCost?:
    | [ConsumptionCostType]
    | [ConsumptionCostType, ConsumptionCostType]
    | [ConsumptionCostType, ConsumptionCostType, ConsumptionCostType];
}

export interface RelativeTimeIntervalType {
  customData?: CustomDataType;

  start: number;

  duration?: number;
}

export interface ConsumptionCostType {
  customData?: CustomDataType;

  startValue: number;

  cost: [CostType] | [CostType, CostType] | [CostType, CostType, CostType];
}

export interface CostType {
  customData?: CustomDataType;
  costKind: CostKindEnumType;

  amount: number;

  amountMultiplier?: number;
}

export interface ChargingLimitType {
  customData?: CustomDataType;
  chargingLimitSource: ChargingLimitSourceEnumType;

  isGridCritical?: boolean;
}



export interface NotifyChargingLimitResponse {
  customData?: CustomDataType;
}




export interface NotifyCustomerInformationRequest {
  customData?: CustomDataType;

  data: string;

  tbc?: boolean;

  seqNo: number;

  generatedAt: string;

  requestId: number;
}




export interface NotifyCustomerInformationResponse {
  customData?: CustomDataType;
}








export interface NotifyDisplayMessagesRequest {
  customData?: CustomDataType;

  messageInfo?: [MessageInfoType, ...MessageInfoType[]];

  requestId: number;

  tbc?: boolean;
}


export interface MessageInfoType {
  customData?: CustomDataType;
  display?: ComponentType;

  id: number;
  priority: MessagePriorityEnumType;
  state?: MessageStateEnumType;

  startDateTime?: string;

  endDateTime?: string;

  transactionId?: string;
  message: MessageContentType;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface MessageContentType {
  customData?: CustomDataType;
  format: MessageFormatEnumType;

  language?: string;

  content: string;
}



export interface NotifyDisplayMessagesResponse {
  customData?: CustomDataType;
}




export type EnergyTransferModeEnumType = "DC" | "AC_single_phase" | "AC_two_phase" | "AC_three_phase";

export interface NotifyEVChargingNeedsRequest {
  customData?: CustomDataType;

  maxScheduleTuples?: number;
  chargingNeeds: ChargingNeedsType;

  evseId: number;
}


export interface ChargingNeedsType {
  customData?: CustomDataType;
  acChargingParameters?: ACChargingParametersType;
  dcChargingParameters?: DCChargingParametersType;
  requestedEnergyTransfer: EnergyTransferModeEnumType;

  departureTime?: string;
}

export interface ACChargingParametersType {
  customData?: CustomDataType;

  energyAmount: number;

  evMinCurrent: number;

  evMaxCurrent: number;

  evMaxVoltage: number;
}

export interface DCChargingParametersType {
  customData?: CustomDataType;

  evMaxCurrent: number;

  evMaxVoltage: number;

  energyAmount?: number;

  evMaxPower?: number;

  stateOfCharge?: number;

  evEnergyCapacity?: number;

  fullSoC?: number;

  bulkSoC?: number;
}



export type NotifyEVChargingNeedsStatusEnumType = "Accepted" | "Rejected" | "Processing";

export interface NotifyEVChargingNeedsResponse {
  customData?: CustomDataType;
  status: NotifyEVChargingNeedsStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}






export interface NotifyEVChargingScheduleRequest {
  customData?: CustomDataType;

  timeBase: string;
  chargingSchedule: ChargingScheduleType;

  evseId: number;
}


export interface ChargingScheduleType {
  customData?: CustomDataType;

  id: number;

  startSchedule?: string;

  duration?: number;
  chargingRateUnit: ChargingRateUnitEnumType;

  chargingSchedulePeriod: [ChargingSchedulePeriodType, ...ChargingSchedulePeriodType[]];

  minChargingRate?: number;
  salesTariff?: SalesTariffType;
}

export interface ChargingSchedulePeriodType {
  customData?: CustomDataType;

  startPeriod: number;

  limit: number;

  numberPhases?: number;

  phaseToUse?: number;
}

export interface SalesTariffType {
  customData?: CustomDataType;

  id: number;

  salesTariffDescription?: string;

  numEPriceLevels?: number;

  salesTariffEntry: [SalesTariffEntryType, ...SalesTariffEntryType[]];
}

export interface SalesTariffEntryType {
  customData?: CustomDataType;
  relativeTimeInterval: RelativeTimeIntervalType;

  ePriceLevel?: number;

  consumptionCost?:
    | [ConsumptionCostType]
    | [ConsumptionCostType, ConsumptionCostType]
    | [ConsumptionCostType, ConsumptionCostType, ConsumptionCostType];
}

export interface RelativeTimeIntervalType {
  customData?: CustomDataType;

  start: number;

  duration?: number;
}

export interface ConsumptionCostType {
  customData?: CustomDataType;

  startValue: number;

  cost: [CostType] | [CostType, CostType] | [CostType, CostType, CostType];
}

export interface CostType {
  customData?: CustomDataType;
  costKind: CostKindEnumType;

  amount: number;

  amountMultiplier?: number;
}





export interface NotifyEVChargingScheduleResponse {
  customData?: CustomDataType;
  status: GenericStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type EventTriggerEnumType = "Alerting" | "Delta" | "Periodic";

export type EventNotificationEnumType =
  | "HardWiredNotification"
  | "HardWiredMonitor"
  | "PreconfiguredMonitor"
  | "CustomMonitor";

export interface NotifyEventRequest {
  customData?: CustomDataType;

  generatedAt: string;

  tbc?: boolean;

  seqNo: number;

  eventData: [EventDataType, ...EventDataType[]];
}


export interface EventDataType {
  customData?: CustomDataType;

  eventId: number;

  timestamp: string;
  trigger: EventTriggerEnumType;

  cause?: number;

  actualValue: string;

  techCode?: string;

  techInfo?: string;

  cleared?: boolean;

  transactionId?: string;
  component: ComponentType;

  variableMonitoringId?: number;
  eventNotificationType: EventNotificationEnumType;
  variable: VariableType;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}



export interface NotifyEventResponse {
  customData?: CustomDataType;
}






export interface NotifyMonitoringReportRequest {
  customData?: CustomDataType;

  monitor?: [MonitoringDataType, ...MonitoringDataType[]];

  requestId: number;

  tbc?: boolean;

  seqNo: number;

  generatedAt: string;
}


export interface MonitoringDataType {
  customData?: CustomDataType;
  component: ComponentType;
  variable: VariableType;

  variableMonitoring: [VariableMonitoringType, ...VariableMonitoringType[]];
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}

export interface VariableMonitoringType {
  customData?: CustomDataType;

  id: number;

  transaction: boolean;

  value: number;
  type: MonitorEnumType;

  severity: number;
}



export interface NotifyMonitoringReportResponse {
  customData?: CustomDataType;
}





export type MutabilityEnumType = "ReadOnly" | "WriteOnly" | "ReadWrite";

export type DataEnumType =
  | "string"
  | "decimal"
  | "integer"
  | "dateTime"
  | "boolean"
  | "OptionList"
  | "SequenceList"
  | "MemberList";

export interface NotifyReportRequest {
  customData?: CustomDataType;

  requestId: number;

  generatedAt: string;

  reportData?: [ReportDataType, ...ReportDataType[]];

  tbc?: boolean;

  seqNo: number;
}


export interface ReportDataType {
  customData?: CustomDataType;
  component: ComponentType;
  variable: VariableType;

  variableAttribute:
    | [VariableAttributeType]
    | [VariableAttributeType, VariableAttributeType]
    | [VariableAttributeType, VariableAttributeType, VariableAttributeType]
    | [VariableAttributeType, VariableAttributeType, VariableAttributeType, VariableAttributeType];
  variableCharacteristics?: VariableCharacteristicsType;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}

export interface VariableAttributeType {
  customData?: CustomDataType;
  type?: AttributeEnumType;

  value?: string;
  mutability?: MutabilityEnumType;

  persistent?: boolean;

  constant?: boolean;
}

export interface VariableCharacteristicsType {
  customData?: CustomDataType;

  unit?: string;
  dataType: DataEnumType;

  minLimit?: number;

  maxLimit?: number;

  valuesList?: string;

  supportsMonitoring: boolean;
}



export interface NotifyReportResponse {
  customData?: CustomDataType;
}




export interface PublishFirmwareRequest {
  customData?: CustomDataType;

  location: string;

  retries?: number;

  checksum: string;

  requestId: number;

  retryInterval?: number;
}






export interface PublishFirmwareResponse {
  customData?: CustomDataType;
  status: GenericStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type PublishFirmwareStatusEnumType =
  | "Idle"
  | "DownloadScheduled"
  | "Downloading"
  | "Downloaded"
  | "Published"
  | "DownloadFailed"
  | "DownloadPaused"
  | "InvalidChecksum"
  | "ChecksumVerified"
  | "PublishFailed";

export interface PublishFirmwareStatusNotificationRequest {
  customData?: CustomDataType;
  status: PublishFirmwareStatusEnumType;

  location?: [string, ...string[]];

  requestId?: number;
}




export interface PublishFirmwareStatusNotificationResponse {
  customData?: CustomDataType;
}











export interface ReportChargingProfilesRequest {
  customData?: CustomDataType;

  requestId: number;
  chargingLimitSource: ChargingLimitSourceEnumType;

  chargingProfile: [ChargingProfileType, ...ChargingProfileType[]];

  tbc?: boolean;

  evseId: number;
}


export interface ChargingProfileType {
  customData?: CustomDataType;

  id: number;

  stackLevel: number;
  chargingProfilePurpose: ChargingProfilePurposeEnumType;
  chargingProfileKind: ChargingProfileKindEnumType;
  recurrencyKind?: RecurrencyKindEnumType;

  validFrom?: string;

  validTo?: string;

  chargingSchedule:
    | [ChargingScheduleType]
    | [ChargingScheduleType, ChargingScheduleType]
    | [ChargingScheduleType, ChargingScheduleType, ChargingScheduleType];

  transactionId?: string;
}

export interface ChargingScheduleType {
  customData?: CustomDataType;

  id: number;

  startSchedule?: string;

  duration?: number;
  chargingRateUnit: ChargingRateUnitEnumType;

  chargingSchedulePeriod: [ChargingSchedulePeriodType, ...ChargingSchedulePeriodType[]];

  minChargingRate?: number;
  salesTariff?: SalesTariffType;
}

export interface ChargingSchedulePeriodType {
  customData?: CustomDataType;

  startPeriod: number;

  limit: number;

  numberPhases?: number;

  phaseToUse?: number;
}

export interface SalesTariffType {
  customData?: CustomDataType;

  id: number;

  salesTariffDescription?: string;

  numEPriceLevels?: number;

  salesTariffEntry: [SalesTariffEntryType, ...SalesTariffEntryType[]];
}

export interface SalesTariffEntryType {
  customData?: CustomDataType;
  relativeTimeInterval: RelativeTimeIntervalType;

  ePriceLevel?: number;

  consumptionCost?:
    | [ConsumptionCostType]
    | [ConsumptionCostType, ConsumptionCostType]
    | [ConsumptionCostType, ConsumptionCostType, ConsumptionCostType];
}

export interface RelativeTimeIntervalType {
  customData?: CustomDataType;

  start: number;

  duration?: number;
}

export interface ConsumptionCostType {
  customData?: CustomDataType;

  startValue: number;

  cost: [CostType] | [CostType, CostType] | [CostType, CostType, CostType];
}

export interface CostType {
  customData?: CustomDataType;
  costKind: CostKindEnumType;

  amount: number;

  amountMultiplier?: number;
}



export interface ReportChargingProfilesResponse {
  customData?: CustomDataType;
}











export interface RequestStartTransactionRequest {
  customData?: CustomDataType;

  evseId?: number;
  groupIdToken?: IdTokenType;
  idToken: IdTokenType;

  remoteStartId: number;
  chargingProfile?: ChargingProfileType;
}


export interface IdTokenType {
  customData?: CustomDataType;

  additionalInfo?: [AdditionalInfoType, ...AdditionalInfoType[]];

  idToken: string;
  type: IdTokenEnumType;
}

export interface AdditionalInfoType {
  customData?: CustomDataType;

  additionalIdToken: string;

  type: string;
}

export interface ChargingProfileType {
  customData?: CustomDataType;

  id: number;

  stackLevel: number;
  chargingProfilePurpose: ChargingProfilePurposeEnumType;
  chargingProfileKind: ChargingProfileKindEnumType;
  recurrencyKind?: RecurrencyKindEnumType;

  validFrom?: string;

  validTo?: string;

  chargingSchedule:
    | [ChargingScheduleType]
    | [ChargingScheduleType, ChargingScheduleType]
    | [ChargingScheduleType, ChargingScheduleType, ChargingScheduleType];

  transactionId?: string;
}

export interface ChargingScheduleType {
  customData?: CustomDataType;

  id: number;

  startSchedule?: string;

  duration?: number;
  chargingRateUnit: ChargingRateUnitEnumType;

  chargingSchedulePeriod: [ChargingSchedulePeriodType, ...ChargingSchedulePeriodType[]];

  minChargingRate?: number;
  salesTariff?: SalesTariffType;
}

export interface ChargingSchedulePeriodType {
  customData?: CustomDataType;

  startPeriod: number;

  limit: number;

  numberPhases?: number;

  phaseToUse?: number;
}

export interface SalesTariffType {
  customData?: CustomDataType;

  id: number;

  salesTariffDescription?: string;

  numEPriceLevels?: number;

  salesTariffEntry: [SalesTariffEntryType, ...SalesTariffEntryType[]];
}

export interface SalesTariffEntryType {
  customData?: CustomDataType;
  relativeTimeInterval: RelativeTimeIntervalType;

  ePriceLevel?: number;

  consumptionCost?:
    | [ConsumptionCostType]
    | [ConsumptionCostType, ConsumptionCostType]
    | [ConsumptionCostType, ConsumptionCostType, ConsumptionCostType];
}

export interface RelativeTimeIntervalType {
  customData?: CustomDataType;

  start: number;

  duration?: number;
}

export interface ConsumptionCostType {
  customData?: CustomDataType;

  startValue: number;

  cost: [CostType] | [CostType, CostType] | [CostType, CostType, CostType];
}

export interface CostType {
  customData?: CustomDataType;
  costKind: CostKindEnumType;

  amount: number;

  amountMultiplier?: number;
}





export interface RequestStartTransactionResponse {
  customData?: CustomDataType;
  status: RequestStartStopStatusEnumType;
  statusInfo?: StatusInfoType;

  transactionId?: string;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface RequestStopTransactionRequest {
  customData?: CustomDataType;

  transactionId: string;
}






export interface RequestStopTransactionResponse {
  customData?: CustomDataType;
  status: RequestStartStopStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type ReservationUpdateStatusEnumType = "Expired" | "Removed";

export interface ReservationStatusUpdateRequest {
  customData?: CustomDataType;

  reservationId: number;
  reservationUpdateStatus: ReservationUpdateStatusEnumType;
}




export interface ReservationStatusUpdateResponse {
  customData?: CustomDataType;
}




export type ConnectorEnumType =
  | "cCCS1"
  | "cCCS2"
  | "cG105"
  | "cTesla"
  | "cType1"
  | "cType2"
  | "s309-1P-16A"
  | "s309-1P-32A"
  | "s309-3P-16A"
  | "s309-3P-32A"
  | "sBS1361"
  | "sCEE-7-7"
  | "sType2"
  | "sType3"
  | "Other1PhMax16A"
  | "Other1PhOver16A"
  | "Other3Ph"
  | "Pan"
  | "wInductive"
  | "wResonant"
  | "Undetermined"
  | "Unknown";



export interface ReserveNowRequest {
  customData?: CustomDataType;

  id: number;

  expiryDateTime: string;
  connectorType?: ConnectorEnumType;
  idToken: IdTokenType;

  evseId?: number;
  groupIdToken?: IdTokenType;
}


export interface IdTokenType {
  customData?: CustomDataType;

  additionalInfo?: [AdditionalInfoType, ...AdditionalInfoType[]];

  idToken: string;
  type: IdTokenEnumType;
}

export interface AdditionalInfoType {
  customData?: CustomDataType;

  additionalIdToken: string;

  type: string;
}



export type ReserveNowStatusEnumType = "Accepted" | "Faulted" | "Occupied" | "Rejected" | "Unavailable";

export interface ReserveNowResponse {
  customData?: CustomDataType;
  status: ReserveNowStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type ResetEnumType = "Immediate" | "OnIdle";

export interface ResetRequest {
  customData?: CustomDataType;
  type: ResetEnumType;

  evseId?: number;
}




export type ResetStatusEnumType = "Accepted" | "Rejected" | "Scheduled";

export interface ResetResponse {
  customData?: CustomDataType;
  status: ResetStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface SecurityEventNotificationRequest {
  customData?: CustomDataType;

  type: string;

  timestamp: string;

  techInfo?: string;
}




export interface SecurityEventNotificationResponse {
  customData?: CustomDataType;
}







export type UpdateEnumType = "Differential" | "Full";

export interface SendLocalListRequest {
  customData?: CustomDataType;

  localAuthorizationList?: [AuthorizationData, ...AuthorizationData[]];

  versionNumber: number;
  updateType: UpdateEnumType;
}


export interface AuthorizationData {
  customData?: CustomDataType;
  idToken: IdTokenType;
  idTokenInfo?: IdTokenInfoType;
}

export interface IdTokenType {
  customData?: CustomDataType;

  additionalInfo?: [AdditionalInfoType, ...AdditionalInfoType[]];

  idToken: string;
  type: IdTokenEnumType;
}

export interface AdditionalInfoType {
  customData?: CustomDataType;

  additionalIdToken: string;

  type: string;
}

export interface IdTokenInfoType {
  customData?: CustomDataType;
  status: AuthorizationStatusEnumType;

  cacheExpiryDateTime?: string;

  chargingPriority?: number;

  language1?: string;

  evseId?: [number, ...number[]];
  groupIdToken?: IdTokenType;

  language2?: string;
  personalMessage?: MessageContentType;
}

export interface MessageContentType {
  customData?: CustomDataType;
  format: MessageFormatEnumType;

  language?: string;

  content: string;
}



export type SendLocalListStatusEnumType = "Accepted" | "Failed" | "VersionMismatch";

export interface SendLocalListResponse {
  customData?: CustomDataType;
  status: SendLocalListStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}









export interface SetChargingProfileRequest {
  customData?: CustomDataType;

  evseId: number;
  chargingProfile: ChargingProfileType;
}


export interface ChargingProfileType {
  customData?: CustomDataType;

  id: number;

  stackLevel: number;
  chargingProfilePurpose: ChargingProfilePurposeEnumType;
  chargingProfileKind: ChargingProfileKindEnumType;
  recurrencyKind?: RecurrencyKindEnumType;

  validFrom?: string;

  validTo?: string;

  chargingSchedule:
    | [ChargingScheduleType]
    | [ChargingScheduleType, ChargingScheduleType]
    | [ChargingScheduleType, ChargingScheduleType, ChargingScheduleType];

  transactionId?: string;
}

export interface ChargingScheduleType {
  customData?: CustomDataType;

  id: number;

  startSchedule?: string;

  duration?: number;
  chargingRateUnit: ChargingRateUnitEnumType;

  chargingSchedulePeriod: [ChargingSchedulePeriodType, ...ChargingSchedulePeriodType[]];

  minChargingRate?: number;
  salesTariff?: SalesTariffType;
}

export interface ChargingSchedulePeriodType {
  customData?: CustomDataType;

  startPeriod: number;

  limit: number;

  numberPhases?: number;

  phaseToUse?: number;
}

export interface SalesTariffType {
  customData?: CustomDataType;

  id: number;

  salesTariffDescription?: string;

  numEPriceLevels?: number;

  salesTariffEntry: [SalesTariffEntryType, ...SalesTariffEntryType[]];
}

export interface SalesTariffEntryType {
  customData?: CustomDataType;
  relativeTimeInterval: RelativeTimeIntervalType;

  ePriceLevel?: number;

  consumptionCost?:
    | [ConsumptionCostType]
    | [ConsumptionCostType, ConsumptionCostType]
    | [ConsumptionCostType, ConsumptionCostType, ConsumptionCostType];
}

export interface RelativeTimeIntervalType {
  customData?: CustomDataType;

  start: number;

  duration?: number;
}

export interface ConsumptionCostType {
  customData?: CustomDataType;

  startValue: number;

  cost: [CostType] | [CostType, CostType] | [CostType, CostType, CostType];
}

export interface CostType {
  customData?: CustomDataType;
  costKind: CostKindEnumType;

  amount: number;

  amountMultiplier?: number;
}



export type ChargingProfileStatusEnumType = "Accepted" | "Rejected";

export interface SetChargingProfileResponse {
  customData?: CustomDataType;
  status: ChargingProfileStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}







export interface SetDisplayMessageRequest {
  customData?: CustomDataType;
  message: MessageInfoType;
}


export interface MessageInfoType {
  customData?: CustomDataType;
  display?: ComponentType;

  id: number;
  priority: MessagePriorityEnumType;
  state?: MessageStateEnumType;

  startDateTime?: string;

  endDateTime?: string;

  transactionId?: string;
  message: MessageContentType;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface MessageContentType {
  customData?: CustomDataType;
  format: MessageFormatEnumType;

  language?: string;

  content: string;
}



export type DisplayMessageStatusEnumType =
  | "Accepted"
  | "NotSupportedMessageFormat"
  | "Rejected"
  | "NotSupportedPriority"
  | "NotSupportedState"
  | "UnknownTransaction";

export interface SetDisplayMessageResponse {
  customData?: CustomDataType;
  status: DisplayMessageStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type MonitoringBaseEnumType = "All" | "FactoryDefault" | "HardWiredOnly";

export interface SetMonitoringBaseRequest {
  customData?: CustomDataType;
  monitoringBase: MonitoringBaseEnumType;
}






export interface SetMonitoringBaseResponse {
  customData?: CustomDataType;
  status: GenericDeviceModelStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface SetMonitoringLevelRequest {
  customData?: CustomDataType;

  severity: number;
}






export interface SetMonitoringLevelResponse {
  customData?: CustomDataType;
  status: GenericStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type APNAuthenticationEnumType = "CHAP" | "NONE" | "PAP" | "AUTO";

export type OCPPVersionEnumType = "OCPP12" | "OCPP15" | "OCPP16" | "OCPP20";

export type OCPPTransportEnumType = "JSON" | "SOAP";

export type OCPPInterfaceEnumType =
  | "Wired0"
  | "Wired1"
  | "Wired2"
  | "Wired3"
  | "Wireless0"
  | "Wireless1"
  | "Wireless2"
  | "Wireless3";

export type VPNEnumType = "IKEv2" | "IPSec" | "L2TP" | "PPTP";

export interface SetNetworkProfileRequest {
  customData?: CustomDataType;

  configurationSlot: number;
  connectionData: NetworkConnectionProfileType;
}


export interface NetworkConnectionProfileType {
  customData?: CustomDataType;
  apn?: APNType;
  ocppVersion: OCPPVersionEnumType;
  ocppTransport: OCPPTransportEnumType;

  ocppCsmsUrl: string;

  messageTimeout: number;

  securityProfile: number;
  ocppInterface: OCPPInterfaceEnumType;
  vpn?: VPNType;
}

export interface APNType {
  customData?: CustomDataType;

  apn: string;

  apnUserName?: string;

  apnPassword?: string;

  simPin?: number;

  preferredNetwork?: string;

  useOnlyPreferredNetwork?: boolean;
  apnAuthentication: APNAuthenticationEnumType;
}

export interface VPNType {
  customData?: CustomDataType;

  server: string;

  user: string;

  group?: string;

  password: string;

  key: string;
  type: VPNEnumType;
}



export type SetNetworkProfileStatusEnumType = "Accepted" | "Rejected" | "Failed";

export interface SetNetworkProfileResponse {
  customData?: CustomDataType;
  status: SetNetworkProfileStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}





export interface SetVariableMonitoringRequest {
  customData?: CustomDataType;

  setMonitoringData: [SetMonitoringDataType, ...SetMonitoringDataType[]];
}


export interface SetMonitoringDataType {
  customData?: CustomDataType;

  id?: number;

  transaction?: boolean;

  value: number;
  type: MonitorEnumType;

  severity: number;
  component: ComponentType;
  variable: VariableType;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}



export type SetMonitoringStatusEnumType =
  | "Accepted"
  | "UnknownComponent"
  | "UnknownVariable"
  | "UnsupportedMonitorType"
  | "Rejected"
  | "Duplicate";



export interface SetVariableMonitoringResponse {
  customData?: CustomDataType;

  setMonitoringResult: [SetMonitoringResultType, ...SetMonitoringResultType[]];
}


export interface SetMonitoringResultType {
  customData?: CustomDataType;

  id?: number;
  statusInfo?: StatusInfoType;
  status: SetMonitoringStatusEnumType;
  type: MonitorEnumType;
  component: ComponentType;
  variable: VariableType;

  severity: number;
}

export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}





export interface SetVariablesRequest {
  customData?: CustomDataType;

  setVariableData: [SetVariableDataType, ...SetVariableDataType[]];
}


export interface SetVariableDataType {
  customData?: CustomDataType;
  attributeType?: AttributeEnumType;

  attributeValue: string;
  component: ComponentType;
  variable: VariableType;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}




export type SetVariableStatusEnumType =
  | "Accepted"
  | "Rejected"
  | "UnknownComponent"
  | "UnknownVariable"
  | "NotSupportedAttributeType"
  | "RebootRequired";

export interface SetVariablesResponse {
  customData?: CustomDataType;

  setVariableResult: [SetVariableResultType, ...SetVariableResultType[]];
}


export interface SetVariableResultType {
  customData?: CustomDataType;
  attributeType?: AttributeEnumType;
  attributeStatus: SetVariableStatusEnumType;
  attributeStatusInfo?: StatusInfoType;
  component: ComponentType;
  variable: VariableType;
}

export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}

export interface ComponentType {
  customData?: CustomDataType;
  evse?: EVSEType;

  name: string;

  instance?: string;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface VariableType {
  customData?: CustomDataType;

  name: string;

  instance?: string;
}





export interface SignCertificateRequest {
  customData?: CustomDataType;

  csr: string;
  certificateType?: CertificateSigningUseEnumType;
}






export interface SignCertificateResponse {
  customData?: CustomDataType;
  status: GenericStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export type ConnectorStatusEnumType = "Available" | "Occupied" | "Reserved" | "Unavailable" | "Faulted";

export interface StatusNotificationRequest {
  customData?: CustomDataType;

  timestamp: string;
  connectorStatus: ConnectorStatusEnumType;

  evseId: number;

  connectorId: number;
}




export interface StatusNotificationResponse {
  customData?: CustomDataType;
}




export type TransactionEventEnumType = "Ended" | "Started" | "Updated";





export type TriggerReasonEnumType =
  | "Authorized"
  | "CablePluggedIn"
  | "ChargingRateChanged"
  | "ChargingStateChanged"
  | "Deauthorized"
  | "EnergyLimitReached"
  | "EVCommunicationLost"
  | "EVConnectTimeout"
  | "MeterValueClock"
  | "MeterValuePeriodic"
  | "TimeLimitReached"
  | "Trigger"
  | "UnlockCommand"
  | "StopAuthorized"
  | "EVDeparted"
  | "EVDetected"
  | "RemoteStop"
  | "RemoteStart"
  | "AbnormalCondition"
  | "SignedDataReceived"
  | "ResetCommand";

export type ChargingStateEnumType = "Charging" | "EVConnected" | "SuspendedEV" | "SuspendedEVSE" | "Idle";

export type ReasonEnumType =
  | "DeAuthorized"
  | "EmergencyStop"
  | "EnergyLimitReached"
  | "EVDisconnected"
  | "GroundFault"
  | "ImmediateReset"
  | "Local"
  | "LocalOutOfCredit"
  | "MasterPass"
  | "Other"
  | "OvercurrentFault"
  | "PowerLoss"
  | "PowerQuality"
  | "Reboot"
  | "Remote"
  | "SOCLimitReached"
  | "StoppedByEV"
  | "TimeLimitReached"
  | "Timeout";



export interface TransactionEventRequest {
  customData?: CustomDataType;
  eventType: TransactionEventEnumType;

  meterValue?: [MeterValueType, ...MeterValueType[]];

  timestamp: string;
  triggerReason: TriggerReasonEnumType;

  seqNo: number;

  offline?: boolean;

  numberOfPhasesUsed?: number;

  cableMaxCurrent?: number;

  reservationId?: number;
  transactionInfo: TransactionType;
  evse?: EVSEType;
  idToken?: IdTokenType;
}


export interface MeterValueType {
  customData?: CustomDataType;

  sampledValue: [SampledValueType, ...SampledValueType[]];

  timestamp: string;
}

export interface SampledValueType {
  customData?: CustomDataType;

  value: number;
  context?: ReadingContextEnumType;
  measurand?: MeasurandEnumType;
  phase?: PhaseEnumType;
  location?: LocationEnumType;
  signedMeterValue?: SignedMeterValueType;
  unitOfMeasure?: UnitOfMeasureType;
}

export interface SignedMeterValueType {
  customData?: CustomDataType;

  signedMeterData: string;

  signingMethod: string;

  encodingMethod: string;

  publicKey: string;
}

export interface UnitOfMeasureType {
  customData?: CustomDataType;

  unit?: string;

  multiplier?: number;
}

export interface TransactionType {
  customData?: CustomDataType;

  transactionId: string;
  chargingState?: ChargingStateEnumType;

  timeSpentCharging?: number;
  stoppedReason?: ReasonEnumType;

  remoteStartId?: number;
}

export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}

export interface IdTokenType {
  customData?: CustomDataType;

  additionalInfo?: [AdditionalInfoType, ...AdditionalInfoType[]];

  idToken: string;
  type: IdTokenEnumType;
}

export interface AdditionalInfoType {
  customData?: CustomDataType;

  additionalIdToken: string;

  type: string;
}







export interface TransactionEventResponse {
  customData?: CustomDataType;

  totalCost?: number;

  chargingPriority?: number;
  idTokenInfo?: IdTokenInfoType;
  updatedPersonalMessage?: MessageContentType;
}


export interface IdTokenInfoType {
  customData?: CustomDataType;
  status: AuthorizationStatusEnumType;

  cacheExpiryDateTime?: string;

  chargingPriority?: number;

  language1?: string;

  evseId?: [number, ...number[]];
  groupIdToken?: IdTokenType;

  language2?: string;
  personalMessage?: MessageContentType;
}

export interface IdTokenType {
  customData?: CustomDataType;

  additionalInfo?: [AdditionalInfoType, ...AdditionalInfoType[]];

  idToken: string;
  type: IdTokenEnumType;
}

export interface AdditionalInfoType {
  customData?: CustomDataType;

  additionalIdToken: string;

  type: string;
}

export interface MessageContentType {
  customData?: CustomDataType;
  format: MessageFormatEnumType;

  language?: string;

  content: string;
}



export type MessageTriggerEnumType =
  | "BootNotification"
  | "LogStatusNotification"
  | "FirmwareStatusNotification"
  | "Heartbeat"
  | "MeterValues"
  | "SignChargingStationCertificate"
  | "SignV2GCertificate"
  | "StatusNotification"
  | "TransactionEvent"
  | "SignCombinedCertificate"
  | "PublishFirmwareStatusNotification";

export interface TriggerMessageRequest {
  customData?: CustomDataType;
  evse?: EVSEType;
  requestedMessage: MessageTriggerEnumType;
}


export interface EVSEType {
  customData?: CustomDataType;

  id: number;

  connectorId?: number;
}



export type TriggerMessageStatusEnumType = "Accepted" | "Rejected" | "NotImplemented";

export interface TriggerMessageResponse {
  customData?: CustomDataType;
  status: TriggerMessageStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface UnlockConnectorRequest {
  customData?: CustomDataType;

  evseId: number;

  connectorId: number;
}




export type UnlockStatusEnumType = "Unlocked" | "UnlockFailed" | "OngoingAuthorizedTransaction" | "UnknownConnector";

export interface UnlockConnectorResponse {
  customData?: CustomDataType;
  status: UnlockStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}



export interface UnpublishFirmwareRequest {
  customData?: CustomDataType;

  checksum: string;
}




export type UnpublishFirmwareStatusEnumType = "DownloadOngoing" | "NoFirmware" | "Unpublished";

export interface UnpublishFirmwareResponse {
  customData?: CustomDataType;
  status: UnpublishFirmwareStatusEnumType;
}




export interface UpdateFirmwareRequest {
  customData?: CustomDataType;

  retries?: number;

  retryInterval?: number;

  requestId: number;
  firmware: FirmwareType;
}


export interface FirmwareType {
  customData?: CustomDataType;

  location: string;

  retrieveDateTime: string;

  installDateTime?: string;

  signingCertificate?: string;

  signature?: string;
}



export type UpdateFirmwareStatusEnumType =
  | "Accepted"
  | "Rejected"
  | "AcceptedCanceled"
  | "InvalidCertificate"
  | "RevokedCertificate";

export interface UpdateFirmwareResponse {
  customData?: CustomDataType;
  status: UpdateFirmwareStatusEnumType;
  statusInfo?: StatusInfoType;
}


export interface StatusInfoType {
  customData?: CustomDataType;

  reasonCode: string;

  additionalInfo?: string;
}


export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}

export type HashAlgorithmEnumType = "SHA256" | "SHA384" | "SHA512";

export type IdTokenEnumType =
  | "Central"
  | "eMAID"
  | "ISO14443"
  | "ISO15693"
  | "KeyCode"
  | "Local"
  | "MacAddress"
  | "NoAuthorization";

export type CertificateSigningUseEnumType = "ChargingStationCertificate" | "V2GCertificate";

export type PhaseEnumType = "L1" | "L2" | "L3" | "N" | "L1-N" | "L2-N" | "L3-N" | "L1-L2" | "L2-L3" | "L3-L1";

export type LocationEnumType = "Body" | "Cable" | "EV" | "Inlet" | "Outlet";

export type MessageFormatEnumType = "ASCII" | "HTML" | "URI" | "UTF8";

export type AuthorizationStatusEnumType =
  | "Accepted"
  | "Blocked"
  | "ConcurrentTx"
  | "Expired"
  | "Invalid"
  | "NoCredit"
  | "NotAllowedTypeEVSE"
  | "NotAtThisLocation"
  | "NotAtThisTime"
  | "Unknown";

export type AttributeEnumType = "Actual" | "Target" | "MinSet" | "MaxSet";

export type MonitorEnumType = "UpperThreshold" | "LowerThreshold" | "Delta" | "Periodic" | "PeriodicClockAligned";

export type GenericStatusEnumType = "Accepted" | "Rejected";

export type GenericDeviceModelStatusEnumType = "Accepted" | "Rejected" | "NotSupported" | "EmptyResultSet";

export type CostKindEnumType = "CarbonDioxideEmission" | "RelativePricePercentage" | "RenewableGenerationPercentage";

export type ChargingRateUnitEnumType = "W" | "A";

export type MessagePriorityEnumType = "AlwaysFront" | "InFront" | "NormalCycle";

export type MessageStateEnumType = "Charging" | "Faulted" | "Idle" | "Unavailable";

export type ReadingContextEnumType =
  | "Interruption.Begin"
  | "Interruption.End"
  | "Other"
  | "Sample.Clock"
  | "Sample.Periodic"
  | "Transaction.Begin"
  | "Transaction.End"
  | "Trigger";

export type MeasurandEnumType =
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
  | "Voltage";

export type RequestStartStopStatusEnumType = "Accepted" | "Rejected";

export type ChargingProfilePurposeEnumType =
  | "ChargingStationExternalConstraints"
  | "ChargingStationMaxProfile"
  | "TxDefaultProfile"
  | "TxProfile";

export type ChargingProfileKindEnumType = "Absolute" | "Recurring" | "Relative";

export type RecurrencyKindEnumType = "Daily" | "Weekly";

export type ChargingLimitSourceEnumType = "EMS" | "Other" | "SO" | "CSO";

export type GetCertificateIdUseEnumType =
  | "V2GRootCertificate"
  | "MORootCertificate"
  | "CSMSRootCertificate"
  | "V2GCertificateChain"
  | "ManufacturerRootCertificate";