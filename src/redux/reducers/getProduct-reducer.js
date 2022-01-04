import {
    GET_PRODUCT_REQUSET,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILD,
    ADD_TO_CART_DONE,
    ADD_TO_CART_FAILD,
    ADD_TO_CART_REQUEST
} from '../types/types';

const initialState1 = {
    product: {},
    loading: null,
    error: ''
}

export const getProduct_reducer = (state = initialState1, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUSET:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case GET_PRODUCT_FAILD:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

const initialState2 = {
    buy: false,
    loadingCart: null,
    buyMsg: ''
}

export const addToCart_reducer = (state = initialState2, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                loadingCart: action.loading,
            }
        case ADD_TO_CART_DONE:
            return {
                ...state,
                buy: action.buy,
                loadingCart: action.loading
            }
        case ADD_TO_CART_FAILD:
            return {
                ...state,
                buy: action.buy,
                buyMsg: action.buyMsg,
                loadingCart: action.loading
            }
        default:
            return { state }
    }
}