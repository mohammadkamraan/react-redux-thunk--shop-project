import {
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
    PRODUCTS_FAILD
} from '../types/types';
import { shopApi } from '../../api/shopApi';

export const getProducts_action = (category) => async (dispatch) => {
    dispatch({
        type: PRODUCTS_REQUEST,
        loading: true
    })
    await shopApi.get(`/products/category/${category}`)
        .then(response => {
            console.log(response.data)
            dispatch({
                type: PRODUCTS_SUCCESS,
                payload: response.data,
                loading: false
            })
        })
        .catch(err => {
            dispatch({
                type: PRODUCTS_FAILD,
                error: err,
                loading: false
            })
        })
}