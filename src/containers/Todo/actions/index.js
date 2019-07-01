import {
    GET_TODO_LIST_START,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAIL,

    DELETE_TODO_ITEM_SUCCESS,
    DELETE_TODO_ITEM_FAIL,
    DELETE_TODO_ITEM_START
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

export const startDelete = (type) => ({
    type
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

export const deleteItemSuccess = payload => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(success(DELETE_TODO_ITEM_SUCCESS, payload));
}

export const deleteItemFail = error => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(fail(DELETE_TODO_ITEM_FAIL, serverError(error)));
}

export const deleteItemStart = () => dispatch => {
    dispatch({ type: START_LOADING });
    dispatch(startDelete(DELETE_TODO_ITEM_START));
}