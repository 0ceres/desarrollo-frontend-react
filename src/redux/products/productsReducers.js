import {SET_PRODUCT_MODULE} from './productsTypes';

const initialState = {
  PRODUCTS: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) { 
        case SET_PRODUCT_MODULE:
            return {
                ...state, 
                PRODUCTS: action.payload
            };
        default:
            return state;
    }
}

export default productReducer;