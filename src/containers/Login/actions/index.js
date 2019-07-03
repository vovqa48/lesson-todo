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
import { loginAPI, logoutAPI, meAPI } from '../services';
import { history } from '../../../store/store';
import { LOGIN } from '../../../constants/routs';

//loading
export const startLoading = () => ({
    type: START_LOADING
})

export const stopLoading = () => ({
    type: STOP_LOADING
})
//loading

//Login
export const startLogin = () => ({
    type: USER_LOGIN_START
});

export const successLogin = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
})

export const failLogin = (payload) => ({
    type: USER_LOGIN_FAIL,
    payload
})
//Login

//Logout
export const successLogout = () => ({
    type: USER_LOGOUT_SUCCESS
})

export const failLogout = (payload) => ({
    type: USER_LOGOUT_FAIL,
    payload
})
//Logout

//Me
export const startMe = () => ({
    type: USER_ME_START
});

export const successMe = (payload) => ({
    type: USER_ME_SUCCESS,
    payload
})

export const failMe = (payload) => ({
    type: USER_ME_FAIL,
    payload
})
//Me

//Login
export const onSubmit = (values, resolveReject) => dispatch => {
    const { resolve, reject } = resolveReject;

    dispatch(startLoading());
    dispatch(startLogin());
    
    loginAPI(values)
        .then(res => {
                dispatch(stopLoading());
                dispatch(successLogin(res.data));
                resolve();
            }
        )
        .catch(error => {
                dispatch(stopLoading());
                dispatch(failLogin(serverError(error)));
                reject(new SubmissionError({_error: serverError(error)}));
            }
        )
}
//Login

//Logout
export const logout = () => dispatch => {

    history.push(LOGIN);
    dispatch(successLogout());
    
    logoutAPI()
        .then(res => {
                dispatch(successLogout());
            }
        )
        .catch(error => {
                dispatch(failLogout(serverError(error)));
            }
        )
}
//Logout

//Me
export const getMe = () => dispatch => {

    dispatch(startLoading());
    dispatch(startMe());
    
    meAPI()
        .then(res => {
                dispatch(stopLoading());
                dispatch(successMe(res.data));
            }
        )
        .catch(error => {
                dispatch(stopLoading());
                dispatch(failMe(serverError(error)));
            }
        )
}
//Me