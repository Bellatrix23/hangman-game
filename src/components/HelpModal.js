import React, { useState } from "react";
import "./HelpModal.css";

// HelpModal component displays a modal with game rules
function HelpModal() {
  const [show, setShow] = useState(false); // State to control the modal visibility

  return (
    <div className="help-modal">
      {/* Help Button to toggle the modal */}
      <button onClick={() => setShow(!show)} className="help-button">
        Help
      </button>

      {/* Modal Content - Displayed when show is true */}
      {show && (
        <div className="modal-content">
          {/* Modal Background - Click to close the modal */}
          <div
            className="modal-background"
            onClick={() => setShow(false)}
          ></div>

          {/* Modal Box with Rules */}
          <div className="modal-box">
            <h2>Hangman Rules</h2>
            <p>
              Guess the word by clicking on letters. Each incorrect guess adds
              to your hangman. Six wrong guesses and you lose!
            </p>

            {/* Close Button inside the modal */}
            <button onClick={() => setShow(false)} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HelpModal;
