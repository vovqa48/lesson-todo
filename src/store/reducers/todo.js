import {
    GET_TODO_LIST_START,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAIL
} from '../../constants/action-types';

const initialState = {
    todos: [],
    error: null,
};

export const todo = (state = initialState, action)  => {
    const { type, payload } = action;

    switch (type) {
        case GET_TODO_LIST_START:
            return {
                ...state,
            };

        case GET_TODO_LIST_SUCCESS:
            return {
                ...state,
                todos: payload
            };

        case GET_TODO_LIST_FAIL:
            return {
                ...state,
                todos: [],
                error: payload
            };

        default:
            return state;
    }
};
