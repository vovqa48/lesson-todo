import {
    GET_TODO_LIST_START,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAIL
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

        default:
            return state;
    }
};
