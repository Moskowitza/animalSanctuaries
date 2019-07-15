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
    user:null
  };
 componentDidMount(){
  const user = localStorage.getItem('user');
  user && this.setState({ user: JSON.parse(user)});
 }
  signIn = async (email, password) => {
    try{
      const user = await API.loginUser({
        email,
        password,
      })
      const {data} = user;
      this.setState({ user: data });
      localStorage.setItem('user', JSON.stringify(data));
      return data
    }
      catch(err) {console.log(err)};
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

  render() {
    const { user } = this.state;
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
            render={props => (<Dashboard {...props} user={user} />)}
          />
          <Route 
            exact 
            path="/search" 
            render={props => <Search {...props} user={user} />}
          />
          <Route
            exact
            path="/signin"
            render={props => (<Signin {...props} user={user} signIn={this.signIn} />)}
          />
          <Route
            exact
            path="/signup"

            render={props => <Signup {...props} user={user} signIn={this.signIn} />}
          />
          <Route 
            exact 
            path="/sanctuary/:id" 
            render={props => <SanctuaryProfile {...props} user={user}  />}
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
