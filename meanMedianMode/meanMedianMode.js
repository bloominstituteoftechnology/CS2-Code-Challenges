const calc = (arr) => {
  // Initialize an object
  const obj = new Object();
  
  // Mean:
  const calc_the_mean = arr.reduce((a, b) => {
    return a + b / arr.length;
   });
  
   // Median:
   const order_nums = arr.sort((a, b) => {
     return Math.floor((a-b) + arr.length / 2);
   });
  
   // Mode:
   const mode_ = arr.sort((a, b) =>
           arr.filter(x => x === a).length -
           arr.filter(x => x === b).length).pop();

  
  obj.mean = calc_the_mean;
  obj.median = order_nums;
  obj.mode = mode_;
  
  return obj;
};
console.log(calc([12, 10, 11, 12, 23, 17]));