/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 * 
 * beast mode: try not to use two for loops. 
 *  hint: most array methods native to JS iterate in some way. 
 *  So if you're using 'indexOf' 'sort' 'forEach' etc, 
 *  you're more than likely using a for loop under the hood.
 */
var arr = [1, 1, 1, 2, 2, 3, 4, 5, 5, 6];
function newNum(arr){
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) == -1){
        newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(newNum(arr));
	
	//code here...
