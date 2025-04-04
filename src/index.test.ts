
import type { ChargingLimits } from './index.js';

import { OCPP16 } from './index.js';
import { OCPP20 } from './index.js';
import { OCPP21 } from './index.js';

import assert from 'node:assert';
import { describe, it } from 'node:test';

describe('Exports', () => {

  it('The OCPP16 namespace exports the Action, MessageType and ErrorCode enums as both values and types', () => {
    const action: OCPP16.Action = OCPP16.Action.Authorize;
    const error_code: OCPP16.ErrorCode = OCPP16.ErrorCode.GenericError;
    const message_type: OCPP16.MessageType = OCPP16.MessageType.CALL;
  });

  it('The OCPP20 namespace exports the Action, MessageType and ErrorCode enums as both values and types', () => {
    const action: OCPP20.Action = OCPP20.Action.Authorize;
    const error_code: OCPP20.ErrorCode = OCPP20.ErrorCode.GenericError;
    const message_type: OCPP20.MessageType = OCPP20.MessageType.CALL;
  });

  it('The OCPP21 namespace exports the Action, MessageType and ErrorCode enums as both values and types', () => {
    const action: OCPP21.Action = OCPP21.Action.Authorize;
    const error_code: OCPP21.ErrorCode = OCPP21.ErrorCode.GenericError;
    const message_type: OCPP21.MessageType = OCPP21.MessageType.SEND;
  });

  it('The OCPP16 namespace exports the validation functions', () => {
    assert(typeof OCPP16.validate === 'function', 'OCPP16.validate is not a function');
    assert(typeof OCPP16.validateCall === 'function', 'OCPP16.validate is not a function');
    assert(typeof OCPP16.validateCallError === 'function', 'OCPP16.validateCallError is not a function');
    assert(typeof OCPP16.validateCallResult === 'function', 'OCPP16.validateCallResult is not a function');
  });

  it('The OCPP20 namespace exports the validation functions', () => {
    assert(typeof OCPP20.validate === 'function', 'OCPP16.validate is not a function');
    assert(typeof OCPP20.validateCall === 'function', 'OCPP16.validate is not a function');
    assert(typeof OCPP20.validateCallError === 'function', 'OCPP16.validateCallError is not a function');
    assert(typeof OCPP20.validateCallResult === 'function', 'OCPP16.validateCallResult is not a function');
  });

  it('The OCPP21 namespace exports the validation functions', () => {
    assert(typeof OCPP21.validate === 'function', 'OCPP16.validate is not a function');
    assert(typeof OCPP21.validateCall === 'function', 'OCPP16.validate is not a function');
    assert(typeof OCPP21.validateCallError === 'function', 'OCPP16.validateCallError is not a function');
    assert(typeof OCPP21.validateCallResult === 'function', 'OCPP16.validateCallResult is not a function');
  });

  it('The OCPP16 namespace exports schemas', () => {
    assert(typeof OCPP16.schemas === 'object', 'OCPP16.schemas is not an object');    
  });

  it('The OCPP20 namespace exports schemas', () => {
    assert(typeof OCPP20.schemas === 'object', 'OCPP20.schemas is not an object');
  });

  it('The OCPP21 namespace exports schemas', () => {
    assert(typeof OCPP21.schemas === 'object', 'OCPP21.schemas is not an object');
  });

  it('The package exports common types', () => {
    const cl = {} as ChargingLimits;
  });

});
