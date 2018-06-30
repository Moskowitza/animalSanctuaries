import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Container from "../components/Container";
import API from "../utils/API";
import Row from "../components/Row";
import Col from "../components/Col";

// Switch this to REGISTER and create a seperate LOGIN
class Signup extends Component {
  //Setting the initial values of this.state.email and this.state.password

  state = {
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: ""
  }


  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    // We need to have an HTTP request to our path
    API.saveUser({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    })
      .then(res => {

        if ( res.data === true ) {
          this.props.history.push("/dashboard");
        }
        else {
          // however you want to handle an error.
        }
        // console.log(res);
       
        // this.history.pushState(null, 'login');
      })
      .catch(err => {
        console.log(err);
        alert('Problem signing in');
      });
  };

  // const data = new FormData(event.target);




  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col size="md-12">
            {/* FORM HAS ACTION TO SIGNUP route*/}
              <form className="card-body" action="/sigup">

                <span>
                  <p>SingUP PAGE</p>
                  <label>Email Address</label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange.bind(this)}
                  />
                  <label>Firstname</label>
                  <input
                    type="text"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.handleInputChange.bind(this)}
                  />
                  <label >Lastname</label>
                  <input
                    type="text"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleInputChange.bind(this)}
                  />
                  <label >User Name</label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange.bind(this)}

                  />
                  <label>Password</label>
                  <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange.bind(this)}
                  />
                  <button onClick={this.handleFormSubmit}>Submit</button>
                  <a className="btn" href='/'>Cancel</a>
                </span>
              </form>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
};


export default withRouter(Signup);
