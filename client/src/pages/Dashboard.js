import React, { Component } from "react";
import API from '../utils/API';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Dashboard extends Component {
  state = {
    user: null
  };
  componentDidMount() {
    this.getUser();
  }
  getUser = () => {
    API.getUser()
      .then(res => {
        this.setState(res.data);
      })
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
        </Container>
      </div>
    )
  }
}

  export default Dashboard;
