import { SET_PRODUCT_MODULE } from "./productsTypes";

export const setProductModule = (productModule) => {
    return {
        type: SET_PRODUCT_MODULE,
        payload: productModule,
    }
}