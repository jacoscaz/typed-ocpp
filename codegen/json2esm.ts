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
  const { schemas, definitions } = await readSchemaFiles(mode, input_dir_abspath);

  // First declare and initialize the shared dictionary of definitions, so that
  // we may reference it when printing the schemas.
  output_file_data += `\n\nconst definitions: any = ${JSON.stringify(definitions, null, 2)};`;

  // Now we declare and initialize each schema separately, taking care of
  // skipping the `definitions` property during JSON serialization and making
  // room for an injected reference to the instance of the shared definitions
  // dictionary created above.
  for (let [schema_name, schema_defn] of Object.entries(schemas)) {
    schema_defn = { ...schema_defn, definitions: undefined };
    const serialized_defn = `{\n  definitions,  ${JSON.stringify(schema_defn, null, 2).slice(1)}`;
    output_file_data += `\n\nexport const ${schema_name}: any = ${serialized_defn};`;
  }

  await writeFile(output_file_abspath, output_file_data, 'utf8');

})().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
