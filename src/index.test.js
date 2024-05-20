
import { OCPP16 } from './index.js';
import { OCPP20 } from './index.js';

import assert from 'node:assert';
import { describe, it } from 'node:test';

import './ajv.test.js';

describe('schemas', () => {

  it('The OCPP16 namespace exports schemas', () => {
    assert(typeof OCPP16.schemas === 'object', 'OCPP16.schemas is not an object');    
  });

  it('The OCPP20 namespace exports schemas', () => {
    assert(typeof OCPP20.schemas === 'object', 'OCPP20.schemas is not an object');
  });

});