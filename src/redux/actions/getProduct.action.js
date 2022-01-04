import {
    GET_PRODUCT_REQUSET,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILD,
    ADD_TO_CART_DONE,
    ADD_TO_CART_FAILD,
    ADD_TO_CART_REQUEST
} from '../types/types';

import { shopApi } from '../../api/shopApi';


export const getProduct = (id) => (dispatch) => {
    dispatch({
        type: GET_PRODUCT_REQUSET,
        loading: true
    })
    shopApi.get(`/products/${id}`)
        .then(response => {
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                loading: false,
                payload: response.data
            })
        })
        .catch(err => dispatch({
            type: GET_PRODUCT_FAILD,
            loading: false,
            error: err
        }))
}

export const addToCart_action = (ID, productID, quantity) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART_REQUEST,
        loading: true,
        buyMsg: ''
    })
    shopApi.post('/carts',
        {
            userId: `${ID}`,
            date: '2020 - 02 - 03',
            products: [{ productId: `${productID}`, quantity: `${quantity}` }]
        }
    )
        .then(response => {
            dispatch({
                type: ADD_TO_CART_DONE,
                buy: true,
                loading: false,
                buyMsg: ''
            })
        })
        .catch(err => dispatch({
            type: ADD_TO_CART_FAILD,
            buy: false,
            buyMsg: 'something goes wrong try again later',
            loading: false
        }))
}