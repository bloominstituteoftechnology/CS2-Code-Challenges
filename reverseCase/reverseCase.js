/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

// 1. identify test cases
// 'Hello World' -> 'hELLO wORLD'
// 'tE sT' -> 'TeSt'
// '' -> ''

/*
function reverseCase
    new string intitalizes
    loop through string
    if string.charCodeAt(i) is between 64 and 91
        change letter to lower case add to new string
    if letter is between 96 and 123
        change to uppercase add to new string
    else
        add to new string
    */

const reverseCase = (string) => {
   let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
            newString += string[i].toLowerCase();
        }
        else if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
            newString += string[i].toUpperCase();
        }
        else {
            newString += string[i];
        }
    }
    return newString;
}

//An alternative way using forEach && push instead of iterating through string
const reverseCaseAlt = (string) => {
   const newString = [];
   string.split('').forEach((letter) => {
        if (letter.toLowerCase() === letter) {
            newString.push(letter.toUpperCase());
        }
        else if (letter.toUpperCase() === letter) {
            newString.push(letter.toLowerCase());
        }
        else {
            newString.push(letter)
        }
   })
    return newString.join('');
}


console.log(reverseCase('Hello World'));
console.log(reverseCase('tE sT'));
console.log(reverseCase(''));


console.log(reverseCaseAlt('Hello World'));
console.log(reverseCaseAlt('tE sT'));
console.log(reverseCaseAlt(''));