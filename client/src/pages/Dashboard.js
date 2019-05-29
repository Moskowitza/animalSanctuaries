import React, { Component } from "react";
import API from '../utils/API';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SavedSanctuaries from "../components/SavedSanctuaries/SavedSanctuaries";
import SavedComments from "../components/SavedComments";
import {Link} from "react-router-dom";

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
        console.log("mycomments " + JSON.stringify(res.data))
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
    return ( <div>
     
        <Container>
          <Row>
            <Col size="md-12" ClassName="Center">
              <p></p>
              <h1>Welcome To Animal Sanctuaries!</h1>
            </Col>
          </Row>
        </Container>

        {this.state.user ? (
          <Container>
            <Row>
              <Col size="md-12" ClassName="center">
              <div className="card h-75 w-75 center">
                <div className="card-body text-center">
                  <p>You are currently logged in as{" "}{this.state.user.email}</p>
                  <Link to="/search" className="btn btn-info">
                search
              </Link>
              &nbsp;
              <Link to="/" className="btn btn-danger" onClick={this.logoutUser} >
                Logout
              </Link>
                </div>  
                </div>
              </Col>
            </Row>
            <Row><Col size="md-12" /><div className="card-body" /></Row>
            <Row>
              <Col size="md-6">
              <h3>My Sanctuaries</h3>
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
              </Col>
              <Col size="md-6" >
                <h3>My Comments</h3>
                {this.state.usercomments.map(obj =>
                  (<SavedComments
                    key={obj.postId}
                    sanctuary={obj.Sanctuary.name}
                    comment={obj.comment}
                    delete={() => this.deleteComment({ postId: obj.postId })}
                  />
                  ))}
              </Col>
            </Row>
          </Container>
        ) : (
            <Container>
              <Row className="Center">
                <Col size="md-12" className="Center">
                <div className="card h-75 w-75 center">
                <div className="card-body text-center">
                  <div className="Center">
                    <p className="lead">
                      {" "}
                      Login or Register to continue to follow Animal Sanctuaries!</p>
                      <Link to="/signin" className="btn btn-info">
                Login
              </Link>   
              &nbsp;                       
              <Link to="/signin" className="btn btn-primary">
                Register
              </Link>
                  </div>
                  </div>
                  </div>
                </Col>
              </Row>
            </Container>
          )
          
        }
          </div>
    )
  }
}
export default Dashboard;
