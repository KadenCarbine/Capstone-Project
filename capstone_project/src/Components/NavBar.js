import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ShoppingBagOpen, ShoppingCart } from 'phosphor-react';
import '../NavBar.css'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand><Link to='/' className='NavBar-Links d-flex justify-content-start mx-5' >Kaden's Shop</Link></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
        </Navbar.Collapse>
        <Navbar.Brand><Link to='/cart' className='NavBar-Links' >Checkout <ShoppingCart/></Link></Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;