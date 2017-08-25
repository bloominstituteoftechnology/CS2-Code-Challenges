/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

 /*
Need to iterate through a string to see if each character is unique
  -> create new string variable to hold characters as they are separted from the string argument
  if so, return true
otherwise, return false
 */

//If you want to count spaces as characters:

 const isUnique = (str) => {
   let newStr = '';
   for (let i = 0; i < str.length; i++) {
     if(newStr.includes(str.charAt(i))) {
       return false;
     } else {
       newStr += str.charAt(i);
     }
   }
   return true;
 }
console.log(isUnique('hello'));
console.log(isUnique('hey there'));
console.log(isUnique('name'));
console.log(isUnique('orange'));
console.log(isUnique('Hi man bro'));


//Otherwise:

const isUniqueOther = (str2) => {
  let newStr2 = '';
  for (let i = 0; i < str2.length; i++) {
    if(newStr2.includes(str2.charAt(i))) {
      return false;
    } else if (str2.charAt(i) !== ' ') {
      newStr2 += str2.charAt(i);
    }
  }
  return true;
}
console.log(isUniqueOther('hello'));
console.log(isUniqueOther('hey there'));
console.log(isUniqueOther('name'));
console.log(isUniqueOther('orange'));
console.log(isUniqueOther('Hi man bro'));
