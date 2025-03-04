import React from 'react';
import { GiDogHouse, GiFishbone, GiBalloonDog, GiTennisBall, GiBananaPeeled } from 'react-icons/gi';
import './Obstacles.css';
import banana from '../../public/banana64px.png'

const obstacleIcons = [GiDogHouse, GiFishbone, GiBalloonDog, GiTennisBall, GiBananaPeeled];

const Obstacles = ({ obstacles = [] }) => {
  return (
    <>
      {obstacles.map((ob, index) => {
        const Icon = obstacleIcons[ob.iconIndex];
        return (
          <div key={index} className="obstacle" style={{ top: `${ob.y * 20}%` }}>
            <img className="obstacle-icon"  src={banana}/>
          </div>
        );
      })}
    </>
  );
};

export default Obstacles;
