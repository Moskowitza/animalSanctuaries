import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import { LinkContainer } from 'react-router-bootstrap';
import './NavBarComp.css';

const NavBarComp = ({ user, logOut }) => (
  <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
    <Navbar.Brand>
      <Link className="nav-link" to="/">
        HOME
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Item>
          {' '}
          <Link className="nav-link" to="/about">
            About
          </Link>
        </Nav.Item>
        <Nav.Item>
          {' '}
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </Nav.Item>
        <Nav.Item>
          {' '}
          <Link className="nav-link" to="/search">
            Search
          </Link>
        </Nav.Item>
        {user ? (
          <>
            <Nav.Item>
              {' '}
              <Link className="nav-link" to="/newSanctuary">
                Contribute
              </Link>
            </Nav.Item>
            <Nav.Item>
              {' '}
              <Button variant="danger" onClick={logOut}>
                Log Out
              </Button>
            </Nav.Item>
          </>
        ) : (
            <>
              <Nav.Item>
                {' '}
                <Link className="nav-link" to="/signin">
                  Sign In
              </Link>
              </Nav.Item>
              <Nav.Item>
                {' '}
                <Link className="nav-link" to="/signup">
                  Sign Up
              </Link>
              </Nav.Item>
            </>
          )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
// Check what is sent back in response
NavBarComp.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email:
      PropTypes.string,
    firstname:
      PropTypes.string,
    lastname:
      PropTypes.string,
    userId:
      PropTypes.number,
  }),
};

export default NavBarComp;

