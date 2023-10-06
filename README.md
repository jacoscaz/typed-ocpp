
# Typed OCPP

A library for type-aware parsing, serialization and validation of OCPP 1.6-J
messages.

## Usage

This library requires an instance of `Ajv` (or any other validator that is
API-compatible with `Ajv`). See [https://npm.im/ajv](https://npm.im/ajv).

The `parse` function returns a fully-typed "view" of the original object.
No additional transformation is applied beside the eventual parsing via
`JSON.parse` if a string is provided.

```typescript
import Ajv from 'ajv';
import formats from 'ajv-formats';

import type { 
  OCPPMessageType,          // OCPP message type
  OCPPAction,               // OCPP call actions
  OCPPCall,                 // union type of all OCPP call types
  OCPPCallResult,           // union type of all OCPP call result types
  OCPPCallError,            // OCPP call error type
  OCPPUncheckedCallResult,  // unchecked OCPP call result type
  OCPP,                     // parse() and stringify() functions (like JSON but for OCPP)
} from 'typed-ocpp';

// Using OCPP.parse() requires an instance of Ajv with the ajv-formats plugin.
OCPP.setAjv(formats(new Ajv()));

const raw = `[2, 'test', 'BootNotification', {
  chargePointModel: 'model',
  chargePointVendor: 'vendor',
}]`;

const parsed = OCPP.parse(raw);

// If `parse()` does not throw, the resulting object is guaranteed to be a
// valid OCPP 1.6-J message in its original array-based shape.

Array.isArray(parsed);                      // true
parsed[0];                                  // TS gives type "OCPPMessageType"
parsed[0] === OCPPMessageType.CALL;         // true
parsed[2] === OCPPAction.BootNotification;  // true
parsed[6];                                  // TS compilation error

// The array is fully-typed, meaning TS is able to infer the types of its
// elemenets:

if (parsed[0] === OCPPMessageType.CALL) {
  parsed[2];                                  // TS gives type "OCPPAction"          
  if (parsed[2] === OCPPAction.BootNotification) {
    // TS infers the shape of the call payload
    parsed[3].chargePointModel;               // TS gives type "string"
    parsed[3].randomProp;                     // TS compilation error
  }
}

// OCPP call results are first returned as `OCPPUncheckedCallResult` objects
// and must be checked against their respective `OCPPCall` objects for further
// validation and type-awareness.

if (parsed[0] === OCPPMessageType.CALLRESULT) {
  const call = /* get the call somehow */;
  const callresult = OCPP.checkCallResult(parsed, call);
  // if `checkCallResult()` does not throw, the resulting object is guaranteed
  // to be a valid Call Result object that matches the provided Call object.
  if (call[2] === OCPPAction.BootNotification) {
    checked[2].status;                        // TS gives type "Accepted"|"Pending"|"Rejected"
  }
}
```

## JSON Schema(s) 

This library ships with a complete collection of JSON Schema objects, which are
passed to the Ajv validator. Schemas can be directly imported as follows:

```typescript
import { AuthorizeSchema } from 'typed-ocpp/dist/schemas/Authorize.js';
```

## Testing

Requires `node >= 18.17`.

```sh
npm test
```
