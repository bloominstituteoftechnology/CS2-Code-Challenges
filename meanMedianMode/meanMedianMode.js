/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */
// Test Cases
// [1, 2, 4, 3, 4] -> { mean: 2.8, median: 3, mode: 4 }
// [50, 2, 12, 3, 4] -> { mean: 14.2, median: 4, mode: null }
// [2, 3, 4, 3, 2, 4] -> { mean: 3, median: 2.5, mode: [2, 3, 4] }

/*
create function that takes in an array of numbers
    intialize object with mean, median, and mode keys
    intitalize an object to keep track on the amount of times weve seen a number
    sort the array from least to most
    for each 
        number in the array add it to the mean
        if the mode object has the number intialize the number with value 0
        add one to the mode object at that keys value
    take the objects mean and divide it by the length of the array to get the mean value
    if the array is even the median value will be average of the two middle values
    if the array is odd the median value will be the middle value
    set variables for an array of the mode objects values and its keys
    set a variable for the max number within the values array
    if the max times is not equal to 1 run a for each
        if the value is equal to the maxtimes value then push the number at that keys index to mode
    else set the mode to null
    if the maxtimes is greater than 1 and the modes ovject length is one set the mode to the single number within the modes array
    return the object
    */

 const meanMedianMode = (arr) => {
   const obj = {
         mean: null,
         median: null,
         mode: [],
   };
   const modeObj = {}
   arr.sort((a, b) => a - b)
   arr.forEach((n) => {
     obj.mean = obj.mean + n;
     if (!modeObj[n]) modeObj[n] = 0;
     modeObj[n]++;
   })
   obj.mean = obj.mean/arr.length;
   if (arr.length % 2 === 0) obj.median = (arr[arr.length/2 - 2] +  arr[arr.length/2 - 1])/2
   if (arr.length % 2 !== 0) obj.median = arr[Math.floor(arr.length/2)];
   const values = Object.values(modeObj);
   const keys = Object.keys(modeObj); 
   const maxTimes = Math.max(...values);
   if (maxTimes !== 1) {
     values.forEach((val, i) => {
       if (val === maxTimes) obj.mode.push(Number(keys[i]));
     });
   } else {
     obj.mode = null;
   }
   if (maxTimes > 1 && obj.mode.length === 1) obj.mode = obj.mode[0];
   return obj;
 }
 