import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/reducer-user';

export default createStore(
    combineReducers({
        users: userReducer
    }),
    {},
    applyMiddleware(thunk)
);