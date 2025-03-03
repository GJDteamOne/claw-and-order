import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import PersonIconOutlined from '@mui/icons-material/PersonOutlined';
import EmailIconOutlined from '@mui/icons-material/EmailOutlined';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const HeaderContainer = styled('header')({
    width: '100%',
    padding: '24px 0',
});

const MenuItem = styled(Typography)({
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
});

function Header() {
    return (
        <HeaderContainer>
            <Grid container>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MenuItem>
                        <PersonIconOutlined />
                    </MenuItem>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MenuItem style={{ backgroundColor: '#ede9ff', display: 'flex', alignItems: 'center', padding: '10px', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', }}>
                        <PlayCircleIcon />
                        <Typography style={{ marginLeft: '8px' }}>for you</Typography>
                    </MenuItem>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MenuItem>
                        <EmailIconOutlined />
                    </MenuItem>
                </Grid>
            </Grid>
        </HeaderContainer >
    );
}

export default Header;