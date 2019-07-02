import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router';
import { LOGIN } from '../../constants/routs';

export const PrivateRoute = ({ component: Component, exact = false, isAuth, path, dynamicRoute = false, render, ...route }) => (
    <Route
        exact={exact}
        path={path}
        render={() => (
            isAuth
                ? render && !dynamicRoute
                    ? <Fragment>{render}</Fragment>
                    : dynamicRoute
                        ? render({...route})
                        : <Component {...route} />
                : <Redirect to={LOGIN} />
        )}
    />
);