/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
    /** Create an empty string to build upon
     * then iterate over each letter on string (for loop)
     * compare if str[i] to str[i].toLowerCase
     * emptyString += str[i].toUpperCase()
     * else emptyString += str[i].toLowerCase()
     * return emptyString*/
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toLowerCase()){
            newStr += str[i].toUpperCase();
        }
        else{
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}

console.log(reverseCase('HdaYhgksFewCbfjEfjVjeBNU'));