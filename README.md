
# Typed OCPP

A library for type-aware parsing, serialization and validation of OCPP 1.6-J
messages.

## Usage

### `OCPP.setAjv()`

This library requires an instance of `Ajv` with support for string formats,
as provided by the `ajv-formats` plugin. See [https://npm.im/ajv][a1] and 
[https://npm.im/ajv-formats][a2].

```typescript
import Ajv from 'ajv';
import formats from 'ajv-formats';
import { OCPP } from 'typed-ocpp';

OCPP.setAjv(formats(new Ajv()));
```

[a1]: https://npm.im/ajv
[a2]: https://npm.im/ajv-formats

### Typings

On top of the `OCPP` object, `typed-ocpp` exports a set of typings that covers
all aspects of OCPP payloads:

```typescript
import { 
  OCPPMessageType,          // enum of all OCPP message types (call / call error / call result)
  OCPPAction,               // enum of all OCPP call actions (authorize / boot notification / ...)
  OCPPCall,                 // union type of all OCPP call types
  OCPPCallResult,           // union type of all OCPP call result types
  OCPPCallError,            // OCPP call error type
  OCPPErrorCode,            // enum of all OCPP error codes
  OCPPUncheckedCallResult,  // unchecked OCPP call result type
  OCPP,                     // parse() and stringify() functions (like JSON but for OCPP)
} from 'typed-ocpp';
```

### `OCPP.parse()`

The `OCPP.parse()` function returns a fully-typed "view" of the original array.
No additional transformation is applied beside the eventual `JSON.parse()` if a
string is provided.

```typescript
import type { 
  OCPPMessageType,          // OCPP message type
  OCPPAction,               // OCPP call actions
  OCPPCall,                 // union type of all OCPP call types
  OCPPCallResult,           // union type of all OCPP call result types
  OCPPCallError,            // OCPP call error type
  OCPPUncheckedCallResult,  // unchecked OCPP call result type
  OCPP,                     // parse() and stringify() functions (like JSON but for OCPP)
} from 'typed-ocpp';

const raw = '[2,"test","BootNotification",{"chargePointModel":"model","chargePointVendor":"vendor"}]';

const parsed = OCPP.parse(raw);

Array.isArray(parsed); // true
```

As the result is fully-typed, the TS compiler can use known types to infer
others:

```typescript
if (parsed[0] === OCPPMessageType.CALL) {
  parsed[2];                                        // TS gives type "OCPPAction"          
  if (parsed[2] === OCPPAction.BootNotification) {
    // TS infers the shape of the call payload
    parsed[3].chargePointModel;                     // TS gives type "string"
    parsed[3].randomProp;                           // TS compilation error
  }
}
```

### `OCPP.checkCallResult()`

OCPP call results are first returned as `OCPPUncheckedCallResult` objects and
must be checked against their respective `OCPPCall` objects for further
validation and type-awareness.

If `checkCallResult()` does not throw, the resulting object is guaranteed to be
a valid Call Result object _matching the provided `OCPPCall` object_. The TS
compiler will infer the shape of the `OCPPCallResult`'s payload based on the
action of the respective `OCPPCall`:

```typescript
if (parsed[0] === OCPPMessageType.CALLRESULT) {
  const call = /* get the call somehow */;
  const callresult = OCPP.checkCallResult(parsed, call);
  if (call[2] === OCPPAction.BootNotification) {
    checked[2].status;        // TS gives type "Accepted"|"Pending"|"Rejected"
  }
}
```

### `OCPP.stringify()`

Returns the JSON serialization of the provided OCPP object.

```typescript
const serialized = OCPP.stringify(parsed);
```

### JSON Schema(s) 

`typed-ocpp` ships with a complete collection of [JSON Schema][s1] objects,
used for validation within `OCPP.parse()`. Schemas can be directly imported
as follows:

```typescript
import { AuthorizeSchema } from 'typed-ocpp/dist/schemas/Authorize.js';
```

[s1]: https://json-schema.org

## Testing

Requires `node >= 18.17`.

```sh
npm test
```

## License

MIT. See [LICENSE][l1] file.

[l1]: ./LICENSE
