//require the friends data file
var friends = require("../data/friends.js");

//routes
module.exports = function (app) {
    //API GET requests
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    })
};
//API POST requests
app.post('/api/friends', function(req, res) {
    //compating user with their best furrriend match
    var totalDifference = 0;
    //object to hold best match
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };
    //Grab user's survey POST and parse it
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;
    //can't do much with a string, so convert the user's score to an integer
    var b = userScores.map(function(item) {
        return parseInt(item, 10);
    });
    userData = {
        "name": req.body.name,
        "photo": req.body.photo,
        "scores": b
    };

    console.log("Name: " + userName);
    console.log("User Score " + userScores);
    // Converting the users score to a sum number (Adds up all the numbers in array)
    var sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of users score " + sum);
    console.log("Best match friend diff " + bestMatch.friendDifference);

    console.log("+++++++=================++++++++++");

    // Loop through all the friend possibilities in the database. 
    for (var i = 0; i < friends.length; i++) {
        totalDifference = 0;
        console.log(friends[i].name);
        console.log("Best match friend diff " + bestMatch.friendDifference);

        var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
        console.log("Total friend score " + bfriendScore);
        totalDifference += Math.abs(sum - bfriendScore);
        console.log(" -------------------> " + totalDifference);

// If the sum of differences is less then the differences of the current "best match"
// We are looking for the smallest difference (most similar) interests
    if (totalDifference <= bestMatch.friendDifference) {
    // Reset the bestMatch to be the new furrrriend. 
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
        // If someone runs the application a second time they won't get themselves
        if (bestMatch.name == userName){
            bestMatch.name = "Colonel Scottish Fold";
            bestMatch.photo = "https://media.mnn.com/assets/images/2016/05/cat-mutation-scottish-fold.jpg.990x0_q80_crop-smart.jpg";
            bestMatch.friendDifference = 10;
        }
    } console.log(totalDifference + " Total Difference");

    } console.log(bestMatch);
    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).
    friends.push(userData);
    console.log("New User added");
    console.log(userData);
    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
    res.json(bestMatch);

    })

// API GET Requests - when users "visit" a page. 
// (ex:localhost:PORT/api/admin...they are shown a JSON of the data in the table) 

