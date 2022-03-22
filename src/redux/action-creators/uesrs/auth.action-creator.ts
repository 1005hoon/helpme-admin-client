import { Dispatch } from 'react';
import {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';
import { NavigateFunction } from 'react-router-dom';
import { AuthService } from '../../../services/auth.service';
import errorHandler from '../../../utils/errorHandler';
import { ROUTES } from '../../../utils/routes';
import { AlertActions, AlertActionType } from '../../actions/alert';
import { AuthActions, AuthActionType } from '../../actions/users';

const authService = new AuthService();

export const onLogin =
    (
        res: GoogleLoginResponse | GoogleLoginResponseOffline,
        navigate: NavigateFunction
    ) =>
    async (dispatch: Dispatch<AuthActions | AlertActions>) => {
        dispatch({ type: AuthActionType.LOGIN_USER_PENDING });

        try {
            const user = await authService.loginWithGoogle(res);

            dispatch({
                type: AuthActionType.LOGIN_USER_FULFILLED,
                payload: user,
            });

            navigate('/');
        } catch (error) {
            const errorMessage = errorHandler(error);

            dispatch({
                type: AlertActionType.OPEN_ALERT_MESSAGE,
                payload: errorMessage,
            });
        }
    };

export const authenticate =
    (navigate: NavigateFunction) =>
    async (dispatch: Dispatch<AuthActions | AlertActions>) => {
        dispatch({ type: AuthActionType.LOGIN_USER_PENDING });

        try {
            const user = await authService.authenticate();

            dispatch({
                type: AuthActionType.LOGIN_USER_FULFILLED,
                payload: user,
            });
        } catch (error) {
            const errorMessage = errorHandler(error);

            dispatch({
                type: AlertActionType.OPEN_ALERT_MESSAGE,
                payload: errorMessage,
            });

            navigate(ROUTES.LOGIN);
        }
    };
