import { Box, Typography,styled } from "@mui/material";
import {navData} from '../../constants/data';



const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    background:'#fff',
    [theme.breakpoints.down('lg')]: {
        margin:0
    }
}))

const Container=styled(Box)`
 padding:8px 10px;
 text-align:center;
`

const Wrapper=styled(Typography)`

 font-size:15px;
 font-weight:500;
 font-familt:inherit;
`


const Navbar=()=>{

    return (

        <Component style={{background:'#fff'}}>
            {
                navData.map(data=>(
                    
                    <Container>
                        <img src={data.url}  alt='nav' style={{width:64}}/>
                        <Wrapper>{data.text}</Wrapper>
                    </Container>

                ))

            }
        </Component>
    )
}

export default Navbar;