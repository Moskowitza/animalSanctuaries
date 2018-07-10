import React from "react";
import "./UserSearchResults.css";

const UserSearchResults = props => (
  <ul className="list-group search-results">
      <li key={props.sanId} className="list-group-item" onClick={props.select}>
        <img alt="sanctuary" src={props.logo} className="img-fluid" />
        <h3>Sanctuary Name:{props.name}</h3>
        <button userid={props.userId} sanid={props.sanId} onClick={props.search}>save</button>
      </li>
  </ul>
);

export default UserSearchResults;