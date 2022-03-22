import { AlertActions, AlertActionType } from '../../actions/alert';

const initialState = {
    isAlertOpen: false,
    message: null,
};

const reducer = (state = initialState, action: AlertActions) => {
    switch (action.type) {
        case AlertActionType.OPEN_ALERT_MESSAGE:
            return {
                isAlertOpen: true,
                message: action.payload,
            };

        case AlertActionType.CLOSE_ALERT_MESSAGE:
            return {
                isAlertOpen: false,
                message: null,
            };
        default:
            return state;
    }
};

export default reducer;
