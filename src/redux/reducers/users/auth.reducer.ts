import IUser from '../../../utils/interfaces/user.interface';
import { AuthActions, AuthActionType } from '../../actions/users';

interface InitialState {
    loading: boolean;
    user: Partial<IUser>;
}

const initialState: InitialState = {
    loading: false,
    user: {},
};

const reducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case AuthActionType.LOGIN_USER_PENDING:
            return {
                ...state,
                loading: true,
            };
        case AuthActionType.LOGIN_USER_FULFILLED:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
