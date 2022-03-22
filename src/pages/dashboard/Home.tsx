import { Box, Toolbar } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { AuthService } from '../../services/auth.service';
import IUser from '../../utils/interfaces/user.interface';
import { ROUTES } from '../../utils/routes';

interface HomeProps {
    user: IUser | null;
    authService: AuthService;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const Home: React.FC<HomeProps> = ({ user, setUser, authService }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const isLoggedIn = useCallback(async () => {
        setLoading(() => true);
        const user = await authService.authenticate();
        setLoading(() => false);

        if (!user) {
            navigate(ROUTES.LOGIN, { state: { from: location.pathname } });
        }

        setUser(user);
    }, []);

    useEffect(() => {
        isLoggedIn();
    }, [isLoggedIn]);

    return (
        <div>
            {!loading && (
                <Box sx={{ display: 'flex' }}>
                    <Navbar user={user} />
                    <Sidebar />
                    <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                        <Toolbar />
                        <Outlet />
                    </Box>
                </Box>
            )}
        </div>
    );
};

export default Home;
