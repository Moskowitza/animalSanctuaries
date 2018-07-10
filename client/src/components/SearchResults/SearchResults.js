import React from "react";
import "./SearchResults.css";
import { Link } from "react-router-dom";

const SearchResults = props => (
  <ul className="list-group search-results">
    <li key={props.sanId} className="list-group-item">
      <img alt="sanctuary" src={props.logo} className="img-fluid" />
      <h3>Sanctuary Name:{props.name}</h3>
      <Link to={"/sanctuary/" + props.sanId}>
        <strong>
          view profile
        </strong>
      </Link>
    </li>
  </ul>
);

export default SearchResults;