import { Box, Toolbar } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const navigate = useNavigate();
    const { authenticate } = useActions();
    const { user } = useTypedSelector((state) => state.user);

    useEffect(() => {
        authenticate(navigate);
    }, []);

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Navbar user={user} />
                <Sidebar />
                <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Outlet />
                </Box>
            </Box>
        </div>
    );
};

export default Home;
