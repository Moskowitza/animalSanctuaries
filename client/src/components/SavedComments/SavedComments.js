import React from "react";
import "./SavedComments.css";
import { Link } from "react-router-dom";

const SavedComments = props => (
  <ul className="list-group search-results">
      <li key={props.postId} className="list-group-item">
        {/* <h3>Sanctuary Name:{props.name}</h3> */}
        {/* <Link to={"/sanctuary/" + props.sanId}>
        <strong>
          view profile
        </strong>
      </Link> */}
      <p>{props.comment}</p>
      </li>
  </ul>
);

export default SavedComments;