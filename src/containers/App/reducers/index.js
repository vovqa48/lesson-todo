import {
    START_LOADING,
    STOP_LOADING
} from '../constants';

const initialState = {
    isLoading: false,
    firstSet: true
};

export const application = (state = initialState, action)  => {
    const { type } = action;

    switch (type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
                firstSet: false
            };

        case STOP_LOADING:
            return {
                ...state,
                isLoading: false,
                firstSet: false
            };

        default:
            return state;
    }
};
