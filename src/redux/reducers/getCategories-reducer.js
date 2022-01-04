import {
    CATEGORIES_SUCCESS,
    CATEGORIES_FAILD
} from '../types/types';

const initialState1 = {
    categories: [],
    errMsg: ''
}

export const getCategories = (state = initialState1, action) => {
    switch (action.type) {
        case CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }

        case CATEGORIES_FAILD:
            return {
                ...state,
                errMsg: action.payload
            }

        default: return state
    }
}