import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import LetterButtons from "./components/LetterButtons";
import GameStatus from "./components/GameStatus";
import HelpModal from "./components/HelpModal";
import "./App.css";

function App() {
  // State variables to manage game state, guesses, and word details
  const [selectedWord, setSelectedWord] = useState(""); // The word to be guessed
  const [guessedLetters, setGuessedLetters] = useState([]); // Letters guessed by the user
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Number of incorrect guesses
  const [gameStatus, setGameStatus] = useState("playing"); // Current game status
  const [definitions, setDefinitions] = useState([]); // State for storing multiple definitions
  const [synonyms, setSynonyms] = useState([]); // State for storing synonyms

  // Effect to start a new game on component mount
  useEffect(() => {
    startNewGame();
  }, []);

  // Function to start a new game and fetch a random word and its definitions
  const startNewGame = () => {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((response) => response.json())
      .then((data) => {
        const word = data[0];
        setSelectedWord(word);
        setGuessedLetters([]);
        setIncorrectGuesses(0);
        setGameStatus("playing");

        // Fetch word definitions and synonyms from Dictionary API
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
          .then((response) => response.json())
          .then((definitionData) => {
            if (definitionData[0] && definitionData[0].meanings) {
              // Extract multiple definitions
              const allDefinitions = definitionData[0].meanings.flatMap(
                (meaning) => meaning.definitions.map((def) => def.definition)
              );
              setDefinitions(allDefinitions);

              // Extract synonyms
              const allSynonyms = definitionData[0].meanings.flatMap(
                (meaning) =>
                  meaning.definitions.flatMap((def) => def.synonyms || [])
              );
              setSynonyms(allSynonyms);
            } else {
              setDefinitions(["No definition available."]);
              setSynonyms([]);
            }
          })
          .catch((error) => {
            console.error("Error fetching definition:", error);
            setDefinitions(["No definition available."]);
            setSynonyms([]);
          });
      })
      .catch((error) => {
        console.error("Error fetching word:", error);
        setSelectedWord("default"); // Fallback word in case of an error
        setDefinitions(["No definition available."]);
        setSynonyms([]);
      });
  };

  // Handle letter button click events
  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      const isCorrectGuess = selectedWord.includes(letter);
      setGuessedLetters((prev) => [...prev, letter]);

      if (!isCorrectGuess) {
        setIncorrectGuesses((prev) => prev + 1);
      }

      setTimeout(() => {
        checkGameStatus(
          [...guessedLetters, letter],
          incorrectGuesses + (isCorrectGuess ? 0 : 1)
        );
      }, 0);
    }
  };

  // Check and update the game status based on guesses
  const checkGameStatus = (updatedGuessedLetters, updatedIncorrectGuesses) => {
    const allGuessed = selectedWord
      .split("")
      .every((l) => updatedGuessedLetters.includes(l));
    if (updatedIncorrectGuesses >= 6) {
      setGameStatus("lost"); // Player loses after 6 incorrect guesses
    } else if (allGuessed) {
      setGameStatus("won"); // Player wins if all letters are guessed
    }
  };

  return (
    <div className="App">
      <h1>Hangman</h1>
      {/* Display the game board with the current word and incorrect guesses */}
      <GameBoard
        word={selectedWord}
        guessedLetters={guessedLetters}
        incorrectGuesses={incorrectGuesses}
      />
      {/* Display the letter buttons for guessing */}
      <LetterButtons
        guessedLetters={guessedLetters}
        onLetterClick={handleLetterClick}
      />
      {/* Display the game status and definitions */}
      <GameStatus
        status={gameStatus}
        onRestart={startNewGame}
        selectedWord={selectedWord}
        definitions={definitions}
        synonyms={synonyms}
      />
      {/* Display the help modal for game rules */}
      <HelpModal />
    </div>
  );
}

export default App;
