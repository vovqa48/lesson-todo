import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router";
import _ from 'lodash';
import { PrivateRoute } from '../../components/PrivateRoute';
import { Header } from '../Header';

import { Home } from '../Home';
import { Login } from '../Login';
import { Todo } from '../Todo';

import { logout } from '../../store/actions/user';
import { HOME, LOGIN, TODO } from '../../constants/routs';

import './style.scss';

const Preloader = ({ isVisible }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="preloader"><i className="preloader__icon" /></div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    name: state.user.name,
    history: state.router,
    store: state
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

class AppContainer extends Component {
    static propTypes = {
        isAuth: PropTypes.bool.isRequired,
        name: PropTypes.string,
        logout: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    }

    render () {
        const { name, logout, isAuth, store } = this.props;
        console.log(store);
        const isLoading = _.get(Object.values(store).find((obj) => obj.isLoading), 'isLoading', false);

        return (
            <div className="layout">

                <Preloader isVisible={isLoading} />

                <Header
                    name={name}
                    logout={logout}
                    isAuth={isAuth}
                />

                <div className="layout__body">
                    <Switch>
                        <Route path={LOGIN} render={() => (
                                isAuth
                                    ? <Redirect to={HOME} />
                                    : <Login />
                            )}
                        />
                        <PrivateRoute exact isAuth={isAuth} path={HOME} component={Home} />
                        <PrivateRoute isAuth={isAuth} path={TODO} component={Todo} />
                        <PrivateRoute isAuth={isAuth} render={'Page not found!'} />
                    </Switch>
                </div>

                <div className="layout__footer">footer</div>
            </div>
        );
    }
}

export const App =  connect(mapStateToProps, mapDispatchToProps)(AppContainer);
