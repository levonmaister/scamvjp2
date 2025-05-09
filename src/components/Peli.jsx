

import React from 'react';
import { useState } from 'react';
import { script } from '../pages/peliScript';
import "../styles/Peli.css";



export default function ViestiPeli() {

  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState(null); 
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  
  
  const current = script[step];
  
  const handleChoice = (option) => {
    if (locked) return;
    setLocked(true);
    setFeedback(option.correct ? "Oikein!" : "Väärin!");

    if (option.correct) {
      setScore((prevScore) => prevScore + 1)
    }

    setTimeout(() => {
      if (step + 1 < script.length) {
        setStep((prev) => prev + 1);
      } else {
        setGameOver(true)
      }      
      setFeedback(null);
      setLocked(false);
    }, 1200);
  };

  const playAgain = () => {
    setStep(0);
    setScore(0);
    setGameOver(false);
  };
  
  if (gameOver) {
    return (
      <div className="result">
        <h4>Peli loppui!</h4>
        <p>Tunnistit: {score}/{script.length} huijausta</p>
        <button onClick={playAgain}>Pelaa uudestaan</button>

      </div>
    )
  };
    
  return (
    <div className="chat-container">
      <h1>Tunnista huijausviestit!</h1>

      <div className="infoText">
        <p>Näin pelaat: lue viesti, jos epäilet viestin olevan huijaus, paina "Huijaus"-nappia. <br />Paina "Aito"-nappia, jos viesti on mielestäsi luotettava.</p>
      </div>
      
      <div className="chat">
        <div className="sender">{current.sender}</div>
        <div className="bubble left">{current.message}</div>
        <div className="fBack">
        {feedback && <div className={`feedback ${feedback === "Oikein!" ? "correct" : "wrong"}`}>{feedback}</div>}
        </div>
        <div className="keyboard"></div>
        <div className="options">
          {current.options.map((opt, i) => (
            <button key={i} onClick={() => handleChoice(opt)} disabled={locked}>
              {opt.answer}
            </button>
          ))}
        </div>
      </div>
    </div>
    
  );
  
};