
import type { ChargingRateUnit, NumberOfPhases, PhaseVoltage } from './utils.js';

export namespace Models {

  export abstract class EnergyExchange {
    abstract ampsToWatts(value: number, numberOfPhases: NumberOfPhases): number;
    abstract wattsToAmps(value: number, numberOfPhases: NumberOfPhases): number;
    convert(value: number, source: ChargingRateUnit, target: ChargingRateUnit, numberOfPhases: NumberOfPhases): number {
      switch (source) {
        case target: return value;
        case 'A': return this.ampsToWatts(value, numberOfPhases);
        case 'W': return this.wattsToAmps(value, numberOfPhases);
        default: throw new Error('should not be here');
      }
    }
  }

  export abstract class ChargingStation extends EnergyExchange {
    abstract ampsToWatts(value: number, numberOfPhases: NumberOfPhases): number;
    abstract wattsToAmps(value: number, numberOfPhases: NumberOfPhases): number;
  }

  export class ACChargingStation extends ChargingStation {
    #phaseVoltage: PhaseVoltage;
    constructor(phaseVoltage: PhaseVoltage) {
      super();
      this.#phaseVoltage = phaseVoltage;
    }
    ampsToWatts(value: number, numberOfPhases: NumberOfPhases): number {
      return value * (this.#phaseVoltage * numberOfPhases);
    }
    wattsToAmps(value: number, numberOfPhases: NumberOfPhases): number {
      return value / (this.#phaseVoltage * numberOfPhases);
    }
  }


  export abstract class ChargingSession extends EnergyExchange {
    abstract ampsToWatts(value: number, numberOfPhases: NumberOfPhases): number;
    abstract wattsToAmps(value: number, numberOfPhases: NumberOfPhases): number;
  }

  export class ACChargingSession extends ChargingSession {
    #phaseVoltage: PhaseVoltage;
    constructor(phaseVoltage: PhaseVoltage) {
      super();
      this.#phaseVoltage = phaseVoltage;
    }
    ampsToWatts(value: number, numberOfPhases: NumberOfPhases): number {
      return value * (this.#phaseVoltage * numberOfPhases);
    }
    wattsToAmps(value: number, numberOfPhases: NumberOfPhases): number {
      return value / (this.#phaseVoltage * numberOfPhases);
    }
  }

  export class DCChargingSession extends ChargingSession {
    #batteryVoltage: number;
    constructor(batteryVoltage: number) {
      super();
      this.#batteryVoltage = batteryVoltage;
    }
    ampsToWatts(value: number): number {
      return value * this.#batteryVoltage;
    }
    wattsToAmps(value: number): number {
      return value / this.#batteryVoltage;
    }
  }
}
