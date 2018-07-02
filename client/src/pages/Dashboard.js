import React, { Component } from "react";
import API from '../utils/API';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Dashboard extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    API.getUser()
      .then(res => {
        //this does return the object with key pairs
        console.log("dashboard" + JSON.stringify(res.data))
        this.setState({
          user: res.data
        });
        console.log(this.state.user)
      })
  }
  logoutUser = event => {
    event.preventDefault();
    API.logoutUser().then(res => {
      console.log(res.data);
      if (res.data === true) {
        this.setState({ user: null });
      }
    })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Welcome To animal sanctuaries!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                YOU MADE IT TO DASHBOARD, you must be logged in!!!
          </p>
            </Col>
          </Row>
          <Row>
            {this.state.user ? (
              <div>
                <p>You are currently logged in as {this.state.user.email}</p>
                <a className="btn btn-default" onClick={this.logoutUser}>Logout</a>
              </div>
            ) : (
                <div>
                  <p className="lead"> Login or register to continue.</p>
                  <a className="btn btn-default" onClick={this.handleFormSubmit}>Login</a>&nbsp;
                    <a className="btn btn-default btn-primary" href="/signup">Register</a>
                </div>
              )}
          </Row>
        </Container>
      </div>
    )
  }
}

export default Dashboard;
