import React from 'react';
import Header from './Header.jsx';
import Typography from '@mui/material/Typography';
import Footer from './Footer.jsx';
import Box from '@mui/material/Box';

function WidowsAppHome() {
    return (
        <>
            <Header />
            <Box display="flex" justifyContent="center">
                <Box width="100%" maxWidth="1200px" padding="10%">
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        textAlign="center"
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
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default WidowsAppHome;