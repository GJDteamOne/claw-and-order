import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Game from './components/Game';
import StartingPot from './StartingPot';
import WidowsAppHome from './WidowsAppHome';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WidowsAppHome />} />
          <Route path="/starting-pot" element={<StartingPot />} />
          <Route path="/game" element={<Game iconType="cat" coverLevel='gold'/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;