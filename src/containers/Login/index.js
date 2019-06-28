import React, { Component } from 'react';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/LoginForm';
import { loginAPI } from './services';
import { loginSuccess, loginFail } from './actions';

const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loginUserSuccess: (values) => loginSuccess(values),
    loginUserFail: (error) => loginFail(error)
}, dispatch);

class LoginContainer extends Component {
    /* handleSubmit(values) {
        this.props.loginUser(values)
    } */
    handleSubmit(values) {
        return loginAPI(values)
            .then(this.props.loginUserSuccess)
            .catch(this.props.loginUserFail)
    }

    render() {
        return (
            <div>
                <LoginForm 
                    customSubmit={(values) => this.handleSubmit(values)}
                />
            </div>
        )
    }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
