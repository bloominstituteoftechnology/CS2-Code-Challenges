/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

const findUnique = (str) => {
  let i, ch;
  let len = str.length;
  let freqMap = new Map();
  let uniq = '';

  for (i = 0; i < len; i++) {
    ch = str[i];
    if (!freqMap.get(ch)) {
      freqMap.set(ch, 1);
    } else {
      freqMap.set(ch, -1);
    }
  }

  freqMap.forEach(function(val, key) {
    if (val == 1) {
      uniq += key;
    }
  });

  return uniq;
}



console.log(findUnique('bar')); // bar
console.log(findUnique('foo')); // f




// 'abcdefg' -> true
// 'abcdefgg' -> false

/*
  function isUnique str
    iterate over str
      iterate over str starting at i + 1
        if we find a match return false
    return true;
*/

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

const result = isUnique(str2);

console.log(result);