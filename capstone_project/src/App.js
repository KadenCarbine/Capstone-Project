import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import CardList from './Components/CardList';
import About from './Components/About';
import Filter from './Components/Filter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Filter/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/shop' element={<CardList/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
