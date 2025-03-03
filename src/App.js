import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatOrDog from './CatOrDog.js';
import StartingPot from './StartingPot.js';
import Game from './components/Game.js';

export const GameContext = createContext({});

function App() {
  const initialGameState = {
    pointsInPot: 8000,
    cover: 0,
  };

  const [gameState, setGameState] = useState(initialGameState);

  const updateGameState = (newState) => {
    setGameState(newState)
  };

  return (
    <GameContext.Provider value={{gameState, updateGameState}}>
      <Router>
        <Routes>
          <Route path='/' element={<CatOrDog />} />
          <Route path='/starting-pot' element={<StartingPot />} />
          <Route path="/game" element={<Game initialLives={5} iconType="cat" />} />
        </Routes>
      </Router>
    </GameContext.Provider>
  );
}

export default App;