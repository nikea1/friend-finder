var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var html = require("./app/routing/html-routes.js");
var api = require("./app/routing/api-routes.js");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//routing
app.get("/survey", html.survey);
app.get("/api/friends", api.getFriends);
app.post("/api/friends", api.postFriends);
app.use("/", html.home);

//port listener
app.listen(PORT, function(){
	console.log("Now listening to Port: "+PORT)
})