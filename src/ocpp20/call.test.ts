
import { OCPP20 } from './index.js';
import { describe, it } from 'node:test';

import './ajv.test.js';

const { MessageType, Action, parse } = OCPP20;

describe('BootNotification', () => {

  it('type - minimal notification', () => {
    [MessageType.CALL, 'test', Action.BootNotification, {
      chargingStation: {
        model: 'test',
        vendorName: 'test',
      },
      reason: 'PowerUp',
    }] satisfies OCPP20.BootNotificationCall;
  });

  it('parsing - minimal notification', () => {
    parse([MessageType.CALL, 'test', Action.BootNotification, {
      chargePointModel: 'test',
      chargePointVendor: '55',
    }]);
  });

});
