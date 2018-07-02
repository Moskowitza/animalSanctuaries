import React from "react";
import "./UserSearchResults.css";

const SearchResults = props => (
  <ul className="list-group search-results">
      <li key={props.key} className="list-group-item">
        <img alt="sanctuary" src={props.logo} className="img-fluid" />
        <h3>Sanctuary Name:{props.name}</h3>
        <button>save</button>
      </li>
  </ul>
);

export default SearchResults;