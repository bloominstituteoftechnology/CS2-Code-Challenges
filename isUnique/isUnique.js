/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

/*
 let isUnique = string => {
   unique: 'Hello'
   unique1: 'Hi'
   unique2: 'This'
 };

 if (isUnique < 100) {
   console.log('this does not have unique char');
 } else
   console.log('This has unique char');
   console.log(isUnique);

switch (isUnique()) {
  case (isUnique.unique): {
    console.log('char hello');
  }
  case(isUnique.unique1): {
    console.log('char hi');
  }
  case(isUnique.unique2): {
    console.log('char this');
    break;
  }
  console.log('No other char');
}
console.log('Program ending');

*/

/*
function isUnique structures
iterate over str
iterate over str starting at i + 1
if we find a match return false
return true;
*/

/*
const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) return false;
    }
  }
  return true;
};
const str1 = 'abcdefg';
const str2 = 'abcdefgg';
const result = isUnique(str1);
console.log(result);
*/



const isUnique = (str) => {
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    const isInSet = set.has(character);
    if(isInSet) return false;
    if (!isInSet) set.add(character);
  }
  return true;
};
const str1 = '1234567890qwertyuiopasdfghjklzxcvbnm';
const str2 = 'abcdefgg';

const result = isUnique(str1);

console.log(result);
