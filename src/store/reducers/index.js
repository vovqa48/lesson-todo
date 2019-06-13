import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { user } from './user';
import { todo } from './todo';
import { application } from './application';

export const reducer = (history) => combineReducers({
    application,
    user,
    todo,
    form: formReducer,
    router: connectRouter(history),
});