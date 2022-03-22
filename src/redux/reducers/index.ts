import { combineReducers } from 'redux';

import alertReducer from './alert/alert.reducer';
import userReducer from './users/auth.reducer';

const reducers = combineReducers({
    alert: alertReducer,
    user: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
