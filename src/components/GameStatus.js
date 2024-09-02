import React from "react";
import "./GameStatus.css";

// GameStatus component displays the game result and word details
function GameStatus({
  status, // Game status (won/lost)
  onRestart, // Function to restart the game
  selectedWord, // The word to be guessed
  definitions, // Array of definitions of the word
  synonyms, // Array of synonyms of the word
}) {
  return (
    <div className="game-status">
      {/* Display win message */}
      {status === "won" && (
        <p className="status-message">
          Look at you, wordsmith... You Won! The word is:{" "}
          <span className="revealed-word">{selectedWord}</span>
        </p>
      )}
      {/* Display loss message */}
      {status === "lost" && (
        <p className="status-message">
          Oof. Better luck next time, bud. The word is:{" "}
          <span className="revealed-word">{selectedWord}</span>
        </p>
      )}
      {/* Display definitions and synonyms if the game is over */}
      {(status === "won" || status === "lost") && (
        <>
          <p className="definitions">
            Definitions:
            <ul>
              {definitions.map((definition, index) => (
                <li key={index}>{definition}</li>
              ))}
            </ul>
          </p>
          {synonyms.length > 0 && (
            <p className="synonyms">Synonyms: {synonyms.join(", ")}</p>
          )}
        </>
      )}
      {/* Restart button */}
      <button onClick={onRestart} className="restart-button">
        Restart Game
      </button>
    </div>
  );
}

export default GameStatus;
