import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import NavBar from './Components/NavBar';
import CardList from './Components/CardList';
import Cart from './Components/Cart';
import React, {useState} from 'react';

function App() {

  const [cart, setCart] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cart={cart}/>
      <Routes>
        <Route exact path='/' element={<CardList/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
