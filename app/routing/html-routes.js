var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");

var app = express();
var PORT = 3000

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, "../public/survey.html"))
})

app.use('/', function(req, res){
	res.sendFile(path.join(__dirname, "../public/home.html"));
})

/*
app.listen(PORT, function(){
	console.log("Now listening to Port: "+PORT)
})*/