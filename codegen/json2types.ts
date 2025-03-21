/*
 * The goal of this script is to convert the .json files distributed within the
 * .zip archives provided by the OCPP Alliance into TypeScript declarations
 * based on the original JSON Schema objects.
 * 
 * This script uses json-schema-to-typescript package:
 * https://www.npmjs.com/package/json-schema-to-typescript
 */

import { writeFile } from 'node:fs/promises';
import { compile } from 'json-schema-to-typescript';
import { readCLIParams, readSchemaFiles, output_file_header } from './common.js';

(async () => {

  const { input_dir_abspath, output_file_abspath, mode } = readCLIParams();
  let output_file_data = output_file_header;
  const { schemas, definitions } = await readSchemaFiles(mode, input_dir_abspath);

  // First we convert each shared definition of a child JSON schema to a type
  // and append it to the resulting file, so that it may be referenced by the
  // types for root-level JSON schemas created below.
  for (let [ schema_name, schema_defn ] of Object.entries(definitions)) {
    // A simpler `schema_defn.definitions = definitions` assignment results
    // in what looks like infinite looping when calling `compile()`, likely
    // due to the recursivity of the resulting hierarchy of objects.
    schema_defn = { ...schema_defn, definitions }; 
    const compiled_type = await compile(schema_defn, schema_name, {
      ignoreMinAndMaxItems: true,
      declareExternallyReferenced: false,
    });
    output_file_data += compiled_type;
  }

  // We can now generate types for root-level JSON schemas, which will
  // reference the ones created above for shared definitions.
  for (const [schema_name, schema_defn] of Object.entries(schemas)) {
    const compiled_type = await compile(schema_defn, schema_name, {
      ignoreMinAndMaxItems: true,
      declareExternallyReferenced: false,
    });
    output_file_data += compiled_type;
  }

  // Remove comments
  output_file_data = output_file_data.replaceAll(/^\s*?\/\*\*(?:.|\n)*?\*\/\n/mg, '');
  output_file_data = output_file_data.replaceAll('/* eslint-disable */', '');

  await writeFile(output_file_abspath, output_file_data, 'utf8');
  
})().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
