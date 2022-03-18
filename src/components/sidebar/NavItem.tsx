import { ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
    to: string;
    name: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
    const defaultStyle = {
        textDecoration: 'none',
        color: '#000a12',
    };

    return (
        <NavLink end style={defaultStyle} to={`${props.to}`}>
            <ListItem button>
                <ListItemText>{props.name}</ListItemText>
            </ListItem>
        </NavLink>
    );
};

export default NavItem;
