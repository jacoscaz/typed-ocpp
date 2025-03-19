/*
 * The goal of this script is to convert the .json files distributed within the
 * .zip archives provided by the OCPP Alliance into ESM .ts files exporting the
 * original JSON Schema objects.
 */

import { writeFile } from 'node:fs/promises';
import { readCLIParams, readSchemaFiles, output_file_header } from './common.js';

(async () => {

  const { input_dir_abspath, output_file_abspath, mode } = readCLIParams();

  let output_file_data = output_file_header;
  
  for await (const { name, schema } of readSchemaFiles(mode, input_dir_abspath)) {
    output_file_data += `\n\nexport const ${name}: any = ${JSON.stringify(schema, null, 2)};`;
  }

  await writeFile(output_file_abspath, output_file_data, 'utf8');

})().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
