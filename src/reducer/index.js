import { combineReducers } from 'redux';

//import reducers
import { modalLogin } from './modalLogin';
import { userLogin } from './userLogin';
import { userID } from './userID';


export default combineReducers({
    modalLogin,
    userLogin,
    userID
})