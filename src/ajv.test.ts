
import Ajv from 'ajv';
import formats from 'ajv-formats';

import { OCPP } from './index.js';

OCPP.setAjv(formats(new Ajv()));
