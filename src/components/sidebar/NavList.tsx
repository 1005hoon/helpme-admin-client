import { Box, List } from '@mui/material';
import React from 'react';

import { ROUTES } from '../../utils/routes';
import NavItem from './NavItem';

interface NavListProps {}

const NavList: React.FC<NavListProps> = (props) => {
    const routes = [
        { to: ROUTES.QUOTATIONS, name: '견적 검색' },
        { to: ROUTES.QUOTATIONS_MANAGE, name: '견적 관리' },
    ];

    return (
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {routes.map((route) => (
                    <NavItem key={route.name} to={route.to} name={route.name} />
                ))}
            </List>
        </Box>
    );
};

export default NavList;
