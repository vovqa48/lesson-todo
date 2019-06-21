import {
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT_START,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,

    USER_ME_START,
    USER_ME_SUCCESS,
    USER_ME_FAIL
} from '../constants';

const initialState = {
    isAuth: false,
    name: null,
    error: null,
    isLoading: false
};

export const user = (state = initialState, action)  => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOGIN_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };

        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                name: payload.name,
                error: null,
                isLoading: false
            };

        case USER_LOGIN_FAIL:
            return {
                ...state,
                isAuth: false,
                error: payload,
                isLoading: false
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
                name: null,
                error: null,
                isLoading: false
            };

        case USER_LOGOUT_FAIL:
            return {
                ...state,
                isAuth: true,
                error: payload,
                isLoading: false
            };

        case USER_ME_START:
            return {
                ...state,
                isLoading: true
            };

        case USER_ME_SUCCESS:
            return {
                ...state,
                isAuth: true,
                name: payload.name,
                isLoading: false
            };

        case USER_ME_FAIL:
            return {
                ...state,
                error: payload,
                isLoading: false
            };

        default:
            return state;
    }
};
