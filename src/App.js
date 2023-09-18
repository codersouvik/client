
import './App.css';
import Itemdetail from './components/ViewItemDetail/Itemdetail';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home'
import Dataprovider from './context/Dataprovider';
import {Box} from '@mui/material';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/cart/Cart.jsx';

function App() {
  return (
     <Dataprovider >
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop:60}}>
        <Routes>

            <Route path='/' element={<Home/>} />
             <Route path='/product/:id' element={<Itemdetail/>} />
             <Route path='/cart' element={<Cart/>}/>

         </Routes>
      </Box>
      </BrowserRouter>
      
     </Dataprovider>
  );
}

export default App;
