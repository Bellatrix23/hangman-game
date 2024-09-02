import React from "react";
import "./GameBoard.css";

function GameBoard({ word, guessedLetters, incorrectGuesses }) {
  if (!word) return null;

  const displayWord = word.split("").map((letter, index) =>
    guessedLetters.includes(letter) ? (
      <span key={index} className="letter">
        {letter}
      </span>
    ) : (
      <span key={index} className="underscore">
        _
      </span>
    )
  );

  return (
    <div className="game-board">
      <div className="hangman-drawing">
        <svg width="200" height="250" className="hangman-svg">
          {/* Gallows */}
          <line x1="10" y1="240" x2="150" y2="240" className="hangman-base" />
          <line x1="80" y1="20" x2="80" y2="240" className="hangman-pole" />
          <line x1="80" y1="20" x2="140" y2="20" className="hangman-beam" />
          <line x1="140" y1="20" x2="140" y2="40" className="hangman-rope" />

          {/* Head */}
          {incorrectGuesses > 0 && (
            <circle cx="140" cy="55" r="15" className="hangman-head" />
          )}

          {/* Body */}
          {incorrectGuesses > 1 && (
            <line x1="140" y1="70" x2="140" y2="120" className="hangman-body" />
          )}

          {/* Left Arm */}
          {incorrectGuesses > 2 && (
            <line x1="140" y1="80" x2="120" y2="100" className="hangman-arm" />
          )}

          {/* Right Arm */}
          {incorrectGuesses > 3 && (
            <line x1="140" y1="80" x2="160" y2="100" className="hangman-arm" />
          )}

          {/* Left Leg */}
          {incorrectGuesses > 4 && (
            <line x1="140" y1="120" x2="125" y2="150" className="hangman-leg" />
          )}

          {/* Right Leg */}
          {incorrectGuesses > 5 && (
            <line x1="140" y1="120" x2="155" y2="150" className="hangman-leg" />
          )}
        </svg>
      </div>
      <div className="word">{displayWord}</div>
    </div>
  );
}

export default GameBoard;
