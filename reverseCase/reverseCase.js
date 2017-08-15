/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const convertString = (str); => {
    let s = '';
    for (let i=0; i<str.length; i++) {
        let n = str.charAt(i);
        if (n.toLowerCase() === n){
            s += n.toUpperCase();
        } else {
            s += n.toLowerCase();
        }
    }
    return s;}