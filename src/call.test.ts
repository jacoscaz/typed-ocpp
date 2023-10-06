
import { describe, it } from 'node:test';

import { OCPPMessageType, OCPPAction } from './utils.js';
import { parseCall, OCPPBootNotificationCall  } from './call.js';

import './ajv.test.js';

describe('BootNotification', () => {

  it('type - minimal notification', () => {
    [OCPPMessageType.CALL, 'test', OCPPAction.BootNotification, {
      chargePointModel: 'test',
      chargePointVendor: 'test',
    }] satisfies OCPPBootNotificationCall;
  });

  it('parsing - minimal notification', () => {
    parseCall([OCPPMessageType.CALL, 'test', OCPPAction.BootNotification, {
      chargePointModel: 'test',
      chargePointVendor: '55',
    }]);
  });

});
