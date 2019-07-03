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
import { loadTodoListApi, deleteTodoItemApi, addTodoItemApi, updateTodoItemApi, loadTodoApi } from '../services';

//loading
export const startLoading = () => ({
    type: START_LOADING
})

export const stopLoading = () => ({
    type: STOP_LOADING
})
//loading

//get list
export const loadTodoListStart = () => ({
    type: GET_TODO_LIST_START
});

export const loadTodoListSuccess = (payload) => ({
    type: GET_TODO_LIST_SUCCESS,
    payload
});

export const loadTodoListFail = (payload) => ({
    type: GET_TODO_LIST_FAIL,
    payload
});
//get list

//delete
export const deleteItemStart = () => ({
    type: DELETE_TODO_ITEM_START
});

export const deleteItemSuccess = (payload) => ({
    type: DELETE_TODO_ITEM_SUCCESS,
    payload
});

export const deleteItemFail = (payload) => ({
    type: DELETE_TODO_ITEM_FAIL,
    payload
});
//delete

//add
export const addItemStart = () => ({
    type: ADD_TODO_ITEM_START
});

export const addItemSuccess = (payload) => ({
    type: ADD_TODO_ITEM_SUCCESS,
    payload
});

export const addItemFail = (payload) => ({
    type: ADD_TODO_ITEM_FAIL,
    payload
});
//add

//update
export const updateItemStart = () => ({
    type: UPDATE_TODO_ITEM_START
});

export const updateItemSuccess = (payload) => ({
    type: UPDATE_TODO_ITEM_SUCCESS,
    payload
});

export const updateItemFail = (payload) => ({
    type: UPDATE_TODO_ITEM_FAIL,
    payload
});
//update

//get todo
export const getItemStart = () => ({
    type: GET_TODO_ITEM_START
});

export const getItemSuccess = (payload) => ({
    type: GET_TODO_ITEM_SUCCESS,
    payload
});

export const getItemFail = (payload) => ({
    type: GET_TODO_ITEM_FAIL,
    payload
});
//get todo

//get list
export const loadTodoList = () => dispatch => {

    dispatch(startLoading());
    dispatch(loadTodoListStart());
    
    loadTodoListApi()
        .then(res => {
                dispatch(stopLoading());
                dispatch(loadTodoListSuccess(res.data));
            }
        )
        .catch(error => {
                dispatch(stopLoading());
                dispatch(loadTodoListFail(serverError(error)));
            }
        )
}
//get list

//delete
export const deleteItem = (id) => dispatch => {
    dispatch(startLoading());
    dispatch(deleteItemStart());
    
    deleteTodoItemApi(id)
        .then(res => {
                dispatch(stopLoading());
                dispatch(deleteItemSuccess(res.data));
                dispatch(loadTodoList());
            }
        )
        .catch(error => {
                dispatch(stopLoading());
                dispatch(deleteItemFail(serverError(error)));
            }
        )
}
//delete

//add
export const addItem = (values, resolveReject) => dispatch => {
    const { resolve, reject } = resolveReject;

    dispatch(startLoading());
    dispatch(addItemStart());
    
    addTodoItemApi(values)
        .then(res => {
                dispatch(stopLoading());
                dispatch(addItemSuccess(res.data));
                dispatch(loadTodoList());
                resolve();
            }
        )
        .catch(error => {
                dispatch(stopLoading());
                dispatch(addItemFail(serverError(error)));
                reject(new SubmissionError({_error: serverError(error)}));
            }
        )
}
//add

//update
export const updateItem = (id, values, resolveReject) => dispatch => {
    const { resolve, reject } = resolveReject;

    dispatch(startLoading());
    dispatch(updateItemStart());
    
    updateTodoItemApi(id, values)
        .then(res => {
                dispatch(stopLoading());
                dispatch(updateItemSuccess(res.data));
                dispatch(loadTodoList());
                resolve();
            }
        )
        .catch(error => {
                dispatch(stopLoading());
                dispatch(updateItemFail(serverError(error)));
                reject(new SubmissionError({_error: serverError(error)}));
            }
        )
}
//update

//get todo
export const getItem = (id) => dispatch => {

    dispatch(startLoading());
    dispatch(getItemStart());
    
    loadTodoApi(id)
        .then(res => {
                dispatch(stopLoading());
                dispatch(getItemSuccess(res.data));
            }
        )
        .catch(error => {
                dispatch(stopLoading());
                dispatch(getItemFail(serverError(error)));
            }
        )
}
//get todo