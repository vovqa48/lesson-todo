import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { user } from './user';
import { todo } from './todo';

export const reducer = (history) => combineReducers({
    user,
    todo,
    form: formReducer,
    router: connectRouter(history),
});