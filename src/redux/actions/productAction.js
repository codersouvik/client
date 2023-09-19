


import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

const URL='';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductdetail=(id)=> async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        const {data}=await axios.get(`${URL}/product/${id}`);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    }
    catch(error)
    {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message});
    }

}

export default getProducts;