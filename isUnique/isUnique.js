/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
const checkStr = (uniqueString) => {
    const str = {};
        for (let i = 0; i < uniqueString.length; i++) {
            const check = str[i];
            if (uniqueString[check]) 
                return false;
            else uniqueString[check] = true; 
        }
    return true;
}
//test
console.log(checkStr("abddefg")); //true
console.log(checkStr("aa")); //false