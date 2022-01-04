import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILD,
    USER_SINGOUT
} from '../types/types';

const initialState1 = {
    login: null,
    loading: false
}

export const userLogin = (state = initialState1, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: action.payload,
                loading: action.loader,
                msg: action.msg
            }
        case LOGIN_FAILD:
            return {
                ...state,
                msg: action.payload,
                loading: action.loader
            }
        case USER_SINGOUT:
            return {
                ...state,
                login: false
            }
        default:
            return state
    }
}