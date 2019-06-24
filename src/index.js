import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';
import { App } from './containers/App';
import store, { history } from './store/store';

import { ErrorBoundary } from './components/ErrorBoundary';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
