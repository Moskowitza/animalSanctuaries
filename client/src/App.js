import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Search from './pages/Search';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NewSanctuary from './pages/NewSanctuary';
import NavBarComp from './components/NavBarComp';

import Header from './components/Header';
import SanctuaryProfile from './components/SanctuaryProfile';
import Footer from './components/Footer';
import API from './utils/API';

class App extends Component {
  state = {
    user: null,
    usercomments: null,
    sanctuaries: null,
  };
  async componentDidMount() {
    const user = localStorage.getItem('user');
    user && await this.setState({ user: JSON.parse(user) });
    this.getSavedSanctuaries();
    this.getMyComments();
  }
  signIn = async (email, password) => {
    try {
      const user = await API.loginUser({
        email,
        password,
      });
      const { data } = user;
      this.setState({ user: data });
      localStorage.setItem('user', JSON.stringify(data));
      this.getSavedSanctuaries();
      this.getMyComments();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  logOut = () => {
    localStorage.removeItem('user');
    API.logoutUser()
      .then(res => {
        this.setState({ user: null });
        window.location.replace('/');
      })
      .catch(err => console.log(err));
  };

  getSavedSanctuaries = () => {
    // event.preventDefault();
    console.log('getting saved sanctuaries');
    const { user } = this.state;
    const data = { userId: user.userId };
    API.getSavedSanctuaries(data).then(res => {
      console.log(res.data)
      if (res.data) {
        this.setState({
          sanctuaries: res.data,
        });
      } else {
        this.setState({
          sanctuaries: null,
        });
      }
    });
  };
  getMyComments = () => {
    console.log('getting saved comments');
    const { user } = this.state;
    const data = { userId: user.userId };
    API.getMyComments(data).then(res => {
      if (res.data) {
        this.setState({
          usercomments: res.data,
        })
      }else {
        this.setState({
          usercomments: null,
        });
      }
    });
  };

  deleteComment = data => {
    const { user } = this.state;
    API.deleteComment({
      postId: data.postId,
    })
      .then(this.getMyComments({ userId: user.userId }))
      .catch(err=>console.error(err))
  };

  render() {
    const { user, usercomments, sanctuaries } = this.state;
    return (
      <Router>
        <React.Fragment>
          <NavBarComp user={user} logOut={this.logOut} />
          <Header />
          <Route
            exact
            path="/"
            render={props => <About {...props} user={user} />}
          />
          <Route
            exact
            path="/about"
            render={props => <About {...props} user={user} />}
          />
          <Route
            exact
            path="/dashboard"
            render={props => <Dashboard {...props} 
            getSavedSanctuaries={this.getSavedSanctuaries}
            getMyComments={this.getMyComments}
            deleteComment={this.deleteComment}
            usercomments={usercomments}
            sanctuaries={sanctuaries}
            user={user} />}
          />
          <Route
            exact
            path="/search"
            render={props => <Search {...props} user={user} />}
          />
          <Route
            exact
            path="/signin"
            render={props =>
              <Signin {...props} user={user} signIn={this.signIn} />}
          />
          <Route
            exact
            path="/signup"
            render={props =>
              <Signup {...props} user={user} signIn={this.signIn} />}
          />
          <Route
            exact
            path="/sanctuary/:id"
            render={props => <SanctuaryProfile {...props} user={user} />}
          />
          <Route
            exact
            path="/newSanctuary"
            render={props => <NewSanctuary {...props} user={user} />}
          />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
