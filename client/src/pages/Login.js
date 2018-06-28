import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


class Login extends React.Component {
  //Setting the initial values of this.state.email and this.state.password

 state = {
    username: "",
    password: ""
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
      this.setState({
        username: event.target.value,
        password: event.target.value
      });

    // const data = new FormData(event.target);
    

    fetch("/api/login", {
      method: "post",
        body: JSON.stringify(this.state)
    }).then(function(response) {
      if (response.status !== 200) {
        console.log("Looks like there was a problem. Status Code: " + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
      });
    });
}
    
 

  

  render() {
    return (
      <div>
        <Container>
        <Row className="justify-content-center"> 
        <Col size="md-12">
        <form className="card-body">
           
            <span>
            <p></p>
            Username: 
            {/* {this.state.username} */}

            <input
              type="text"
              placeholder="Username"
              name="username"
            value={this.state.username}
            onChange={this.handleInputChange.bind(this)}
            />
            </span>                   {/* <p></p>{this.state.password} */}
            <span>Password:
                
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
            onChange={this.handleInputChange.bind(this)}
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
            </span>
          </form>
        </Col>
        </Row>
        </Container>
  
      </div>
    );
  }
};


export default Login;
