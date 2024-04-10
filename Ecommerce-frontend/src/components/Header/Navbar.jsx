import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbaar.css'; // Import your custom CSS file for additional styling

const Navbaar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Ecommerce Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/"  activeclassname="active" >Home</Nav.Link>
            <Nav.Link as={NavLink} to="/products" activeclassname="active">Products</Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeclassname="active">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeclassname="active">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
