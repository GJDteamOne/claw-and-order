import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CatOrDog from './CatOrDog.js'
import StartingPot from './StartingPot.js'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Cat Or Dog</Link> | <Link to="/starting-pot">Starting Pot</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CatOrDog />} />
        <Route path="/starting-pot" element={<StartingPot />} />
      </Routes>
    </Router>
  );
}

export default App;