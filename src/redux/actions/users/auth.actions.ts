import IUser from '../../../utils/interfaces/user.interface';

export enum AuthActionType {
    LOGIN_USER_PENDING = 'LOGIN_USER_PENDING',
    LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED',
}

interface IUserLoginRequest {
    type: AuthActionType.LOGIN_USER_PENDING;
}

interface IUserLogin {
    type: AuthActionType.LOGIN_USER_FULFILLED;
    payload: IUser;
}

export type AuthActions = IUserLogin | IUserLoginRequest;
