
import { OCPP16 } from './index.js';
import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';

describe('OCPP16 - ChargingProfileStore', () => {

  describe('without charging profiles', () => {

    it('return default limits if no profile is added and none of the respective params are passed', () => {
      const store = new OCPP16.ChargingProfileStore();
      const limits = store.getChargingLimits({
        unit: 'W',
        connectorId: 0,
        gridVoltage: 230,
      });
      deepStrictEqual(limits, { 
        charging: { min: 0, max: Infinity },
        discharging: { min: 0, max: 0 },
        shouldDischarge: false,
      });
    });

    it('return default limits with minimum charging value set if respective optional params are passed', () => {
      const store = new OCPP16.ChargingProfileStore();
      const limits = store.getChargingLimits({
        unit: 'W',
        connectorId: 0,
        gridVoltage: 230,
        minChargingValue: 10,
        minDischargingValue: 10,
      });
      deepStrictEqual(limits, { 
        charging: { min: 10, max: Infinity },
        discharging: { min: 0, max: 0 },
        shouldDischarge: false,
      });
    });

    it('return default limits with minimum charging and discharging values set if respective optional params are passed', () => {
      const store = new OCPP16.ChargingProfileStore();
      const limits = store.getChargingLimits({
        unit: 'W',
        connectorId: 0,
        gridVoltage: 230,
        minChargingValue: 10,
        minDischargingValue: 10,
        canDischarge: true,
      });
      deepStrictEqual(limits, { 
        charging: { min: 10, max: Infinity },
        discharging: { min: 10, max: Infinity },
        shouldDischarge: false,
      });
    });

  });

  describe('with one charging profile [kind: Absolute, purpose: TxProfile]', () => {

    it('should follow the limit set by matching charging periods', () => {
      const store = new OCPP16.ChargingProfileStore();
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
      const limits = store.getChargingLimits({
        transaction: {
          id: 1337,
          startDate: new Date(now_date.valueOf() - 3_600_000),
        },
        unit: 'W',
        connectorId: 1,
        gridVoltage: 230,
      });
      deepStrictEqual(limits, {
        charging: { min: 0, max: 13_000 },
        discharging: { min: 0, max: 0 },
        shouldDischarge: false,
      });
    });

    it('should follow the limit set by matching discharging periods', () => {
      const store = new OCPP16.ChargingProfileStore();
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
                limit: -13_000,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      const limits = store.getChargingLimits({
        transaction: {
          id: 1337,
          startDate: new Date(now_date.valueOf() - 3_600_000),
        },
        unit: 'W',
        connectorId: 1,
        gridVoltage: 230,
        canDischarge: true,
      });
      deepStrictEqual(limits, {
        charging: { min: 0, max: Infinity },
        discharging: { min: 0, max: 13_000 },
        shouldDischarge: true,
      });
    });

    it('should follow the limit set by matching charging periods preceded by other periods', () => {
      const now_date = new Date();
      const store = new OCPP16.ChargingProfileStore();
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
                limit: 11_000,
              },
              {
                startPeriod: 1_800,
                limit: 13_000,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      const limits = store.getChargingLimits({
        referenceDate: now_date,
        transaction: {
          id: 1337,
          startDate: new Date(now_date.valueOf() - 3_600_000),
        },
        unit: 'W',
        connectorId: 1,
        gridVoltage: 230,
      });
      deepStrictEqual(limits, {
        charging: { min: 0, max: 13_000 },
        discharging: { min: 0, max: 0 },
        shouldDischarge: false,
      });
    });

    it('should follow the limit set by matching charging periods followed by other periods', () => {
      const now_date = new Date();
      const store = new OCPP16.ChargingProfileStore();
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
                limit: 11_000,
              },
              {
                startPeriod: 3_600,
                limit: 13_000,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      const limits = store.getChargingLimits({
        referenceDate: now_date,
        transaction: {
          id: 1337,
          startDate: new Date(now_date.valueOf() - 1_800_000),
        },
        unit: 'W',
        connectorId: 1,
        gridVoltage: 230,
      });
      deepStrictEqual(limits, {
        charging: { min: 0, max: 11_000 },
        discharging: { min: 0, max: 0 },
        shouldDischarge: false,
      });
    });

    it('should follow the limit set by matching charging periods preceded and followed by other periods', () => {
      const now_date = new Date();
      const store = new OCPP16.ChargingProfileStore();
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
                limit: 11_000,
              },
              {
                startPeriod: 1_800,
                limit: 13_000,
              },
              {
                startPeriod: 3_600,
                limit: 15_000,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      const limits = store.getChargingLimits({
        referenceDate: now_date,
        transaction: {
          id: 1337,
          startDate: new Date(now_date.valueOf() - 1_800_000),
        },
        unit: 'W',
        connectorId: 1,
        gridVoltage: 230,
      });
      deepStrictEqual(limits, {
        charging: { min: 0, max: 13_000 },
        discharging: { min: 0, max: 0 },
        shouldDischarge: false,
      });
    });

  });

  describe('with one charging profile [kind: Recurring(Daily), purpose: TxDefaultProfile]', () => {

    it('should follow the limit set by matching recurring periods', () => {
      const now_date = new Date();
      const store = new OCPP16.ChargingProfileStore();
      store.addProfile({
        connectorId: 1,
        csChargingProfiles: {
          chargingProfileId: 0,
          chargingProfileKind: 'Recurring',
          chargingProfilePurpose: 'TxDefaultProfile',
          recurrencyKind: 'Daily',
          chargingSchedule: {
            duration: 4 * 3_600,
            startSchedule: new Date(now_date.valueOf() - 1).toISOString(),
            chargingRateUnit: 'W',
            chargingSchedulePeriod: [
              {
                startPeriod: 0,
                limit: 13000,
              }
            ],
          },
          stackLevel: 0,
        },
      });
      const limits = store.getChargingLimits({
        referenceDate: now_date,
        transaction: {
          id: 1337,
          startDate: new Date(now_date.valueOf() - 3_600_000),
        },
        unit: 'W',
        connectorId: 1,
        gridVoltage: 230,
      });
      deepStrictEqual(limits, {
        charging: { min: 0, max: 13_000 },
        discharging: { min: 0, max: 0 },
        shouldDischarge: false,
      });
    });
  });

});