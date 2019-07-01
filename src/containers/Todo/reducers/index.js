import {
    GET_TODO_LIST_START,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAIL,

    DELETE_TODO_ITEM_SUCCESS,
    DELETE_TODO_ITEM_FAIL,
    DELETE_TODO_ITEM_START
} from '../constants';

const initialState = {
    todos: [],
    error: null,
    isLoading: false
};

export const todo = (state = initialState, action)  => {
    const { type, payload } = action;

    switch (type) {
        case GET_TODO_LIST_START:
            return {
                ...state,
                isLoading: true
            };

        case GET_TODO_LIST_SUCCESS:
            return {
                ...state,
                todos: payload,
                isLoading: false
            };

        case GET_TODO_LIST_FAIL:
            return {
                ...state,
                todos: [],
                error: payload,
                isLoading: false
            };

        case DELETE_TODO_ITEM_START:
            return {
                ...state,
                isLoading: true
            };

        case DELETE_TODO_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        case DELETE_TODO_ITEM_FAIL:
            return {
                ...state,
                todos: [],
                error: payload,
                isLoading: false
            };

        default:
            return state;
    }
};