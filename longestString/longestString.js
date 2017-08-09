/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */  
const arr = ['cat', 'Dog', 
           'parrot'];

const lgth = 0;
let longest;

for(let i=0; i < arr.length; i++){
    if(arr[i].length > lgth){
        const lgth = arr[i].length;
        longest = arr[i];
    }      
} 

console.log(longest);