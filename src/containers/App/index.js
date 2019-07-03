import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router";
import { PrivateRoute } from '../../components/PrivateRoute';
import { Header } from '../Header';
import { Home } from '../Home';
import { Login } from '../Login';
import { Todo } from '../Todo';
import { TodoPage } from '../Todo/TodoPage';
import { UsersList } from '../UsersList';
import { HOME, LOGIN, TODO_LIST, USERS, TODO_PAGE } from '../../constants/routs';

import {
    getLoadingStatusState
} from './selectors';

import {
    getAuthStatusState,
    getNameState,
    getRoleState,
    getIsInitialDataFetchingOfUserState
} from '../Login/selectors';

import {logout, getMe } from '../Login/actions/';
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
    isAuth: getAuthStatusState(state),
    name: getNameState(state),
    role: getRoleState(state),
    isLoading: getLoadingStatusState(state),
    isInitialDataFetching: getIsInitialDataFetchingOfUserState(state),
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    getMe: () => dispatch(getMe()),
});

class AppContainer extends Component {
    static propTypes = {
        isAuth: PropTypes.bool.isRequired,
        name: PropTypes.string,
        role: PropTypes.string,
        isLoading: PropTypes.bool,
        isInitialDataFetching: PropTypes.bool,
    }

    componentDidMount() {
        const { isInitialDataFetching } = this.props;

        if( isInitialDataFetching ) {
            this.handleMe();
        }
    }
    
    handleMe() {
        this.props.getMe();
    }

    handleLogout() {
        this.props.logout();
    }

    render () {
        const { name, role, isAuth, isLoading, isInitialDataFetching } = this.props;

        if( isInitialDataFetching ) {
            return <Preloader isVisible={isLoading} />
        }

        return (
            <div className="layout">

                <Preloader isVisible={isLoading} />

                <Header
                    name={name}
                    logout={() => this.handleLogout()}
                    isAuth={isAuth}
                    role={role}
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
                        <PrivateRoute isAuth={isAuth} dynamicRoute path={TODO_PAGE} render={(props) => <TodoPage {...props} />} />
                        <PrivateRoute isAuth={isAuth} path={TODO_LIST} component={Todo} />
                        <PrivateRoute isAuth={isAuth} path={USERS} component={UsersList} />
                        <PrivateRoute isAuth={isAuth} render={'Page not found!'} />
                    </Switch>
                </div>

                <div className="layout__footer">footer</div>
            </div>
        );
    }
}

export const App =  connect(mapStateToProps, mapDispatchToProps)(AppContainer);
