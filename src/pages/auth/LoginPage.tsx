import { useNavigate } from 'react-router-dom';
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';
import { Button, Grid, Typography } from '@mui/material';

import { useActions } from '../../hooks/useActions';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = (props) => {
    const navigate = useNavigate();
    const { onLogin } = useActions();

    const GOOGLE_AUTH_CLIENT_ID =
        process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID || '';

    const onLoginSuccess = async (
        res: GoogleLoginResponse | GoogleLoginResponseOffline
    ) => {
        onLogin(res, navigate);
    };

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
