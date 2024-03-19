
# Typed OCPP

A library for type-aware parsing, serialization and validation of OCPP 1.6-J
messages.

## Usage

### `OCPP` namespace

This library exports all functions and typings under the `OCPP` namespace:

```typescript
import { OCPP } from 'typed-ocpp';
```

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

### `OCPP.parse()`

The `OCPP.parse()` function returns a fully-typed and validated "view" of the
original array. No additional transformation is applied beside the eventual 
`JSON.parse()` if a string is provided.

```typescript
import { OCPP } from 'typed-ocpp';

const raw = '[2,"test","BootNotification",{"chargePointModel":"model","chargePointVendor":"vendor"}]';
const parsed = OCPP.parse(raw);

Array.isArray(parsed); // true
```

Values returned by the `OCPP.parse()` function have one of the following types:

```typescript
OCPP.Call                 // union of all types for Call messages
OCPP.CallError            // type for Call Error messages
OCPP.UncheckedCallResult  // generic type for Call Result messages
```

As the result is fully-typed, the TS compiler can use known types to infer
others:

```typescript
if (parsed[0] === OCPP.MessageType.CALL) {
  parsed[2];                                        // TS gives type "OCPP.Action"          
  if (parsed[2] === OCPP.Action.BootNotification) {
    // TS infers the shape of the call payload based on the action
    parsed[3].chargePointModel;                     // TS gives type "string"
    parsed[3].randomProp;                           // TS compilation error
  }
}
```

### `OCPP.checkCallResult()`

Call Result messages are first returned as having type
`OCPP.UncheckedCallResult` by `OCPP.parse()` and must be checked against their
originating `OCPP.Call` objects for further validation and type-awareness.

If `OCPP.checkCallResult()` does not throw, the resulting object is guaranteed
to be a valid `OCPP.CallResult` object _matching the provided `OCPP.Call` 
object_. While the `OCPP.CallResult` type is the union of all Call Result
message types, the TS compiler will infer the specific type of Call Result
based on the action of the provided `OCPP.Call`:

```typescript
const call = '[2,"test","BootNotification",{"chargePointModel":"model","chargePointVendor":"vendor"}]';
const result = '[3, "test", { status: "Accepted", currentTime: "1970-01-01T00:00:00.000Z", interval: 10 }]';

const parsedCall = OCPP.parse(call);
const parsedResult = OCPP.parse(result);

if (parsedCall[0] === OCPP.MessageType.CALL && parsedResult[0] === OCPP.MessageType.CALLRESULT) {
  if (parsedCall[2] === OCPP.Action.BootNotification) {
    const checkedResult = OCPP.checkCallResult(parsedResult, parsedCall);
    checkedResult[2].status;        // TS gives type "Accepted"|"Pending"|"Rejected"
  }
}
```

### `OCPP.stringify()`

Returns the JSON serialization of the provided OCPP object.

```typescript
const serialized = OCPP.stringify(parsed);
```

### Types

Within the `OCPP` namespace, `typed-ocpp` exports a set of typings that covers
all aspects of OCPP payloads.

We've already mentioned the primary types returned by `OCPP.parse()` and
`OCPP.checkCallResult()`:

```typescript
OCPP.Call                 // union type of all Call message types
OCPP.CallResult           // union type of all Call Result message types
OCPP.CallError            // type of Call Error messages
OCPP.UncheckedCallResult  // type of unchecked Call Result messages
```

Specific types for _Call_ and _Call Result_ messages use the `Call` and
`CallResult` suffixes: `OCPP.AuthorizeCall`, `OCPP.AuthorizeCallResult`,  
`OCPP.MeterValuesCall`, `OCPP.MeterValuesCallResult` and so on.

The following enumerations are used within these primary types:

```typescript
OCPP.MessageType          // enum of message types (CALL = 2, CALLRESULT = 3, CALLERROR = 4)
OCPP.Action               // enum of actions in Call messages ("Authorize", "BootNotification", ...)
OCPP.ErrorCode            // enum of error code in Call Error messages ("NotImplemented", "NotSupported", ...)
```

Additionally, the following types are used to model value descriptors within
`MeterValues` Call messages:

```typescript
OCPP.Context              // sampling context ("Transaction.Begin", "Sample.Periodic", ...)
OCPP.Measurand            // value measurand ("Power.Active.Import", "Frequency", ...)
OCPP.Phase                // AC phase ("L1", "L2", "L1-N", ...)
OCPP.Location             // sampling location ("Inlet", "Outlet", ...)
OCPP.Unit                 // value unit ("Wh", "kWh", ...)
OCPP.Format               // value format ("Raw" or "SignedData")
OCPP.SampledValue         // individual entry of the "sampledValue" array
OCPP.MeterValue           // individual entry of the "meterValue" array
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
