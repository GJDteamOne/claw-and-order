import React, { useState, useEffect } from 'react';
import './App.css';
import { GiCat } from 'react-icons/gi';

const App = () => {
  const [catPosition, setCatPosition] = useState(1); // 0: left, 1: center, 2: right
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setObstacles((obs) => [
        ...obs.filter((ob) => ob.y < 5),
        { lane: Math.floor(Math.random() * 3), y: 0 },
      ]);
      setScore((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setObstacles((obs) =>
        obs.map((ob) => ({ ...ob, y: ob.y + 1 })).filter((ob) => ob.y < 5)
      );

      if (obstacles.some((ob) => ob.y === 4 && ob.lane === catPosition)) {
        setGameOver(true);
        setShowPopup(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [catPosition, obstacles, gameOver]);

  const moveCat = (direction) => {
    if (gameOver) return;
    if (direction === 'left') setCatPosition((prev) => Math.max(0, prev - 1));
    if (direction === 'right') setCatPosition((prev) => Math.min(2, prev + 1));
  };

  const handleLaneClick = (lane) => {
    if (gameOver) return;
    setCatPosition(lane);
  };

  const handleKeyDown = (e) => {
    if (gameOver) return;
    if (e.key === 'ArrowLeft') moveCat('left');
    if (e.key === 'ArrowRight') moveCat('right');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver]);

  return (
    <div className="game-container">
      <h1>Cat Dodge Game</h1>
      <p>A game to highlight the importance of pet insurance — protect your furry friends!</p>
      <div className="road">
        {[0, 1, 2].map((lane) => (
          <div 
            key={lane} 
            className="lane" 
            onClick={() => handleLaneClick(lane)}
          >
            {obstacles
              .filter((ob) => ob.lane === lane)
              .map((ob, index) => (
                <div key={index} className="obstacle" style={{ top: `${ob.y * 20}%` }}></div>
              ))}
            {catPosition === lane && <GiCat className="cat-icon" />}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={() => moveCat('left')}>Left</button>
        <button onClick={() => moveCat('right')}>Right</button>
      </div>
      <p>Score: {score}</p>
      {gameOver && <h2>Game Over! Your score: {score}</h2>}
      {showPopup && (
        <div className="popup">
          <h2>Oh no! The cat got hurt!</h2>
          <p>This is why pet insurance is important — it helps cover unexpected vet bills and keeps your furry friend safe and sound.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;