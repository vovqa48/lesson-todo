import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { user } from '../containers/Login/reducers';
import { users } from '../containers/UsersList/reducers';
import { todo } from '../containers/Todo/reducers';
import { application } from '../containers/App/reducers';

export const reducer = (history) => combineReducers({
    application,
    user,
    users,
    todo,
    form: formReducer,
    router: connectRouter(history),
});