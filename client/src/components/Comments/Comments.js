import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup'
import './Comments.css';

const Comments = ({ postId, comment }) => (
    <ListGroup.Item key={postId} className="list-group-item">
      {comment}
    </ListGroup.Item>
);
Comments.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};
export default Comments;
