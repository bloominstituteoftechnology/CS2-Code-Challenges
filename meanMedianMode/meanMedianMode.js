/* Instructions
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

/* Mean: Sum of values of a data set divided by number of values.
 * Median: Middle value separating the greater and lesser halves of a data set
 * Mode: Most frequent value in a data set
 */

// Test Case
const a = [13, 18, 13, 14, 13, 16, 14, 21, 13];
// const a = [13, 18, 13, 14, 13, 16, 14, 21,];

// Solution
const mean = arr => {
  let sum = 0,
      i;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const median = arr => {
  let median = 0,
      len = arr.length;
  arr.sort();
  if (len % 2 === 0) median = (arr[len / 2 - 1] + arr[len / 2]) / 2;
  else median = arr[(len - 1) / 2];
  return median;
};

const mode = arr => {
  const seen = {};
  arr.forEach(i => {
    if (seen[i] === undefined) return (seen[i] = 1);
    if (seen[i] !== undefined) return (seen[i] += 1);

    console.log(seen[i]);
  });
  const tmp = Object.values(seen),
         mode = tmp.reduce((a, b) => Math.max(a, b));
  return mode;
  // return Math.max.apply(null, Object.values(seen));
};

class MeanMedianMode {
  constructor(options) {
    this.mean = options.mean;
    this.media = options.median;
    this.mode = options.mode;
  }
}

const obj = new MeanMedianMode({ mean: mean(a), median: median(a), mode: mode(a) });
console.log(obj);