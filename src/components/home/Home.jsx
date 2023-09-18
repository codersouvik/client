
import { useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Box,styled } from "@mui/material";

import Slide from './Slide'
import {   getProducts  } from '../../redux/actions/productAction';
import {useDispatch,useSelector} from 'react-redux';
import MidSlide from './MidSlide';
import Midsection from './Midsection';
const Comp=styled(Box)`
   padding:10px 10px;
   background:#F2F2F2;
`
const Home=()=>{
   

  const { products }  = useSelector(state => state.getProducts);



  const dispatch = useDispatch();

  useEffect(() => {
      dispatch( getProducts() )
  }, [dispatch])

     return (
      <>
      <Navbar/>
      <Comp>
         <Banner/>
         <MidSlide products={products} title={"Deal of the Day"} timer={true}/>
         <Midsection/>
         <Slide products={products} title={"Discounts for you"}  timer={false}/>
         <Slide products={products} title={"Suggesting Items"}  timer={false}/>
         <Slide products={products} title={"Top Selection"}  timer={false}/>
         <Slide products={products} title={"Recomemded Items"}  timer={false}/>
         <Slide products={products} title={"Trending Offers"}  timer={false}/>
         <Slide products={products} title={"Seasons Top picks"}  timer={false}/>
         <Slide products={products} title={"Top deal on Accessories"}  timer={false}/>
      </Comp>
      </>
        
     )
}

export default Home;