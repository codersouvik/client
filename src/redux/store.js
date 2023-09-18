import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {getproductsReducer,getProductdetailReducer} from './reducers/productReducer';
import { cartReducer } from './reducers/CartReducer';


const reducer = combineReducers({
     
   
    getProducts: getproductsReducer,
    getProductDetails:getProductdetailReducer,
    cart:cartReducer
   
    
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;