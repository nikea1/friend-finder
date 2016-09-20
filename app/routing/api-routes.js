var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");

var app = express();
var PORT = 3000


var matches = [

	{
		name: "Namae",
		image: "http://placehold.it/350x350",
		score: [1,2,3,4,5,4,3,2,1,5],
	}

]

app.get('/api/friends', function(req, res){
	res.json(matches)
})

app.post('/api/friends', function(req, res){
	//recieved json object
	var newbie = req.body;

	var pScore = newbie.score;

	min = 101;
	pot = {result: "Something when wrong"};
	for(var i = 0; i < matches.length; i++){
		
		var acc = matches[i].score.map(function(x, j){
			return abs(x - pScore[j]) 
		})
		
		nmin = sum(acc)
		if(min > nmin){
			min = nmin;
			pot = matches[i];
		}
	}

	res.json(pot);

	matches.push(newbie);


})
/*
app.use('/', function(req, res){
	res.sendFile(path.join(__dirname, "../public/home.html"));
})

app.listen(PORT, function(){
	console.log("Now listening to Port: "+PORT)
})*/