import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer } from './reducers';

export const history = createBrowserHistory();

const store = createStore(
    reducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunk,
            logger
        )
    )
);

export default store;
