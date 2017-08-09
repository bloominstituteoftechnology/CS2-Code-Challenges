/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const caseChange = (str) =>{
    let newCase = '';
    for (let i = 0; i < str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            newCase += str[i].toUpperCase();
        }else {
            newCase += str[i].toLowerCase();
        }
    }
    console.log(newCase);
    return newCase;
}

let string = 'Hello World';

let reversedString = caseChange(string);
