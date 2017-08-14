/* If not allowed another data structure then it would probably be O(n^2).
 * You could use a O(nlogn) sorting algorithm though to sort the array
 * and then just check to see if neighbors match.  This would be linear.
 */

const isUnique = (str) => {
  const strSet = new Set();
  for (let i = 0; i < str.length; i++) {
    if (strSet.has(str[i])) return false;
    strSet.add(str[i]);
  }
  return true;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false