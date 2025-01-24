
import { deepStrictEqual } from 'node:assert';

interface Period {
  start: number;
  end: number;
}

type Series = Period[];

const advanceUntil = <T>(arr: T[], start: number, match: (t: T) => boolean, step: (t: T) => any): number => {
  while(start < arr.length && match(arr[start])) {
    step(arr[start++]);
  }
  return start;
};



const mergeRtoL = (left: Series, right: Series) => {

  if (!left.length) return left;
  if (!right.length) return right;

  const breaks = Array.from(new Set(left.flatMap(p => [p.start, p.end]).concat(right.flatMap(p => [p.start, p.end])))).sort((a, b) => a < b ? -1 : 1);

  let lp = 0;
  let rp = 0;
  let bp = 1;

  while (bp < breaks.length) {
    const lb = lp < left.length && breaks[bp - 1] >= left[lp].start && breaks[bp - 1] < left[lp].end;
    const rb = rp < right.length && breaks[bp - 1] >= right[rp].start && breaks[bp - 1] < right[rp].end;
    
    console.log('period', breaks[bp - 1], breaks[bp], 'L', lb, 'R', rb);

    bp += 1;
    if (lp < left.length && breaks[bp] - 1 > left[lp].end) {
      lp += 1;
    }
    if (rp < right.length && breaks[bp] - 1 > right[rp].end) {
      rp += 1;
    }
  }
  // const max_value = Math.max(left.at(-1)!.end, right.at(-1)!.end);

  // let [start, end] = [left[lp].start, left[lp].end, right[rp].start, right[rp].end].sort();

  // while (start < max_value) {

  //   console.log('period', start, end);

  //   start = end;

  //   end = Math.min(
  //     lp < left.length && left[lp].start > end ? left[lp].start : Infinity,
  //     lp < left.length && left[lp].end > end ? left[lp].end : Infinity,
  //     rp < right.length && right[rp].start > end ? right[rp].start : Infinity,
  //     rp < right.length && right[rp].end > end ? right[rp].end : Infinity,
  //   );

  //   if (lp < left.length && start >= left[lp].end) {
  //     lp += 1;
  //   }
  //   if (rp < right.length && start >= right[rp].end) {
  //     rp += 1;
  //   }

    
  // }


  // merged.push(...left.slice(lp));
  // merged.push(...right.slice(rp));
  // return merged;
};


console.log('left(1) before right(1)');
console.log(mergeRtoL([{ start: 0, end: 2 }], [{ start: 6, end: 8 }]));

console.log('left(1) after right(1)');
console.log(mergeRtoL([{ start: 6, end: 8 }], [{ start: 0, end: 2 }]));

console.log('left(2) around right(1)');
console.log(mergeRtoL([{ start: 0, end: 2 }, { start: 6, end: 8 }], [{ start: 3, end: 4 }]));

console.log('left(2) alternating with right(2)');
console.log(mergeRtoL([{ start: 0, end: 2 }, { start: 6, end: 8 }], [{ start: 3, end: 4 }, { start: 9, end: 11 }]));

console.log('left(1) contains right(1)');
console.log(mergeRtoL([{ start: 0, end: 6 }], [{ start: 3, end: 4 }]));

// deepStrictEqual(
//   mergeRtoL([{ start: 0, end: 2 }, { start: 6, end: 8 }], [{ start: 3, end: 4 }]),
//   [ { start: 0, end: 2 }, { start: 3, end: 3 }, { start: 6, end: 8 } ],
// )

// deepStrictEqual(
//   mergeRtoL([{ start: 0, end: 2 }], [{ start: 3, end: 4 }, { start: 6, end: 8 }]),
//   [ { start: 0, end: 2 }, { start: 3, end: 3 }, { start: 6, end: 8 } ],
// )


