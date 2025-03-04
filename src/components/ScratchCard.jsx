import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import './ScratchCard.css';

const results = [
  "Congratulations you have won 1 month of free gold cover",
  "Congratulations you have won 1 month of free silver cover",
  "Congratulations you have won 1 month of free bronze cover",
  "Congratulations you have won a pet hamper",
  "Aww, better luck next time"
];

const ScratchCard = () => {
  const [revealed, setRevealed] = useState(false);
  const [result] = useState(results[Math.floor(Math.random() * results.length)]);

  const handleReveal = () => {
    setRevealed(true);
  };

  return (
    <>
      <Typography variant="h2" sx={{ fontSize: '2rem' }}>
        Scratch and Win
      </Typography>
      <Box
        className={`result-message ${revealed ? 'revealed' : 'blurred'}`}
        onClick={handleReveal}
      >
        <Typography variant="h6">
          {result}
        </Typography>
      </Box>
      {!revealed && (
        <Button sx={{ backgroundColor: 'black', color: 'white', borderRadius: "10px" }} variant="contained" color="primary" onClick={handleReveal}>
          Reveal
        </Button>
      )}
    </>
  );
};

export default ScratchCard;