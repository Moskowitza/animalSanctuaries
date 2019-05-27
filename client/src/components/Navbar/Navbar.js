import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css';
import MediaQuery from 'react-responsive';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <MediaQuery query="(min-device-width: 1224px)">
    <nav className="nav-item dropdown navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li
            className={
              window.location.pathname === '/' || window.location.pathname === '/about' ? 'nav-item active' : 'nav-item'
            }
          >
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className={window.location.pathname === '/dashboard' ? 'nav-item active' : 'nav-item'}>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className={window.location.pathname === '/search' ? 'nav-item active' : 'nav-item'}>
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>

          <li className={window.location.pathname === '/singin' ? 'nav-item active' : 'nav-item'}>
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
          </li>

          <li className={window.location.pathname === '/signup' ? 'nav-item active' : 'nav-item'}>
            <Link to="/signup" className="nav-link">
              Sign up
            </Link>
          </li>
          <li className={window.location.pathname === '/newSanctuary' ? 'nav-item active' : 'nav-item'}>
            <Link to="/newSanctuary" className="nav-link">
              New Sanctuary
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </MediaQuery>
);

export default Navbar;
