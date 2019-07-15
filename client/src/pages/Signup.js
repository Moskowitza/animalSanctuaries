import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import API from '../utils/API';

// Switch this to REGISTER and create a seperate LOGIN
class Signup extends Component {
  // Setting the initial values of this.state.email and this.state.password
  state = {
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
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
    const { username, password, email, firstname, lastname } = this.state;
    event.preventDefault();
    // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    // We need to have an HTTP request to our path
    API.saveUser({
      username,
      password,
      email,
      firstname,
      lastname,
    })
      .then(res => {
        const { signIn } = this.props;
        signIn(email, password);
      })
      .catch(err => {
        console.error(err);
        alert(`Problem signing in: ${err}`);
      });
  };

  // const data = new FormData(event.target);

  render() {
    const { email, firstname, lastname, username, password } = this.state;
    return (
        <Container className="mb-4">
          <Card>
            <Card.Header>
              <h3>Sign up for an account</h3>
              <p>Follow your favorite Animal Sanctuary!</p>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row className="justify-content-center">
                  <Col>
                    <Form.Row>
                      <Form.Group as={Col} controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          className="form-control"
                          name="email"
                          value={email}
                          onChange={this.handleInputChange} />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                    </Form.Text>
                      </Form.Group>
                      <Form.Group as={Col} controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="name"
                          name="password"
                          value={password}
                          onChange={this.handleInputChange} />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Anita"
                          name="firstname"
                          value={firstname}
                          onChange={this.handleInputChange} />
                      </Form.Group>
                      <Form.Group as={Col} controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Tofu-Eater"
                          name="lastname"
                          value={lastname}
                          onChange={this.handleInputChange} />
                      </Form.Group>
                      <Form.Group as={Col} controlId="username">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="AnimalLover"
                          name="username"
                          value={username}
                          onChange={this.handleInputChange} />
                      </Form.Group>
                    </Form.Row>
                    <p className="align-items-end">
                      <Link
                        className="btn btn-info"
                        onClick={this.handleFormSubmit}
                        to="/"
                      >
                        Submit
                          </Link>
                      &nbsp;
                          <Link className="btn" to="/">
                        Cancel
                          </Link>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Container >
    );
  }
}

export default withRouter(Signup);
