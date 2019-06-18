import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/LoginForm';
import { login } from './actions';

const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    loginUser: (name) => dispatch(login(name))
});

class LoginContainer extends Component {
    handleSubmit(values) {
        this.props.loginUser(values)
    }
    render() {
        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
