import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBarComp = (props) => (
  <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">HOME</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
        <Nav.Link href="/signin">Sign In</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link href="/newSanctuary">Contribute</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default NavBarComp;
