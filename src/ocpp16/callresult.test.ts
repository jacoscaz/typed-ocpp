
import { deepStrictEqual } from 'assert';
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

describe('OCPP16 - GetConfiguration CallResult', () => {

  const call: OCPP16.GetConfigurationCall = [
    2,
    "L1314XFhb1CLKvez",
    OCPP16.Action.GetConfiguration,
    { key: ['MeterValuesSampledData'] },
  ];

  it('should validate results with configuration key values above the standard length limit of 500 characters', () => {
    const result: OCPP16.GetConfigurationCallResult = [
      3,
      "L1314XFhb1CLKvez",
      {
        configurationKey: [
          {
            key: 'MeterValuesSampledAdditionalData',
            readonly: false,
            // 720 characters, well above the official 500-characters limit
            // and in line with values observed in the wild.
            value: 'DPM.Current.Import.L1, DPM.Current.Import.L2, '.repeat(16),
          },
        ],
      },
    ];
    deepStrictEqual(OCPP16.checkCallResult(result, call), true);
  });

  it('should not validate results with configuration key values above 2048 characters', () => {
    const result: OCPP16.GetConfigurationCallResult = [
      3,
      "L1314XFhb1CLKvez",
      {
        configurationKey: [
          {
            key: 'MeterValuesSampledAdditionalData',
            readonly: false,
            value: 'a'.repeat(2049),
          },
        ],
      },
    ];
    deepStrictEqual(OCPP16.checkCallResult(result, call), false);
  });

});
