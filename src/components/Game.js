import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import Popup from './Popup';
import './Game.css';

const Game = () => {
  const [catPosition, setCatPosition] = useState(1);
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;
      if (e.key === 'ArrowLeft') moveCat('left');
      if (e.key === 'ArrowRight') moveCat('right');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver]);

  const moveCat = (direction) => {
    setCatPosition((prev) => {
      if (direction === 'left') return Math.max(0, prev - 1);
      if (direction === 'right') return Math.min(2, prev + 1);
      return prev;
    });
  };

  const handleLaneClick = (lane) => {
    if (gameOver) return;
    setCatPosition(lane);
  };

  const restartGame = () => {
    setCatPosition(1);
    setObstacles([]);
    setScore(0);
    setGameOver(false);
    setShowPopup(false);
  };

  return (
    <div className='game-container'>
      <GameBoard
        catPosition={catPosition}
        obstacles={obstacles}
        moveCat={moveCat}
        handleLaneClick={handleLaneClick}
      />
      <p>Score: {score}</p>
      {gameOver && <h2>Game Over! Your score: {score}</h2>}
      {showPopup && <Popup restartGame={restartGame} setShowPopup={setShowPopup} />}
    </div>
  );
};

export default Game;
