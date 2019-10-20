// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// Path simplifies the page delivery to express
// ===============================================================================
var path = require('path');

// ===============================================================================
// ROUTING
// Routing tells the app what page to delivery based on the URL
// This will be executed inside of a module exports function so that the paths can be included on the server later
// ===============================================================================

module.exports = function(app){
    // In my export, pass in the parameter app, which refers to express, then, when user hits url /survey, go ahead and deliver the file survey.html.
    // Make sure that server.js includes this file
	// ---------------------------------------------------------------------------

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// Same as above, but for the home page (if user isn't on predefined page)
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}