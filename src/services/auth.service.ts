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
            throw new Error(googleLoginResponse.code);
        }

        const { data } = await request<IUser>(
            'POST',
            '/auth/oauth/google',
            null,
            {
                token: (googleLoginResponse as GoogleLoginResponse).accessToken,
            }
        );

        return data;
    }

    async authenticate() {
        const { data } = await this.request<IUser>('GET', '/auth');
        return data;
    }
}
