
/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */


const vowelCount = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u'  ){
            count += 1;
        }
    }
    return count;
};
let testString = "HEllo ArE you Ok thIs is A soLUtiOn"
console.log("You have " + vowelCount(testString) + " vowels.");