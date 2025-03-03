import React, { useState, useEffect } from 'react';
import { GiDogHouse, GiFishbone, GiBalloonDog, GiTennisBall, GiBananaPeeled } from 'react-icons/gi';
import GameBoard from './GameBoard';
import Popup from './Popup';
import './Game.css';

const Game = ({ initialLives = 3, iconType = 'cat' }) => {
  const obstacleIcons = [GiDogHouse, GiFishbone, GiBalloonDog, GiTennisBall, GiBananaPeeled];

  const [catPosition, setCatPosition] = useState(1);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [lives, setLives] = useState(initialLives);
  const [playerIcon, setPlayerIcon] = useState(iconType === 'dog' ? '🐶' : '🐱');
  const [invincible, setInvincible] = useState(false);
  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    setPlayerIcon(iconType === 'dog' ? '🐶' : '🐱');
  }, [iconType]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setObstacles((obs) => [
        ...obs.filter((ob) => ob.y < 5),
        { lane: Math.floor(Math.random() * 3), y: 0, iconIndex: Math.floor(Math.random() * obstacleIcons.length) },
      ]);
      setScore((prev) => prev + 1);
      setSpeed((prevSpeed) => Math.max(400, prevSpeed - 20));
    }, speed);
  
    return () => clearInterval(interval);
  }, [gameOver, speed]);


  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setObstacles((obs) =>
        obs.map((ob) => ({ ...ob, y: ob.y + 1 })).filter((ob) => ob.y < 6)
      );
    }, Math.max(200, speed / 2));

    return () => clearInterval(interval);
  }, [obstacles, gameOver, speed]);

  useEffect(() => {
    if (!invincible && obstacles.some((ob) => ob.y === 5 && ob.lane === catPosition)) {
      setLives((prevLives) => Math.max(0, prevLives - 1));
      setInvincible(true);
      setTimeout(() => setInvincible(false), 1000);
      if (lives - 1 <= 0) {
        setGameOver(true);
        setShowPopup(true);
      }
    }
  }, [obstacles, catPosition, lives, invincible]);

  const handleKeyDown = (e) => {
    if (gameOver) return;
    if (e.key === 'ArrowLeft' && catPosition > 0) {
      setCatPosition((prev) => prev - 1);
    } else if (e.key === 'ArrowRight' && catPosition < 2) {
      setCatPosition((prev) => prev + 1);
    }
  };

  const handleLaneClick = (lane) => {
    if (!gameOver) {
      setCatPosition(lane);
    }
  };

  const handleRestart = () => {
    setCatPosition(1);
    setObstacles([]);
    setScore(0);
    setLives(initialLives);
    setGameOver(false);
    setShowPopup(false);
    setInvincible(false);
    setSpeed(1000);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [catPosition, gameOver]);

  return (
    <div className="game-container">
      <h1>Score: {score}</h1>
      <h2>Lives: {Array.from({ length: lives }, () => playerIcon).join(' ')}</h2>
      <GameBoard catPosition={catPosition} obstacles={obstacles} playerIcon={playerIcon} handleLaneClick={handleLaneClick} />
      {showPopup && <Popup score={score} onRestart={handleRestart} />}
    </div>
  );
};

export default Game;
