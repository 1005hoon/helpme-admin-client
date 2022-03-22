import { combineReducers } from 'redux';

import alertReducer from './alert/alert.reducer';

const reducers = combineReducers({
    alert: alertReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
