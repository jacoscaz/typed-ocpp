
import { OCPP16 } from './index.js';
import { describe, it } from 'node:test';

import '../common/ajv.test.js';

const { MessageType, Action, parse } = OCPP16;

describe('OCPP16 - BootNotification', () => {

  it('type - minimal notification', () => {
    [MessageType.CALL, 'test', Action.BootNotification, {
      chargePointModel: 'test',
      chargePointVendor: 'test',
    }] satisfies OCPP16.BootNotificationCall;
  });

  it('parsing - minimal notification', () => {
    parse([MessageType.CALL, 'test', Action.BootNotification, {
      chargePointModel: 'test',
      chargePointVendor: '55',
    }]);
  });

});
