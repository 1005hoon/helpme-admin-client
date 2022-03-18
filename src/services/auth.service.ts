import request from '../utils/request';
import {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';
import IUser from '../utils/interfaces/user.interface';
import errorHandler from '../utils/errorHandler';

export class AuthService {
    private readonly request = request;

    async loginWithGoogle(
        googleLoginResponse: GoogleLoginResponse | GoogleLoginResponseOffline
    ) {
        if (!(googleLoginResponse as GoogleLoginResponse).accessToken) {
            console.error(googleLoginResponse);
            return null;
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

            return data;
        } catch (error: any) {
            const errorMessage = errorHandler(error);
            alert(errorMessage);
            return null;
        }
    }

    async authenticate() {
        try {
            const { data } = await this.request<IUser>('GET', '/auth');
            return data;
        } catch (error: any) {
            const errorMessage = errorHandler(error);
            console.error(errorMessage);
            return null;
        }
    }
}
