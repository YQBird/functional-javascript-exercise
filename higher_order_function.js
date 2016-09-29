// A higher-order function is a function that does at least one of the following:

//   * Take one or more functions as an input
//   * Output a function

// All other functions are first order functions. [1]

// loop version
function repeat(operation, num) {
  // SOLUTION GOES HERE
  for(var i = 0; i < num; i++){
  	operation();
  }
}

// recursion version
// function repeat(operation, num){
// 	if(num <= 0) return;
// 	operation();
// 	repeat(operation, num - 1);
// }

// Do not remove the line below
module.exports = repeat

