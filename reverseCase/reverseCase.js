/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */ 

 const convert = (str) => {
     let s = ''; 
     for (let i = 0; i < str.length; i++) {
         let n = str.charAt(i);  
         s +=  (n.toLowerCase()=='a' ? '#' : n == n.toUpperCase() ? n.toLowerCase() : n.toUpperCase());
     }
        return s; 
 }
  const change = convert('HELLOWORLD'); 
  console.log(change); 