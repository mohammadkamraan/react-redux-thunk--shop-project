import {
    SING_UP_REQUEST,
    SING_UP_SUCCESS,
    SING_UP_FAILD
} from '../types/types';


const initialState = {
    loading: null,
    payload: ''
}

export const singUp_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SING_UP_REQUEST:
            return {
                ...state,
                loading: action.loading
            }
        case SING_UP_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                payload: action.payload
            }
        case SING_UP_FAILD:
            return {
                ...state,
                loading: false,
                payload: action.payload
            }
        case SING_UP_FAILD:
            return {
                ...state,
                payload: action.payload
            }
        default:
            return {
                state
            }
    }
}