import {
    GET_USERS_LIST_START,
    GET_USERS_LIST_SUCCESS,
    GET_USERS_LIST_FAIL
} from '../constants';

import {
    START_LOADING,
    STOP_LOADING
} from '../../App/constants';

import { serverError } from '../../../services/helper';

export const success = (type, payload) => ({
    type,
    payload
});

export const fail = (type, payload) => ({
    type,
    payload
});

export const startGetUsers = (type) => ({
    type
});

export const isLoading = (type) => ({
    type
});

export const loadUsersListSuccess = payload => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(success(GET_USERS_LIST_SUCCESS, payload));
}

export const loadUsersListFail = error => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(fail(GET_USERS_LIST_FAIL, serverError(error)));
}

export const loadUsersListStart = () => dispatch => {
    dispatch(isLoading(START_LOADING));
    dispatch(startGetUsers(GET_USERS_LIST_START));
}