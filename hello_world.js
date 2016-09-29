// # Task

// Write a function that takes an input string and returns it uppercased.

// ## Arguments

//   * input: a String of random words (lorem ipsum).

function upperCaser(input) {
      // SOLUTION GOES HERE
      if(input && typeof input === 'string'){
      	return input.toUpperCase();
      }
      
}

module.exports = upperCaser
