
import {AppBar,Toolbar,Typography,IconButton,Drawer,Box, List,styled} from '@mui/material';
import { useState } from 'react';
import Search from './Search';
import CustomButton from './Custombutton';
import {Link} from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import Custombutton from './Custombutton';


const StyledHeader = styled(AppBar)`

  backgroud:#blue;
  height:55px;
`
const Component=styled(Link)`
   margin-left:12%;
   line-height:0;
   text-decoration:none;
   color:inherit;

`
const Subheading=styled(Typography)`
  font-size:10px;
  font-style:italic;
`

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const PlusImage=styled('img')({
   width:10,
   height:10,
   marginLeft:4
})
const Cust = styled('span')(({ theme }) => ({ 
  margin: '0 5% 0 auto', 
  [theme.breakpoints.down('sm')]: {
      display: 'none'
  }
}));


const Header =()=>{ 

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
      
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }
 
    const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
          <List>
              <listItem button>
                  < Custombutton />
              </listItem>
          </List>
      </Box>
  );

    return(
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
            <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                {list()}
                </Drawer>

                <Component to='/'>
                <img src={logoURL}  alt="logo" style={{ width:75}}/>
                 <Box style={{display:'flex'}}>
                    <Subheading>Explore&nbsp;
                    <Box component="span" style={{color:'#FFE500'}}> plus</Box>   
                    </Subheading>
                    <PlusImage src={subURL} alt="sub-logo" />
                 </Box>
                </Component>
                <Search/>
                <Cust>
                    <CustomButton/>
                </Cust>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;