module.exports = function arrayMap(arr, fn) {
      // SOLUTION GOES HERE
      var rst = [];
      var initial = arr[0];
      arr.reduce(function(prevValue, curtValue){
      	rst.push(fn(curtValue));
      	return ;
      }, initial);
   
      return rst;

}