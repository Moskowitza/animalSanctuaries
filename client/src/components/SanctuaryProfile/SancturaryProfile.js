import React from "react";
import "./SanctuaryProfile.css";

const SanctuaryProfile = props => (
  <ul className="list-group search-results">
      <li key={props.key} className="list-group-item">
        <h1>Santuary Profile Page</h1>
        <img alt="sanctuary" src={props.logo} className="img-fluid" />
        <h3>Sanctuary Name:{props.name}</h3>
        <aside>
            <ul>
                <li> address:{props.address}</li>
                <li> Facebook:{props.facebook}</li>
                <li> Instagram:{props.instagram}</li>

            </ul>
        </aside>
      </li>
  </ul>
);

export default SanctuaryProfile;