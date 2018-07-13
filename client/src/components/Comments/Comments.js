import React from "react";
import "./Comments.css";
import { Link } from "react-router-dom";

const Comments = props => (
  <ul className="list-group search-results">
    <li key={props.postId} className="list-group-item">
      <p>{props.comment}</p>

    </li>
  </ul>
);

export default Comments;