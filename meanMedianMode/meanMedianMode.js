/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

 const mmmArr = (arr) => {
   const o = {nums: {}, mean: 0, median: 0, mode: 0, maxOcc: 0};
   o.total = arr.reduce((t , v) => {
     o.nums[v] ? o.nums[v]++ : o.nums[v] = 1;
     if (o.nums[v] > o.maxOcc) {
       o.maxOcc = o.nums[v];
       o.mode = v
     }
     o.mean = t / arr.length;
     o.median = (arr.length / 2) % 2 ? 
      (arr[Math.ceil(arr.length / 2)] + arr[Math.floor(arr.length / 2)]) / 2 
      : 
      arr[Math.floor(arr.length / 2) + 1] 
     return t + v
  })
   return o;
 }

 const someNums = [1,5,3,4,5,6,6,6,7,8,9,10,11,12,12,4,4]
 const result = mmmArr(someNums)
 console.log('Mean:', result.mean, 'Median:', result.median, 'Mode:', result.mode)