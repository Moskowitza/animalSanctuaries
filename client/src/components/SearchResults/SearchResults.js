import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './SearchResults.css';

const SearchResults = ({ sanId, logo, name, website, animalPhone, animalAddress }) => (
  <Card border="info" key={sanId} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={logo} className="img-fluid" />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item><a href={website}>Sanctuary's External Website </a></ListGroup.Item>
        <ListGroup.Item>{animalPhone}</ListGroup.Item>
        <ListGroup.Item>{animalAddress}</ListGroup.Item>
      </ListGroup>
      <Card.Text>

      </Card.Text>

      <Link to={`/sanctuary/${sanId}`} className="btn btn-info">
        Profile
        </Link>

    </Card.Body>
  </Card>

  // <ul className="list-group search-results">
  //   <li key={sanId} className="list-group-item">
  //     <img alt="sanctuary" src={logo} className="img-fluid" />
  //     <h4>Sanctuary Name:{name}</h4>
  //     <h4>
  //       Sanctuary Website: <a href={website}>Click me! </a>{' '}
  //     </h4>
  //     <Link to={`/sanctuary/${sanId}`}>
  //       <strong>view profile</strong>
  //     </Link>
  //   </li>
  // </ul>
);

SearchResults.propTypes = {
  sanId: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  animalPhone: PropTypes.string,
};

export default SearchResults;
