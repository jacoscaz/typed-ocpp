
import type { WithErrorsArr } from './utils.js';

const ensure = <T>(parser: WithErrorsArr, item: any, predicate: boolean, message: string): item is T => {
  if (!predicate) {
    if (parser.errors) {
      parser.errors.push(message);
    } else {
      parser.errors = [message];
    }
    return false;
  }
  return true;
};

export const array = (parser: WithErrorsArr, item: any, message: string): item is any[] => {
  return ensure<any[]>(parser, item, Array.isArray(item), message);
};

export const length = <T extends any[]>(parser: WithErrorsArr, item: T, length: number, message: string): boolean => {
  return ensure<T>(parser, item, item.length === length, message);
};

export const object = <T extends {}>(parser: WithErrorsArr, item: any, message: string): item is T => {
  return ensure<T>(parser, item, typeof item === 'object' && item !== null, message);
};

export const string = <T extends string>(parser: WithErrorsArr, item: any, message: string): item is T => {
  return ensure<T>(parser, item, typeof item === 'string', message);
};

export const keyOf = <K extends keyof T, T extends {}>(parser: WithErrorsArr, key: any, dict: T, message: string): key is K => {
  return ensure<K>(parser, key, key in dict && Object.prototype.hasOwnProperty.call(dict, key), message);
};

export const equal = <T>(parser: WithErrorsArr, item: any, compare: T, message: string): item is T => {
  return ensure<T>(parser, item, item === compare, message);
};
