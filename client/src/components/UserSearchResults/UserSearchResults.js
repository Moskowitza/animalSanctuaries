import React from 'react';
import './UserSearchResults.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserSearchResults = ({ sanId, userId, save, logo, name }) => (
  <ul className="list-group search-results">
    <li key={sanId} className="list-group-item" /* onClick={props.select} */>
      <img alt="sanctuary" src={logo} className="img-fluid" />
      <h4>Sanctuary Name:{name}</h4>
      <Button
        type="button"
        className="btn btn-outline-success active"
        aria-pressed="true"
        userid={userId}
        sanid={sanId}
        onClick={save}
      >
        save
      </Button>

      <Link to={`/sanctuary/${sanId}`}>
        <Button>view profile</Button>
      </Link>
    </li>
  </ul>
);

UserSearchResults.propTypes = {
  userId: PropTypes.string.isRequired,
  sanId: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default UserSearchResults;
