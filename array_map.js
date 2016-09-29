
// # Task

// Convert the following code from a for-loop to Array#map:

//     function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }
    
//     module.exports = doubleAll

// ## Arguments

//   * numbers: An Array of 0 to 20 Integers between 0 and 9

// ## Conditions

//   * Your solution should use Array.prototype.map()
//   * Do not use any for/while loops or Array.prototype.forEach.
//   * Do not create any unnecessary functions e.g. helpers.

// The map() method creates a new array with the results of calling a 
// provided function on every element in this array.

// callback
// Function that produces an element of the new Array, taking three arguments:
// currentValue
// The current element being processed in the array.
// index
// The index of the current element being processed in the array.
// array
// The array map was called upon.
// thisArg
// Optional. Value to use as this when executing callback.
function doubleAll(numbers) {
  // SOLUTION GOES HERE
  var mapFunc = function(curtValue){
  	return curtValue = curtValue * 2;
  }

  return numbers.map(mapFunc);
}

module.exports = doubleAll
