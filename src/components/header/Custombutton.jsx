
import {Box,Button,Typography,Badge,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState,useContext } from 'react';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/Dataprovider';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      color: '#FFFFFF',
      fontSize: 12,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
          color: '#2874f0',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));


const Custbtn = styled(Link)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Login=styled(Button)`
 margin-left:60px;
 border-radius:10px;
 height:32px;
 color:#2874f0;
 background:#FFFFFF;
 text-transform:capitalize;
 box-shadow:none;
 padding:5px 40px;
 font-weight:600;
 
 

`
const CustomButton=()=>{ 
   
  const[open,setOpen]=useState(false); 

  const{account,setAccount}=useContext(DataContext);
  
  const { cartItems } =useSelector(state => state.cart);

  const openDialog=()=>{
    setOpen(true);
  }

    return(
        <Wrapper>
          {
            account?<Profile account={account} setAccount={setAccount} />:
            <Login variant='contained' onClick={()=>openDialog()}>login</Login>
          }
        
          <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
          <Typography style={{marginTop:3}}>More
          </Typography>
          < Custbtn to='/cart'>
          <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon/>
            </Badge>
            <Typography  style={{ marginLeft: 10 }}>Cart</Typography>
          </ Custbtn>
         <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )

}

export default CustomButton;