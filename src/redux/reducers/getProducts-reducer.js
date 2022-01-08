import {
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
    PRODUCTS_FAILD
} from '../types/types';

const initialState1 = {
    category: [],
    loading: null,
    err: {}
}
export const getProducts_reducer = (state = initialState1, action) => {
    switch (action.type) {
        case PRODUCTS_REQUEST:
            return {
                ...state,
                loading: action.loading
            }
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                category: action.payload,
                loading: action.loading
            }

        case PRODUCTS_FAILD:
            return {
                ...state,
                loading: action.loading,
                err: action.error
            }
        default:
            return { state }
    }
}