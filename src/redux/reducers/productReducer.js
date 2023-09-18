import * as actionTypes from '../constants/productConstant';


export const getproductsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

export const getProductdetailReducer=(state={product:{}},action)=>{
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
             return {loading:true};
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload};
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {loading:false,product:action.payload};
         case actionTypes.GET_PRODUCT_DETAILS_RESET:      
          return {product:{}};  
          default:
            return state

    }
}