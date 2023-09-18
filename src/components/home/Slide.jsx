import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Box,Typography,styled,Button,Divider} from '@mui/material';
import Countdowm from 'react-countdown';
import {Link} from 'react-router-dom';

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 const Component=styled(Box)`
  background:#FFFFFF;
  margin-top:10px;
 ` 

 const Deal=styled(Box)`
  padding:15px 20px;
  display:flex;
 `  

 const Timer=styled(Box)`
   display:flex;
   margin-left:10px;
   align-item:center;
   color:#7f7f7f;
 `
const Dealtext=styled(Typography)`
 font-weight:25px;
 margin-right:30px;
 font-weight:600;
 line-height:32px;
`
const ViewAllButton=styled(Button)`
  margin-left:auto;
  font-size:14px;
  font-weight:600;
  background-color:#2874f0;
`
const Img=styled('img')({
 width:'auto',
height:150
})

const Text=styled(Typography)`
 font-style:14px;
 margin-top:5px;
`

const Slide=({products,title,timer})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    
    const renderer = ({ hours, minutes, seconds }) => {
       
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>

    };
    



   return(
    < Component>
        <Deal>
            < Dealtext>{title}</ Dealtext>
            {
              timer &&
                      <Timer>
                         <img src={timerURL} alt="timer" style={{width:25}} />
                         <Countdowm date={Date.now() + 5.04e+7} renderer={renderer}/>
                      </Timer> 
             }
            <ViewAllButton color="primary" variant="contained">View All</ViewAllButton>
        </Deal>
        <Divider/>
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      centerMode={true}
    >
         {
         products.map(product =>(
          <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
          <Box textAlign="center" style={{padding:'25px 15px'}}>
           <Img src={product.url} alt="product" />
           < Text style={{fontWeight:600,color:'#212121'}}>{product.title.shortTitle}</ Text>
           <Text style={{color:'green'}}>{product.discount}</ Text>
           < Text style={{color:'#212121',opacity:'.6'}}>{product.tagline}</ Text>
           </Box>
           </Link>
         ))
 
         } 
      
    </Carousel>

    </ Component> 
   )

}
export default Slide;