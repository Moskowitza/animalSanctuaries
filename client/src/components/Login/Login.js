<<<<<<< HEAD
import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

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
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}
=======
import React from "react";
import Container from "../components/Container";

class Login extends Component {
    //Setting the initial values of this.state.email and this.state.password

    state = {
        email: "",
        password: ""
    };

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
        alert(`Username: ${this.state.email}\nPassword: ${this.state.password}`);
        this.setState({ email: "", password: "" });

        const data = new FormData(event.target);

        fetch('/api/Login', {
            method: 'POST',
            body: data,
        });

    };


    render() {
        return (

            <div>
                <Container style={{ minHeight: "80%" }}>
                    <form>
                        <p>Username: {this.state.email}</p>
                        <p>Password: {this.state.password}</p>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </Container>
            </div>

        );
    };
};

>>>>>>> 0a8623ea8298b08892a3a66d663dc45377d2a9cf

export default Login;
