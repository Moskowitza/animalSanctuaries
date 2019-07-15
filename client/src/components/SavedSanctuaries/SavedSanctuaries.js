import React from 'react';
import './SavedSanctuaries.css';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SavedSanctuaries = ({ key, logo, name, sanId, index }) => (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={index}>
      <Card.Header> {name} </Card.Header>
      </Accordion.Toggle>
    <Accordion.Collapse eventKey={index}>
      <Card.Body> 
      <Card.Img variant="top" alt="sanctuary" src={logo} className="img-fluid" />
      <Link to={`/sanctuary/${sanId}`}>
        <strong>view profile</strong>
      </Link>
      </Card.Body>
    </Accordion.Collapse>
    </Card>

);
SavedSanctuaries.propTypes = {
  key: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sanId: PropTypes.string.isRequired,
};

export default SavedSanctuaries;
