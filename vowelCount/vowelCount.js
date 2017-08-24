/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */
const vowelCount = (str) => {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if (vowels[str[i].toLowerCase()]) count += 1;
  } 
  return count;
};

console.log(vowelCount('Hello WOrld!'));
