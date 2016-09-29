module.exports = function(namespace) {
      // SOLUTION GOES HERE
      // function list(){
      // 	var rst = [];
      // 	for(var i = 0; i < arguments.length; i++){
      //       rst.push(arguments[i]);
      // 	}

      // 	console.log(rst.join(" "));
      // }

      // return list.bind(null, namespace);
      return console.log.bind(console, namespace);

}

// The bind() method creates a new function that, when called, has its 
// this keyword set to the provided value, with a given sequence of 
// arguments preceding any provided when the new function is called.