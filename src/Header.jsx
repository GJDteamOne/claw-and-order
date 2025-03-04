import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import PersonIconOutlined from '@mui/icons-material/PersonOutlined';
import EmailIconOutlined from '@mui/icons-material/EmailOutlined';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const HeaderContainer = styled('header')({
    width: '100%',
    padding: '24px 0',
});

const MenuItem = styled(Box)({
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

function Header() {
    return (
        <HeaderContainer>
            <Box display="flex" justifyContent="space-around">
                <Box xs={4} display="flex" justifyContent="center" alignItems="center">
                    <MenuItem>
                        <PersonIconOutlined />
                    </MenuItem>
                </Box>
                <Box xs={4} display="flex" justifyContent="center" alignItems="center">
                    <MenuItem style={{ backgroundColor: '#ede9ff', padding: '10px', borderRadius: '24px' }}>
                        <PlayCircleIcon />
                        <Typography component="span" style={{ marginLeft: '8px' }}>for you</Typography>
                    </MenuItem>
                </Box>
                <Box xs={4} display="flex" justifyContent="center" alignItems="center">
                    <MenuItem>
                        <EmailIconOutlined />
                    </MenuItem>
                </Box>
            </Box>
        </HeaderContainer>
    );
}

export default Header;