
export interface Period<T> {
  // Beginning of period, inclusive
  start: Date;
  // End of period, exclusive
  end: Date;
  // Data related to this period
  data: T;
}

export type Series<T> = Period<T>[];

export const getValuePeriod = <T>(series: Series<T>, value: Date): Period<T> | undefined => {
  return series.find(p => p.start <= value);
};

export type CloneDataFn<T> = (t: T) => T;
export type MergeDataFn<T> = (l: T, r: T) => T;

export const merge = <T>(left: Series<T>, right: Series<T>, cloner: CloneDataFn<T>, merger: MergeDataFn<T>): Series<T> => {

  if (!left.length) return [...right];
  if (!right.length) return [...left];

  const merged: Series<T> = [];

  let lp = 0;
  let rp = 0;

  let l = left[0];
  let r = right[0];

  while(lp < left.length || rp < right.length) {

    let next_left = false;
    let next_right = false;

    if (lp >= left.length) {
      // No items left in left, we continue until we run out of right.
      merged.push({ ...r, data: cloner(r.data) });
      next_right = true;
    }

    else if (rp >= right.length) {
      // No items left in right, we continue until we run out of left.
      merged.push({ ...l, data: cloner(l.data) });
      next_left = true;
    }

    else if (l.end < r.start) {
      // Left item comes entirely before right item
      merged.push({ ...l, data: cloner(l.data) });
      next_left = true;
    }

    else if (r.end < l.start) {
      // Right item comes entirely before left item
      merged.push({ ...r, data: cloner(r.data) });
      next_right = true;
    }

    else {

      if (l.start === r.start) {
        if (l.end > r.end) {
          merged.push({ ...r, data: merger(l.data, r.data) });
          l = { ...l, start: r.end };
          next_right = true;
        } else if (l.end < r.end) {
          merged.push({ ...r, end: l.end, data: merger(l.data, r.data) });
          r = { ...r, start: l.end };
          next_left = true;
        } else {
          merged.push({ ...r, data: merger(l.data, r.data) });
          next_left = true;
          next_right = true;
        }
      } else if (l.start < r.start) {
        merged.push({ ...l, end: r.start, data: cloner(l.data) });
        l = { ...l, start: r.start };
      } else {
        merged.push({ ...r, end: l.start, data: cloner(r.data) });
        r = { ...r, start: l.start };
      }

    }

    if (next_left = next_left || (l && l.start >= l.end)) {
      l = left[++lp];
    }

    if (next_right = next_right || (r && r.start >= r.end)) {
      r = right[++rp];
    }

  }

  return merged;

};
