import {
    GET_USERS_LIST_START,
    GET_USERS_LIST_SUCCESS,
    GET_USERS_LIST_FAIL
} from '../constants';

const initialState = {
    users: [],
    error: null,
    isLoading: false
};

export const users = (state = initialState, action)  => {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS_LIST_START:
            return {
                ...state,
                isLoading: true
            };

        case GET_USERS_LIST_SUCCESS:
            return {
                ...state,
                users: payload,
                isLoading: false
            };

        case GET_USERS_LIST_FAIL:
            return {
                ...state,
                users: [],
                error: payload,
                isLoading: false
            };

        default:
            return state;
    }
};
