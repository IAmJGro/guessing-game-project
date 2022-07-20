const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

askGuess();
let secretNumber = 7;

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

function askGuess()
{
    rl.question("Enter a guess: ", (answer) => {
        answer = Number(answer);
        if (checkGuess(answer))
        {
            console.log("You win!");
            rl.close();
        }
        else
        {
            askGuess();
        }
    });
}
