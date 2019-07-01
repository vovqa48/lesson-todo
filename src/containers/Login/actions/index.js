import {
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,

    USER_ME_START,
    USER_ME_SUCCESS,
    USER_ME_FAIL
} from '../constants';

import {
    START_LOADING,
    STOP_LOADING
} from '../../App/constants';

import { serverError } from '../../../services/helper';
import { SubmissionError } from 'redux-form';

export const success = (type, payload) => ({
    type,
    payload
});

export const fail = (type, payload) => ({
    type,
    payload
});

export const startLogin = (type) => ({
    type
});

export const startGetMe = (type) => ({
    type
});

export const isLoading = (type) => ({
    type
});

//Login
export const loginSuccess = payload => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(success(USER_LOGIN_SUCCESS, payload));
}

export const loginFail = error => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(fail(USER_LOGIN_FAIL, serverError(error)));
    throw new SubmissionError({_error: serverError(error)});
}

export const loginStart = () => dispatch => {
    dispatch({ type: START_LOADING });
    dispatch(startLogin(USER_LOGIN_START));
}
//Login

//Logout
export const logoutSuccess = payload => dispatch => {
    dispatch(success(USER_LOGOUT_SUCCESS, payload));
}

export const logoutFail = error => dispatch => {
    dispatch(fail(USER_LOGOUT_FAIL, serverError(error)));
}
//Logout

//Me
export const getMeSuccess = payload => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(success(USER_ME_SUCCESS, payload));
}

export const getMeFail = error => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(fail(USER_ME_FAIL, serverError(error)));
}

export const getMeStart = () => dispatch => {
    dispatch(isLoading(START_LOADING));
    dispatch(startGetMe(USER_ME_START));
}
//Me