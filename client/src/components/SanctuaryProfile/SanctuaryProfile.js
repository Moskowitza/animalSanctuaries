import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Comments from '../Comments';
import API from '../../utils/API';

class SanctuaryProfile extends Component {
  state = {
    sanctuary: {},
    existingComments: [],
    comment: '',
  };
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    API.getSanctuary(params.id)
      .then(res => this.setState({ sanctuary: res.data }))
      .catch(err => console.log(err));
    this.getComments();
  }

  getComments = () => {
    const { match } = this.props;
    const { params } = match;
    API.getComments(params.id)
      .then(res => this.setState({ existingComments: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    const { comment, sanctuary } = this.state;
    const {user}=this.props;
    event.preventDefault();
    const data = {
      comment,
      userId: user.userId,
      sanId: sanctuary.sanId,
    };

    API.saveComment(data)
      .then(res => this.getComments())
      .then(this.setState({ comment: '' }))
      .catch(err => {
        console.log(err);
        alert('Problem Commenting!');
      });
  };

  // const data = new FormData(event.target);

  render() {
    const {user}=this.props
    const { sanctuary, existingComments, comment } = this.state;
    return (
    
        <Container className="mb-4">
          <Row>
          <Col size="md-12">
            <Card className=" text-center">
              <h3>{sanctuary.name} Profile Page</h3>
            </Card>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <Card>
                <Card.Body>
                  <img
                    alt="sanctuary"
                    src={sanctuary.image}
                    className="img-fluid"
                  />
                  <h3>
                    Sanctuary Website:{' '}
                    <a href={sanctuary.animalWebsite}>Click Here! </a>
                  </h3>

                  <p className="text-left">
                    <strong> Details:</strong>
                    <ul>
                      <li>
                        {' '}
                        <b>Address:</b> {sanctuary.animalAddress}{' '}
                        <i className="material-icons">location_on</i>
                      </li>
                      <li>
                        {' '}
                        <b>Facebook:</b>{' '}
                        <a href={sanctuary.Facebook}>
                          {' '}
                          <i className="material-icons">link</i>
                        </a>
                      </li>
                      <li>
                        {' '}
                        <b> Instagram:</b>{' '}
                        <a href={sanctuary.Instagram}>
                          {' '}
                          <i className="material-icons">link</i>
                        </a>
                      </li>
                      <li>
                        {' '}
                        <b> Donation:</b>{' '}
                        <a href={sanctuary.DonationPage}>
                          {' '}
                          <i className="material-icons">link</i>
                        </a>
                      </li>
                    </ul>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col size="md-6">
              <div className="card w-100 h-100">
                <div className="card-body text-center">
                  {existingComments ? (
                    <div>
                      <p>Comments:</p>
                      {existingComments.map(singleComment => (
                        <Comments
                          key={singleComment.postId}
                          comment={singleComment.comment}
                        />
                      ))}
                    </div>
                  ) : (
                    <div>
                      <p> no comments </p>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="md-12 mb-8">
              {user ? (
                <Card>
                  <Card.Body>
                    <label htmlFor="userComment">
                      Add Comment:
                      <input
                        id="userComment"
                        type="text"
                        className="form-control"
                        name="comment"
                        value={comment}
                        onChange={this.handleInputChange}
                      />
                    </label>
                    <Button
                      onClick={this.handleFormSubmit}
                    >
                      Save Comment
                    </Button>
                    <Link to="/Search">← Back to Search</Link>
                  </Card.Body>
                </Card>
              ) : (
                <Card>
                  <Card.Body>log in to comment</Card.Body>
                </Card>
              )}
            </Col>
          </Row>
        </Container>

    );
  }
}
SanctuaryProfile.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default SanctuaryProfile;
