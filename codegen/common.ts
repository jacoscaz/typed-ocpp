
import { resolve } from 'path';
import { readdir, readFile } from 'fs/promises';

export type Mode = 'OCPP16' | 'OCPP20' | 'OCPP21';

export const ensureMode = (mode: any): Mode => {
  switch (mode) {
    case 'OCPP16':
    case 'OCPP20':
    case 'OCPP21':
      return mode;
    default:
      throw new Error(`invalid mode ${mode}`);
  }
};

export interface SchemaDescriptor<T extends {} = any> {
  schema_name: string;
  schema_defn: T;
}

export const cleanupSchema = (mode: Mode, schema_name: string, schema_defn: any, parent_schema: any) => {
  
  delete schema_defn.id;
  delete schema_defn.$id;
  delete schema_defn.$schema;
  delete schema_defn.comment;
  delete schema_defn.javaType;

  // The official OCPP 1.6 schema files contain a mispelling of the unit of
  // measure "Celsius", which is spelled "Celcius". Thus we add the correct
  // spelling wherever needed.
  if (!parent_schema && mode === 'OCPP16' && schema_name === 'StopTransactionRequest') {
    schema_defn.properties.transactionData.items.properties.sampledValue.items.properties.unit.enum.push('Celsius');
  }
};

export const readSchemaFiles = async function *(mode: Mode, dir_abspath: string): AsyncIterable<SchemaDescriptor> {
  for (const file_name of await readdir(dir_abspath)) {
    if (!file_name.endsWith('.json')) {
      continue;
    }

    let schema_name = file_name.slice(0, -5);
    if (mode === 'OCPP16' && !schema_name.endsWith('Response')) {
      // The names of schema files for CALL messages within the OCPP 1.6 spec
      // archive do not have the `Request` suffix.
      schema_name += 'Request';
    }
    if (!schema_name.match(/(?:Request|Response)$/)) {
      if (mode !== 'OCPP21' && schema_name !== 'NotifyPeriodicEventStream') {
        throw new Error(`invalid schema name ${schema_name}: does not end with either "Request" or "Response"`);
      }
    }
    const file_abspath = resolve(dir_abspath, file_name);
    const file_data = await readFile(file_abspath, 'utf8');
    // Ensure that the file's contents is actually valid JSON and cleanup 
    // keywords that break Ajv in strict mode.
    const schema_defn = JSON.parse(file_data);

    cleanupSchema(mode, schema_name, schema_defn, null);

    if (schema_defn.definitions) {
      Object.entries(schema_defn.definitions).forEach(([child_schema_name, child_schema_defn]) => {
        cleanupSchema(mode, child_schema_name, child_schema_defn, schema_defn);
      });
    }

    yield { schema_name, schema_defn };
  }
};

export interface CLIParams {
  input_dir_abspath: string;
  output_file_abspath: string;
  mode: Mode;
}

export const readCLIParams = () => {
  const input_dir_path = process.argv[2];
  const input_dir_abspath = resolve(process.cwd(), input_dir_path);
  const output_file_path = process.argv[3];
  const output_file_abspath = resolve(process.cwd(), output_file_path);
  const mode = process.argv[4];
  return { input_dir_abspath, output_file_abspath, mode: ensureMode(mode) };
};

export const output_file_header = `/*
 *
 * THIS FILE IS AUTOMATICALLY GENERATED AND SHOULD NEVER BE EDITED DIRECTLY.
 * SEE ../../BUILD.md
 *
 * GENERATED ON: ${new Date().toISOString()}
 *
 */\n\n\n`;
