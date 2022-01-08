import {
    PRODUCTS_REQUEST,
    PRODUCTS_SUCCESS,
    PRODUCTS_FAILD
} from '../types/types';
import { shopApi } from '../../api/shopApi';

export const getProducts_action = (category) => (dispatch) => {
    dispatch({
        type: PRODUCTS_REQUEST,
        loading: true
    })
    shopApi.get(`/products/category/${category}`)
        .then(response => {
            console.log(response.data)
            setTimeout(() => {
                dispatch({
                    type: PRODUCTS_SUCCESS,
                    payload: response.data,
                    loading: false
                })
            }, 1000);
        })
        .catch(err => {
            dispatch({
                type: PRODUCTS_FAILD,
                error: err,
                loading: false
            })
        })
}