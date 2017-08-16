// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.


/*
By the time console.log is being called the final value of i is 11 because it has already ran through the loop
this is due to closure
when  creating a function it gets hoisted to the global scope.  i is not within its scope until after the loop runs
this is why creating a function within a loop is bad practice
in es6 an arrow function would solve this issue because it has lexical scope
*/
for (var i = 1; i <= 10; i++) {
  wrapper(i);
}

function wrapper(num) {
	setTimeout(function() {
		console.log(num);
	}, 0);
};

// By setting a function around setTimeout called wrapper we can take i each time 1 is added and
// call wrapper with i as the argument.  This i value is being saved at that point in time and
// console logged by setTimeout at each instance
// essentially calling a function and creating it have different closures.