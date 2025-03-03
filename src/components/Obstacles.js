import React from 'react';
import './Obstacles.css';

const Obstacles = ({ obstacles }) => {
  return (
    <>
      {obstacles.map((ob, index) => (
        <div key={index} className="obstacle" style={{ top: `${ob.y * 20}%` }}></div>
      ))}
    </>
  );
};

export default Obstacles;