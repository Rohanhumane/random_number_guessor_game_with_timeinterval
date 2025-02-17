# Random Number Guessing Game

## Description
This is a simple interactive game where players must guess randomly generated numbers before they disappear. The game features multiple levels, a countdown timer, and limited attempts to make a correct guess. Players progress through levels by successfully identifying numbers before the timer runs out. If all numbers disappear or the attempts run out, the game is lost.

## Features
- Random number generation for each level
- Countdown timer to create urgency
- Limited attempts for each level
- Score tracking
- Win and lose conditions
- Simple and interactive UI

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Play
1. Click on the `Level` box to start the game.
2. A set of random numbers will appear on the screen.
3. Type the number you see into the input box and click `Search`.
4. If the guess is correct, the number will disappear, and your score will increase.
5. If you run out of attempts or time, the game ends.
6. Win by successfully identifying all numbers within the given attempts and time.

## Game Levels
- **Level 1:** 6 numbers with 3 attempts (15 seconds)
- **Level 2:** 8 numbers with 2 attempts (20 seconds)
- **Final Level:** 12 numbers with 1 attempt (25 seconds)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone  https://github.com/Rohanhumane/random_number_guessor_game_with_timeinterval.git
   ```
2. Navigate to the project folder:
   ```sh
   cd random-number-guess
   ```
3. Open `index.html` in a browser to play the game.

## File Structure
```
random-number-guess/
│── index.html     # Main HTML file
│── style.css      # Styling file
│── script.js      # Game logic
```

## Future Enhancements
- Add sound effects for correct and incorrect guesses
- Implement difficulty settings
- Improve UI with animations

## License
This project is open-source and available under the [MIT License](LICENSE).

