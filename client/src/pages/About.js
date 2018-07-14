import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import CardBtn from "../components/CardBtn";
import { Link } from "react-router-dom";


const About = () => (
  <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
        <div>
          <h1>Welcome To animal sanctuaries!</h1>
        </div>
        <div className = "card w-100">

          <p className = "card-body text-center">
            Farm animal sanctuaries are safe havens for animals who have endured
            the victimization of factory farming. Visiting a sanctuary is an
            absolute must for anyone truly devoted to animal protection. The
            opportunity to meet a cow face-to-face or rub the belly of a pig is
            an incredibly moving experience. Very few animals trapped in factory
            farms and our food system ever experience freedom, but sanctuaries
            offer an island of kindness in this sea of cruelty.
         </p>
            <p className="card-body text-center">
            Click the search button to find animal sacturaries
            <br/>
            <Link to="/search" className="nav-link">
            Search
          </Link>
          </p>
          


        </div>
        </Col>
      </Row>
   
    </Container>
  </div>
);

export default About;
