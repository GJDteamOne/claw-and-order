import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import Popup from './Popup';
import './Game.css';

const Game = ({ initialLives = 3, iconType = 'cat' }) => {
  const [catPosition, setCatPosition] = useState(1);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [lives, setLives] = useState(initialLives);
  const [playerIcon, setPlayerIcon] = useState(iconType === 'dog' ? '🐶' : '🐱');
  const [invincible, setInvincible] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [lastHitTime, setLastHitTime] = useState(0);

  useEffect(() => {
    setPlayerIcon(iconType === 'dog' ? '🐶' : '🐱');
  }, [iconType]);

  const generateObstacleLane = (existingObstacles) => {
    const lanes = [0, 1, 2];
    const obstacleRows = new Array(5).fill(0).map(() => new Set());
    existingObstacles.forEach((ob) => obstacleRows[ob.y]?.add(ob.lane));

    const isPathPossible = obstacleRows.every((row) => row.size < 3);
    if (!isPathPossible) return null;

    const occupiedLanes = existingObstacles.filter((ob) => ob.y === 0).map((ob) => ob.lane);
    const availableLanes = lanes.filter((lane) => !occupiedLanes.includes(lane));

    if (availableLanes.length === 0) return Math.floor(Math.random() * 3); // fallback

    const iconIndex = Math.floor(Math.random() * 5); // Random icon index
    return { lane: availableLanes[Math.floor(Math.random() * availableLanes.length)], iconIndex };
  };

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setObstacles((obs) => {
        const newObstacle = generateObstacleLane(obs);
        if (!newObstacle) return obs; 
        return [
          ...obs.filter((ob) => ob.y < 6),
          { ...newObstacle, y: 0 },
        ];
      });
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
    }, Math.max(200, speed / 1.5));

    return () => clearInterval(interval);
  }, [obstacles, gameOver, speed]);

  useEffect(() => {
    const now = Date.now();
    if (!invincible && obstacles.some((ob) => ob.y === 5 && ob.lane === catPosition && ob.y < 6)) {
      if (now - lastHitTime > 150) {
        setLives((prevLives) => Math.max(0, prevLives - 1));
        setInvincible(true);
        setLastHitTime(now);
        setTimeout(() => setInvincible(false), 2000);
        if (lives - 1 <= 0) {
          setGameOver(true);
          setShowPopup(true);
        }
      }
    }
  }, [obstacles, catPosition, lives, invincible, lastHitTime]);

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
    setLastHitTime(0);
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
