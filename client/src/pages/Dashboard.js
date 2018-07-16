import React, { Component } from "react";
import API from '../utils/API';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SavedSanctuaries from "../components/SavedSanctuaries/SavedSanctuaries";
import SavedComments from "../components/SavedComments";


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
        console.log("my loaded Sanctuaries" + JSON.stringify(res.data))
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
      .then(console.log("this state comments" +this.state.mycomments))
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


  render() {


    return <div>
      <Container>
        <Row>
          <Col size="md-12">
            <p></p>
            <h1>Welcome To animal sanctuaries!</h1>
          </Col>
        </Row>

        <Row className="Center">
          <Col size="md-10">
            <div className="card w-50 h-50">
              <div className="card-body text-center">
                {this.state.user ?
                  <div>
                    <p>You are currently logged in as{" "}{this.state.user.email}</p>
                    <a className="btn btn-info" href="/search"> Search</a> &nbsp;
                      <a className="btn btn-danger" onClick={this.logoutUser} href="/">Logout </a>
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

                    <Col size="md-4">
                      <h3>My Comments</h3>
                      {this.state.usercomments.map(obj =>
                        (<SavedComments
                          key={obj.postId}
                          comment={obj.comment} />))}
                    </Col>
                  </div>
                  :
                  <div>
                    <p className="lead">
                      {" "}
                      Login or Register to continue to follow Animal
                      Sanctuaries!
                      </p>
                    <a className="btn btn-info" href="/signin" onClick={this.handleFormSubmit}>
                      Login
                      </a>&nbsp;
                      <a className="btn btn-primary" href="/signup">
                      Register
                      </a>
                  </div>}
              </div>

            </div>
          </Col>

        </Row>

      </Container>
    </div>;
  }
}

export default Dashboard;

