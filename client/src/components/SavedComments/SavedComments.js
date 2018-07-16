import React from "react";
import "./SavedComments.css";
import { Link } from "react-router-dom";

const SavedComments = props => (
  <ul className="list-group search-results">
      <li key={props.postId} className="list-group-item">
        <p>Sanctuary Name:{props.sanctuary}</p>
        <p>comment:{props.comment}</p>
        {/* <Link to={"/sanctuary/" + props.sanId}>
        <strong>
          view profile
        </strong>
      </Link> */}
      
      </li>
  </ul>
);

export default SavedComments;