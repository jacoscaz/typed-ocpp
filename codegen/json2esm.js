/*
 * The goal of this script is to convert the .json files distributed within the
 * .zip archives provided by the OCPP Alliance into ESM .ts files exporting the
 * original JSON Schema objects.
 */

import { join, resolve } from 'node:path';
import { readFile, readdir, writeFile } from 'node:fs/promises';

const input_dir_path = process.argv[2];
const input_dir_abspath = resolve(process.cwd(), input_dir_path);

const output_file_path = process.argv[3];
const output_file_abspath = resolve(process.cwd(), output_file_path);

const mode = process.argv[4];
if (mode !== 'OCPP16' && mode !== 'OCPP20' && mode !== 'OCPP21') {
  throw new Error('Mode param must be one of "OCPP16", "OCPP20" and "OCPP21"');
}

const output_file_header = `/*
 *
 * THIS FILE IS AUTOMATICALLY GENERATED AND SHOULD NEVER BE EDITED DIRECTLY.
 * SEE ../../BUILD.md
 *
 * GENERATED ON: ${new Date().toISOString()}
 *
 */\n\n\n`;

(async () => {

  let output_file_data = output_file_header;

  const file_names = await readdir(input_dir_abspath);

  for (const file_name of file_names) {

    if (!file_name.endsWith('.json')) {
      continue;
    }

    let schema_name = file_name.slice(0, -5);
    if (mode === 'OCPP16') {
      if (!schema_name.match(/(?:Request|Response)$/)) {
        // The names of schema files for CALL messages within the OCPP 1.6 spec
        // archive do not have the `Request` suffix.
        schema_name += 'Request';
      }
    }

    const input_file_abspath = join(input_dir_abspath, file_name);
    const input_file_data = await readFile(input_file_abspath, 'utf8');

    // Ensure that the file's contents is actually valid JSON and cleanup 
    // keywords that break Ajv in strict mode.

    const schema = JSON.parse(input_file_data);

    if (mode === 'OCPP16') {
      // Schema objects within the OCPP 1.6 spec use the "id" property in place
      // of the $id property
      schema.$id = schema.id;
    }

    // Maximize compatibility with externally-provided Ajv instances that might
    // not have loaded the definitions for the various versions of JSON Schema.
    delete schema.$schema;

    // These are not supported by Ajv when running in strictMode.
    delete schema.id;
    delete schema.comment;
    delete schema.javaType;
    if (schema.definitions) {
      Object.values(schema.definitions).forEach((def_schema) => {
        delete def_schema.javaType;
      });
    }

    output_file_data += `\n\nexport const ${schema_name}: any = ${JSON.stringify(schema, null, 2)};`;
  }

  await writeFile(output_file_abspath, output_file_data, 'utf8');

})().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
