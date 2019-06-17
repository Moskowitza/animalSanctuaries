import React from "react";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import "./Header.css";

const Header = props => (
<Container fluid={true}>
    <Row className="header">
      <h1>Animal Sanctuaries</h1>
    </Row>
    <Row>
      <h2>Website for Animal lovers</h2>
   </Row>
</Container>

);

export default Header;
