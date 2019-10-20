var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});









// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');

// var PORT = process.env.PORT || 8080;

// //create application/json parser
// var jsonParser = bodyParser.json()

// //create application/x-www-form-urlencoded parser
// var urlencodedParses = bodyParser.urlencoded({ extended: false })

// //parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/**json' }))

// //parse some custom thing into a buffer
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// //parse an html body into a string
// app.use(bodyParser.text({ type: 'text/html' }))

// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// })


// // Chosen CSS
// var config = {
//     '.chosen-select': {},
//     '.chosen-select-deselect': {
//         allow_single_deselect: true
//     },
//     '.chosen-select-no-single': {
//         disable_search_threshold: 10
//     },
//     '.chosen-select-no-results': {
//         no_results_text: 'Oops, nothing found!'
//     },
//     '.chosen-select-width': {
//         width: "95%"
//     }
// }

//     for (var config {
//     $('.chosen-select').chosen(config['.chosen-select']);
//     });
//   // Grab the user's inputs 
//     $("#submit").on("click", function() {
//     // validate the form
//     function validateForm() {
//     var isValid = true;
//     $('.form-control').each(function() {
//     if ($(this).val() === '')
//     isValid = false;
//     });
        
//     $('.chosen-select').each(function() {
//     if ($(this).val() === "")
//     isValid = false
//     })
//     return isValid;
//     }
//     // If the user completed the form, then
//     if (validateForm() == true) {
//       // make an object that contains the user's entries
//     var userData = {
//     name: $("#name").val(),
//     photo: $("#photo").val(),
//     scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
//         }
//     // Grab the URL of the website
//     var currentURL = window.location.origin;
//     // using AJAX, insert the data to the friends API. 
//     $.post(currentURL + "/api/friends", userData, function(data) {
//     // Grab the result from the AJAX post so that it populates the name of the best match
//     $("#matchName").text(data.name);
//     $('#matchImg').attr("src", data.photo);
//     // Actually display the best match 
//     $("#resultsModal").modal('toggle');
//     });
//     } else {
//     alert("Please fill out all fields before submitting");
//     }

//     return false;
// });