import {
    CATEGORIES_SUCCESS,
    CATEGORIES_FAILD
} from '../types/types';
import { shopApi } from '../../api/shopApi';


export const getCategories = () => (dispatch) => {
    shopApi.get('/products/categories')
        .then(response => {
            console.log(response)
            dispatch({
                type: CATEGORIES_SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: CATEGORIES_FAILD,
                payload: err
            })
        })
}