# Hangman Game

Welcome to the Hangman Game! This interactive game challenges your word-guessing skills and offers a fun, educational experience with definitions and synonyms.

## Game Rules

- **Objective**: Guess the hidden word by selecting letters one at a time.
- **Gameplay**: Each incorrect guess adds a part to the hangman drawing. You have six chances to guess the correct word.
- **Winning**: If you guess all the letters correctly before the hangman is fully drawn, you win!
- **Losing**: If the hangman drawing is completed with six incorrect guesses, you lose, and the correct word will be revealed.
- **Definitions & Synonyms**: After each game, learn more about the word with provided definitions and synonyms.

## Features

- **Interactive Game Board**: Displays the hangman drawing that updates with each incorrect guess.
- **Letter Buttons**: Clickable letters that allow you to guess the word.
- **Game Status Display**: Shows if you have won or lost and displays word information.
- **Help Modal**: Provides game rules and instructions for new players.
- **Educational Content**: Displays word definitions and synonyms to enhance learning.

## How to Install and Run the Game

Follow these instructions to set up and run the Hangman Game on your local machine:

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from the [Node.js official website](https://nodejs.org/).

### Installation Steps

1. **Clone the Repository**:
   Open your terminal and run the following command to clone the repository:
   git clone https://github.com/Bellatrix23/hangman-game.git

2. **Navigate to the Project Directory: Change to the project directory:**
   cd hangman-game

3. **Install Dependencies: Install the necessary packages with npm:**
   npm install

4. **Start the Application: Run the application using the following command:**
   npm start

5. **Open in you Browser**
   The game should automatically open in your default browser at http://localhost:3000/.
   If not, open your browser and go to http://localhost:3000/.

### How to Play

Start a Game: The game will start automatically with a new word.
Guess Letters: Click on the letters to guess. Correct guesses will be revealed, while incorrect guesses add to the hangman drawing.
Winning or Losing: Win by guessing the word before the hangman is fully drawn; lose after six incorrect guesses.
Restart: Click "Restart Game" to start a new round.
Help: Click the "Help" button to see the game rules.

### Technologies Used

React: For building the user interface.
CSS: For styling the components.
JavaScript: For game logic and interactivity.

## Troubleshooting

If you encounter errors while installing dependencies, make sure your Node.js version is up-to-date.
If the game does not start, ensure all dependencies are installed correctly by re-running npm install.
