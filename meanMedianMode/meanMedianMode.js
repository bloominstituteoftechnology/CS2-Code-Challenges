/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

const mean = function(arr) {
  let total = 0, i;

  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

const median = function(arr) {
  let median = 0;
  
  if (arr.length % 2 === 0) {
    median = (arr[arr.length / 2 - 1] + arr[arr.length / 2] / 2);
  } else {
    median = numbers[(arr.length - 1) / 2];
  }
  return median;
}

const mode = function(arr) {
  let modes = [];
  let count = [];
  let i = 0;
  let number = 0;
  let maxIndex = 0;

  for (i = 0; i < arr.length; i++) {
    number = arr[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count) {
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }
    return modes;
  }
}

function meanMedianMode(arr) {
  const mMMObj = {
    mean: mean(arr),
    median: median(arr),
    mode: mode(arr)
  };
  return mMMObj;
}