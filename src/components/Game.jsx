import React, { useState, useEffect } from 'react';
import { GiDogHouse, GiFishbone, GiBalloonDog, GiTennisBall, GiBananaPeeled } from 'react-icons/gi';
import GameBoard from './GameBoard';
import Popup from './Popup';
import WinPopup from './WinPopup';
import PawCoin from '../../public/Pawcoin64.png'
import BronzeShield from '../../public/bronzeshield64px.png'
import SilverShield from '../../public/silverShield64px.png'
import GoldShield from '../../public/goldShield64px.png'
import './Game.css';

const Game = ({ initialPoints = 5000, coverLevel = 'bronze', iconType = 'cat' }) => {
  const obstacleIcons = [GiDogHouse, GiFishbone, GiBalloonDog, GiTennisBall, GiBananaPeeled];

  const [catPosition, setCatPosition] = useState(1);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(initialPoints);
  const [gameOver, setGameOver] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [shields, setShields] = useState(() => coverLevel === 'bronze' ? 3000 : coverLevel === 'silver' ? 6000 : coverLevel === 'gold' ? 12000 : 0);
  const [playerIcon, setPlayerIcon] = useState(iconType === 'dog' ? '🐶' : '🐱');
  const [invincible, setInvincible] = useState(false);
  const [coinInvincible, setCoinInvincible] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [showWinPopup, setShowWinPopup] = useState(false);
  const [points, setPoints] = useState(initialPoints);
  const [infoCoins, setInfoCoins] = useState([]);
  const [isHurt, setIsHurt] = useState(false)
  const shieldImage = coverLevel === 'bronze' ? BronzeShield : coverLevel === 'silver' ? SilverShield : coverLevel === 'gold' ? GoldShield : 0;

  useEffect(() => {
    setPlayerIcon(iconType === 'dog' ? '🐶' : '🐱');
  }, [iconType]);
  


  useEffect(() => {
    if (gameOver || showWinPopup) return;
    const interval = setInterval(() => {
      setObstacles((obs) => {
        const isInfoCoin = Math.random() < 0.2;
        const lane = Math.floor(Math.random() * 3);
        
        const laneOccupied = obs.some((ob) => ob.lane === lane && ob.y === 0) || 
        infoCoins.some((coin) => coin.lane === lane && coin.y === 0);

        if (laneOccupied) {
          return obs;
        }
        const newObstacle = isInfoCoin
          ? { lane: lane, y: 0, iconIndex: null, isInfoCoin: true }
          : { lane: lane, y: 0, iconIndex: Math.floor(Math.random() * obstacleIcons.length) };
        

        if (isInfoCoin) {
          setInfoCoins((prevCoins) => [...prevCoins, newObstacle]);
          return obs;
        } else {
          return [
            ...obs.filter((ob) => ob.y < 6),
            newObstacle,
          ]
        }
        
      });
      setSpeed((prevSpeed) => Math.max(500, prevSpeed - 20));
    }, speed);
  
    return () => clearInterval(interval);
  }, [gameOver, speed, showWinPopup]);
  
  useEffect(() => {
    if (gameOver || showWinPopup) return;
    const interval = setInterval(() => {
      setObstacles((obs) =>
        obs
          .map((ob) => ({ ...ob, y: ob.y + 1 }))
          .filter((ob) => ob.y < 6)
      );

      setInfoCoins((coins) => 
        coins.map((coin) => ({ ...coin, y: coin.y + 1})).filter((coin) => coin.y < 6)
      )
    }, Math.max(200, speed / 2));
  
    return () => clearInterval(interval);
  }, [obstacles, gameOver, speed, showWinPopup]);


  useEffect(() => {
    if (!invincible && obstacles.some((ob) => ob.y === 5 && ob.lane === catPosition)) {
      setShields((prevLives) => Math.max(0, prevLives - 1000));
      if(shields === 0) {
        setScore((prevScore) => {
          const newScore = Math.max(0, prevScore - 1000);
          if (newScore <= 0) {
            setGameOver(true);
            setShowPopup(true);
          }
          return newScore;
        });
        setIsHurt(true);
        setTimeout(() => setIsHurt(false), 3000);
     }
      setInvincible(true);
      setTimeout(() => setInvincible(false), 1000);
    }
  }, [obstacles, catPosition, shields, invincible]);
  
  useEffect(() => {
    if (!gameOver && !coinInvincible && infoCoins.some((coin) => coin.y === 5 && coin.lane === catPosition)) {
      setScore((prevScore) => {
        const newScore = prevScore + 1000;
        if (newScore >= 15000) {
          setShowWinPopup(true);
          setGameOver(true);
        }
        return newScore;
      });
      setCoinInvincible(true);
      setTimeout(() => setCoinInvincible(false), 1000);
    }
  }, [infoCoins, catPosition, coinInvincible]);

  const handleKeyDown = (e) => {
    if (gameOver || showWinPopup) return;
    if (e.key === 'ArrowLeft' && catPosition > 0) {
      setCatPosition((prev) => prev - 1);
    } else if (e.key === 'ArrowRight' && catPosition < 2) {
      setCatPosition((prev) => prev + 1);
    }
  };

  const handleLaneClick = (lane) => {
    if (!gameOver && !showWinPopup) {
      setCatPosition(lane);
    }
  };

  const handleRestart = () => {
    setCatPosition(1);
    setObstacles([]);
    setScore(0);
    setShields(initialLives);
    setGameOver(false);
    setShowPopup(false);
    setInvincible(false);
    setSpeed(1000);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [catPosition, gameOver, showWinPopup]);

  return (
    <div className="game-container">
      <span className="pawcoin-container">
        <img src={PawCoin} alt="PawCoin" className="pawcoin" />
        {score}
      </span>
    {coverLevel !== 'none' && (
      <span className="shields-container">
      <img src={shieldImage} alt="Shield" className="shield" />
      {shields}
      </span>
    )}
      <GameBoard catPosition={catPosition} obstacles={obstacles} playerIcon={playerIcon} handleLaneClick={handleLaneClick} infoCoins={infoCoins} isHurt={isHurt}/>
      {showPopup && <Popup score={score} onRestart={handleRestart} />}
      {showWinPopup && <WinPopup />}
    </div>
  );
};

export default Game;
