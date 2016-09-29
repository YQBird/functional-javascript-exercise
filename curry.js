function curryN(fn, n) {
  // SOLUTION GOES HERE
  //check n is exist
  if(!n){
  	n = fn.length;
  }
  // curry function
  function getCurry(prevArr){
  	return function(arg){
  		var args = prevArr.concat(arg);
  		if(args.length < n) return getCurry(args);
  		else{
  			return fn.apply(null, args);
  		}
  	}

  }

  return getCurry([]);

}



module.exports = curryN
