import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Header>
        <h1> Animal Sanctuaries</h1>
        <h2> Website for Animal lovers</h2>
      </Header>
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
