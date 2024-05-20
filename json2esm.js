/*
 * The goal of this script is to convert the .json files distributed within the
 * .zip archives provided by the OCPP Alliance into ESM .ts files exporting the
 * original JSON Schema objects.
 */

import { join, resolve } from 'node:path';
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';

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

    // Ensure that the file's contents is actually valid JSON
    JSON.parse(input_file_data);

    const output_file_abspath = join(output_dir_abspath, `${schema_name}.ts`);
    const output_file_data = `export const ${schema_name} = ${input_file_data}`;
    
    await writeFile(output_file_abspath, output_file_data, 'utf8');

    console.log('Converted file %s into %s for schema %s', input_file_abspath, output_file_abspath, schema_name);
  }

})().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
