/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */
/* 
write function that takes in string
    set count to 0;
    loop through string
        if the character matches and of the characters a e i o or u (ignoring case) then add 1 to count
    return count
*/

// Test Cases
// 'Hello World!' -> 3
// 'fasdRE342;cdsa . d' -> 3
//  ' ' -> 0

 const vowelCount = (s) => {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if (s[i].match(/[aeiou]/i)) count++;
    }
    return count;
 };
