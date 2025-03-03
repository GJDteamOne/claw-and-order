import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WidowsAppHome from './WidowsAppHome.js';
import StartingPot from './StartingPot.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WidowsAppHome />} />
          <Route path="/starting-pot" element={<StartingPot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;