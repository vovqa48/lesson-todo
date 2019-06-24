import {
    GET_USERS_LIST_START,
    GET_USERS_LIST_SUCCESS,
    GET_USERS_LIST_FAIL
} from '../constants';

import {
    START_LOADING,
    STOP_LOADING
} from '../../App/constants';

import { LoadUsersListApi } from '../services';
import { serverError } from '../../../services/helper';

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

export const LoadUsersList = () => dispatch => {
    dispatch({ type: START_LOADING });
    dispatch({ type: GET_USERS_LIST_START });

    return LoadUsersListApi()
    .then(result => {
        dispatch(isLoading(STOP_LOADING));
        dispatch(success(GET_USERS_LIST_SUCCESS, result.data));
    })
    .catch(error => {
        dispatch(isLoading(STOP_LOADING));
        dispatch(fail(GET_USERS_LIST_FAIL, serverError(error)));
    })
}