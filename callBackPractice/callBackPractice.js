/*  For today's coding challenge your job is to write functions
 *  so that each function call works.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
*/


// Write a function called firstItem that passes the first item of the given array to the callback function
const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

const firstItem = (foods, (firstItem) => {
  firstItem = foods[0];
  console.log(`The first item is ${firstItem}.`);
});
firstItem();

// Write a function called getLength that passes the length of the array into the callback
const getLength = (foods, (length) => {
  length = foods.length;
  console.log(`The length of the array is ${length}.`);
});
getLength();

// Write a function called last which passes the last item of the array into the callback
const last = (foods, (lastItem) => {
  lastItem = foods[6];
  console.log(`The last item in the array is ${lastItem}.`);
});
last();

// Write a function called sumNums that adds two numbers and passes the result to the callback
const sumNums = (5, 10, (sum) => {
  sum = 5 + 10;
  console.log(`The sum is ${sum}.`);
});
sumNums();

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
const multiplyNums = (5, 10, (product) => {
  product = 5 * 10;
  console.log(`The product is ${product}.`);
});
multiplyNums();

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
const contains = (foods, 'ribeye', (result) => {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'ribeye'){
      result = foods[i];
    }//if
  }//for
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});
contains();

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
const removeDuplicates = (foods, (uniqueFoods) => {
  let newFoods = [];
  for (let i = 0; i < foods.length; i++) {
    newFoods[i] = foods[i];
  }
  uniqueFoods = newFoods.slice(1,2);
  console.log(uniqueFoods)

  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});
removeDuplicates();

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
const forEach = (foods, (value, index) => {
 for (let i = 0; i < foods.length; i++) {
   value(foods[i], index);
 }
  console.log(`${value} is at index ${index}.`);
});
forEach();
