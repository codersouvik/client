import {Box,Button,styled} from '@mui/material'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import addtoCart from '../../redux/actions/Cartaction.js'

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image=styled('img')({
   
   
    padding:'15px'
})

const StyledButton = styled(Button)`
    width: 48%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;
const Actionitem=({product})=>{


    const{id}=product;
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const[quantity,setQuantity]=useState(1);

    const addItemtoCart=()=>{

      dispatch(addtoCart(id,quantity));  
      navigate('/cart');
    }
 return(
    < LeftContainer>
    <Box style={{ padding:'15px 20px',
    border:'1px solid #f0f0f0', width:'90%'}}>
        < Image src={product.detailUrl}  alt="product"/>
    </Box>        
        <StyledButton style={{marginRight: 10, background: '#ff9f00'}} onClick={()=>addItemtoCart()} variant="contained"><Cart /> Add to Cart</StyledButton>
        <StyledButton style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
    </ LeftContainer>
 )

}

export default Actionitem;