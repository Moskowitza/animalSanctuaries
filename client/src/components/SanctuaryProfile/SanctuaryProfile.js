import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
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
    show:false
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
      .then(res => {
        this.getComments();
        this.handleShow()
      })
      // .then(this.setState({ comment: '' }))
      .catch(err => {
        console.log(err);
        alert('Problem Commenting!');
      });
  };
  handleShow=()=>{
    this.setState({show:true})
  }
  handleClose=()=>{   
    this.setState({show:false, comment:""})
  }

  // const data = new FormData(event.target);

  render() {
    const {user}=this.props
    const { sanctuary, existingComments, comment, show } = this.state;
    return (
    
        <Container >
            <Modal show={show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Comment Added</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your Comment {comment} </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button> */}
            </Modal.Footer>
            </Modal>
          <Row className="mb-2">
          <Col size="md-12">
            <Card className=" text-center">
              <h3>{sanctuary.name} Profile Page</h3>
            </Card>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              {user ? (
                <Card>
                  <Card.Body>
                  <Form>
                    <Form.Group as={Row} controlId="userComment">
                       <Form.Label column sm={2}>Add Comment:</Form.Label> 
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            name="comment"
                            value={comment}
                            onChange={this.handleInputChange}
                          />                     
                        </Col>
                      </Form.Group>
                     <Form.Group as={Row} >
                      <Col sm={{ span: 6, offset: 2 }}>
                        <Button onClick={this.handleFormSubmit}>
                          Save Comment
                        </Button>
                      </Col>
                      <Col sm={{span:4}}>
                          <Link to="/Search">← Back to Search</Link>
                      </Col>
                    </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              ) : (
                <Card>
                  <Card.Body>log in to comment</Card.Body>
                </Card>
              )}
            </Col>
          </Row>
          <Row className="mb-4 pb-5">
            <Col size="sm-6">
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
            <Col size="sm-6">
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
