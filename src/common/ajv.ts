
let __ajv: any = null;

export const setAjv = (ajv: any) => {
  __ajv = ajv;
};

export const getAjv = (): any => {
  if (!__ajv || typeof __ajv !== 'object' || typeof __ajv.validate !== 'function') {
    throw new Error(`
      The typed-ocpp library requires an instance of Ajv (https://npm.im/ajv)
      extended with the ajv-formats plugin (https://npm.im/ajv-formats) to be
      provided using \`OCPP.setAjv()\`. See https://npm.im/typed-ocpp.
    `);
  }
  return __ajv;
};

export const ajvErrorsToString = (ajv: any): string => {
  return ajv.errors?.map((e: any) => `${e.instancePath} ${e.message}`).join(', ') || '';
};
