import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import MediaQuery from 'react-responsive';

// import { BrowserRouter as Router } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  // <MediaQuery query="(min-device-width: 1224px)">

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand" to="/">
      Home
    </Link>
    
        <ul className="navbar-nav">
        <li
          className={ "nav-item"
            // window.location.pathname === "/" ||
            // window.location.pathname === "/about"
            //   ? "nav-item active"
            //   : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={ "nav-item"
            // window.location.pathname === "/dashboard"
            //   ? "nav-item active"
            //   : "nav-item"
          }
        >
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li
          className={ "nav-item"
            // window.location.pathname === "/search"
            //   ? "nav-item active"
            //   : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>

        <li
          className={  "nav-item"
            // window.location.pathname === "/singin"
            //   ? "nav-item active"
            //   : "nav-item"
          }
        >
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </li>

        <li
          className={  "nav-item"
            // window.location.pathname === "/signup"
            //   ? "nav-item active"
            //   : "nav-item"
          }
        >
          <Link to="/signup" className="nav-link">
            Sign up
          </Link>
        </li>
        <li
          className={  "nav-item"
            // window.location.pathname === "/newSanctuary"
            //   ? "nav-item active"
            //   : "nav-item"
          }
        >
          <Link to="/newSanctuary" className="nav-link">
            New Sanctuary
          </Link>
        </li>
      </ul>
    </div>
    </nav>
    // </MediaQuery>

);

export default Navbar;
