import React from "react";
import "./LetterButtons.css";

// Alphabet array to create buttons for each letter
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// LetterButtons component displays clickable alphabet buttons
function LetterButtons({ guessedLetters, onLetterClick }) {
  return (
    <div className="letter-buttons">
      {/* Render buttons for each letter in the alphabet */}
      {alphabet.map((letter) => (
        <button
          key={letter} // Unique key for each button
          onClick={() => onLetterClick(letter)} // Call the click handler with the letter
          disabled={guessedLetters.includes(letter)} // Disable button if the letter has been guessed
          className="letter-button"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default LetterButtons;
