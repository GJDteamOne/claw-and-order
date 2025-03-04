import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './FinalPage.css';

export const FinalPage = ({ result }) => {
  return (
    <>
      <Header isInitialPage={false} />
      <Box display="flex" justifyContent="center">
        <Box width="100%" maxWidth="1200px" padding="10%">
          {result === "win" ? (
            <Typography variant="h1" sx={{ fontSize: '2rem' }}>Congrats you won</Typography>
          ) : (
            <>
              <Typography variant="h1" sx={{ fontSize: '2rem' }}>Ruh-roh</Typography>
              <Typography variant="body1">Zuko is poorly and out of paw coins...</Typography>
              <Typography variant="body1">Buying pet insurance could have protected you and your pet from being in this situation</Typography>
              <Typography variant="body1">Protect them in real life by taking out cover today</Typography>
            </>
          )}
          <Typography variant="h2" sx={{ fontSize: '2rem' }}>Our Pet Insurance</Typography>
          <Typography variant="body1">What are our cover options?</Typography>
          <div className="cards-container">
            <div className="card">
              <img src='./bronzeshield64px.png' alt="Bronze shield" />
              <Typography variant="body1">Bronze</Typography>
              <Typography variant="body2">Up to £3000 towards vet bills per year</Typography>
            </div>
            <div className="card">
              <img src='./silvershield64px.png' alt="Silver shield" />
              <Typography variant="body1">Silver</Typography>
              <Typography variant="body2">£6000 per year</Typography>
            </div>
            <div className="card">
              <img src='./goldshield64px.png' alt="Gold shield" />
              <Typography variant="body1">Gold</Typography>
              <Typography variant="body2">£12000 per year</Typography>
            </div>
          </div>
          <Footer />
        </Box>
      </Box>
    </>
  )
}