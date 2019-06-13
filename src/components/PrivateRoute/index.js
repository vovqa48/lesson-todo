import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router';
import { LOGIN } from '../../constants/routs';

export const PrivateRoute = ({ component: Component, exact = false, isAuth, path, render = null }) => (
    <Route
        exact={exact}
        path={path}
        render={() => (
            isAuth
                ? render ? <Fragment>{render}</Fragment> : <Component />
                : <Redirect to={LOGIN} />
        )}
    />
);