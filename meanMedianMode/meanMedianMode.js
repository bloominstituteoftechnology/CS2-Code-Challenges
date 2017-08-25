/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */
const meanMedianMode = (arr) => {
    const sortedArr = arr.sort((a, b) => {return a - b;})
    const obj = {};
    const mean = (arr) => (arr.reduce((a, b) => a + b))/arr.length;
    const median = (arr) => {
      const lowMid = Math.floor((arr.length - 1) / 2);
      const highMid = Math.ceil((arr.length - 1) / 2);
      const average = (arr[lowMid] + arr[highMid]) /2;
      return average;
    }
    const mode = (arr) => {
        const numMapping = {};
        let greatestFreq = 0;
        let mode;
        arr.forEach((number) => {
            numMapping[number] = (numMapping[number] || 0) + 1;

            if (greatestFreq < numMapping[number]) {
                greatestFreq = numMapping[number];
                mode = number;
            }
        });
        return +mode;
    };
    obj.mean = mean(sortedArr);
    obj.median = median(arr);
    obj.mode = mode(arr);
    return obj;
}