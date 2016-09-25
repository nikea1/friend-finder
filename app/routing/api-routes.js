var friends = require("../data/friends");

//displays friend list
exports.getFriends = function(req, res){
	res.json(friends.matches)
}

exports.postFriends = function(req, res){
	//recieved json object
	
	var newbie = req.body;
	//newbie.score = newbie.score.map(parseInt);

	newbie.score = newbie.score.map(function(x){return parseInt(x)});
	console.log(newbie.score);

	var pScore = newbie.score;
	//console.log("newbie's score", pScore);
	
	min = 101;
	pot = {result: "Something when wrong"};
	
	//console.log("friend list\n", friends.matches);
	//console.log("length of matches\n", friends.matches.length)

	
	
	//loops through list of friends
	for(var i = 0; i <friends.matches.length;i++){
		//loops through score array

		var test = friends.matches[i].score.map(function(x, j){
			
			return Math.abs(x - pScore[j]);
		})

		console.log(test);

		var sum = test.reduce(function(total, num){return total+num})
		/*
		var acc = []
		for(var j = 0; j < 10; j++){

			//get data from friend score and new friend score and subtracts from each other
			//then pushes result in array
			var val = friends.matches[i].score[j] - (pScore[j])
			//console.log("friend "+i+" "+friends.matches[i].score[j]);
			//console.log("pScore", pScore[j]);
			//console.log("val: "+j+" "+val);

			acc.push(Math.abs(val));
			

			console.log("result", friends.matches[i].score[j] - (pScore[j]));
		}
		console.log(acc);
		
		//add all results using functional programming
		var sum = acc.reduce(function(total, num){return total+num})
		*/
		

		//if result smaller than older result
		if(sum < min){
			//save new result and save potential friend
			min = sum;
			pot = friends.matches[i];
		}
	}

	console.log("potential match", pot);
	//add new friend to friend list
	friends.matches.push(newbie);
	console.log("new frend list\n", friends.matches);
	//respond with potential friend
	res.json(pot);




}
