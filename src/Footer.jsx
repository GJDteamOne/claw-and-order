import React from 'react';
import Box from '@mui/material/Box';
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

const MenuItem = styled(Box)({
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
            <Box display="flex" justifyContent="space-around">
                {menuItems.map((item) => (
                    <Box key={item} textAlign="center">
                        <MenuItem>
                            <Box>
                                {getIcon(item)}
                            </Box>
                            <Typography component="span">
                                {item}
                            </Typography>
                        </MenuItem>
                    </Box>
                ))}
            </Box>
        </FooterContainer>
    );
}

export default Footer;