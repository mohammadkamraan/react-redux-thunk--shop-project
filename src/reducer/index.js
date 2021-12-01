import { combineReducers } from 'redux';

//import reducers
import { modalLogin } from './modalLogin';
import { userLogin } from './userLogin';


export default combineReducers({
    modalLogin,
    userLogin
})