import {
    GET_TODO_LIST_START,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAIL
} from '../constants';

import {
    START_LOADING,
    STOP_LOADING
} from '../../App/constants';

import { loadTodoListApi } from '../services';
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

export const loadTodoList = () => dispatch => {
    dispatch({ type: GET_TODO_LIST_START });
    dispatch({ type: START_LOADING });

    return loadTodoListApi()
    .then(result => {
        dispatch(success(GET_TODO_LIST_SUCCESS, result.data));
        dispatch(isLoading(STOP_LOADING));
    })
    .catch(error => {
        dispatch(fail(GET_TODO_LIST_FAIL, serverError(error)));
        dispatch(isLoading(STOP_LOADING));
    })
}