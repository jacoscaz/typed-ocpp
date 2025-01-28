
import { OCPP16 } from '../index.js';
import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';
import { addDays, addHours, addSeconds } from 'date-fns';

describe('OCPP16 - ChargingProfileStore', () => {

  describe('with one charging profile [kind: Absolute, purpose: TxProfile]', () => {

    it('should follow the limit set by matching charging periods', () => {
      const store = new OCPP16.ChargingProfileStore({ lineVoltage: 230, canDischarge: true });
      const now_date = new Date();
      const end_date = addSeconds(now_date, 3600);
      store.addChargingProfile({
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
      const schedule = store.getEvseChargingSchedule(1, now_date, end_date, 'W');
      deepStrictEqual(schedule, [{
        start: now_date,
        end: end_date,
        data: {
          charging: { 
            min: 0, 
            max: 13_000, 
            numberPhases: 3,
          },
          discharging: { 
            min: 0, 
            max: 0, 
            numberPhases: 3,
          },
          canDischarge: true,
          shouldDischarge:false,
          unit: 'W',
        },
      }]);
    });

    it('should follow the limit set by matching discharging periods', () => {
      const store = new OCPP16.ChargingProfileStore({ lineVoltage: 230, canDischarge: true });
      const now_date = new Date();
      const end_date = addSeconds(now_date, 3600);
      store.addChargingProfile({
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
      const schedule = store.getEvseChargingSchedule(1, now_date, end_date, 'W');
      deepStrictEqual(schedule, [{
        start: now_date,
        end: end_date,
        data: {
          charging: { 
            min: 0, 
            max: 0, 
            numberPhases: 3,
          },
          discharging: { 
            min: 0, 
            max: 13_000, 
            numberPhases: 3,
          },
          canDischarge: true,
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
      const store = new OCPP16.ChargingProfileStore({ lineVoltage: 230, canDischarge: true });
      store.addChargingProfile({
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
      const schedule = store.getEvseChargingSchedule(1, now_date, end_date, 'W');
      deepStrictEqual(schedule, [{
        start: start_date,
        end: end_date,
        data: {
          charging: { 
            min: 0, 
            max: 13_000, 
            numberPhases: 3,
          },
          discharging: { 
            min: 0, 
            max: 0, 
            numberPhases: 3,
          },
          canDischarge: true,
          shouldDischarge: false,
          unit: 'W',
        },
      }]);
    });
  });

});