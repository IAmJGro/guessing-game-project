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
