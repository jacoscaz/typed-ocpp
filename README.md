
# `typed-ocpp`

A library for type-aware parsing, serialization and validation of OCPP 1.6-J
and OCPP 2.0.1-J messages.

## Usage

### `setAjv()`

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

### `OCPP16` and `OCPP20` namespaces

This library exports all functions and typings related to OCPP 1.6 and
OCPP 2.0.1 under, respectively, the `OCPP16` and `OCPP20` namespaces:

```typescript
import { OCPP16, OCPP20 } from 'typed-ocpp';
```

Both namespaces export identical APIs while typings and schemas differ
according to the differences in the respective OCPP versions.

### `parse()`

The `parse()` function return a fully-typed and validated "view" of the
original array. No additional transformation is applied beside the eventual
`JSON.parse()` if a string is provided.

```typescript
import { OCPP16 } from 'typed-ocpp';

const raw = '[2,"test","BootNotification",{"chargePointModel":"model","chargePointVendor":"vendor"}]';
const parsed = OCPP.parse(raw);

Array.isArray(parsed); // true
```

```typescript
import { OCPP20 } from 'typed-ocpp';

const raw = '[2,"test","BootNotification",{ "chargingStation": { "model": "test", "vendorName": "test" }, "reason": "PowerUp"}]';
const parsed = OCPP.parse(raw);

Array.isArray(parsed); // true
```

Values returned by `parse()` have one of the following types:

```typescript
OCPP16.Call                 // union of all types for Call messages
OCPP16.CallError            // type for Call Error messages
OCPP16.UncheckedCallResult  // generic type for Call Result messages

OCPP20.Call                 // union of all types for Call messages
OCPP20.CallError            // type for Call Error messages
OCPP20.UncheckedCallResult  // generic type for Call Result messages
```

As returned values are fully-typed, the TS compiler can use known types to
infer others:

```typescript
if (parsed[0] === OCPP16.MessageType.CALL) {
  parsed[2];                                        // TS gives type "OCPP.Action"          
  if (parsed[2] === OCPP16.Action.BootNotification) {
    // TS infers the shape of the call payload based on the action
    parsed[3].chargePointModel;                     // TS gives type "string"
    parsed[3].randomProp;                           // TS compilation error
  }
}
```

### `checkCallResult()`

Call Result messages are first returned as having type `UncheckedCallResult`
and must be checked against the originating messages of type `Call` for further
validation and type-awareness.

If `checkCallResult()` does not throw the returned values are guaranteed to be
valid `CallResult` objects _matching the provided `Call` objects_.

While `CallResult` type is the union of all Call Result message types, the TS
compiler will infer the specific type of Call Result based on the action of the
provided `Call`:

```typescript
const call = '[2,"test","BootNotification",{"chargePointModel":"model","chargePointVendor":"vendor"}]';
const result = '[3, "test", { status: "Accepted", currentTime: "1970-01-01T00:00:00.000Z", interval: 10 }]';

const parsedCall = OCPP16.parse(call);
const parsedResult = OCPP16.parse(result);

if (parsedCall[0] === OCPP16.MessageType.CALL && parsedResult[0] === OCPP16.MessageType.CALLRESULT) {
  if (parsedCall[2] === OCPP16.Action.BootNotification) {
    const checkedResult = OCPP16.checkCallResult(parsedResult, parsedCall);
    checkedResult[2].status;        // TS gives type "Accepted"|"Pending"|"Rejected"
  }
}
```

### `stringify()`

Returns the JSON serialization of the provided OCPP object.

```typescript
const serialized = OCPP16.stringify(parsed);
```

```typescript
const serialized = OCPP20.stringify(parsed);
```

### Types

Within both the `OCPP16` and `OCPP20` namespaces, `typed-ocpp` provides a set
of typings and schemas that covers most aspects of OCPP messages.

We've already mentioned the primary types returned by `parse()` and
`checkCallResult()`:

```typescript
OCPP16.Call                 // union type of all Call message types
OCPP16.CallResult           // union type of all Call Result message types
OCPP16.CallError            // type of Call Error messages
OCPP16.UncheckedCallResult  // type of unchecked Call Result messages

OCPP20.Call                 // union type of all Call message types
OCPP20.CallResult           // union type of all Call Result message types
OCPP20.CallError            // type of Call Error messages
OCPP20.UncheckedCallResult  // type of unchecked Call Result messages
```

Specific types for _Call_ and _Call Result_ messages use the `Call` and
`CallResult` suffixes: `AuthorizeCall`, `AuthorizeCallResult`,
`MeterValuesCall`, `MeterValuesCallResult` and so on:

```typescript
OCPP16.MeterValuesCall
OCPP16.MeterValuesCallResult
/* ... */

OCPP20.MeterValuesCall
OCPP20.MeterValuesCallResult
/* ... */
```

The following enumerations are used within these primary types:

```typescript
OCPP16.MessageType          // enum of message types (CALL = 2, CALLRESULT = 3, CALLERROR = 4)
OCPP16.Action               // enum of actions in Call messages ("Authorize", "BootNotification", ...)
OCPP16.ErrorCode            // enum of error code in Call Error messages ("NotImplemented", "NotSupported", ...)

OCPP20.MessageType          // enum of message types (CALL = 2, CALLRESULT = 3, CALLERROR = 4)
OCPP20.Action               // enum of actions in Call messages ("Authorize", "BootNotification", ...)
OCPP20.ErrorCode            // enum of error code in Call Error messages ("NotImplemented", "NotSupported", ...)
```

### Utility types for OCPP 1.6

Additionally, the following types may be used to model value descriptors within
`MeterValues` Call messages:

```typescript
OCPP16.Context              // sampling context ("Transaction.Begin", "Sample.Periodic", ...)
OCPP16.Measurand            // value measurand ("Power.Active.Import", "Frequency", ...)
OCPP16.Phase                // AC phase ("L1", "L2", "L1-N", ...)
OCPP16.Location             // sampling location ("Inlet", "Outlet", ...)
OCPP16.Unit                 // value unit ("Wh", "kWh", ...)
OCPP16.Format               // value format ("Raw" or "SignedData")
OCPP16.SampledValue         // individual entry of the "sampledValue" array
OCPP16.MeterValue           // individual entry of the "meterValue" array
```

### JSON Schema(s) 

Both the `OCPP16` and the `OCPP20` namespaces export the official JSON Schema
documents provided by the OCPP Alliance as ready-to-use objects, slightly
tweaked to maximize compat with different versions and configurations of Ajv:

```typescript
import { OCPP16, OCPP20 } from 'typed-ocpp';

OCPP16.schemas.AuthorizeRequest;
OCPP16.schemas.AuthorizeResponse;
/* ... */

OCPP20.schemas.AuthorizeRequest;
OCPP20.schemas.AuthorizeResponse;
/* ... */
```

## License

MIT. See [LICENSE][l1] file.

[l1]: ./LICENSE
