import axios from 'axios';
import * as actionTypes from  '../constants/Cartconstant'

const URL='https://ecommerce-backend-1x5a.onrender.com';
export const addtoCart=(id,quantity)=>async (dispatch)=>{
   try{
       const {data}= await axios.get(`${URL}/product/${id}`);

       dispatch({type:actionTypes.ADD_TO_CART,payload:{...data,quantity}});
   }
   catch(error)
   {
    dispatch({type:actionTypes.ADD_TO_CART_ERROR,payload:error.message});
   }
};

export default addtoCart;



export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};
