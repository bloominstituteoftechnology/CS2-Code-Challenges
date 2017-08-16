// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

for (var i = 1; i <= 10; i++) {
	doSetTimeout(i)
}

function doSetTimeout(i) {
  setTimeout(function() {
    console.log(i)
  }, 0);
}

// If you don't do something like this (and there are other variations on 
// this same idea), then each of the timer handler functions will share the 
// same variable "i". When the loop is finished, what's the value of "i"? 
// It's 3! 
// By using an intermediating function, a copy of the value of the 
// variable is made. Since the timeout handler is created in the context of 
// that copy, it has its own private "i" to use.