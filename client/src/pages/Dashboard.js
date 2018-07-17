import React, { Component } from "react";
import API from '../utils/API';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SavedSanctuaries from "../components/SavedSanctuaries/SavedSanctuaries";
import SavedComments from "../components/SavedComments";
import { Link } from "react-router-dom";


class Dashboard extends Component {
  state = {
    user: {},
    usercomments: [],
    sanctuaries: []
  };

  componentDidMount() {
    this.getUser()
    // this.getSavedSanctuaries()
  }
  getUser = () => {
    API.getUser()
      .then(res => {
        //this does return the object with key pairs
        console.log("dashboard, find user with Id : " + JSON.stringify(res.data.userId))
        this.setState({
          user: res.data
        });
        this.getSavedSanctuaries({ userId: this.state.user.userId });
        this.getMyComments({ userId: this.state.user.userId });
      })
  }


  getSavedSanctuaries = data => {
    // event.preventDefault();
    API.getSavedSanctuaries(data)
      .then(res => {
        // console.log("my loaded Sanctuaries" + JSON.stringify(res.data))
        this.setState({
          sanctuaries: res.data
        });
      })
  }

  getMyComments = data => {
    // event.preventDefault();
    API.getMyComments(data)
      .then(res => {
        console.log("mycomments "+JSON.stringify(res.data))
        this.setState({
          usercomments: res.data
        });
      })
  }

  logoutUser = event => {
    event.preventDefault();
    API.logoutUser().then(res => {
      console.log(res.data);
      if (res.data === true) {
        this.setState({ user: null });
      }
    })
      .catch(err => console.log(err));
  }
  deleteComment = data => {
    API.deleteComment({
      postId: data.postId
      })
      .then(res => {
        console.log(res)
      })
      .then(this.getMyComments({ userId: this.state.user.userId }))
  }

  render() {


    return (<div>
        <Container>
          <Row>
            <Col size="md-12">
              <p />
              <h1>Welcome To animal sanctuaries!</h1>
            </Col>
          </Row>
        </Container>

          {this.state.user ? (
            <Container>
              <Row className="Center">
                <Col size="md-12">
                  <div className="card w-75 h-75">
                    <div className="card-body text-center">
                      <div>
                        <p>
                          You are currently logged in as{" "}
                          {this.state.user.email}
                        </p>
                        <Link className="btn btn-info" to="/search">
                          {" "}
                          Search
                        </Link> &nbsp;
                        <Link className="btn btn-danger" onClick={this.logoutUser} to="/">
                          Logout{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col size="md-12">
                  <div className="card-body"> hello</div>
                </Col>
              </Row>
              <Row>
               
                <Col size="md-6 center">
              <h3>My Sanctuaries</h3>
              <div className="card w-75 h-75">
                
                  {this.state.sanctuaries.map(sanctuary => (
                    <SavedSanctuaries
                      id={sanctuary.sanId}
                      key={sanctuary.sanId}
                      logo={sanctuary.image}
                      name={sanctuary.name}
                      state={sanctuary.state}
                      sanId={sanctuary.sanId}
                    />
                  ))}
              </div>
                </Col>

                <Col size="md-6">
                  <h3>My Comments</h3>
                  {this.state.usercomments.map(obj => (
                    <SavedComments
                      key={obj.postId}
                      sanctuary={obj.Sanctuary.name}
                      comment={obj.comment}
                      delete={() =>
                        this.deleteComment({
                          postId: obj.postId
                        })
                      }
                    />
                  ))}
                </Col>
              </Row>
              </Container>
         
                 ) : (
           <Container>
              <Row>
                <Col size="md-12" className="Center">
                  <p className="lead">
                    {" "}
                    Login or Register to continue to follow Animal
                    Sanctuaries!
                  </p>
                  <Link className="btn btn-primary" to="/signin" onClick={this.handleFormSubmit}>
                    Login
                  </Link>&nbsp;
                  <Link className="btn btn-info" to="/signup">
                    Register
                  </Link>
                </Col>
              </Row>
          </Container>
           
          )}
       
      </div>
    )
    }
}

export default Dashboard;

