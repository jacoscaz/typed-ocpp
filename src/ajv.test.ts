
import Ajv from 'ajv';
import formats from 'ajv-formats';

import { setAjv } from './ajv.js';

setAjv(formats(new Ajv()));
