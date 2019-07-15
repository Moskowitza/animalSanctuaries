import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'
import API from '../utils/API';

import SavedSanctuaries from '../components/SavedSanctuaries/SavedSanctuaries';
import SavedComments from '../components/SavedComments';

class Dashboard extends Component {
  state = {
    usercomments: [],
    sanctuaries: [],
  };

  async componentDidMount() {
    const { user } = this.props;
    console.log(user)
    // this.getUser();
    user && await this.getSavedSanctuaries()
  //  user && this.getSavedSanctuaries({ userId: user.userId });
   user && await this.getMyComments({ userId: user.userId });
  }



  getSavedSanctuaries = () => {
    // event.preventDefault();
    const { user } = this.props;
    const data={ userId: user.userId }
    API.getSavedSanctuaries(data).then(res => {
      // console.log("my loaded Sanctuaries" + JSON.stringify(res.data))
      this.setState({
        sanctuaries: res.data,
      });
    });
  };

  getMyComments = data => {
    // event.preventDefault();
    API.getMyComments(data).then(res => {
      console.log(`mycomments ${JSON.stringify(res.data)}`);
      this.setState({
        usercomments: res.data,
      });
    });
  };


  deleteComment = data => {
    const { user } = this.props;
    API.deleteComment({
      postId: data.postId,
    })
      .then(res => {
        console.log(`Deleted ${res}`);
      })
      .then(this.getMyComments({ userId: user.userId }));
  };

  render() {
    const { user } = this.props;
    const { usercomments, sanctuaries } = this.state;
    return (
      <Container className="mb-4">

        {user ? (
          <React.Fragment>
            <Row className="m-4">
              <Col  className="center m-4">
                <Card   
                  className="card mx-auto text-center"
                  style={{ width: '50%' }}>
                  <Card.Body>
                    <p>You are currently logged in as {user.email}</p>
                    <Link to="/search" className="btn btn-info">
                      search
                    </Link>
                    &nbsp;
                    <Link
                      to="/"
                      className="btn btn-danger"
                      onClick={this.logoutUser}
                    >
                      Logout
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col size="md-6">
                <h3>My Sanctuaries</h3>
                <Accordion defaultActiveKey="">
                {sanctuaries.map(sanctuary => (
                  <SavedSanctuaries
                    id={sanctuary.sanId}
                    key={sanctuary.sanId}
                    logo={sanctuary.image}
                    name={sanctuary.name}
                    state={sanctuary.state}
                    sanId={sanctuary.sanId}
                  />
                ))}
                </Accordion>
              </Col>
              <Col size="md-6">
                <h3>My Comments</h3>
                {usercomments.map(obj => (
                  <SavedComments
                    key={obj.postId}
                    sanctuary={obj.Sanctuary.name}
                    comment={obj.comment}
                    deleteComment={() =>
                      this.deleteComment({ postId: obj.postId })
                    }
                  />
                ))}
              </Col>
            </Row>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Row>
              <Col size="md-12">
                <Card
                  className="card  mx-auto text-center"
                  style={{ width: '50%' }}
                >
                  <Card.Body>
                    <h5 className="card-title">Login for dashboard</h5>
                    <p className="card-text">
                      You're not logged in, so there is nothing to see here
                    </p>
                    <Link to="/signin" className="btn btn-info">
                      Login
                    </Link>
                    &nbsp;
                    <Link to="/signup" className="btn btn-primary">
                      Register
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </React.Fragment>
        )}
      </Container>
    );
  }
}

Dashboard.propTypes = {
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
};
export default Dashboard;
