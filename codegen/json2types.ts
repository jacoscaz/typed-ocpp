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
import { deduplicate_blocks } from './json2types-blocks.js';
import { readCLIParams, readSchemaFiles, output_file_header } from './common.js';

(async () => {

  const { input_dir_abspath, output_file_abspath, mode } = readCLIParams();

  let output_file_data = output_file_header;

  for await (const { name, schema } of readSchemaFiles(mode, input_dir_abspath)) {
        
    const compiled_type = await compile(schema, name, {
      ignoreMinAndMaxItems: true,
    });

    output_file_data += compiled_type;
      
  }

  // Remove comments
  output_file_data = output_file_data.replaceAll(/^\s*?\/\*\*(?:.|\n)*?\*\/\n/mg, '');
  output_file_data = output_file_data.replaceAll('/* eslint-disable */', '');

  // Deduplicate code blocks
  deduplicate_blocks[mode].forEach((block) => {
    if (output_file_data === (output_file_data = output_file_data.replaceAll(block, ''))) {
      throw new Error(`\n\nFailed to deduplicate block:\n\n${block}\n\n`);
    }
    output_file_data += '\n\n' + block;
  });

  await writeFile(output_file_abspath, output_file_data, 'utf8');
  
})().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
