
export type OCPPContext =
  | "Interruption.Begin"
  | "Interruption.End"
  | "Sample.Clock"
  | "Sample.Periodic"
  | "Transaction.Begin"
  | "Transaction.End"
  | "Trigger"
  | "Other";

export type OCPPMeasurand =
  | "Energy.Active.Export.Register"
  | "Energy.Active.Import.Register"
  | "Energy.Reactive.Export.Register"
  | "Energy.Reactive.Import.Register"
  | "Energy.Active.Export.Interval"
  | "Energy.Active.Import.Interval"
  | "Energy.Reactive.Export.Interval"
  | "Energy.Reactive.Import.Interval"
  | "Power.Active.Export"
  | "Power.Active.Import"
  | "Power.Offered"
  | "Power.Reactive.Export"
  | "Power.Reactive.Import"
  | "Power.Factor"
  | "Current.Import"
  | "Current.Export"
  | "Current.Offered"
  | "Voltage"
  | "Frequency"
  | "Temperature"
  | "SoC"
  | "RPM";

export type OCPPPhase = 
  | "L1" | "L2" | "L3" | "N" | "L1-N" | "L2-N" | "L3-N" | "L1-L2" | "L2-L3" 
  | "L3-L1";

export type OCPPLocation = 
  | "Cable" | "EV" | "Inlet" | "Outlet" | "Body";

export type OCPPUnit =
  | "Wh" | "kWh" | "varh" | "kvarh" | "W" | "kW" | "VA" | "kVA" | "var" 
  | "kvar" | "A" | "V" | "K" | "Celcius" | "Celsius" | "Fahrenheit" | "Percent";

export type OCPPFormat = "Raw" | "SignedData";


export interface OCPPSampledValue {
  value: string;
  context?: OCPPContext;
  format?: OCPPFormat;
  measurand?: OCPPMeasurand;
  phase?: OCPPPhase;
  location?: OCPPLocation;
  unit?: OCPPUnit;
  [k: string]: unknown;
}

export interface OCPPMeterValue {
  timestamp: string;
  sampledValue: OCPPSampledValue[];
  [k: string]: unknown;
}

export interface MeterValues {
  connectorId: number;
  transactionId?: number;
  meterValue: OCPPMeterValue[];
}
