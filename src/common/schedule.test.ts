
import { describe, it } from 'node:test';
import { deepStrictEqual } from 'node:assert';
import { merge } from './schedule.js';

describe('Periods - merge()', () => {

  const mergeFn = <T extends {}>(l: T, r: T): T => ({ ...r });
  const cloneFn = <T extends {}>(t: T): T => ({ ...t });

  it('left(1) comes entirely before right(1)', () => {
    const left = [{ start: new Date(0) , end: new Date(2) , data: { tag: 'left' } }];
    const right = [{ start: new Date(6) , end: new Date(8) , data: { tag: 'right' } }];
    const result = merge(left, right, cloneFn, mergeFn);
    deepStrictEqual(result, [...left, ...right]);
  });

  it('left(1) comes entirely after right(1)', () => {
    const left = [{ start: new Date(6) , end: new Date(8) , data: { tag: 'left' } }];
    const right = [{ start: new Date(0) , end: new Date(2) , data: { tag: 'right' } }];
    const result = merge(left, right, cloneFn, mergeFn);
    deepStrictEqual(result, [...right, ...left]);
  });

  it('right(1) is in between left(2)', () => {
    const left = [
      { start: new Date(0) , end: new Date(2) , data: { tag: 'left' } }, 
      { start: new Date(6) , end: new Date(8) , data: { tag: 'left' } },
    ];
    const right = [{ start: new Date(3) , end: new Date(4) , data: { tag: 'right' } }];
    const result = merge(left, right, cloneFn, mergeFn);
    deepStrictEqual(result, [ 
      { start: new Date(0) , end: new Date(2) , data: { tag: 'left' } }, 
      { start: new Date(3) , end: new Date(4) , data: { tag: 'right' } }, 
      { start: new Date(6) , end: new Date(8) , data: { tag: 'left' } },
    ]);
  });

  it('left(1) is in between right(2)', () => {
    const left = [{ start: new Date(3) , end: new Date(4) , data: { tag: 'left' } }];
    const right = [
      { start: new Date(0) , end: new Date(2) , data: { tag: 'right' } }, 
      { start: new Date(6) , end: new Date(8) , data: { tag: 'right' } },
    ];
    const result = merge(left, right, cloneFn, mergeFn);
    deepStrictEqual(result, [ 
      { start: new Date(0) , end: new Date(2) , data: { tag: 'right' } }, 
      { start: new Date(3) , end: new Date(4) , data: { tag: 'left' } }, 
      { start: new Date(6) , end: new Date(8) , data: { tag: 'right' } },
    ]);
  });

  it('left(2) alternates with right(2)', () => {
    const left = [
      { start: new Date(3) , end: new Date(4) , data: { tag: 'left' } },
      { start: new Date(8) , end: new Date(10) , data: { tag: 'left' } },
    ];
    const right = [
      { start: new Date(0) , end: new Date(2) , data: { tag: 'right' } }, 
      { start: new Date(6) , end: new Date(8) , data: { tag: 'right' } },
    ];
    const result = merge(left, right, cloneFn, mergeFn);
    deepStrictEqual(result, [ 
      { start: new Date(0) , end: new Date(2) , data: { tag: 'right' } }, 
      { start: new Date(3) , end: new Date(4) , data: { tag: 'left' } }, 
      { start: new Date(6) , end: new Date(8) , data: { tag: 'right' } },
      { start: new Date(8) , end: new Date(10) , data: { tag: 'left' } },
    ]);
  });

  it('right(2) alternates with left(2)', () => {
    const left = [
      { start: new Date(0) , end: new Date(2) , data: { tag: 'left' } }, 
      { start: new Date(6) , end: new Date(8) , data: { tag: 'left' } },
    ];
    const right = [
      { start: new Date(3) , end: new Date(4) , data: { tag: 'right' } },
      { start: new Date(8) , end: new Date(10) , data: { tag: 'right' } },
    ];
    const result = merge(left, right, cloneFn, mergeFn);
    deepStrictEqual(result, [ 
      { start: new Date(0) , end: new Date(2) , data: { tag: 'left' } }, 
      { start: new Date(3) , end: new Date(4) , data: { tag: 'right' } }, 
      { start: new Date(6) , end: new Date(8) , data: { tag: 'left' } },
      { start: new Date(8) , end: new Date(10) , data: { tag: 'right' } },
    ]);
  });

  it('left(1) partially overlaps with right(1), coming first', () => {
    const left = [
      { start: new Date(0) , end: new Date(4) , data: { tag: 'left' } }, 
    ];
    const right = [
      { start: new Date(2) , end: new Date(6) , data: { tag: 'right' } },
    ];
    const result = merge(left, right, cloneFn, mergeFn);
    deepStrictEqual(result, [ 
      { start: new Date(0) , end: new Date(2) , data: { tag: 'left' } }, 
      { start: new Date(2) , end: new Date(4) , data: { tag: 'right' } }, 
      { start: new Date(4) , end: new Date(6) , data: { tag: 'right' } },
    ]);
  });

  it('right(1) partially overlaps with left(1), coming first', () => {
    const left = [
      { start: new Date(2) , end: new Date(6) , data: { tag: 'left' } },
    ];
    const right = [
      { start: new Date(0) , end: new Date(4) , data: { tag: 'right' } }, 
    ];
    const result = merge(left, right, cloneFn, mergeFn);
    deepStrictEqual(result, [ 
      { start: new Date(0) , end: new Date(2) , data: { tag: 'right' } }, 
      { start: new Date(2) , end: new Date(4) , data: { tag: 'right' } }, 
      { start: new Date(4) , end: new Date(6) , data: { tag: 'left' } },
    ]);
  });
  
});
