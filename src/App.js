import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatOrDog from './CatOrDog.js'
import StartingPot from './StartingPot.js'
import Game from './components/Game.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatOrDog />} />
        <Route path="/starting-pot" element={<StartingPot />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;