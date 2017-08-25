/*
 * Given an array of numbers calculate the mean, median, and mode.
 * Return an object with properties for the mean, median, and mode.
 */
 
const mmmArrCalc = arr => {
  arr = arr.sort((a,b)=>{return a-b}); 
  const countEach = {}
  let sum = 0;
  let med = 0;
  if (arr.length %2 === 0) {
    med = (arr[arr.length/2] + (arr[(arr.length/2)-1]))/2;
  } else med = arr[Math.floor(arr.length/2)];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (countEach[arr[i]]) {
      countEach[arr[i]] += 1;
    } else {
      countEach[arr[i]] = 1;
    }
  }
  const countK = Object.keys(countEach);
  let most = 0;
  let mostValue = 0;
  for (let i = 0; i < countK.length; i++) {
    if (countEach[countK[i]] > most) {
      most = countEach[countK[i]];
      mostValue = countK[i];
    }
  }
  const mmm = {};
  mmm.median = med;
  mmm.mean = sum/arr.length;
  mmm.mode = mostValue;
  return  mmm; 
}

console.log(mmmArrCalc([20,10,30,20]))
