function loadUsers(userIds, load, done) {
  var users = [];
  for (var i = 0; i < userIds.length; i++) {
    // users.push(load(userIds[i]))
    (function(num){
    	load(userIds[num], function(data){
    		if(data){
    			users.push(data);
    		}	
    	});
    })(i)
  };
  return users;
}

module.exports = loadUsers
