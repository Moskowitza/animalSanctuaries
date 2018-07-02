import React, { Component } from "react";
import "./SearchResults.css";
import API from "../utils/API";

class SearchResults extends Comment {
  state = {
    user: null
  };
  componentDidMount() {
    //also call our getUser function to see if the user is logged in
    this.getUser();
  };
  getUser = () => {
    API.getUser()
      .then(res => {
        //this does return the object with key pairs
        this.setState({
          user: res.data
        });
        console.log(this.state.user)
      })
  }

  render() {
    return (
      <ul className="list-group search-results">
        <li key={props.key} className="list-group-item">
          <img alt="sanctuary" src={props.logo} className="img-fluid" />
          <h3>Sanctuary Name:{props.name}</h3>
          {/* add button if logged in */}

        </li>
      </ul>
    )
  }
}
export default SearchResults;
