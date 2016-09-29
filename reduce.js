// # Task

// Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

// ## Example

//     var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
//     console.log(countWords(inputWords))
    
//     // =>
//     // {
//     //   Apple: 2,
//     //   Banana: 1,
//     //   Durian: 3
//     // }

// ## Arguments

//   * inputWords: An array of random Strings.

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any unnecessary functions e.g. helpers.

// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.



function countWords(inputWords) {
      // SOLUTION GOES HERE
  var rst = {};
  var reduceFunc = function(prevValue, curtValue, curtindex, array){
    console.log(prevValue);
    if(prevValue.hasOwnProperty(curtValue)){
      prevValue[curtValue] = prevValue[curtValue] + 1;
      return prevValue;
    }else{
      prevValue[curtValue] = 1;
      return prevValue;
    }
  
  };

  return inputWords.reduce(reduceFunc, rst);
      
}

module.exports = countWords;

