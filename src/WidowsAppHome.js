import React from 'react';
import Header from './Header.js';
import Grid from '@mui/material/Grid';
import Footer from './Footer.js';
import { styled } from '@mui/system';

const PageContainer = styled('pageContainer')({
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '8px 0',
    boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
    borderTopLeftRadius: '48px',
    borderTopRightRadius: '48px',
});

function WidowsAppHome() {
    return (
      <div>
        <Header />
        <Grid container>
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item xs={3}>
                <img src='./widows-logo.svg' alt="Logo" />
                </Grid>
                <Grid item xs={3}>
                    
                </Grid>
            </Grid>
        <Footer />
      </div>
    );
  }
  
  export default WidowsAppHome;