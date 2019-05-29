import React from "react";
import "./SavedComments.css";

const SavedComments = props => (
  <ul className="list-group search-results">
      <li key={props.postId} className="list-group-item">
        <p>Sanctuary Name:{props.sanctuary}</p>
        <p>comment:{props.comment}</p>
        <button onClick={props.delete}>delete comment</button>      
      </li>
  </ul>
);

export default SavedComments;