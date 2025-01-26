
import { OCPP16 } from '../../index.js';
import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';

describe('OCPP16 - ChargingProfileStore', () => {

  describe('with one charging profile [kind: Absolute, purpose: TxProfile]', () => {

    it('should follow the limit set by matching charging periods', () => {
      const store = new OCPP16.ChargingProfileStore({ lineVoltage: 230});
      const now_date = new Date();
      store.addProfile({
        connectorId: 1,
        csChargingProfiles: {
          chargingProfileId: 0,
          chargingProfileKind: 'Absolute',
          chargingProfilePurpose: 'TxProfile',
          chargingSchedule: {
            chargingRateUnit: 'W',
            chargingSchedulePeriod: [
              {
                startPeriod: 0,
                limit: 13_000,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      const schedule = store.getChargingSchedule(1, now_date, 3600, 'W', 230);
      // deepStrictEqual(limits, {
      //   charging: { min: 0, max: 13_000 },
      //   discharging: { min: 0, max: 0 },
      //   shouldDischarge: false,
      // });
      console.log('\n\n\nschedule\n\n', JSON.stringify(schedule), '\n\n');
    });

  });

  //   it('should follow the limit set by matching discharging periods', () => {
  //     const store = new OCPP16.ChargingProfileStore(230, false);
  //     const now_date = new Date();
  //     store.addProfile({
  //       connectorId: 1,
  //       csChargingProfiles: {
  //         chargingProfileId: 0,
  //         chargingProfileKind: 'Absolute',
  //         chargingProfilePurpose: 'TxProfile',
  //         chargingSchedule: {
  //           chargingRateUnit: 'W',
  //           chargingSchedulePeriod: [
  //             {
  //               startPeriod: 0,
  //               limit: -13_000,
  //             }
  //           ],
  //         },
  //         stackLevel: 0,
  //       },
  //     });
  //     const limits = store.getConnectorInstantChargingLimits(1, now_date, {
  //       transaction: {
  //         id: 1337,
  //         startDate: new Date(now_date.valueOf() - 3_600_000),
  //       },
  //       unit: 'W',
  //       connectorId: 1,
  //       gridVoltage: 230,
  //       canDischarge: true,
  //     });
  //     deepStrictEqual(limits, {
  //       charging: { min: 0, max: Infinity },
  //       discharging: { min: 0, max: 13_000 },
  //       shouldDischarge: true,
  //     });
  //   });

  //   it('should follow the limit set by matching charging periods preceded by other periods', () => {
  //     const now_date = new Date();
  //     const store = new OCPP16.ChargingProfileStore(230, false);
  //     store.addProfile({
  //       connectorId: 1,
  //       csChargingProfiles: {
  //         chargingProfileId: 0,
  //         chargingProfileKind: 'Absolute',
  //         chargingProfilePurpose: 'TxProfile',
  //         chargingSchedule: {
  //           chargingRateUnit: 'W',
  //           chargingSchedulePeriod: [
  //             {
  //               startPeriod: 0,
  //               limit: 11_000,
  //             },
  //             {
  //               startPeriod: 1_800,
  //               limit: 13_000,
  //             }
  //           ],
  //         },
  //         stackLevel: 0,
  //       },
  //     });
  //     const limits = store.getConnectorInstantChargingLimits(1, now_date, {
  //       referenceDate: now_date,
  //       transaction: {
  //         id: 1337,
  //         startDate: new Date(now_date.valueOf() - 3_600_000),
  //       },
  //       unit: 'W',
  //       connectorId: 1,
  //       gridVoltage: 230,
  //     });
  //     deepStrictEqual(limits, {
  //       charging: { min: 0, max: 13_000 },
  //       discharging: { min: 0, max: 0 },
  //       shouldDischarge: false,
  //     });
  //   });

  //   it('should follow the limit set by matching charging periods followed by other periods', () => {
  //     const now_date = new Date();
  //     const store = new OCPP16.ChargingProfileStore(230, false);
  //     store.addProfile({
  //       connectorId: 1,
  //       csChargingProfiles: {
  //         chargingProfileId: 0,
  //         chargingProfileKind: 'Absolute',
  //         chargingProfilePurpose: 'TxProfile',
  //         chargingSchedule: {
  //           chargingRateUnit: 'W',
  //           chargingSchedulePeriod: [
  //             {
  //               startPeriod: 0,
  //               limit: 11_000,
  //             },
  //             {
  //               startPeriod: 3_600,
  //               limit: 13_000,
  //             }
  //           ],
  //         },
  //         stackLevel: 0,
  //       },
  //     });
  //     const limits = store.getConnectorInstantChargingLimits(1, now_date, {
  //       referenceDate: now_date,
  //       transaction: {
  //         id: 1337,
  //         startDate: new Date(now_date.valueOf() - 1_800_000),
  //       },
  //       unit: 'W',
  //       connectorId: 1,
  //       gridVoltage: 230,
  //     });
  //     deepStrictEqual(limits, {
  //       charging: { min: 0, max: 11_000 },
  //       discharging: { min: 0, max: 0 },
  //       shouldDischarge: false,
  //     });
  //   });

  //   it('should follow the limit set by matching charging periods preceded and followed by other periods', () => {
  //     const now_date = new Date();
  //     const store = new OCPP16.ChargingProfileStore(230, false);
  //     store.addProfile({
  //       connectorId: 1,
  //       csChargingProfiles: {
  //         chargingProfileId: 0,
  //         chargingProfileKind: 'Absolute',
  //         chargingProfilePurpose: 'TxProfile',
  //         chargingSchedule: {
  //           chargingRateUnit: 'W',
  //           chargingSchedulePeriod: [
  //             {
  //               startPeriod: 0,
  //               limit: 11_000,
  //             },
  //             {
  //               startPeriod: 1_800,
  //               limit: 13_000,
  //             },
  //             {
  //               startPeriod: 3_600,
  //               limit: 15_000,
  //             }
  //           ],
  //         },
  //         stackLevel: 0,
  //       },
  //     });
  //     const limits = store.getConnectorInstantChargingLimits(1, now_date, {
  //       referenceDate: now_date,
  //       transaction: {
  //         id: 1337,
  //         startDate: new Date(now_date.valueOf() - 1_800_000),
  //       },
  //       unit: 'W',
  //       connectorId: 1,
  //       gridVoltage: 230,
  //     });
  //     deepStrictEqual(limits, {
  //       charging: { min: 0, max: 13_000 },
  //       discharging: { min: 0, max: 0 },
  //       shouldDischarge: false,
  //     });
  //   });

  // });

  // describe('with one charging profile [kind: Recurring(Daily), purpose: TxDefaultProfile]', () => {

  //   it('should follow the limit set by matching recurring periods', () => {
  //     const now_date = new Date();
  //     const store = new OCPP16.ChargingProfileStore({ lineVoltage: 230, canDischarge: false, chargingRateLimits: { unit: 'W', charging: { min: 0, max: Infinity }, discharging: { min: 0, max: Infinity }} });
  //     store.addProfile({
  //       connectorId: 1,
  //       csChargingProfiles: {
  //         chargingProfileId: 0,
  //         chargingProfileKind: 'Recurring',
  //         chargingProfilePurpose: 'TxDefaultProfile',
  //         recurrencyKind: 'Daily',
  //         chargingSchedule: {
  //           duration: 4 * 3_600,
  //           startSchedule: new Date(now_date.valueOf() - 1).toISOString(),
  //           chargingRateUnit: 'W',
  //           chargingSchedulePeriod: [
  //             {
  //               startPeriod: 0,
  //               limit: 13000,
  //             }
  //           ],
  //         },
  //         stackLevel: 0,
  //       },
  //     });
  //     const limits = store.getConnectorInstantChargingLimits(1, now_date, 'W');
  //     deepStrictEqual(limits, {
  //       min: 0, 
  //       max: 13_000,
  //       discharge: false,
  //       unit: 'W',
  //       numberPhases: 3,
  //     });
  //   });
  // });

});