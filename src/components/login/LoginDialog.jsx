 
import{Box, Dialog,TextField,Button,Typography,styled} from "@mui/material"
import { useState,useContext } from "react";
import { DataContext } from "../../context/Dataprovider.jsx";
import {Signup,AutheticateLogin} from "../../service/api.js";

const Component=styled(Box)`
height:70vh;
width:90vh;

`
const Image=styled(Box)`
background:#2874f0 url( https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:82%;
width:28%;
padding:45px 35px;
& >p,& >h5{
   color:#FFFFFF;
   font-weight:600;
}
`  

const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
&>div,&>p,&>button{
   margin-top:20px;
}
`
const LoginButton=styled(Button)`
text-transform:none;
height:50px;

color:#fff;
background:#FB6418;
border-radius:2px;

`

const RequestOtp=styled(Button)`
text-transform:none;
height:50px;

color:#2874f0;
background:#fff;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 30%)

`

const Text=styled(Typography)`
font-size:14apx;
color:#878787;
`

const CreateAccount=styled(Typography)`
font-size:14px;
color:#2874f0;
font-weight:600;
cursor:pointer;
`

const Error=styled(Typography)
 ` 
    font-size:14px;
    line-height:0;
    color:#ff6161;;
    font-weight:600;
   margintop:10px;

 `

const ViewLogin = {

  login:{
      view:'login',
      heading: 'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
   signup:{
    view:'signup',
    heading: "Looks like you're new here",
    subHeading: 'Signup to get started'
   }
}

const InitialValue={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  phone:''
}
const LoginInitial={
   username:'',
   password:''
}
 const LoginDialog=({open,setOpen})=>{
   
  const[account,setaccount]=useState(ViewLogin.login)
  const[signup,setsignup]=useState( InitialValue)
  const{setAccount}=useContext(DataContext)
  const[login,setlogin]=useState( LoginInitial)
  const[error,seterror]=useState(false);

   const handelClose=()=>{
      setOpen(false);
      setaccount(ViewLogin.login);
      seterror(false);
   }

   const toggleaccount=()=>{
    setaccount(ViewLogin.signup);
   }

   const OnInputChange=(e)=>{
      setsignup({...signup,[e.target.name]:e.target.value});
     
   }
 
 const OnvalueChange=(e)=>{
      setlogin({...login,[e.target.name]:e.target.value});
 }

  const signupUser=async ()=>{
     let response=await Signup(signup);
     if(!response)return;
     handelClose();
     setAccount(signup.firstname);
  }
const loginUser=async()=>{

   let response =await AutheticateLogin(login);
   if(response.status === 200)
   {
      handelClose();
      setAccount(response.data.data.firstname);
   }
   else{
         seterror(true);
   }
}

    return(
           <Dialog open={open} onClose={()=>handelClose()} PaperProps={{sx:{maxWidth:'unset'}}}>
           <Component >   
             <Box style={{display:'flex',height:'100%'}}>
                <Image> 
                  <Typography variant="h5">{account.heading}</Typography>
                  <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                </Image>
                {
                  account.view ==='login' ? 
                     <Wrapper>
                             <TextField variant='standard' onChange={(e)=>OnvalueChange(e)} name='username'  label='Enter Username'/>

                               {error && <Error>Please Enter valid username or password</Error>}

                             <TextField variant='standard' onChange={(e)=>OnvalueChange(e)} name='password'  label='Enter Password'/>


                             < Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</ Text>
                             <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                             <Typography style={{textAlign:'center'}}>OR</Typography>
                              <RequestOtp>Request OTP</RequestOtp>
                           < CreateAccount onClick={()=>toggleaccount()} style={{textAlign:'center'}} >New to Flipkart? Create an account</ CreateAccount>
                     </Wrapper>
               
               :
               
                     <Wrapper>
                          <TextField variant='standard' label='Enter First Name' name='firstname' onChange={(e)=>OnInputChange(e)}/>
                          <TextField variant='standard' label='Enter Last Name'   name='lastname' onChange={(e)=>OnInputChange(e)}/> 
                          <TextField variant='standard' label='Enter User Name'  name='username'  onChange={(e)=>OnInputChange(e)}/>
                          <TextField variant='standard' label='Enter Email'       name='email' onChange={(e)=>OnInputChange(e)}   />
                          <TextField variant='standard' label='Enter Password'    name='password' onChange={(e)=>OnInputChange(e)}/>
                          <TextField variant='standard' label='Enter Phone'       name='phone' onChange={(e)=>OnInputChange(e)}/>
                          <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                     </Wrapper>
               }

             </Box>
           </ Component>

              
           </Dialog>
    )
 }

 export default LoginDialog;