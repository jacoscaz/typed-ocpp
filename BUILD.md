
# Building `typed-ocpp`

## Building

The `schemas/ocpp16` and `schemas/ocpp20` contain the original JSON Schema
documents taken from, respectively, the archives for the OCPP 1.6 and OCPP
2.0.1 specifications as published by the OCPP alliance.

The `specgen` script converts those JSON Schema documents into .ts code and
type declarations, populating the following files:

- `src/ocpp16/types.ts`
- `src/ocpp16/schemas.ts`
- `src/ocpp20/types.ts`
- `src/ocpp20/schemas.ts`

The `build` script takes care of standard TS transpilation into JS.

```sh
npm run specgen
npm run build
```

## Testing

Requires `node >= 18.17`.

```sh
npm test
```
