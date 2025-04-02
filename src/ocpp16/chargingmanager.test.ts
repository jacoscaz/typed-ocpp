
import type { ChargingLimits } from '../common/utils.js';

import { OCPP16, Models } from '../index.js';
import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';
import { addHours, addSeconds } from 'date-fns';

describe('OCPP16 - ChargingScheduleManager', () => {

  describe('with one charging profile [kind: Absolute, purpose: TxProfile]', () => {

    it('should follow the limit set by matching charging periods', () => {
      const defaults: ChargingLimits = { shouldDischarge: false, charging: {max: 10_000, min: 1300, phases: { qty: 3 } }, discharging: {max: 0, min: 0, phases: { qty: 3}}, unit: 'W' };
      const store = new OCPP16.ChargingManager(defaults);
      const now_date = new Date();
      const end_date = addSeconds(now_date, 3600);
      store.setChargingProfile({
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
      const schedule = store.getConnectorSchedule(now_date, end_date, 1, 'W', new Models.ACChargingSession(230));
      deepStrictEqual(schedule, [{
        start: now_date,
        end: end_date,
        data: {
          charging: { 
            min: 0, 
            max: 13_000, 
            phases: { qty: 3 },
          },
          discharging: { 
            min: 0, 
            max: 0, 
            phases: { qty: 3 },
          },
          shouldDischarge:false,
          unit: 'W',
        },
      }]);
    });

    it('should follow the limit set by charging periods with start dates prior to the requested schedule\'s start date', () => {
      const defaults: ChargingLimits = { shouldDischarge: false, charging: {max: 10_000, min: 1300, phases: { qty: 3 } }, discharging: {max: 0, min: 0, phases: { qty: 3}}, unit: 'W' };
      const store = new OCPP16.ChargingManager(defaults);
      const now_date = new Date();
      const end_date = addSeconds(now_date, 3600);
      store.setChargingProfile({
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
      const start_schedule_date = new Date(now_date.valueOf() + 300_000);
      const schedule = store.getConnectorSchedule(start_schedule_date, end_date, 1, 'W', new Models.ACChargingSession(230));
      deepStrictEqual(schedule, [{
        start: start_schedule_date,
        end: end_date,
        data: {
          charging: { 
            min: 0, 
            max: 13_000, 
            phases: { qty: 3 },
          },
          discharging: { 
            min: 0, 
            max: 0, 
            phases: { qty: 3 },
          },
          shouldDischarge:false,
          unit: 'W',
        },
      }]);
    });

    it('should follow the limit set by matching discharging periods', () => {
      const defaults: ChargingLimits = { shouldDischarge: false, charging: {max: 10_000, min: 1300, phases: { qty: 3 } }, discharging: {max: 0, min: 0, phases: { qty: 3}}, unit: 'W' };
      const store = new OCPP16.ChargingManager(defaults);
      const now_date = new Date();
      const end_date = addSeconds(now_date, 3600);
      store.setChargingProfile({
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
                limit: -13_000,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      const schedule = store.getConnectorSchedule(now_date, end_date, 1, 'W', new Models.ACChargingSession(230));
      deepStrictEqual(schedule, [{
        start: now_date,
        end: end_date,
        data: {
          charging: { 
            min: 0, 
            max: 0, 
            phases: { qty: 3 },
          },
          discharging: { 
            min: 0, 
            max: 13_000, 
            phases: { qty: 3 },
          },
          shouldDischarge: true,
          unit: 'W',
        },
      }]);
    });

  });

  describe('with one charging profile [kind: Recurring(Daily), purpose: TxDefaultProfile]', () => {

    it('should follow the limit set by matching recurring periods', () => {
      const now_date = new Date();
      const start_date = new Date(now_date.valueOf() - 1);
      const end_date = addHours(start_date, 4);
      const defaults: ChargingLimits = { shouldDischarge: false, charging: {max: 10_000, min: 1300, phases: { qty: 3 } }, discharging: {max: 0, min: 0, phases: { qty: 3}}, unit: 'W' };
      const store = new OCPP16.ChargingManager(defaults);
      store.setChargingProfile({
        connectorId: 1,
        csChargingProfiles: {
          chargingProfileId: 0,
          chargingProfileKind: 'Recurring',
          chargingProfilePurpose: 'TxDefaultProfile',
          recurrencyKind: 'Daily',
          chargingSchedule: {
            duration: 4 * 3_600,
            startSchedule: start_date.toISOString(),
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
      const schedule = store.getConnectorSchedule(now_date, end_date, 1, 'W', new Models.ACChargingSession(230));
      deepStrictEqual(schedule, [{
        start: start_date,
        end: end_date,
        data: {
          charging: { 
            min: 0, 
            max: 13_000, 
            phases: { qty: 3 },
          },
          discharging: { 
            min: 0, 
            max: 0, 
            phases: { qty: 3 },
          },
          shouldDischarge: false,
          unit: 'W',
        },
      }]);
    });
  });

  describe('with two charging profiles [kind: Recurring(Daily), purpose: TxDefaultProfile] and [kind: Absolute, purpose: TxProfile]', () => {

    it('should follow the limit set by overlapping periods', () => {
      const now_date = new Date();
      const start_date = new Date(now_date.valueOf() - 1);
      const end_date = addHours(start_date, 4);
      const defaults: ChargingLimits = { shouldDischarge: false, charging: {max: 10_000, min: 1300, phases: { qty: 3 } }, discharging: {max: 0, min: 0, phases: { qty: 3}}, unit: 'W' };
      const store = new OCPP16.ChargingManager(defaults);
      store.setChargingProfile({
        connectorId: 0,
        csChargingProfiles: {
          chargingProfileId: 0,
          chargingProfileKind: 'Recurring',
          chargingProfilePurpose: 'TxDefaultProfile',
          recurrencyKind: 'Daily',
          chargingSchedule: {
            duration: 4 * 3_600,
            startSchedule: start_date.toISOString(),
            chargingRateUnit: 'W',
            chargingSchedulePeriod: [
              {
                startPeriod: 0,
                limit: 13_000,
              },
              {
                startPeriod: 3 * 3_600,
                limit: 13_000,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      store.setChargingProfile({
        connectorId: 1,
        csChargingProfiles: {
          chargingProfileId: 0,
          chargingProfileKind: 'Absolute',
          chargingProfilePurpose: 'TxProfile',
          chargingSchedule: {
            duration: 2 * 3_600,
            startSchedule: start_date.toISOString(),
            chargingRateUnit: 'W',
            chargingSchedulePeriod: [
              {
                startPeriod: 0,
                limit: 7_000,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      const schedule = store.getConnectorSchedule(now_date, end_date, 1, 'W', new Models.ACChargingSession(230));
      deepStrictEqual(schedule,  [
        {
          start: start_date,
          end: addHours(start_date, 2),
          data: {
            charging: {
              min: 0,
              max: 7000,
              phases: { qty: 3 },
            },
            discharging: {
              min: 0,
              max: 0,
              phases: { qty: 3 },
            },
            shouldDischarge: false,
            unit: "W",
          }
        },
        {
          start: addHours(start_date, 2),
          end: addHours(start_date, 3),
          data: {
            charging: {
              min: 0,
              max: 13000,
              phases: { qty: 3 },
            },
            discharging: {
              min: 0,
              max: 0,
              phases: { qty: 3 },
            },
            shouldDischarge: false,
            unit: "W",
          }
        },
        {
          start: addHours(start_date, 3),
          end: addHours(start_date, 4),
          data: {
            charging: {
              min: 0,
              max: 13000,
              phases: { qty: 3 },
            },
            discharging: {
              min: 0,
              max: 0,
              phases: { qty: 3 },
            },
            shouldDischarge: false,
            unit: "W",
          }
        }
      ]);
    });

    it('should follow the limit set by overlapping periods with different charging rate units', () => {
      const now_date = new Date();
      const start_date = new Date(now_date.valueOf() - 1);
      const end_date = addHours(start_date, 4);
      const defaults: ChargingLimits = { shouldDischarge: false, charging: {max: 10_000, min: 1300, phases: { qty: 3 } }, discharging: {max: 0, min: 0, phases: { qty: 3}}, unit: 'W' };
      const store = new OCPP16.ChargingManager(defaults);
      store.setChargingProfile({
        connectorId: 0,
        csChargingProfiles: {
          chargingProfileId: 0,
          chargingProfileKind: 'Recurring',
          chargingProfilePurpose: 'TxDefaultProfile',
          recurrencyKind: 'Daily',
          chargingSchedule: {
            duration: 4 * 3_600,
            startSchedule: start_date.toISOString(),
            chargingRateUnit: 'W',
            chargingSchedulePeriod: [
              {
                startPeriod: 0,
                limit: 13_000,
              },
              {
                startPeriod: 3 * 3_600,
                limit: 13_000,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      store.setChargingProfile({
        connectorId: 1,
        csChargingProfiles: {
          chargingProfileId: 0,
          chargingProfileKind: 'Absolute',
          chargingProfilePurpose: 'TxProfile',
          chargingSchedule: {
            duration: 2 * 3_600,
            startSchedule: start_date.toISOString(),
            chargingRateUnit: 'A',
            chargingSchedulePeriod: [
              {
                startPeriod: 0,
                limit: 17.5,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      const schedule = store.getConnectorSchedule(now_date, end_date, 1, 'W', new Models.DCChargingSession(400));
      deepStrictEqual(schedule,  [
        {
          start: start_date,
          end: addHours(start_date, 2),
          data: {
            charging: {
              min: 0,
              max: 7000,
              phases: { qty: 3 },
            },
            discharging: {
              min: 0,
              max: 0,
              phases: { qty: 3 },
            },
            shouldDischarge: false,
            unit: "W",
          }
        },
        {
          start: addHours(start_date, 2),
          end: addHours(start_date, 3),
          data: {
            charging: {
              min: 0,
              max: 13000,
              phases: { qty: 3 },
            },
            discharging: {
              min: 0,
              max: 0,
              phases: { qty: 3 },
            },
            shouldDischarge: false,
            unit: "W",
          }
        },
        {
          start: addHours(start_date, 3),
          end: addHours(start_date, 4),
          data: {
            charging: {
              min: 0,
              max: 13000,
              phases: { qty: 3 },
            },
            discharging: {
              min: 0,
              max: 0,
              phases: { qty: 3 },
            },
            shouldDischarge: false,
            unit: "W",
          }
        }
      ]);
    });
  });

});