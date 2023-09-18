
import {Box,styled,InputBase,List, ListItem} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getProducts from '../../redux/actions/productAction'
import { Link } from 'react-router-dom';

const Head=styled(Box)`
border-radius: 2px;
margin-left: 10px;
width: 38%;
background-color: #fff;
 display:flex;
`

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const Outline=styled(InputBase)`
width: 100%;
padding-left: 20px; 
`
const SearchWrapper=styled(Box)`
margin-left: auto;
padding: 5px;
display: flex;
color: blue;
`

const Search=()=>{
    const [ text, setText ] = useState();
    

    const getText = (text) => {
        setText(text);
        
    }
    const { products }= useSelector(state => state.getProducts);
  

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])



    return(
        <Head>
            <Outline
             placeholder="Search for products,brands and more"
             onChange={(e) => getText(e.target.value)}
             value={text}
            />
            <SearchWrapper>
               <SearchIcon/>
             
            </SearchWrapper>
            {
              text && 
              <ListWrapper >
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setText('')}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
        </Head>
      
    )
}

export default Search;