
import { OCPP } from './index.js';
import { describe, it } from 'node:test';

import './ajv.test.js';

const { MessageType, Action, parseCall } = OCPP;

describe('BootNotification', () => {

  it('type - minimal notification', () => {
    [MessageType.CALL, 'test', Action.BootNotification, {
      chargePointModel: 'test',
      chargePointVendor: 'test',
    }] satisfies OCPP.BootNotificationCall;
  });

  it('parsing - minimal notification', () => {
    parseCall([MessageType.CALL, 'test', Action.BootNotification, {
      chargePointModel: 'test',
      chargePointVendor: '55',
    }]);
  });

});
