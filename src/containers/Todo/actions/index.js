import {
    GET_TODO_LIST_START,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAIL,

    DELETE_TODO_ITEM_SUCCESS,
    DELETE_TODO_ITEM_FAIL,
    DELETE_TODO_ITEM_START,

    ADD_TODO_ITEM_SUCCESS,
    ADD_TODO_ITEM_FAIL,
    ADD_TODO_ITEM_START,

    UPDATE_TODO_ITEM_SUCCESS,
    UPDATE_TODO_ITEM_FAIL,
    UPDATE_TODO_ITEM_START,

    GET_TODO_ITEM_SUCCESS,
    GET_TODO_ITEM_FAIL,
    GET_TODO_ITEM_START
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

export const startDelete = (type) => ({
    type
});

export const startAdd = (type) => ({
    type
});

export const startUpdate = (type) => ({
    type
});

export const startGetTodo = (type) => ({
    type
});

export const startGetTodoList = (type) => ({
    type
});

export const isLoading = (type) => ({
    type
});

//get list
export const loadTodoListSuccess = payload => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(success(GET_TODO_LIST_SUCCESS, payload));
}

export const loadTodoListFail = error => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(fail(GET_TODO_LIST_FAIL, serverError(error)));
}

export const loadTodoListStart = () => dispatch => {
    dispatch(isLoading(START_LOADING));
    dispatch(startGetTodoList(GET_TODO_LIST_START));
}
//get list

//delete
export const deleteItemSuccess = payload => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(success(DELETE_TODO_ITEM_SUCCESS, payload));
}

export const deleteItemFail = error => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(fail(DELETE_TODO_ITEM_FAIL, serverError(error)));
}

export const deleteItemStart = () => dispatch => {
    dispatch(isLoading(START_LOADING));
    dispatch(startDelete(DELETE_TODO_ITEM_START));
}
//delete

//add
export const addItemSuccess = payload => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(success(ADD_TODO_ITEM_SUCCESS, payload));
}

export const addItemFail = error => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(fail(ADD_TODO_ITEM_FAIL, serverError(error)));
    throw new SubmissionError({_error: serverError(error)});
}

export const addItemStart = () => dispatch => {
    dispatch(isLoading(START_LOADING));
    dispatch(startAdd(ADD_TODO_ITEM_START));
}
//add

//update
export const updateItemSuccess = payload => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(success(UPDATE_TODO_ITEM_SUCCESS, payload));
}

export const updateItemFail = error => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(fail(UPDATE_TODO_ITEM_FAIL, serverError(error)));
    throw new SubmissionError({_error: serverError(error)});
}

export const updateItemStart = () => dispatch => {
    dispatch(isLoading(START_LOADING));
    dispatch(startUpdate(UPDATE_TODO_ITEM_START));
}
//update

//get todo
export const getItemSuccess = payload => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(success(GET_TODO_ITEM_SUCCESS, payload));
}

export const getItemFail = error => dispatch => {
    dispatch(isLoading(STOP_LOADING));
    dispatch(fail(GET_TODO_ITEM_FAIL, serverError(error)));
}

export const getItemStart = () => dispatch => {
    dispatch(isLoading(START_LOADING));
    dispatch(startGetTodo(GET_TODO_ITEM_START));
}
//get todo