function getDependencies(tree) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.

  // no for/while loop => no bfs and dfs
  rst = [];
  helper(tree, rst);
  return rst.sort();
}

function helper(tree, rst){
  if(!tree || !tree.dependencies){
  	return rst;
  }
  var children = Object.keys(tree.dependencies);
  console.log(children);

  children.forEach(function(curt, index){
  	
    var temp = curt + "@" + tree.dependencies[curt].version;
    if(rst.indexOf(temp) === -1){
    	rst.push(temp);
    }
  	helper(tree.dependencies[curt], rst);
  });
}

//this is dfs


module.exports = getDependencies