import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WidowsAppHome from './WidowsAppHome.js';
import StartingPot from './StartingPot.js';
import Game from './components/Game.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WidowsAppHome />} />
          <Route path="/starting-pot" element={<StartingPot />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;