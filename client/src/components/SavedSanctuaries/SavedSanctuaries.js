import React from "react";
import "./SavedSanctuaries.css";

const SavedSanctuaries = props => (
  <ul className="list-group search-results">
      <li key={props.key} className="list-group-item">
        <img alt="sanctuary" src={props.logo} className="img-fluid" />
        <h3>Sanctuary Name:{props.name}</h3>
      </li>
  </ul>
);

export default SavedSanctuaries;