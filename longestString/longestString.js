/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */


const longestString = (strings) => {
  let x = '';
  for (let i = 0; i < strings.length; i++) { 
    if (strings.length > x.length) {
      x = strings[i];
    }
  }
  return x;  
};

longestString(['computer','javascript', 'lambdaschool']);
