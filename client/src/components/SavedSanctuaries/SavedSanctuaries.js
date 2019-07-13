import React from 'react';
import './SavedSanctuaries.css';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SavedSanctuaries = ({ key, logo, name, sanId }) => (
  <ul className="list-group search-results mb-4">
    <li key={key} className="list-group-item mb-4">
    <Card>
      <Card.Img variant="top" alt="sanctuary" src={logo} className="img-fluid" />
      <Card.Body>
      <h3>Sanctuary Name:{name}</h3>
      <Link to={`/sanctuary/${sanId}`}>
        <strong>view profile</strong>
      </Link>
      </Card.Body>
      </Card>
    </li>
  </ul>
);
SavedSanctuaries.propTypes = {
  key: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sanId: PropTypes.string.isRequired,
};

export default SavedSanctuaries;
