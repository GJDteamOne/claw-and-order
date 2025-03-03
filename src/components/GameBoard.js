import React from 'react';
import { GiCat } from 'react-icons/gi';
import { FaDog } from 'react-icons/fa';
import Obstacles from './Obstacles';
import './GameBoard.css';

const GameBoard = ({ catPosition, obstacles, playerIcon, handleLaneClick }) => {
  const getPlayerIcon = () => {
    return playerIcon === '🐶' ? <FaDog className="dog-icon" /> : <GiCat className="cat-icon" />;
  };

  return (
    <div className="road">
      {[0, 1, 2].map((lane) => (
        <div key={lane} className="lane" onClick={() => handleLaneClick(lane)}>
          <Obstacles obstacles={obstacles.filter((ob) => ob.lane === lane)} />
          {catPosition === lane && getPlayerIcon()}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
