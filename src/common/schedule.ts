/*
 * This module implements primitive types and functions to deal with temporal
 * schedules as arrays of non-overlapping period objects.
 */

/**
 * A period is defined by its start date (inclusive),
 * its end date (exclusive) and related data.
 */
export interface Period<T> {
  /** Beginning of this period, inclusive */
  start: Date;
  /** End of this period, exclusive */
  end: Date;
  /** Data related to this period */
  data: T;
}

/** 
 * A schedule is a temporally-ordered collection of discrete, 
 * non-overlapping periods.
 */
export type Schedule<T> = Period<T>[];

/**
 * Data cloning functions are used by other functions in this module to create
 * identical copies of period's data. A data cloning function **must** return a
 * deep copy of the provided value.
 */
export type CloneDataFn<T> = (t: T) => T;

/**
 * Data merging functions are used by other functions in this module to merge
 * the data of two different periods into a new data value for a new period.
 */
export type MergeDataFn<T> = (l: T, r: T) => T;

/**
 * Returns the first (and only) period in the schedule which covers the time
 * instant represented by the provided date. Returns undefined if the schedule
 * does not contain one such period.
 */
export const getPeriodForDate = <T>(schedule: Schedule<T>, value: Date): Period<T> | undefined => {
  return schedule.find(p => p.start <= value);
};

/**
 * Merges two schedules together. Overlapping periods will be broken down into
 * shorter periods. The cloning and merging functions will be called to create
 * the resulting periods and may be used to customize the merging logic in the
 * case of partially or completely overlapping periods.
 */
export const merge = <T>(left: Schedule<T>, right: Schedule<T>, cloner: CloneDataFn<T>, merger: MergeDataFn<T>): Schedule<T> => {

  const merged_schedule: Schedule<T> = [];

  let lp = 0;
  let rp = 0;

  let l = left[0];
  let r = right[0];

  let next_left = false;
  let next_right = false;

  let merged_period: Period<T> | undefined;

  while(lp < left.length || rp < right.length) {

    if (lp >= left.length) {
      // No items left in left, we continue with left until we run out of items.
      merged_period = { ...r, data: cloner(r.data) };
      next_right = true;
    }

    else if (rp >= right.length) {
      // No items left in right, we continue with left util we run out of items.
      merged_period = { ...l, data: cloner(l.data) };
      next_left = true;
    }

    else if (l.end < r.start) {
      // Left item comes entirely before right item
      merged_period = { ...l, data: cloner(l.data) };
      next_left = true;
    }

    else if (r.end < l.start) {
      // Right item comes entirely before left item
      merged_period = { ...r, data: cloner(r.data) };
      next_right = true;
    }

    else {

      if (l.start === r.start) {
        // Left starts on the same date as right

        if (l.end > r.end) {
          // Left starts on the same date as right but ends after it
          merged_period = { ...r, data: merger(l.data, r.data) };
          l = { ...l, start: r.end };
          next_right = true;
        } else if (l.end < r.end) {
          // Left starts on the same date as right but ends before it
          merged_period = { ...l, data: merger(l.data, r.data) };
          r = { ...r, start: l.end };
          next_left = true;
        } else {
          // Left and right start and end on the same dates
          merged_period = { ...r, data: merger(l.data, r.data) };
          next_left = true;
          next_right = true;
        }
      } else if (l.start < r.start) {
        // Left starts before right
        merged_period = { ...l, end: r.start, data: cloner(l.data) };
        l = { ...l, start: r.start };
      } else {
        // Right starts before left
        merged_period = { ...r, end: l.start, data: cloner(r.data) };
        r = { ...r, start: l.start };
      }

    }

    if (merged_period) {
      if (merged_period.end > merged_period.start) {
        merged_schedule.push(merged_period);
      }
      merged_period = undefined;
    }

    if (next_left = next_left || (l && l.start >= l.end)) {
      // If left has collapsed into a zero-length period we advance to the next one
      l = left[++lp];
      next_left = false;
    }

    if (next_right = next_right || (r && r.start >= r.end)) {
      // If right has collapsed into a zero-length period we advance to the next one
      r = right[++rp];
      next_right = false;
    }

  }

  return merged_schedule;

};
