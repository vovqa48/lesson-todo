import {
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_START,
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

import { loginAPI, logoutAPI, meAPI } from '../services';
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

export const isLoading = (type) => ({
    type
});

export const login = payload => dispatch => {
    dispatch({ type: START_LOADING });
    dispatch({ type: USER_LOGIN_START });

    return loginAPI(payload)
    .then(result => {
        dispatch(isLoading(STOP_LOADING));
        dispatch(success(USER_LOGIN_SUCCESS, result.data));
        localStorage.setItem('isAuth', true);
    })
    .catch(error => {
        dispatch(isLoading(STOP_LOADING));
        dispatch(fail(USER_LOGIN_FAIL, serverError(error)));
        throw new SubmissionError({_error: serverError(error)});
    })
}

export const logout = () => dispatch => {
    dispatch({ type: START_LOADING });
    dispatch({ type: USER_LOGOUT_START });

    return logoutAPI()
    .then(result => {
        dispatch(isLoading(STOP_LOADING));
        dispatch(success(USER_LOGOUT_SUCCESS, result.data));
        localStorage.setItem('isAuth', false);
    })
    .catch(error => {
        dispatch(isLoading(STOP_LOADING));
        dispatch(fail(USER_LOGOUT_FAIL, serverError(error)));
    })
};

export const getMe = () => dispatch => {
    dispatch({ type: START_LOADING });
    dispatch({ type: USER_ME_START });

    return meAPI()
    .then(result => {
        dispatch(isLoading(STOP_LOADING));
        dispatch(success(USER_ME_SUCCESS, result.data));
    })
    .catch(error => {
        dispatch(isLoading(STOP_LOADING));
        dispatch(fail(USER_ME_FAIL, serverError(error)));
    })
};