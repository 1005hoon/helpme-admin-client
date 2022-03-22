import { AuthActions, AuthActionType } from '../../actions/users';

const initialState = {
    user: null,
};

const reducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case AuthActionType.LOGIN_USER:
            return {
                ...action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
