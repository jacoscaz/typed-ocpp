/*
 * The goal of this script is to convert the .json files distributed within the
 * .zip archives provided by the OCPP Alliance into TypeScript declarations
 * based on the original JSON Schema objects.
 * 
 * This script uses json-schema-to-typescript package:
 * https://www.npmjs.com/package/json-schema-to-typescript
 */
import { join, resolve } from 'node:path';
import { readdir, writeFile, mkdir, readFile } from 'node:fs/promises';
import { compile } from 'json-schema-to-typescript';

const input_dir_path = process.argv[2];
const output_dir_path = process.argv[3];

const input_dir_abspath = resolve(process.cwd(), input_dir_path);
const output_dir_abspath = resolve(process.cwd(), output_dir_path);

(async () => {

  await mkdir(output_dir_abspath, { recursive: true });

  const file_names = await readdir(input_dir_abspath);

  for (const file_name of file_names) {

    if (!file_name.endsWith('.json')) {
      continue;
    }

    let schema_name = file_name.slice(0, -5);
    if (!schema_name.match(/(?:Request|Response)$/)) {
      // The names of schema files for CALL messages within the OCPP 1.6 spec
      // archive do not have the `Request` suffix.
      schema_name += 'Request';
    }

    const input_file_abspath = join(input_dir_abspath, file_name);
    const input_file_data = await readFile(input_file_abspath, 'utf8');

    const input_schema = JSON.parse(input_file_data);
    if (input_schema.$id?.indexOf(':') > -1) {
      // The schema files within the OCPP 2.0.1 spec have namespaced $id
      // attributes such as `urn:OCPP:Cp:2:2020:3:CancelReservationRequest`.
      // Here we get rid of the "urn" part of the $id so that json2ts will
      // name the type correctly.
      input_schema.$id = input_schema.$id.split(':').slice(-1)[0];
    }
    
    const output_file_data = await compile(input_schema, {});
      
    const output_file_abspath = join(output_dir_abspath, `${schema_name}.ts`);

    await writeFile(output_file_abspath, output_file_data, 'utf8');

    console.log('Converted file %s into %s for schema %s', input_file_abspath, output_file_abspath, schema_name);
  }

})().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
