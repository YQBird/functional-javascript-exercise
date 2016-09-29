// # Task:

// Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.




// The object may not have Object.prototype as its prototype.

// This is the case if the object was created with...

// var data = Object.create(null);
// You could use...

// Object.prototype.hasOwnProperty.call(data, 'test');
// ...to test if the property exists.

// Alternatively, but not recommended, you could change its prototype to act more like a standard object...

// data.__proto__ = Object.prototype;

function duckCount() {
  // SOLUTION GOES HERE
  var argArray = Array.prototype.slice.call(arguments);
  console.log(argArray);

  var filterFunc = function(curtValue){
      return Object.prototype.hasOwnProperty.call(curtValue, 'quack');
  };

  var rst = argArray.filter(filterFunc);
  return rst.length;
}

module.exports = duckCount