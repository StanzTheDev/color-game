import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Easy from './easy.jsx';
import Hard from './hard.jsx';
import Medi from './assets/woman-meditation-lotus-pose-icon-isolated.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      AOS.init({ duration: 1200 });
    }, []);
  return (

    <BrowserRouter> 
      <Routes>
        <Route
          path="/"
          element={
            <div data-aos='fade-up' className='container '>
              <h1 id='h1-a'>Welcome To My Eye Color Game</h1>
              <img className='medi-img' src={Medi} alt="" />
              <div className='buttons'>
              <Link to="/easy"><button className="b3n">Easy</button></Link>
              <Link to="/hard"><button className="b3n">Hard</button></Link>
              </div>
            </div>
          }
        />
        <Route path="/easy" element={<Easy />} />
        <Route path="/hard" element={<Hard />} />
      </Routes>
    </BrowserRouter>

<<<<<<< HEAD
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
      setGameStatus("You are correct");
    } else {
      setGameStatus("You are wrong. Try again.");
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

        <button
          className="new-game-button"
          onClick={() => startGame(true)}
          data-testid="newGameButton">
          New Game
        </button>
      </div>
      </div>
    
=======
>>>>>>> 5ec0d61 (Updated project with new changes)
  );
}

export default App;