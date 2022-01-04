import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILD
} from '../types/types';

import { shopApi } from '../../api/shopApi';

export const userLogin = (userName, password) => (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST,
        payload: true
    })
    shopApi.post('/auth/login', {
        username: `${userName}`,
        password: `${password}`
    })
        .then(response => {
            if (response.data.status === 'Error') {
                console.log(response.data.msg)
                dispatch({
                    type: LOGIN_FAILD,
                    payload: response.data.msg,
                    loader: false
                })
            } else {
                dispatch({
                    type: 'hideLogin'
                })
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: true,
                    loader: false
                })
                localStorage.setItem('login', true)
            }
        })
        .catch(err => dispatch({
            type: LOGIN_FAILD,
            payload: 'user name or password incorrect',
            loader: false
        }))
}
