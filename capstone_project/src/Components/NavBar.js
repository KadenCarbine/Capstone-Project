import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../NavBar.css'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to='/' className='NavBar-Links' >Logo</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav>
            <Link to='/shop' className='NavBar-Links small-links'>Shop</Link>
            <Link to="/about" className='NavBar-Links small-links'>About</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand><Link to='/' className='NavBar-Links' >Logo</Link></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;