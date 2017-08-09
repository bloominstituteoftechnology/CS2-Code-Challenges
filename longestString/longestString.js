/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const longestString = (arr) => {
    let longest = 'abcd';
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;

};

const strings = ['a', 'abcd', 'abc'];
console.log(longestString(strings));
