import React, { Component } from "react";
import Container from "../components/Container";
import API from "../utils/API";
import Row from "../components/Row";
import Col from "../components/Col";
// import Signup from "../components/Signup";

class Signup extends Component {
    //Setting the initial values of this.state.email and this.state.password

    state = {
        username: "",
        password: "",
        email: "",

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
        alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        API.saveUser({
            username: this.state.username,
            password: this.state.password,
        })
            .then(res => console.log(res))

    };

    // const data = new FormData(event.target);




    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <Col size="md-12">
                            <form className="card-body" action="/signup">
                                <span>
                                    <p></p>
                                    Username:
            <input
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleInputChange.bind(this)}
                                    />
                                </span>
                                <span>Email:
            <input
                                        type="email"
                                        placeholder="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange.bind(this)}
                                    />
                                   
                                </span>
                                <span>Password:
            <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange.bind(this)}
                                    />
                                </span>
                                <button onClick={this.handleFormSubmit}>Submit</button>
                            </form>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
};


export default Signup;
