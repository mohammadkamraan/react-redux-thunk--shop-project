import { combineReducers } from 'redux';

//import reducers
import { modalLogin } from './modalLogin';
import { userLogin } from './userLogin';
import { userID } from './userID';
import { getCarts } from './getCarts';
import { getCategories } from './getCategories-reducer';
import { getProduct_reducer, addToCart_reducer } from './getProduct-reducer';


const rootReducer = combineReducers({
    userLogin,
    userID,
    getCarts,
    modalLogin,
    categories: getCategories,
    product: getProduct_reducer,
    addCart: addToCart_reducer
})

export default rootReducer;