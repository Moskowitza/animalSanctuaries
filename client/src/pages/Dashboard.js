import React, { Component } from "react";
import API from '../utils/API';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SavedSanctuaries from "../components/SavedSanctuaries/SavedSanctuaries";

class Dashboard extends Component {
  state = {
    user: {},
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
      })
  }
  getSavedSanctuaries = data => {
    // event.preventDefault();
    console.log("userId for join " + data.userId)
    API.getSavedSanctuaries(data)
      .then(res => {
        //this does return the object with key pairs
        console.log("dashboard sanctuaries response : " + JSON.stringify(res.data))
        this.setState({
          sanctuaries: res.data
        });
        console.log(this.state.sanctuaries);//returns an array of objects
      }).catch(err => console.log(err))
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
    const mySanctuaries = this.state.sanctuaries
    console.log(`mySanctuaryies${mySanctuaries}`)
    return <div>
      <Container>
        <Row>
          <Col size="md-12">
            <p></p>

            <h1>Welcome To animal sanctuaries!</h1>
          </Col>
        </Row>

        <Row className="center">
          <Col size="md1-2">
            <div className="card w-50 h-50">
              <div className="card-body text-center">
                {this.state.user ? <div>
                  <p>
                    You are currently logged in as{" "}
                    {this.state.user.email}
                  </p>
                  <a className="btn btn-info" href="/search">
                    Search
                      </a> &nbsp;
                      <a className="btn btn-danger" onClick={this.logoutUser} href="/">
                    Logout
                      </a>

                  {mySanctuaries.map(sanctuary => (
                    <SavedSanctuaries
                      id={sanctuary.sanId}
                      key={sanctuary.sanId}
                      logo={sanctuary.image}
                      name={sanctuary.name}
                      state={sanctuary.state}
                      sanId={sanctuary.sanId}
                    />
                  ))}
                </div> : <div>
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

