import { Dispatch } from 'redux';
import { AlertActionType } from '../../actions/alert';

export const openAlert = (message: string) => (dispatch: Dispatch) => {
    dispatch({ type: AlertActionType.OPEN_ALERT_MESSAGE, payload: message });
};

export const closeAlert = () => (dispatch: Dispatch) => {
    dispatch({ type: AlertActionType.CLOSE_ALERT_MESSAGE });
};
