import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import HomeIconOutlined from '@mui/icons-material/HomeOutlined';
import WorkspacesIconOutlined from '@mui/icons-material/WorkspacesOutlined';
import ChangeHistoryIconOutlined from '@mui/icons-material/ChangeHistoryOutlined';
import ShieldIconOutlined from '@mui/icons-material/ShieldOutlined';

const FooterContainer = styled('footer')({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    padding: '8px 0',
    boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
    borderTopLeftRadius: '32px',
    borderTopRightRadius: '32px',
    borderBottomLeftRadius: '32px',
    borderBottomRightRadius: '32px',
});

const MenuItem = styled(Typography)({
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
});

function Footer() {
    const menuItems = ['Home', 'Save', 'Plan', 'Insure'];

    const getIcon = (name) => {
        switch (name) {
            case 'Home':
                return <HomeIconOutlined />;
            case 'Save':
                return <WorkspacesIconOutlined />;
            case 'Plan':
                return <ChangeHistoryIconOutlined />;
            case 'Insure':
                return <ShieldIconOutlined />
            default:
                return null;
        }
    };

    return (
        <FooterContainer>
            <Grid container>
                {menuItems.map((item) => (
                    <Grid item xs={3} key={item}>
                        <MenuItem>
                            <Grid >
                                {getIcon(item)}
                            </Grid>
                            <Grid >
                                {item}
                            </Grid>
                        </MenuItem>
                    </Grid>
                ))}
            </Grid>
        </FooterContainer>
    );
}

export default Footer;