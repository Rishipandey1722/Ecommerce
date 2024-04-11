import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa'; // Import icons
import './Navbaar.css'; 

const Navbaar = () => {
  const [cartCount, setCartCount] = useState(0); // State to hold cart count

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className='mb-4'>
      <Container>
        <Navbar.Brand as={Link} to="/">Ecommerce Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home" activeclassname="active">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/" activeclassname="active">Products</Nav.Link>
            <Nav.Link as={NavLink} to="/view-cart" activeclassname="active">Cart</Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeclassname="active">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeclassname="active">Contact Us</Nav.Link>
            <Nav.Link as={NavLink} to="/mens" activeclassname="active">Men</Nav.Link>
            <Nav.Link as={NavLink} to="/womens" activeclassname="active">Women</Nav.Link>
            <Nav.Link as={NavLink} to="/kids" activeclassname="active">Kids</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login" className="nav-link">
              <FaUserCircle className="nav-icon" />
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/view-cart" className="nav-link">
              <FaShoppingCart className="nav-icon" />
              Cart ({cartCount}) {/* Display cart count */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
