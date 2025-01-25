
import { OCPP21 } from './index.js';
import { describe, it } from 'node:test';

describe('OCPP21 - CheckedCallResult', () => {

  describe('types', () => {

    it('CheckedCallResult<AuthorizeCall> extends AuthorizeCallResult', () => {
      const t: OCPP21.CheckedCallResult<OCPP21.AuthorizeCall> extends OCPP21.AuthorizeCallResult ? true : false = true;
    });

    it('AuthorizeCallResult extends CheckedCallResult<AuthorizeCall>', () => {
      const t: OCPP21.AuthorizeCallResult extends OCPP21.CheckedCallResult<OCPP21.AuthorizeCall> ? true : false = true;
    });

    it('CheckedCallResult<BootNotificationCall> does not extend AuthorizeCallResult', () => {
      const t: OCPP21.CheckedCallResult<OCPP21.BootNotificationCall> extends OCPP21.AuthorizeCallResult ? true : false = false;
    });

    it('AuthorizeCallResult does not extend CheckedCallResult<BootNotificationCall>', () => {
      const t: OCPP21.AuthorizeCallResult extends OCPP21.CheckedCallResult<OCPP21.BootNotificationCall> ? true : false = false;
    });

  });

});
