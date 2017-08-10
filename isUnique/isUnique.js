/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

const isUniq = (str) => {
  let newStr;
  
  const strlen = str.length;
  if (strlen > 127) {
    return false;
  }

  for (let i = 0; i < strlen; i++) {
    newStr = str[i];
    if (str.indexOf(newStr, i + 1) > -1) {
      return false;
    }
  }  
  return true;
};
console.log(isUniq('abc'));

