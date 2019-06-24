import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router";
import { PrivateRoute } from '../../components/PrivateRoute';
import { Header } from '../Header';

import { Home } from '../Home';
import { Login } from '../Login';
import { Todo } from '../Todo';
import { UsersList } from '../UsersList';

import { logout, getMe } from '../../containers/Login/actions';
import { HOME, LOGIN, TODO, USERS } from '../../constants/routs';

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
    role: state.user.role,
    history: state.router,
    isLoading: state.application.isLoading,
    firstSet: state.user.firstSet,
    userIsLoading: state.user.isLoading
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
        logout: PropTypes.func.isRequired,
        getMe: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        isLoading: PropTypes.bool,
        userIsLoading: PropTypes.bool
    }

    componentDidMount() {
        const { firstSet } = this.props;

        if(localStorage.getItem('isAuth') === 'true' && firstSet) {
            this.getMe();
        }
    }
    
    getMe() {
        this.props.getMe()
    }

    render () {
        const { name, role, logout, isAuth, isLoading, firstSet, userIsLoading } = this.props;

        if( localStorage.getItem('isAuth') === 'true' && (firstSet || (firstSet && userIsLoading))) {
            return <Preloader isVisible={isLoading} />
        }

        return (
            <div className="layout">

                <Preloader isVisible={isLoading} />

                <Header
                    name={name}
                    logout={logout}
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
                        <PrivateRoute isAuth={isAuth} path={TODO} component={Todo} />
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
