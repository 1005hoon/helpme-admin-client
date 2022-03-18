import { Button, Grid, Typography } from '@mui/material';
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';
import IUser from '../../utils/interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { ROUTES } from '../../utils/routes';

interface LoginPageProps {
    user: IUser | null;
    authService: AuthService;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ authService, setUser }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const GOOGLE_AUTH_CLIENT_ID =
        process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID || '';

    const onLoginSuccess = useCallback(
        async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
            const user = await authService.loginWithGoogle(res);
            setUser(user);
            navigate((location.state as { from: string }).from || ROUTES.HOME);
        },
        [authService, setUser]
    );

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            justifyContent='center'
            minHeight='85vh'
        >
            <Grid item padding='2rem' width='25rem' boxShadow={3}>
                <Typography variant='h6' marginBottom='4rem' textAlign='center'>
                    헬프미 SM | 마케팅 어드민
                </Typography>

                <GoogleLogin
                    clientId={GOOGLE_AUTH_CLIENT_ID}
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginSuccess}
                    render={({ onClick }) => (
                        <Button variant='contained' fullWidth onClick={onClick}>
                            구글 계정으로 로그인
                        </Button>
                    )}
                />
            </Grid>
        </Grid>
    );
};

export default LoginPage;
