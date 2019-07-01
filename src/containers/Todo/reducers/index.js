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

const initialState = {
    todos: [],
    todo: [],
    error: null,
    isLoading: false,
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
                error: payload,
                isLoading: false
            };

        case ADD_TODO_ITEM_START:
            return {
                ...state,
                isLoading: true
            };

        case ADD_TODO_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        case ADD_TODO_ITEM_FAIL:
            return {
                ...state,
                isLoading: false
            };

        case UPDATE_TODO_ITEM_START:
            return {
                ...state,
                isLoading: true
            };

        case UPDATE_TODO_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        case UPDATE_TODO_ITEM_FAIL:
            return {
                ...state,
                isLoading: false
            };

        case GET_TODO_ITEM_START:
            return {
                ...state,
                isLoading: true
            };

        case GET_TODO_ITEM_SUCCESS:
            return {
                ...state,
                todo: payload,
                isLoading: false
            };

        case GET_TODO_ITEM_FAIL:
            return {
                ...state,
                todo: [],
                error: payload,
                isLoading: false
            };

        default:
            return state;
    }
};