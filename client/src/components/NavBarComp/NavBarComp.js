import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import { LinkContainer } from 'react-router-bootstrap';

const NavBarComp = () => (
  <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
    <Navbar.Brand>
      <Link to="/">HOME</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>
          {' '}
          <Link to="/about">About</Link>
        </Nav.Link>
        <Nav.Link>
          {' '}
          <Link to="/dashboard">Dashboard</Link>
        </Nav.Link>
        <Nav.Link>
          {' '}
          <Link to="/search">Search</Link>
        </Nav.Link>
        <Nav.Link>
          {' '}
          <Link to="/signin">Sign In</Link>
        </Nav.Link>
        <Nav.Link>
          {' '}
          <Link to="/signup">Sign Up</Link>
        </Nav.Link>
        <Nav.Link>
          {' '}
          <Link to="/newSanctuary">Contribute</Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBarComp;
