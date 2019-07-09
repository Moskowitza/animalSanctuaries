import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './Header.css';

const Header = () => (
  <Jumbotron fluid className="header">
    <Container>
      <h1>Animal Sanctuaries</h1>
      <h2>Website for Animal lovers</h2>
    </Container>
  </Jumbotron >
);

export default Header;
