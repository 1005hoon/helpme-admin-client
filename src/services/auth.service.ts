import request from '../utils/request';
import {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';
import IUser from '../utils/interfaces/user.interface';

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
        } catch (error) {
            console.error(error);
            alert(
                `네트워크 오류가 발생했습니다. 담당자에게 노티해주세요! ${JSON.stringify(
                    error
                )}`
            );
            return null;
        }
    }

    async authenticate() {
        try {
            const { data } = await this.request<IUser>('GET', '/auth');
            return data;
        } catch (error) {
            console.error(error);
            alert(
                `네트워크 오류가 발생했습니다. 담당자에게 노티해주세요! ${JSON.stringify(
                    error
                )}`
            );
            return null;
        }
    }
}
