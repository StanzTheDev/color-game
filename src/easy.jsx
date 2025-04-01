import './App.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 

const colors = [
  '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#FF33A1',
  '#A833FF', '#33FFA8', '#FFC733', '#33C7FF', '#FF3364', '#6433FF',
  '#3A7CA5', '#F94144', '#277DA1', '#F8961E', '#F9C74F', '#90BE6D', 
  '#43AA8B', '#4D9078', '#E9C46A', '#F4A261', '#E76F51', '#D9ED92', 
  '#B5E48C', '#99D98C', '#76C893', '#52B69A', 
  '#34A0A4', '#168AAD', 
  '#1A759F', '#1E6091', '#184E77', '#6A4C93', '#5A189A', '#7B2CBF', 
  '#9D4EDD', '#C77DFF', '#E0AAFF', '#C8B8DB', '#AF8EAC', '#9D8189', 
  '#F7B801', '#FC766A', '#184A45', '#EF4423', '#C11B17', '#7D0552', 
  '#8A4FFF', '#3DED97', '#C3423F', '#9EF01A', '#A2D5F2', '#59CD90', 
  '#F7B32D', '#E83F6F', 
  '#2274A5', '#432818', '#BB9457', '#432534', '#A4161A',
' #FF5733', ' #FF6F47', ' #FF7F5A', ' #FF8F6D', ' #FF9F80', 
' #FF33A6',  ' #FF47B1', ' #FF5ACA', ' #FF6FD4', ' #FF80E0', 
' #33D8FF', ' #47DFFF', ' #5AECFF', ' #6AF3FF', ' #7AFFFF', 
];

function Easy() {
  const [targetColor, setTargetColor] = useState('');
  const [colorOptions, setColorOptions] = useState([]);
  const [gameStatus, setGameStatus] = useState('');
  const [score, setScore] = useState(0);

  const startGame= (resetScore = false)=> {
    const randomTarget = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomTarget);

    const options = [randomTarget];
    while (options.length < 6) {
      const randomOption = colors[Math.floor(Math.random() * colors.length)];
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
      if (resetScore) {
        setScore(0);
      }  
    }

    setColorOptions(options.sort(() => Math.random() - 0.5));
    setGameStatus("");
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore((prevScore) => prevScore + 1);
      

      setTimeout(() => {
        startGame();
      }, 1000);
      setGameStatus("Correct! Well done!");
    } else {
      setGameStatus("Wrong! Try again.");
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  return ( 
      <div className='container'>
        <div className='game-container'>
        <h1>Color Guessing Game</h1>

        <div
          className='color-box'
          style={{ backgroundColor: targetColor}}
           data-testid="colorBox"></div>

        <p data-testid="gameInstructions">Select the color that matches with the color above</p>
          
        <div className="color-options">
          {colorOptions.map((color, index) => (
            <button
               key={index}
              className='color-option'
              style={{ backgroundColor: color, margin: '10px' }}
              onClick={() => handleGuess(color)}
              data-testid="colorOption"></button>
          ))}
        </div>

        <p data-testid='gameStatus'>{gameStatus}</p>
        <p data-testid="score">Score: {score}</p>
{/* 
        <button
          className="new-game-button"
          onClick={() => startGame(true)}
          data-testid="newGameButton">
          New Game
        </button> */}
           <div className="new-div">
                  <button
                    className="new-game-button"
                    onClick={() => startGame(true)} 
                    data-testid="newGameButton"
                  >
                    New Game
                  </button>
                  <Link to='/hard'><button className="play-easy">Play Hard</button></Link>
                </div>
      </div>
      </div>
    
  );
}

export default Easy;
