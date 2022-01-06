import {
    SING_UP_REQUEST,
    SING_UP_SUCCESS,
    SING_UP_FAILD,
    SING_UP_CLEARED
} from '../types/types';

import { shopApi } from '../../api/shopApi';


export const singUp_action = (email, userName, password, name, lastName, address) => (dispatch) => {
    dispatch({
        type: SING_UP_REQUEST,
        loading: true
    })

    shopApi.post('/users',
        {
            email: `${email}`,
            username: `${userName}`,
            password: `${password}`,
            name: {
                firstname: `${name}`,
                lastname: `${lastName}`
            },
            address: {
                city: `${address}`,
                street: '',
                number: '',
                zipcode: '',
                geolocation: {
                    lat: '',
                    long: ''
                },
                phone: ''
            }
        })
        .then(response => {
            dispatch({
                type: SING_UP_SUCCESS,
                loading: false,
                payload: 'youre singup was successful'
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: SING_UP_FAILD,
                loading: false,
                payload: 'something goes wrong try agian later'
            })
            setTimeout(() => {
                dispatch({
                    type: SING_UP_CLEARED,
                    payload: ''
                })
            }, 3000);
        })
}