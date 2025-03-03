import React from 'react';
import { GiDogHouse, GiFishbone, GiBalloonDog, GiTennisBall, GiBananaPeeled } from 'react-icons/gi';
import './Obstacles.css';

const obstacleIcons = [GiDogHouse, GiFishbone, GiBalloonDog, GiTennisBall, GiBananaPeeled];

const Obstacles = ({ obstacles }) => {
  return (
    <>
      {obstacles.map((ob, index) => {
        const Icon = obstacleIcons[ob.iconIndex] || GiBananaPeeled;
        return (
          <div key={index} className="obstacle" style={{ top: `${ob.y * 20}%`, transform: 'translateX(-50%)' }}>
            <Icon className="obstacle-icon" />
          </div>
        );
      })}
    </>
  );
};

export default Obstacles;
