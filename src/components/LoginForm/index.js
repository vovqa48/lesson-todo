import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames  from 'classnames';
import { validate } from './validate';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
    const className = classNames('form__wrapper_block__input', error && 'error')

    return (
        <div className="form__wrapper">
            <label className="form__wrapper__label">{label}</label>
            <div className="form__wrapper_block">
                <input className={className} {...input} placeholder={label} type={type} autoComplete="off" />
                {touched && error && <p className="form__wrapper_block__error">{error}</p>}
            </div>
        </div>
    )
}

export class LoginForm extends Component {
    render() {
        const { error, handleSubmit, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit} className="form">
                <Field
                    name="login"
                    type="text"
                    component={renderField}
                    label="Login"
                />
                <Field
                    name="password"
                    type="password"
                    component={renderField}
                    label="Password"
                />
                {error && <div className="form__error">{error}</div>}
                <div className="form__controls">
                    <button  className="form__controls__button" type="submit" disabled={submitting}>
                        Log In
                    </button>
                </div>
            </form>
        )
    }
}

LoginForm = reduxForm({
    form: 'login',
    validate
})(LoginForm)
