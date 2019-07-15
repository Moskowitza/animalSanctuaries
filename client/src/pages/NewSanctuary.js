import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';
class NewSanctuary extends Component {
  //  Setting the initial values of this.state.email and this.state.password
  state = {
    newName: '',
    imgLink: '',
    newState: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    const { newName, imgLink, newState } = this.state;
    const { history } = this.props;

    API.saveSanctuary({
      name: newName,
      image: imgLink,
      state: newState,
    })
      .then(res => {
        if (res.data === true) {
          history.push('/');
        } else {
          console.log(res);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { newName, imgLink, newState } = this.state;
    const { user } = this.props;
    if (user) {
      return (
        <Container className="mb-4">
          <Row className="justify-content-center">
            <Col>
              <Card>
                <Card.Header>Register a New Sanctuary</Card.Header>
                <Card.Body>
                  <Form>
                    
                      <Form.Group as={Row} controlId="newName">
                        <Form.Label column sm="2">
                          Name
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="text"
                            name="newName"
                            value={newName}
                            onChange={this.handleInputChange}
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="imgLink">
                        <Form.Label column sm="2">
                          Image Link
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="text"
                            name="imgLink"
                            value={imgLink}
                            onChange={this.handleInputChange}
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="newState">
                        <Form.Label column sm="2">
                          State
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="text"
                            name="newState"
                            value={newState}
                            onChange={this.handleInputChange}
                          />
                        </Col>
                      </Form.Group>
                
                  </Form>
                  <Button variant="primary" onClick={this.handleFormSubmit}>
                    Add New Sanctuary
                  </Button>

                  <Link className="btn" to="/">
                    <Button variant="Danger">Cancel</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container className="mb-4">
          <Row>
            <Col sm={{ span: 10, offset: 2 }}>
              <Card>You Must be an Admin to Create a New Sanctuary</Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}
NewSanctuary.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    userId: PropTypes.number,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NewSanctuary;
