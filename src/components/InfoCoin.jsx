import React from 'react';
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import './InfoCoin.css'
import pawCoin from '../../public/infoCoin64px.png'

const InfoCoin = ({ infoCoins = []}) => {
    return (
        <>
          {infoCoins.map((coin, index) => {
            const Icon = HiOutlineQuestionMarkCircle;
            return (
              <div key={index} className='info-coin' style={{ top: `${coin.y * 20}%` }}>
                <img className='info-coin-icon' src={pawCoin} />
              </div>
            );
          })}
        </>
      );
}

export default InfoCoin;