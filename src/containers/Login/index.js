import React, { Component } from 'react';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/LoginForm';
import { loginAPI } from './services';
import { loginSuccess, loginFail, loginStart } from './actions';
import { getLoadingStatusState } from '../App/selectors';

const mapStateToProps = (state) => ({
    isLoading: getLoadingStatusState(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loginUserStart: () => loginStart(),
    loginUserSuccess: (values) => loginSuccess(values.data),
    loginUserFail: (error) => loginFail(error)
}, dispatch);

class LoginContainer extends Component {
    handleSubmit(values) {
        this.props.loginUserStart();
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
