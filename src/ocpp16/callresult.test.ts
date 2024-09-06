
import { OCPP16 } from './index.js';
import { describe, it } from 'node:test';

describe('OCPP16 - CheckedCallResult', () => {

  it('CheckedCallResult<AuthorizeCall> extends AuthorizeCallResult', () => {
    const t: OCPP16.CheckedCallResult<OCPP16.AuthorizeCall> extends OCPP16.AuthorizeCallResult ? true : false = true;
  });

  it('AuthorizeCallResult extends CheckedCallResult<AuthorizeCall>', () => {
    const t: OCPP16.AuthorizeCallResult extends OCPP16.CheckedCallResult<OCPP16.AuthorizeCall> ? true : false = true;
  });

  it('CheckedCallResult<BootNotificationCall> does not extend AuthorizeCallResult', () => {
    const t: OCPP16.CheckedCallResult<OCPP16.BootNotificationCall> extends OCPP16.AuthorizeCallResult ? true : false = false;
  });

  it('AuthorizeCallResult does not extend CheckedCallResult<BootNotificationCall>', () => {
    const t: OCPP16.AuthorizeCallResult extends OCPP16.CheckedCallResult<OCPP16.BootNotificationCall> ? true : false = false;
  });

});
