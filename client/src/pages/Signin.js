import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from '../utils/API';
// import Card from '../components/Card';

// Switch this to REGISTER and create a seperate LOGIN
class Signin extends Component {
  // Setting the initial values of this.state.email and this.state.password

  state = {
    email: '',
    password: '',
    // email: "",
    // firstname: "",
    // lastname: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    const { email, password } = this.state;
    const { history } = this.props;
    event.preventDefault();
    if (email && password) {
      // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
      // We need to have an HTTP request to our path
      API.loginUser({
        email,
        password,
      })
        .then(res => {
          console.log(res);
          history.push('/dashboard');
          // this.history.pushState(null, 'login');
        })
        .catch(err => console.log(err));
    }
  };
  // const data = new FormData(event.target);

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Container>
          <Row className="justify-content-start">
            <Col size="md-12" className="center ">
              {/* FORM HAS ACTION TO SIGNIN route */}
              <div className="card w-50 h-50">
                <div className="card-header">
                  Please Login or Return to the homepage
                </div>
                <div className="form-group">
                  <form className="card-body">
                    <span>
                      <p> Email Address:</p>
                      <p className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          value={email}
                          onChange={this.handleInputChange}
                        />
                      </p>
                      {/* <label >User Name</label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}

                  /> */}
                      <p>Password:</p>
                      <p>
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          value={password}
                          onChange={this.handleInputChange}
                        />
                      </p>
                      <p />
                      <Link
                        className="btn btn-primary"
                        to="/dashboard"
                        onClick={this.handleFormSubmit}
                      >
                        Login
                      </Link>
                      &nbsp;
                      <Link className="btn" to="/">
                        Cancel
                      </Link>
                    </span>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
Signin.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Signin);
