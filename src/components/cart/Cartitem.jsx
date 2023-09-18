
import { Box, Typography, Button, styled } from '@mui/material';
import {addEllipsis} from '../../utils/util';
import {GroupBut} from './GroupBut';
import {useDispatch} from 'react-redux';
import { removeFromCart} from '../../redux/actions/Cartaction';

const Component=styled(Box)`
   border-top:1px solid #f0f0f0;
   display:flex;
   background:#fff;
`
const Leftcomponent=styled(Box)`
     margin:20px;
     display:flex;
     flex-direction:column;
`
const SmallText=styled(Typography)`
    color:#878787;
    font-size:14px;
    margin-top:10px;
`
const Removed=styled(Button)`
    margin-top:20px;
    font-size:16px;
    color:#000;
    font-weight:600;
`

const Cartitem=({item})=>{
  
    const dispatch = useDispatch();

  const  removeItemFromCart=(id)=>{
    dispatch(removeFromCart(id));
  }

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <Component>
            < Leftcomponent>
                 <img src={item.url} alt="product" style={{ height: 110, width: 110 }}/>
                 <GroupBut/>
            </ Leftcomponent>
            <Box>
                 <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                 <SmallText>Seller:RetailNet
                    <Box component="span"><img src={ fassured} alt="flipkart" style={{width:50,marginLeft:10}} /></Box>
                 </SmallText>
                 <Typography style={{margin:'20px 0'}}>
                            <Box component="span" style={{ fontWeight:600,fontSize:18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp; 
                            <Box component="span" style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{ color: '#388E3C' }}>{item.price.discount} off</Box>
                    </Typography>
                    <Removed onClick={() => removeItemFromCart(item.id)}>Remove</Removed>
            </Box>
        </Component>
    )
}

export default Cartitem;