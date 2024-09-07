
# `typed-ocpp`

A library for fast, type-aware validation of OCPP 1.6-J and OCPP 2.0.1
messages, built against the official [JSON Schema][i2] documents published
by the [Open Charge Alliance][i1].

[i1]: https://openchargealliance.org
[i2]: https://json-schema.org

## Usage

### `OCPP16` and `OCPP20` namespaces

This library exports all functions and typings related to OCPP 1.6 and
OCPP 2.0.1 under, respectively, the `OCPP16` and `OCPP20` namespaces:

```typescript
import { OCPP16, OCPP20 } from 'typed-ocpp';
```

Both namespaces export identical APIs while typings and schemas differ
according to the differences in the respective OCPP versions. All of the
examples below apply to both namespaces.

### `validate()`

The `validate()` function is a [user-defined, validating type guard][v1] which
returns `true`if the provided value is a spec-compliant OCPP message and
`false` otherwise.

```typescript
import { OCPP16 } from 'typed-ocpp';
const value = [2,"test","BootNotification",{"chargePointModel":"model","chargePointVendor":"vendor"}];
if (OCPP16.validate(value)) {
  // valid
}
```

If `validate()` returns `true`, the TS compiler will infer the provided value
to be of one of the following types:

```typescript
OCPP16.Call                 // Union of all types of Call messages
OCPP16.CallError            // Type for Call Error messages
OCPP16.UncheckedCallResult  // Type for "unchecked" Call Result messages
```

The TS compiler will then be able to use known types to infer others:

```typescript
const value = [2,"test","BootNotification",{"chargePointModel":"model","chargePointVendor":"vendor"}];
if (OCPP16.validate(value)) {
  if (OCPP16.isCall(value)) {
    value[2];                                        // TS gives type "OCPP.Action"          
    if (value[2] === OCPP16.Action.BootNotification) {
      // TS infers the shape of the call payload based on the action
      value[3].chargePointModel;                     // TS gives type "string"
      value[3].randomProp;                           // TS compilation error
    }
  }
}
```

If validation fails and `validate()` returns `false`, validation errors will
be stored in the `validate.errors` array:

```typescript
const value = 'foobar';
if (!OCPP16.validate(value)) {
  // prints: [ 'Invalid OCPP message: invalid message type or not an array' ]
  console.log(OCPP16.validate.errors);
}
```

[v1]: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

### `validateCall()`, `validateCallError()` and `validateCallResult()`

The `validateCall()`, `validateCallError()` and `validateCallResult()`
functions are user-defined, validating type guards specific to each type of
message defined by the OCPP specs: **_call_**, **_call error_** and 
**_call result_**.

These functions behave in the way as the `validate()` function but only return
`true` when provided with values of the corresponding message type. Validation
errors can be retrieved via the `.errors` property.

### `isCall()`, `isCallResult()` and `isCallError()`

The `isCall()`, `isCallResult()` and `isCallError()` functions are
user-defined, non-validating type guards that facilitate identifying the type
of a valid message: 

```typescript
if (OCPP16.validate(message)) {
  if (OCPP16.isCall(message)) {
    // TS infers that parsed is of type OCPP16.Call
  }
  if (OCPP16.isCallResult(message)) {
    // TS infers that parsed is of type OCPP16.UncheckedCallResult
  }
  if (OCPP16.isCallError(message)) {
  // TS infers that parsed is of type OCPP16.CallError
  }
}
```

### `checkCallResult()`

Post-validation, **_call result_** messages are inferred by the TS compiler to
be of the `UncheckedCallResult` type, which is a generic type that does not
constrain the **_call result_**'s payload to any specific shape as doing so
requires the former against the originating **_call_** message.

Complete validation of a **_call result_** message against its originating
**_call_** message can be done through the `checkCallResult()` user-defined,
validating type guard.

If `checkCallResult()` returns `true`, the provided **_call result_** message 
is guaranteed to match the provided **_call_** message in terms of:

- Matching the expected type, incl. the payload (for example: being of type
  `OCPP16.BootNotificationCallResult` given an originating 
  `OCPP16.BootNotificationCall` essage).
- Sharing the same _call identifier_ with the originating **_call_** message.

