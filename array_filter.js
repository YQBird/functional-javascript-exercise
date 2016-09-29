// # Task

// Use Array#filter to write a function called getShortMessages.

// getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

// The function should return an array containing the messages themselves, without their containing object.

// ## Arguments

//   * messages: an Array of 10 to 100 random objects that look something like this:

//     {
//       message: 'Esse id amet quis eu esse aute officia ipsum.' // random
//     }

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any unnecessary functions e.g. helpers.

function getShortMessages(messages) {
      // SOLUTION GOES HERE
      var filterFunc = function(value){
      	if(value.message && typeof value.message === 'string'){
      		return value.message.length < 50;
      	}else{
      		return false;
      	}
      }

      var mapFunc = function(value){
      	return value.message;
      }
      return messages.filter(filterFunc).map(mapFunc);	
}

module.exports = getShortMessages
