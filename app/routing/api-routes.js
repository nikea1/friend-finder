var friends = require("../data/friends");

//displays friend list

exports.getFriends = function(req, res){
	res.json(friends.matches)
}

exports.postFriends = function(req, res){
	//recieved json object
	var newbie = req.body;
	
	//turns data from array strings number to array of actual numbers
	newbie.score = newbie.score.map(Number);
	
	//store new friends score
	var pScore = newbie.score;
	
	min = 101;//set min value
	pot = {result: "Something went wrong"}; //set potential match
	
	//loops through list of friends
	for(var i = 0; i <friends.matches.length;i++){

		//uses list comprehension to processes friend score and new friends score
		//into a new list
		var results = friends.matches[i].score.map(function(x, j){return Math.abs(x - pScore[j]);})

		//total sum of results
		var sum = results.reduce(function(total, num){return total+num;})
		
		//if result smaller than older result
		if(sum < min){
			//save new result and save potential friend
			min = sum;
			pot = friends.matches[i];
		}
	}//end of for loop

	//add new friend to friend list
	friends.matches.push(newbie);
	
	//respond with potential friend
	res.json(pot);
}
