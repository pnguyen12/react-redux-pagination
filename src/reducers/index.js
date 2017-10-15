import {combineReducers} from 'redux';
import users from './users';
import {routerReducer} from 'react-router-redux';

export const reducers = combineReducers({
    routing: routerReducer,
    users: users

});