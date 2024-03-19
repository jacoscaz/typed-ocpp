
import { OCPP } from './index.js';
import { describe, it } from 'node:test';

import './ajv.test.js';

const { MessageType, Action, parse } = OCPP;

describe('BootNotification', () => {

  it('type - minimal notification', () => {
    [MessageType.CALL, 'test', Action.BootNotification, {
      chargePointModel: 'test',
      chargePointVendor: 'test',
    }] satisfies OCPP.BootNotificationCall;
  });

  it('parsing - minimal notification', () => {
    parse([MessageType.CALL, 'test', Action.BootNotification, {
      chargePointModel: 'test',
      chargePointVendor: '55',
    }]);
  });

});
