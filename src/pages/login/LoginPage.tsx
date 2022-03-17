import { Button, Container, Grid, Typography } from '@mui/material';
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';

import React from 'react';
import request from '../../utils/request';
import IUser from '../../utils/interfaces/user.interface';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = (props) => {
    const GOOGLE_AUTH_CLIENT_ID =
        process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID || '';

    const onLoginSuccess = async (
        googleLoginResponse: GoogleLoginResponse | GoogleLoginResponseOffline
    ) => {
        if (!(googleLoginResponse as GoogleLoginResponse).accessToken) {
            console.error(googleLoginResponse);
            return;
        }

        try {
            const { data } = await request<IUser>(
                'POST',
                '/auth/oauth/google',
                null,
                {
                    token: (googleLoginResponse as GoogleLoginResponse)
                        .accessToken,
                }
            );
        } catch (error) {
            console.error(error);
            alert(
                `네트워크 오류가 발생했습니다. 담당자에게 노티해주세요! ${JSON.stringify(
                    error
                )}`
            );
        }
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
