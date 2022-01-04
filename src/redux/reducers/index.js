import { combineReducers } from 'redux';

//import reducers
import { modalLogin } from './modalLogin';
import { userLogin } from './userLogin';
import { userID } from './userID';
import { getCarts } from './getCarts';
import { getCategories } from './getCategories-reducer';


const rootReducer = combineReducers({
    userLogin,
    userID,
    getCarts,
    modalLogin,
    categories: getCategories
})

export default rootReducer;