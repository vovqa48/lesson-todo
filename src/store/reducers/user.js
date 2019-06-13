import {
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_START,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL
} from '../../constants/action-types';

const initialState = {
    isLoading: false,
    isAuth: false,
    name: null,
    error: null,
};

export const user = (state = initialState, action)  => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                name: payload.name,
                error: null,
            };

        case USER_LOGIN_FAIL:
            return {
                ...state,
                isAuth: false,
                isLoading: false,
                error: payload
            };

        case USER_LOGOUT_START:
            return {
                ...state,
                isAuth: true,
                isLoading: true
            };

        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                isLoading: false,
                name: null,
                error: null,
            };

        case USER_LOGOUT_FAIL:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                error: payload
            };

        default:
            return state;
    }
};
