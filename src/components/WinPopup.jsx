import React from 'react';
import './Popup.css';

const WinPopup = () => {
  return (
    <div className="popup">
      <h2>You win!</h2>
      <p>Did buying a level of pet insurance help you stay in the game longer? Pet insurance can help avoid high costs and ensure your furry friend stays safe!</p>
      <button onClick={() => window.location.reload()}>Close</button>
    </div>
  );
};

export default WinPopup;
