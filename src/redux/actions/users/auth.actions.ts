import IUser from '../../../utils/interfaces/user.interface';

export enum AuthActionType {
    LOGIN_USER = 'LOGIN_USER',
    // LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    // LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
}

interface IUserLogin {
    type: AuthActionType.LOGIN_USER;
    payload: IUser;
}

// interface IUserLoginSuccess {
//     type: AuthActionType.LOGIN_USER_SUCCESS;
//     payload: IUser;
// }

// interface IUserLoginError {
//     type: AuthActionType.LOGIN_USER_ERROR;
//     payload: string;
// }

// export type AuthActions = IUserLogin | IUserLoginSuccess | IUserLoginError;
export type AuthActions = IUserLogin;
