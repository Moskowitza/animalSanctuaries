import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavDropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return <div className="navbar-default navbar-dark bg-dark">
          <button className="navbar-toggler bg-dark"  onClick={this.showMenu}>
            <span className="navbar-toggler-icon" />
          </button>
        {this.state.showMenu ? <div ref={element => {this.dropdownMenu = element;}}>
        <nav className="navbar-default navbar-nav bg-dark">
              <div>
                <ul>
                  <li>
                  <Link to="/" className="nav-link">
                  About
                </Link>
                </li>
              <li>
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/search" className="nav-link">
                  Search
                </Link>
                </li>
                <Link to="/signin" className="nav-link">
                  Sign In
                </Link>
              <li>
                <Link to="/signup" className="nav-link">
                  Sign up
                </Link>
                </li>
              {/* <li>
                <Link to="/newSanctuary" className="nav-link">
                  New Sanctuary
                </Link>
                </li> */}
                </ul>
              </div>
            </nav>
          </div> : null}
      </div>;
  }
}
export default NavDropdown;