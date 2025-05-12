import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { script } from "../pages/peliScript";
import "../styles/Peli.css";
import iphoneFrame from "../pictures/iphone.png";

export default function ViestiPeli() {
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  const current = script[step];

  const handleChoice = (option) => {
    if (locked) return;
    setLocked(true);
    setFeedback(option.correct ? "Oikein!" : "Väärin!");
    if (option.correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (step + 1 < script.length) setStep((s) => s + 1);
      else setGameOver(true);
      setFeedback(null);
      setLocked(false);
    }, 1200);
  };

  const playAgain = () => {
    setStep(0);
    setScore(0);
    setGameOver(false);
  };

  return (
    <>
      <div className="Rubrik">
        <h1>Tunnista huijausviestit!</h1>
      </div>
      <div className="infoText">
        {gameOver ? (
          <p>Peli päättyi – katso tuloksesi alla puhelinruudulla.</p>
        ) : (
          <>
            <p>Näin pelaat:</p>
            <p>
              Lue viesti, jos epäilet viestin olevan huijaus, paina
              "Huijaus"-nappia.
            </p>
            <p>Paina "Aito"-nappia, jos viesti on mielestäsi luotettava.</p>
          </>
        )}
      </div>
      <div className="phone-container">
        <img src={iphoneFrame} alt="Phone Frame" className="phone-frame" />
        <div className="screen">
          {gameOver ? (
            <div className="result-container">
              <div className="result">
                <h4>Peli loppui!</h4>
                <p>
                  Tunnistit: {score}/{script.length} huijausta
                </p>
                <button className="exit-button" onClick={playAgain}>
                  Uusi yritys
                </button>
                <button className="exit-button" onClick={() => navigate("/")}>
                  Lopeta peli
                </button>
              </div>
            </div>
          ) : (
            <div className="chat-content">
              <div className="sender">{current.sender}</div>
              <div className="bubble left">{current.message}</div>
              <div className="feedback-wrapper">
                {feedback && (
                  <div
                    className={`feedback ${
                      feedback === "Oikein!" ? "correct" : "wrong"
                    }`}
                  >
                    {feedback}
                  </div>
                )}
              </div>
              <div className="footer-actions">
                <div className="options">
                  {current.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleChoice(opt)}
                      disabled={locked}
                    >
                      {opt.answer}
                    </button>
                  ))}
                </div>
                <button className="exit-button" onClick={() => navigate("/")}>
                  Lopeta peli
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
