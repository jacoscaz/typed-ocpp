
export type Context =
  | "Interruption.Begin"
  | "Interruption.End"
  | "Sample.Clock"
  | "Sample.Periodic"
  | "Transaction.Begin"
  | "Transaction.End"
  | "Trigger"
  | "Other";

export type Measurand =
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

export type Phase = 
  | "L1" | "L2" | "L3" | "N" | "L1-N" | "L2-N" | "L3-N" | "L1-L2" | "L2-L3" 
  | "L3-L1";

export type Location = 
  | "Cable" | "EV" | "Inlet" | "Outlet" | "Body";

export type Unit =
  | "Wh" | "kWh" | "varh" | "kvarh" | "W" | "kW" | "VA" | "kVA" | "var" 
  | "kvar" | "A" | "V" | "K" | "Celcius" | "Celsius" | "Fahrenheit" | "Percent";

export type Format = "Raw" | "SignedData";


export interface SampledValue {
  value: string;
  context?: Context;
  format?: Format;
  measurand?: Measurand;
  phase?: Phase;
  location?: Location;
  unit?: Unit;
  [k: string]: unknown;
}

export interface MeterValue {
  timestamp: string;
  sampledValue: SampledValue[];
  [k: string]: unknown;
}

export interface MeterValues {
  connectorId: number;
  transactionId?: number;
  meterValue: MeterValue[];
}
