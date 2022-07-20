const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = 7;
let numAttempts = 5;

askLimit();

function askLimit()
{
    rl.question("Enter the number of guesses: ", answer => {
        numAttempts = Number(answer);
        askRange();
    });
}

function askRange()
{
    let min = 0;
    let max = 10;
    rl.question("Enter a max number: ", getMax);
    // assign input maximum as end of range
    function getMax(answer)
    {
        max = answer;
        rl.question("Enter a min number: ", getMin);
    }
    // assign input minimum to beginning of range
    function getMin(answer)
    {
        min = answer;
        startGame();
    }
    // tell user range, get a secret number and ask for guesses
    function startGame()
    {
        console.log(`I'm thinking of an number between ${min} and ${max}...`);
        min = Number(min);
        max = Number(max);
        secretNumber = randomInRange(min, max);
        askGuess();
    }
}


function askGuess()
{
    // decrement # of attempts
    console.log(`Attempts remaining: ${numAttempts}`);
    numAttempts--;

    // recursively calls itself if you don't get the answer right
    rl.question("Enter a guess: ", (answer) => {
        answer = Number(answer);
        if (checkGuess(answer))
        {
            console.log("You win!");
            rl.close();
        }
        else if (numAttempts > 0)
        {
            askGuess();
        }
        else
        {
            console.log("You lose.");
            rl.close();
        }
    });
}


function checkGuess(guess)
{
    // determines whether guess equals, is higher than, or is lower than the secret number
    // returns true if you make the correct guess, false otherwise
    if (guess > secretNumber)
    {
        console.log("Too high.");
        return false;
    }
    if(guess < secretNumber)
    {
        console.log("Too low.");
        return false;
    }
    if(guess == secretNumber)
    {
        console.log("Correct!");
        return true;
    }
    return false;
}

function randomInRange(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    // because we are flooring, we want the range to be one grater than max - min
    // otherwise can never have max as random result
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
