function guessingGame() {
    const randomNum = Math.floor(Math.random() * 100)
    let guesses = 0
    let gameWon = false
    return function playGame(guess) {
        if (!gameWon) {
            guesses++
            if (guess > randomNum) {
                return `${guess} is too high!`
            } else if (guess < randomNum) {
                return `${guess} is too low!`
            } else if (guess === randomNum) {
                gameWon = true
                return `You win! You found ${guess} in ${guesses} guesses.`
            }
        }
        else {
            return "The game is over, you already won!"
        }
    }
}

module.exports = { guessingGame };
