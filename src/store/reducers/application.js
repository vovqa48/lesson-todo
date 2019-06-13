import {
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_START,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,

    GET_TODO_LIST_START,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAIL
} from '../../constants/action-types';

const initialState = {
    isLoading: false,
};

export const application = (state = initialState, action)  => {
    const { type } = action;

    switch (type) {
        case USER_LOGIN_START:
        case USER_LOGOUT_START:
        case GET_TODO_LIST_START:
            return {
                isLoading: true
            };

        case USER_LOGIN_SUCCESS:
        case USER_LOGIN_FAIL:
        case USER_LOGOUT_SUCCESS:
        case USER_LOGOUT_FAIL:
        case GET_TODO_LIST_SUCCESS:
        case GET_TODO_LIST_FAIL:
            return {
                isLoading: false
            };

        default:
            return state;
    }
};
