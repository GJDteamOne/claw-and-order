import React from 'react';
import { GiCat } from 'react-icons/gi';
import { FaDog } from 'react-icons/fa';
import dogIcon from '../../public/dog64px.png'
import dogCone from '../../public/dogCone64px.png'
import catIcon from '../../public/cat64px.png'
import catCone from '../../public/catCone64px.png'
import Obstacles from './Obstacles';
import InfoCoin from './InfoCoin';
import './GameBoard.css';

const GameBoard = ({ catPosition, obstacles, playerIcon, handleLaneClick, infoCoins, isHurt }) => {
  const getPlayerIcon = () => {
    return (
      <img 
        src={playerIcon === '🐶' ? isHurt ? dogCone : dogIcon : isHurt ? catCone : catIcon} 
        alt={playerIcon === '🐶' ? 'Dog' : 'Cat'} 
        className="player-icon" 
      />
    );
  };

  return (
    <div className="road">
      {[0, 1, 2].map((lane) => (
        <div key={lane} className="lane" onClick={() => handleLaneClick(lane)}>
          <Obstacles obstacles={obstacles.filter((ob) => ob.lane === lane)} />
          <InfoCoin infoCoins={infoCoins.filter((coin) => coin.lane === lane)} />
          {catPosition === lane && getPlayerIcon()}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
