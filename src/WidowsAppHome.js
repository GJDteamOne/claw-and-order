import React from 'react';
import Header from './Header.js';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Footer from './Footer.js';
import Box from '@mui/material/Box';

function WidowsAppHome() {
    return (
        <div>
            <Header />
            <Grid container>
                <Grid item xs={2} />
                <Grid
                    item
                    xs={8}
                    style={{
                        padding: '10%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        textAlign: 'center'
                    }}
                >
                    <img
                        src='./widows-logo.svg'
                        alt="Widows logo"
                        style={{ width: '45%', maxWidth: '90px', height: 'auto' }}
                    />

                    <Typography variant="body1" style={{ marginTop: '32px', fontWeight: 'bold' }}>
                        Total value
                    </Typography>
                    <Typography variant='h4' style={{ marginTop: '12px', fontWeight: 'bolder' }}>
                        £241,329
                    </Typography>

                    <Box
                        sx={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            backgroundColor: 'white',
                            marginTop: '24px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '12px'  // Add padding here to shrink the image inside the circle
                        }}
                    >
                        <img
                            src='./lloyds-logo.svg'
                            alt="Lloyds logo"
                            style={{ width: '100%', height: 'auto' }} // Image scales to the padded area
                        />
                    </Box>

                </Grid>
                <Grid item xs={2} />
            </Grid>
            <Footer />
        </div>
    );
}

export default WidowsAppHome;