import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
// import API from '../utils/API';


// Switch this to REGISTER and create a seperate LOGIN
class Signin extends Component {
  // Setting the initial values of this.state.email and this.state.password

  state = {
    email: '',
    password: '',
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

   handleFormSubmit =  async (event)  => {
   try{
    const { email, password } = this.state;
    const { signIn, history } = this.props;
    event.preventDefault();
    if (email && password) {
      const thisUser =  await signIn(email, password);
      console.log(`logged in ${JSON.stringify(thisUser)}`)
      history.push('/dashboard')
    }
   } 
   catch(err){
     console.log(err)
   }
  };

  render() {
    const { user, email, password } = this.state;
    return user ? (
      <div>hello{user}</div>
    ) : (
        <div>
          <Container>
            <Row className="justify-content-start">
              <Col size="md-12" className="center ">
                {/* FORM HAS ACTION TO SIGNIN route */}
                <Card>
                  <Card.Header>
                    Please Login or Return to the homepage
                  </Card.Header>
                  <div className="form-group">
                    <Card.Body>
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
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div >
      );
  }
}

Signin.propTypes = {
  signIn: PropTypes.func.isRequired,
  // history: PropTypes.shape({
  //   push: PropTypes.func.isRequired,
  // }).isRequired,
};

export default withRouter(Signin);
