import { Box, Drawer, Toolbar } from '@mui/material';
import React from 'react';
import NavList from './NavList';

interface SidebarProps {}

const drawerWidth = 200;

const Sidebar: React.FC<SidebarProps> = (props) => {
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <NavList />
            </Box>
        </Drawer>
    );
};

export default Sidebar;
