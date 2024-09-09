
import { OCPP16 } from './index.js';
import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';

const { MessageType, Action, validate } = OCPP16;

describe('OCPP16 - Call', () => {

  describe('types', () => {

    it('minimal notification', () => {
      [MessageType.CALL, 'test', Action.BootNotification, {
        chargePointModel: 'test',
        chargePointVendor: 'test',
      }] satisfies OCPP16.BootNotificationCall;
    });

  });


  describe('validation', () => {
  
    it('minimal notification', () => {
      deepStrictEqual(validate([MessageType.CALL, 'test', Action.BootNotification, {
        chargePointModel: 'test',
        chargePointVendor: '55',
      }]), true);
      deepStrictEqual(validate.errors, []);
    });

    it('invalid notification (missing model)', () => {
      deepStrictEqual(validate([MessageType.CALL, 'test', Action.BootNotification, {
        chargePointVendor: '55',
      }]), false);
      deepStrictEqual(validate.errors, [
        "Invalid OCPP call:  must have required property 'chargePointModel'"
      ]);
    });

});

});
