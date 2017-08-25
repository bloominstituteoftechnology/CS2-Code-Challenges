/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */
/*
 function longestString (arr)
    let longest = 0;
    for loop i=0 i<arr.length-1 i++
        if arr[i].length>arr[i+1].length
            longest = arr[i]
        else longest = arr[i+1]
     return longest;
 */

const longestString = arr => {
    let longest = 0;
    for (let i=0; i<arr.length-1; i++){
        if (arr[i].length > arr[i+1].length){
            longest = arr[i];
        } else {
            longest = arr[i+1];
        }
    }
    return longest;
}

console.log(longestString(['hello', 'Moto', 'ringtone']));