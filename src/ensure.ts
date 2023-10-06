
const ensure = <T>(item: any, predicate: boolean, message: string): T => {
  if (!predicate) {
    throw new Error(message);
  }
  return item as T;
};

export const array = <T extends any[]>(item: any, message: string): T => {
  return ensure<T>(item, Array.isArray(item), message);
};

export const length = <T extends any[]>(item: T, length: number, message: string): T => {
  return ensure<T>(item, item.length === length, message);
};

export const object = <T extends {}>(item: any, message: string): T => {
  return ensure<T>(item, typeof item === 'object' && item !== null, message);
};

export const string = <T extends string>(item: any, message: string): T => {
  return ensure<T>(item, typeof item === 'string', message);
};

export const keyOf = <K extends keyof T, T extends {}>(key: any, dict: T, message: string): K => {
  return ensure<K>(key, key in dict, message);
};

export const equal = <T>(item: any, compare: T, message: string): T => {
  return ensure<T>(item, item === compare, message);
};
