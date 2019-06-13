import {
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_START,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL
} from '../../constants/action-types';
import { loginAPI, logoutAPI } from '../../services/user';
import { SubmissionError } from 'redux-form';

export const success = (type, payload) => ({
    type,
    payload
});

export const fail = (type, payload) => ({
    type,
    payload
});

export const login = payload => dispatch => {
    dispatch({ type: USER_LOGIN_START });

    return loginAPI(payload)
    .then(result => dispatch(success(USER_LOGIN_SUCCESS, result.data)))
    .catch(error => {
        dispatch(fail(USER_LOGIN_FAIL, error.response.data));
        throw new SubmissionError({_error: error.response.data.message})
    })
}

export const logout = payload => dispatch => {
    dispatch({ type: USER_LOGOUT_START });

    return logoutAPI(payload)
    .then(result => dispatch(success(USER_LOGOUT_SUCCESS, result.data)))
    .catch(error => dispatch(fail(USER_LOGOUT_FAIL, error)))
};