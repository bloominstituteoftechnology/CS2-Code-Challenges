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

// const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango']; => The first item is pineapple
//Create function taking array and callback as arguements
//  pass the first item of the array to the callback

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

const firstItem = (arr, cb) => cb(arr[0]);

firstItem(foods, (firstItem) => {
  console.log(`The first item is ${firstItem}.`);
});



// Write a function called getLength that passes the length of the array into the callback
//const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango']; => The length of the array is 7
// write function
//  pass arr.length into callback

const getLength = (arr, cb) => cb(arr.length);

getLength(foods, (length) => {
  console.log(`The length of the array is ${length}.`);
});


// Write a function called last which passes the last item of the array into the callback
//const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango']; => The last item of the array is mango
//create function
//  pass arr at last index to callback

const last = (arr, cb) => cb(arr[arr.length - 1]);

last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback
// 5, 10 => The sum is 15.
// create function
//  add numbers together and pass to cb

const sumNums = (n1, n2, cb) => cb(n1 + n2);

sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
//assuming mean multiply two numbers not add
// 5, 10 => The product is 15
//create function, multiply numbers pass to cb

const multiplyNums = (n1, n2, cb) => cb(n1 * n2);

multiplyNums(5, 10, (product) => {
  console.log(`The product is ${product}.`);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
// ribeye => ribeye is in the array
// create function
//  if array includes string pass true to callback otherwise pass false

const contains = (array, str, cb) => array.includes(str) ? cb(true) : cb(false);

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
//['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'] = foods with duplicates removed: 'pineapple', 'mango', 'ribeye', 'curry', 'tacos'
// create function 
//  make new array
// if not present in new array than push to new array

const removeDuplicates = (array, cb) => {
  const uniq = [];
  array.forEach((str) => {
    if (!uniq.includes(str)) uniq.push(str);
  });
  cb(uniq);
}

removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
// ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'] => pineapple is at index 0, etc...
// create function 
// iterate over the array and push the value and index to callback for each element

const forEach = (foods, cb) => {
  for (let i = 0; i < foods.length; i++) {
    cb(foods[i], i);
  }
}

forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});