import React from 'react';
import './SavedSanctuaries.css';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SavedSanctuaries = ({ key, logo, name, sanId }) => (
    <Card key={key}>
    <Card.Header>
      <Accordion.Toggle as={Card.Header} eventKey={key}>
        {name}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={key}>
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
