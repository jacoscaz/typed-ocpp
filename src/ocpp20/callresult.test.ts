
import { OCPP20 } from './index.js';
import { describe, it } from 'node:test';

describe('OCPP20 - CheckedCallResult', () => {

  describe('types', () => {

    it('CheckedCallResult<AuthorizeCall> extends AuthorizeCallResult', () => {
      const t: OCPP20.CheckedCallResult<OCPP20.AuthorizeCall> extends OCPP20.AuthorizeCallResult ? true : false = true;
    });

    it('AuthorizeCallResult extends CheckedCallResult<AuthorizeCall>', () => {
      const t: OCPP20.AuthorizeCallResult extends OCPP20.CheckedCallResult<OCPP20.AuthorizeCall> ? true : false = true;
    });

    it('CheckedCallResult<BootNotificationCall> does not extend AuthorizeCallResult', () => {
      const t: OCPP20.CheckedCallResult<OCPP20.BootNotificationCall> extends OCPP20.AuthorizeCallResult ? true : false = false;
    });

    it('AuthorizeCallResult does not extend CheckedCallResult<BootNotificationCall>', () => {
      const t: OCPP20.AuthorizeCallResult extends OCPP20.CheckedCallResult<OCPP20.BootNotificationCall> ? true : false = false;
    });

  });

});
