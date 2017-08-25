/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
 
 /*Identify test cases
 string = 'abcd' => true
 string = 'abcdc' => false
 */

 /* function isUnique
  create new string
  iterate over  string
    if newstring does not include original string at index than add it to string
  if lengths of string are equal return true
    */

const isUnique = (string) => {
    let uniqueString = '';
    for(let i = 0; i < string.length; i++) {
        if(!uniqueString.includes(string[i])) {
            uniqueString += string[i];
        }
    }
    if(string.length === uniqueString.length) {
        return true;
    }  else {
        return false;
    }
};

//Alt
//Changes string to array but more simple
//set a variable to true
//run for each on array of characters
//  if character is the array after the first incidence it changes the variable to false
//return the variable
//must set variable because you can not make a return midway through forEach (it will not stop and keep going)

const uniqAlt = (string) => {
    let boo = true;
    string.split('').forEach((char, i) => {
        if(string.split('').includes(char, i + 1)) {
            boo = false;
        }
    });
    return boo;
};

console.log(uniqAlt('abcd'));
console.log(uniqAlt('abcdc'));

console.log(isUnique('abcd'));
console.log(isUnique('abcdc'));