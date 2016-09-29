function Spy(target, method) {
  // SOLUTION GOES HERE
  var obj = {count: 0};

  var oldFunction = target[method];

  target[method] = function(){
  	obj.count++;
  	return oldFunction.apply(target, arguments);
  }

  return obj;
}

module.exports = Spy

