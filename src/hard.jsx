import { useState, useEffect } from "react";
import chroma from "chroma-js";
import "./App.css";
import { Link } from "react-router-dom"; 

function Hard() {
  const [targetColor, setTargetColor] = useState('');
  const [colorOptions, setColorOptions] = useState([]);
  const [gameStatus, setGameStatus] = useState('');
  const [score, setScore] = useState(0);
  const [isNewGame, setIsNewGame] = useState(true);

  const generateSimilarColors = (baseColor) => {
    const colors = [baseColor];
    for (let i = 0; i < 5; i++) {
      const similarColor = chroma(baseColor)
        .set("hsl.h", `+${Math.random() * 30 - 15}`)
        .set("hsl.s", `*${Math.random() * 0.2 + 0.9}`)
        .set("hsl.l", `*${Math.random() * 0.2 + 0.9}`)
        .hex();
      colors.push(similarColor);
    }
    return colors.sort(() => Math.random() - 0.5);
  };

  const startNewGame = () => {
    const randomTarget = chroma.random().hex();
    setTargetColor(randomTarget);

    const options = generateSimilarColors(randomTarget);
    setColorOptions(options);

    setGameStatus("");
    setIsNewGame(false);
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setGameStatus("Correct! Well done!");
      setScore((prevScore) => prevScore + 1);
      setIsNewGame(true);
    } else {
      setGameStatus("Wrong! Start again");
      setScore(0);
    }
  };

  useEffect(() => {
    if (isNewGame) {
      startNewGame();
    }
  }, [isNewGame]);

  return (
    <div className="container">
      <div className="game-container">
        <h1>Eye Color Guessing Game</h1>

        <div className="target-color-section">
          <p>Match this color:</p>
          <div
            className="color-box"
            style={{ backgroundColor: targetColor }}
            data-testid="colorBox"
          ></div>
        </div>

        <p data-testid="gameInstructions">Pick the color that matches the target!</p>

        <div className="color-options">
          {colorOptions.map((color, index) => (
            <button
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => handleGuess(color)}
              data-testid="colorOption"
            ></button>
          ))}
        </div>

        <p data-testid="gameStatus">{gameStatus}</p>
        <p data-testid="score">Score: {score}</p>

        <div className="new-div">
          <button
            className="new-game-button"
            onClick={() => setIsNewGame(true)} 
            data-testid="newGameButton"
          >
            New Game
          </button>
          <Link to='/easy'><button className="play-easy">Play Easy</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Hard;