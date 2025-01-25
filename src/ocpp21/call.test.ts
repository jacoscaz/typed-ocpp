
import { OCPP21 } from './index.js';
import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';

const { MessageType, Action, validate } = OCPP21;

describe('OCPP21 - Call', () => {

  describe('types', () => {

    it('minimal notification', () => {
      [MessageType.CALL, 'test', Action.BootNotification, {
        chargingStation: {
          model: 'test',
          vendorName: 'test',
        },
        reason: 'PowerUp',
      }] satisfies OCPP21.BootNotificationCall;
    });

  });

  describe('validation', () => {
    
    it('minimal notification', () => {
      deepStrictEqual(validate([MessageType.CALL, 'test', Action.BootNotification, {
        chargingStation: {
          model: 'test',
          vendorName: 'test',
        },
        reason: 'PowerUp',
      }]), true);
      deepStrictEqual(validate.errors, []);
    });

    it('invalid notification (missing model)', () => {
      deepStrictEqual(validate([MessageType.CALL, 'test', Action.BootNotification, {
        chargingStation: {
          vendorName: 'test',
        },
        reason: 'PowerUp',
      }]), false);
      deepStrictEqual(validate.errors, [
        "Invalid OCPP call: /chargingStation must have required property 'model'"
      ]);
    });

  });

});
