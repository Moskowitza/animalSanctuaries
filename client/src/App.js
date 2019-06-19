import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Search from './pages/Search';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NewSanctuary from './pages/NewSanctuary';
import NavBarComp from './components/NavBarComp';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import SanctuaryProfile from './components/SanctuaryProfile';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <React.Fragment>
      <NavBarComp />
      <Header />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/sanctuary/:id" component={SanctuaryProfile} />
      <Route exact path="/newSanctuary" component={NewSanctuary} />
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
