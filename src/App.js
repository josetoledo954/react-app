import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';
import Cart from './components/Cart';
import Compra from './components/Compra';



function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:productoId' element={<ItemDetailContainer/>} />
              <Route path='/carrito' element={<Cart/>} />
              <Route path='/compra' element={<Compra/>} />
            </Routes>
          </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>

  
  );
}

export default App;
