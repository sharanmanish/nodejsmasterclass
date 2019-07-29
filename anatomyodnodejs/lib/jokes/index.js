// dependencies

var fs = require('fs');

//add object
var jokes = {};

// get all the jokes and return them to the user
jokes.allJokes = function() {
    // read the text file containing  jokes
    var fileContents = fs.readFileSync(__dirname+'/jokes.txt', 'UTF-8');

    // turn the string into array

    var arrayOfJokes = fileContents.split(/\r?\n/);

    // return the array
    return arrayOfJokes;
}


module.exports = jokes;