import {
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_START,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL
} from '../constants';

import {
    START_LOADING,
    STOP_LOADING
} from '../../App/constants';

import { loginAPI, logoutAPI } from '../services';
import { SubmissionError } from 'redux-form';

export const success = (type, payload) => ({
    type,
    payload
});

export const fail = (type, payload) => ({
    type,
    payload
});

export const isLoading = (type) => ({
    type
});

export const login = payload => dispatch => {
    dispatch({ type: USER_LOGIN_START });
    dispatch({ type: START_LOADING });

    return loginAPI(payload)
    .then(result => {
        dispatch(success(USER_LOGIN_SUCCESS, result.data));
        localStorage.setItem('isAuth', true);
        localStorage.setItem('isAuthData', JSON.stringify(result.data));
        dispatch(isLoading(STOP_LOADING));
    })
    .catch(error => {
        dispatch(fail(USER_LOGIN_FAIL, error.response.data));
        dispatch(isLoading(STOP_LOADING));
        throw new SubmissionError({_error: error.response.data.message});
    })
}

export const logout = payload => dispatch => {
    dispatch({ type: USER_LOGOUT_START });
    dispatch({ type: START_LOADING });

    return logoutAPI(payload)
    .then(result => {
        dispatch(success(USER_LOGOUT_SUCCESS, result.data));
        localStorage.setItem('isAuth', false);
        localStorage.setItem('isAuthData', JSON.stringify(result.data));
        dispatch(isLoading(STOP_LOADING));
    })
    .catch(error => {
        dispatch(fail(USER_LOGOUT_FAIL, error));
        dispatch(isLoading(STOP_LOADING));
    })
};