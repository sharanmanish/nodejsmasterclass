
// dependencies
var mathLib = require('./lib/math');
var jokesLib = require('./lib/jokes');

// app object
var app = {}


// configuration
app.config = {
    'timeBetweenJokes': 1000
};


// function that print random jokesLib

app.printAJoke = function() {
    // get all jokes
    var allJokes = jokesLib.allJokes();

    // get the length of jokes
    var numberOfJokes = allJokes.length;

    // pick a random no between 1 and no of jokes
    var randomNumber = mathLib.getRandomNumber(1, numberOfJokes);

    // get the joke at the position in array - 1
    var selectedJokes = allJokes[randomNumber -1];

    // send the jokes to the console

    console.log(selectedJokes);

}

// Function that loops indefinitely, calling the printAJoke function as it goes
app.indefiniteLoop = function(){

    // Create the interval, using the config variable defined above
    setInterval(app.printAJoke,app.config.timeBetweenJokes);
};


// Invoke the loop
app.indefiniteLoop();