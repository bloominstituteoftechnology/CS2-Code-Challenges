/*
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/
/*
const commonChar = (str1, str2) => {
    let string = [];
    if (str1.indexOf('a') > -1 && str2.indexOf('a') > -1) {
        string.push('a');
    }
    if (str1.indexOf('e') > -1 && str2.indexOf('e') > -1) {
        string.push('e');
    }
    if (str1.indexOf('i') > -1 && str2.indexOf('i') > -1) {
        string.push('i');
    }
    if (str1.indexOf('o') > -1 && str2.indexOf('o') > -1) {
        string.push('o');
    }
    if (str1.indexOf('u') > -1 && str2.indexOf('u') > -1) {
        string.push('u');
    }
    return string.join('');
}

const str1 = 'areyiwoqu';
const str2 = 'asedifogu';

console.log(commonChar(str1, str2));
*/


const commonChars = (str1, str2) => {
    let common = [];


    str1.split('').forEach((letter) => {
        if (str2.split('').includes(letter) && !common.includes(letter)) {
            common.push(letter);
        }
    });
    return common.join('').replace(' ', '');
}
console.log(commonChars('axei ou', 'aeidou'));