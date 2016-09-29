var slice = Array.prototype.slice
    
function logger(namespace) {
  // SOLUTION GOES HERE
  return function(){
  	var rst = slice.apply(arguments);
  	var str = rst.join(' ');
  	console.log(namespace, str);
  }
}

module.exports = logger