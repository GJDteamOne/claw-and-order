import React, { useState, useEffect, useContext } from 'react';
import Header from './Header.jsx';
import Typography from '@mui/material/Typography';
import Footer from './Footer.jsx';
import Box from '@mui/material/Box';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import { GameContext } from './App';

function WidowsAppHome() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { gameState, updateGameState } = useContext(GameContext);

    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 6000);
        return () => clearTimeout(timer); // Clean up if component unmounts
    }, []);

    const handleClose = (animal) => {
        setOpen(false);

        const chosenAnimal = animal;

        updateGameState({
            ...gameState,
            iconType: chosenAnimal
        });

        navigate('/starting-pot');
    };

    return (
        <>
            <Header isInitialPage={true} />
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
                            style={{ width: '20%', maxWidth: '90px', height: 'auto' }}
                        />

                        <Typography variant="body1" style={{ marginTop: '32px', fontWeight: 'bold' }}>
                            Total value
                        </Typography>
                        <Typography variant='h4' style={{ marginTop: '12px', fontWeight: 'bolder' }}>
                            £241,329
                        </Typography>

                        <Box
                            sx={{
                                width: '25px',
                                height: '25px',
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
            <Box display="flex" justifyContent="center">
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        borderRadius: '5%',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: '24px 12px 12px 24px'
                    }}>
                        <SsidChartIcon />
                        <Typography fontWeight="bold">Projected pension pot</Typography>
                        <ArrowForwardIosIcon />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
                        <Typography fontWeight="bold" fontSize="25px" sx={{ marginLeft: "24px" }}>£85,100</Typography>
                        <Typography color='grey' marginLeft="12px">from age 67</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            margin: '20px 0 20px 0'
                        }}
                    >
                        <Box
                            sx={{
                                width: 'calc(100% - 42px)',
                                height: '1px',
                                backgroundColor: 'lightgrey'
                            }}
                        />
                    </Box>
                    <Typography color='grey' margin="0 24px 0 24px">Heading towards a basic living standard</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                width: 'calc(100% - 42px)'
                            }}
                        >
                            <Slider
                                disabled
                                defaultValue={30}
                                aria-label="Disabled slider"
                                sx={{
                                    color: '#133540',  // This changes the track and thumb color
                                    '& .MuiSlider-thumb': {
                                        width: 16,
                                        height: 16,
                                        backgroundColor: '#133540',
                                        border: '2px solid #133540',  // Custom border for the thumb
                                    },
                                    '& .MuiSlider-rail': {
                                        backgroundColor: '#ede9ff'  // This changes the background (unfilled part of the track)
                                    },
                                    '& .MuiSlider-track': {
                                        backgroundColor: '#af5eff'  // This changes the filled part of the track
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Slide}
                TransitionProps={{ direction: 'up' }}  // Slides up from bottom
                fullWidth
                maxWidth="sm"
                sx={{
                    '& .MuiDialog-paper': {
                        position: 'fixed',
                        bottom: '11%',
                        margin: 0,
                        borderRadius: '16px',
                    }
                }}
            >
                <DialogTitle>Are you a cat or dog lover?</DialogTitle>
                <DialogContent>
                    <Typography>
                        Choose your favourite to play our new pet insurance game.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', margin: '12px' }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: '40px'  // Adjust this for the space between the images
                        }}
                    >
                        <Box onClick={() => handleClose('cat')} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Button sx={{ minWidth: 0, padding: 0 }}>
                                <img
                                    src="cat.png"
                                    alt="Cat"
                                    style={{ width: '90px', height: '90px', borderRadius: '50%' }}
                                />
                            </Button>
                            <Typography sx={{ fontWeight: 'bold' }}>Cat</Typography>
                        </Box>
                        <Box onClick={() => handleClose('dog')} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Button sx={{ minWidth: 0, padding: 0 }}>
                                <img
                                    src="dog.png"
                                    alt="Dog"
                                    style={{ width: '90px', height: '90px', borderRadius: '50%' }}
                                />
                            </Button>
                            <Typography sx={{ fontWeight: 'bold' }}>Dog</Typography>
                        </Box>
                    </Box>
                </DialogActions>
            </Dialog>
            <Footer />
        </>
    );
}

export default WidowsAppHome;