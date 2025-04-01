import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Easy from './easy.jsx';
import Hard from './hard.jsx';
import Medi from './assets/woman-meditation-lotus-pose-icon-isolated.png';
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
  );
}

export default App;
