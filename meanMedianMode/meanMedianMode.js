/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */

//Creat a function to calculate the mean, median, and mode
//pass through an arr that holds the numbers
//calculate the mean
//calculate the median
//calculate the mode
//pass the mean, mode, median into an object

testArray = [1,4,3,5,6,7,5,5,7,6,4,9,34];

const MeanMedianMode = (arr) => {

  let mean  = 0, median = 0, medianHolder = 0, max = 0, count = 0;
 let mode = {};
  
  for(let i = 0; i < arr.length; i++){
    mean += arr[i];
    median = Math.floor(arr.length/2);
  }
  medianHolder = arr[median];

  arr.forEach(function(j) {
        if (mode[j]) { 
          
          mode[j]++;
        }
        else 
        { 
          mode[j] = 1;
        } 

        if (count<mode[j])
        { 
            max = j;
            count = mode[j];
        }
    });
  
  return {mean: mean, median: medianHolder, mode: max};

};

console.log(MeanMedianMode(testArray));