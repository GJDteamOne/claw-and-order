import React from 'react';
import './App.css';
import Game from './components/Game';

const App = () => {
  return (
    <div className='game-container'>
      <h1>Cat Dodge Game</h1>
      <p>A game to highlight the importance of pet insurance — protect your furry friends!</p>

        <Game />

      
    </div>
  );
};

export default App