import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const About = () => (

    <Container >
      <Row>
        <Col size="md-12">
          <div>
            <h1 style={{ color: "green" }}>Welcome To animal sanctuaries!</h1>
          </div>
        </Col>
      </Row>    
      <Row>
        <Col size="md-12 mb-4">
          <Card className="p-4 mb-5">
          <Card.Body className="text-center p-8">
              Farm animal sanctuaries are safe havens for animals who have
              endured the victimization of factory farming. Visiting a sanctuary
              is an absolute must for anyone truly devoted to animal protection.
              The opportunity to meet a cow face-to-face or rub the belly of a
              pig is an incredibly moving experience. Very few animals trapped
              in factory farms and our food system ever experience freedom, but
              sanctuaries offer an island of kindness in this sea of cruelty.
              <Card.Img
                className="rounded mx-auto d-block m-4"
                style={{"height":"200px", width:"200px"}}
                src="http://imagizer.imageshack.com/v2/200x200q90/673/7wO0v7.jpg"
                alt="girl kissing sheep"
              />
              </Card.Body>
              <Card.Footer  className="text-center p-8">
                <Row>
                <Col>
                Click the search button to find animal sacturaries or login to see
                saved sacturaries
                </Col>
                </Row>
                <Row>
                <Col>
                <Link to="/search">
                  <Button size="lg" className="sm">Search</Button>
                </Link>
                {' '}
                <Link to="/signin">
                  <Button variant="success"  size="lg" className="sm">Login</Button>
                </Link>
                </Col>
                </Row>
              </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>

);

export default About;
