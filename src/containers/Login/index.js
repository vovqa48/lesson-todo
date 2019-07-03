import React, { Component } from 'react';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/LoginForm';
import { onSubmit } from './actions';
import { getLoadingStatusState } from '../App/selectors';

const mapStateToProps = (state) => ({
    isLoading: getLoadingStatusState(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onSubmit: (values, resolveReject) => onSubmit(values, resolveReject),
}, dispatch);

class LoginContainer extends Component {
    handleSubmit = values => 
        new Promise((resolve, reject) => {
            this.props.onSubmit(values, { resolve, reject });
        })

    render() {
        return (
            <div>
                <LoginForm 
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
