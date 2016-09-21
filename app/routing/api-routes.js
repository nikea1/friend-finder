var friends = require("../data/friends");

exports.getFriends = function(req, res){
	res.json(friends.matches)
}

exports.postFriends = function(req, res){
	//recieved json object
	res.json(req.body);
	var newbie = req.body;
	newbie.score.map(parseInt);
	var pScore = newbie.score;
	//console.log("newbie's score", pScore);
	
	min = 101;
	pot = {result: "Something when wrong"};
	var acc = []
	console.log("friend list\n", friends.matches);
	console.log("length of matches\n", friends.matches.length)

	
	

	for(var i = 0; i <friends.matches.length;i++){
		for(var j = 0; j < 10; j++){

			acc.push(friends.matches[i].score[j] - parseInt(pScore[j]));
			console.log("result", friends.matches[i].score[j] - parseInt(pScore[j]));
		}
		console.log(acc);
		var sum = acc.reduce(function(total, num){return total+num})

		if(sum < min){
			min = sum;
			pot = friends.matches[i];
		}
	}

	console.log(pot);
	
	friends.matches.push(newbie);
	console.log(friends.matches);





}
