import {
    GET_TODO_LIST_START,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAIL
} from '../../constants/action-types';
import { loadTodoListApi } from '../../services/todo';

export const success = (type, payload) => ({
    type,
    payload
});

export const fail = (type, payload) => ({
    type,
    payload
});

export const loadTodoList = () => dispatch => {
    dispatch({ type: GET_TODO_LIST_START });

    return loadTodoListApi()
    .then(result => dispatch(success(GET_TODO_LIST_SUCCESS, result.data)))
    .catch(error => dispatch(fail(GET_TODO_LIST_FAIL, error.response.data)))
}