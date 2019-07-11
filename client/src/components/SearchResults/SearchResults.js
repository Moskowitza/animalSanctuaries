import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './SearchResults.css';

const SearchResults = ({ sanId, logo, name, website, animalPhone, animalAddress, userId, save }) => (
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
      {userId &&       <Button
        type="button"
        className="btn btn-outline-success active"
        aria-pressed="true"
        userid={userId}
        sanid={sanId}
        onClick={save}
      >
        save
      </Button>}
    </Card.Body>
  </Card>
);

SearchResults.propTypes = {
  sanId: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  animalPhone: PropTypes.string,
  userId:PropTypes.number,
  save:PropTypes.func
};

export default SearchResults;
