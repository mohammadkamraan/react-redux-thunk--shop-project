import { combineReducers } from 'redux';

//import reducers
import { categories } from './allProducts';
import { userLogin } from './userLogin';


export default combineReducers({
    categories,
    userLogin
})