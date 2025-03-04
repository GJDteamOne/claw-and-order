import React from 'react';
import './Popup.css';

const Popup = ({ score, onRestart }) => {
  return (
    <div className="popup">
      <h2>Oh no! The cat got hurt!</h2>
      <p>This is why pet insurance is important — it helps cover unexpected vet bills and keeps your furry friend safe and sound.</p>
      <button onClick={onRestart}>Restart</button>
      <button onClick={() => window.location.reload()}>Close</button>
    </div>
  );
};

export default Popup;
