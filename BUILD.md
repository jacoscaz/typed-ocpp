
# Building and testing `typed-ocpp`

```sh
npm run codegen
npm run build
npm run test
```

Requires `node >= 18.17`.

## The `codegen` script

The `schemas/ocpp16` and `schemas/ocpp20` folders contain the official
[JSON Schema][b2] documents published by the [Open Charge Alliance][b1].

The `codegen` script generates the following `.ts` source files against
those schema documents:

| file | description |
| --- | --- |
| `src/ocpp16/types.ts` | type declarations for OCPP 1.6 payloads | 
| `src/ocpp16/schemas.ts` | JSON Schema objects for OCPP 1.6 payloads |
| `src/ocpp20/types.ts` | type declarations for OCPP 2.0.1 payloads |
| `src/ocpp20/schemas.ts` | JSON Schema objects for OCPP 2.0.1 payloads |

## The `build` script

The `build` script takes care of standard TS transpilation into JS.

[b1]: https://openchargealliance.org
[b2]: https://json-schema.org
