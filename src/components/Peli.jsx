

import React from 'react';
import { useState } from 'react';
import { script } from '../pages/peliScript';
import "../stylefolder/peli.css";



export default function ViestiPeli() {

  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState(null); 
  const [locked, setLocked] = useState(false);
  
  const current = script[step];
  
  const handleChoice = (option) => {
    if (locked) return;
    setLocked(true);
    setFeedback(option.correct ? "Correct!" : "Wrong!");
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setFeedback(null);
      setLocked(false);
    }, 1200);
  };
  
    
  return (
    <div className="chat-container">
      <div className="sender">{current.sender}</div>
      <div className="bubble left">{current.message}</div>

      {current.options.length > 0 && (
        <div className="options">
          {current.options.map((opt, i) => (
            <button key={i} onClick={() => handleChoice(opt)} disabled={locked}>
              {opt.text}
            </button>
          ))}
        </div>
      )}

      {feedback && <div className={`feedback ${feedback === "Correct!" ? "correct" : "wrong"}`}>{feedback}</div>}
    </div>
  );
  
}