import {
    START_LOADING,
    STOP_LOADING
} from '../constants';

const initialState = {
    isLoading: false,
};

export const application = (state = initialState, action)  => {
    const { type } = action;

    switch (type) {
        case START_LOADING:
            return {
                isLoading: true
            };

        case STOP_LOADING:
            return {
                isLoading: false
            };

        default:
            return state;
    }
};
