import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
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
      .then(res => this.getComments())
      .catch(err => console.log(err));
    
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
    event.preventDefault();
    const { comment, sanctuary } = this.state;
    const {user}=this.props;
    const data = {
      comment,
      userId: user.userId,
      sanId: sanctuary.sanId,
    };
    console.log(`saving comment userId ${user.userId} sanId ${sanctuary.sanId} comment ${comment}`)

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
            <Col size="mb-8">
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
          <Row>
            <Col size="md-6">
              <Card>
                  <Card.Img
                    alt="sanctuary"
                    src={sanctuary.image}
                    className="img-fluid"
                  />
                  <Card.Body>
                  <Card.Title>
                    Sanctuary Website:{' '}
                    <a href={sanctuary.animalWebsite}>Click Here! </a>
                  </Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <b>Address:</b> {sanctuary.animalAddress}
                        <i className="material-icons">location_on</i>
                      </ListGroup.Item>
                      <ListGroup.Item>
                      
                        <b>Facebook:</b>
                        <a href={sanctuary.Facebook}>
                          
                          <i className="material-icons">link</i>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b> Instagram:</b>
                        <a href={sanctuary.Instagram}>
                          <i className="material-icons">link</i>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b> Donation:</b>
                        <a href={sanctuary.DonationPage}>
                          <i className="material-icons">link</i>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col size="md-6">
              <Card>
                <Card.Body>
                  {existingComments ? (
                    <ListGroup>
                      <p>Comments:</p>
                      {existingComments.map(singleComment => (
                        <Comments
                          key={singleComment.postId}
                          comment={singleComment.comment}
                        />
                      ))}
                    </ListGroup>
                  ) : (
                    <ListGroup>
                      <ListGroup.Item> No Comments </ListGroup.Item>
                    </ListGroup>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

    );
  }
}
SanctuaryProfile.propTypes = {
  user: PropTypes.shape({
    email:
      PropTypes.string,
    firstname:
      PropTypes.string,
    lastname:
      PropTypes.string,
    userId:
      PropTypes.number,
  }),
  match: PropTypes.shape.isRequired,
};

export default SanctuaryProfile;
