import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import StartingPot from './StartingPot';
import WidowsAppHome from './WidowsAppHome';
import { FinalPage } from './Pages/FinalPage';

export const GameContext = createContext({});

function App() {
  const initialGameState = {
    initialPoints: 8000,
    coverLevel: 'bronze',
    iconType: 'dog',
  };

  const [gameState, setGameState] = useState(initialGameState);

  const updateGameState = (newState) => {
    setGameState(newState)
  };

  return (
    <GameContext.Provider value={{ gameState, updateGameState }}>
      <Router>
        <Routes>
          <Route path="/" element={<WidowsAppHome />} />
          <Route path="/starting-pot" element={<StartingPot />} />
          <Route path="/game" element={<Game />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>
      </Router>
    </GameContext.Provider>
  );
}

export default App;
