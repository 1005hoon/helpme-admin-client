import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { __PROD__ } from '../utils/constants';
import reducers from './reducers';

const enhancer = __PROD__
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducers, enhancer);
