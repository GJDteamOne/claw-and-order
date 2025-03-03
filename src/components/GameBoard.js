import React from 'react';
import { GiCat } from 'react-icons/gi';
import Obstacles from './Obstacles';
import './GameBoard.css'

const GameBoard = ({ catPosition, obstacles, moveCat, handleLaneClick }) => {
  return (
    <div className="road">
      {[0, 1, 2].map((lane) => (
        <div key={lane} className="lane" onClick={() => handleLaneClick(lane)}>
          <Obstacles obstacles={obstacles.filter((ob) => ob.lane === lane)} />
          {catPosition === lane && <GiCat className="cat-icon" />}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;