```typescript
const call = [
  2,
  "test",
  "BootNotification",
  {"chargePointModel":"model","chargePointVendor":"vendor"},
] satisfies OCPP16.Call;

const result = [
  3, 
  "test", 
  { status: "Accepted", currentTime: "1970-01-01T00:00:00.000Z", interval: 10 },
] satisfies OCPP16.UncheckedCallResult<any>;

// Narrows the type of `call` to `OCPP16.BootNotificationCall`
if (call[2] === OCPP16.Action.BootNotification) {   
  // Validates `result` against `call`, narrowing the type of
  //     `result` to `OCPP16.BootNotificationCallResult`             
  if (OCPP16.checkCallResult(result, call)) {
    // Inferred as "Accepted" | "Pending" | "Rejected"
    result[2].status; 
  } else {
    // The `result` message does not match the originating `call` message
    console.log(OCPP16.checkCallResult.errors);
  }
}
```

Just like `validate()`, when `checkCallResult()` returns `false` it stores
validation errors in the `checkCallResult.errors` array.

### Types

#### Primary types

Within both the `OCPP16` and `OCPP20` namespaces, `typed-ocpp` provides a set
of typings and schemas that covers most aspects of OCPP messages.

```typescript
// Union of all types of Call messages
OCPP16.Call               

// Union of all Call Result message types
OCPP16.CallResult

// Type for Call Error messages
OCPP16.CallError            

// Type for "unchecked" Call Result messages
OCPP16.UncheckedCallResult  

// Generic type of Call Result message that resolves to the specific type of
// Call Result message matching the provided type of Call message "C"
OCPP16.CheckedCallResult<C extends OCPP16.Call>

// Message-specific types
OCPP16.AuthorizationCall
OCPP16.AuthorizationCallResult
OCPP16.BootNotificationCall
OCPP16.BootNotificationCallResult
/* ... */
```                   

#### Types for specific messages

Specific types for **_Call_** and **_Call Result_** messages making up the
`OCPP16.Call` and `OCPP16.CallResult` unions use the `Call` and `CallResult`
suffixes:

```typescript
OCPP16.MeterValuesCall
OCPP16.MeterValuesCallResult
/* ... and so on ...*/
```

#### The `CheckedCallResult<C extends Call>` type

When returning `true`, the `checkCallResult()` function leads the TS compiler
to infer the generic type `CheckedCallResult<C extends Call>`, which resolves
to the specific type of **_call result_** message that corresponds to the type
of **_call_** message provided as the `C` type argument.

The generic `CheckedCallResult<C extends Call>` type can also be used on its
own to model a **_call result_** message after a known or inferred type of
**_call_** message:

```typescript
const result: OCPP16.CheckedCallResult<OCPP16.GetConfigurationCall> = [
  OCPP16.MessageType.CALLRESULT, 
  '<call_id>', 
  { 
    configurationKey: [
      { key: 'some_key', value: 'some_value', readonly: true },
    ], 
    // the TS compiler will return an error here due to unsupported property
    // "foobar" in OCPP16.GetConfigurationCallResult payloads.
    foobar: 42,
  },
];
```

#### Utility enums

```typescript
OCPP16.MessageType          // enum of message types (CALL = 2, CALLRESULT = 3, CALLERROR = 4)
OCPP16.Action               // enum of actions in Call messages ("Authorize", "BootNotification", ...)
OCPP16.ErrorCode            // enum of error code in Call Error messages ("NotImplemented", "NotSupported", ...)
```

```typescript
OCPP20.MessageType          // enum of message types (CALL = 2, CALLRESULT = 3, CALLERROR = 4)
OCPP20.Action               // enum of actions in Call messages ("Authorize", "BootNotification", ...)
OCPP20.ErrorCode            // enum of error code in Call Error messages ("NotImplemented", "NotSupported", ...)
```

#### Utility types for OCPP 1.6

The following types may be used to model value descriptors within
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

The following types may be used to model value descriptors within
`StatusNotification` Call messages:

```typescript
OCPP16.Status               // status ("Available", "Reserved", ...)
```

#### Utility types for OCPP 2.0.1

```typescript
OCPP20.ConnectorStatus      // connector status ("Available", "Occupied", ...)
OCPP20.ChargingState        // charging status ("Charging", "EVConnected", ...)
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

## Building and testing

See [BUILD.md][b1] file.

[b1]: ./BUILD.md

## License

MIT. See [LICENSE][l1] file.

[l1]: ./LICENSE
