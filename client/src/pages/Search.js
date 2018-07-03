import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import UserSearchResults from "../components/UserSearchResults";

// import sanctuaries from "../sanctuaries.json";
import API from "../utils/API";
class Search extends Component {
  state = {
    search: "",
    sanctuaries: [],
    results: [],
    error: "",
    //add state user to save searches
    user: {}
  };

  // When the component mounts, get a list of all sanctuaries this.state.sanctuaries from the json file
  componentDidMount() {
    // this.setState({
    //   sanctuaries: this.state.sanctuaries
    // });
    //also call our getUser function to see if the user is logged in
    this.getUser();
    this.getSanctuaries();
  };

  getUser = () => {
    API.getUser()
      .then(res => {
        //this does return the object with key pairs
        this.setState({
          user: res.data
        });
        console.log("USER: " + this.state.user)
      })
  }
  getSanctuaries = () => {
    API.getSanctuaries()
      .then(res => {
        console.log("res from sanctuaries search" + res)
        //this does return the object with key pairs
        this.setState({
          sanctuaries: res.data
        });
        console.log("Sanctuaries: " + this.state.sanctuaries)
      })
  }

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  //if user is true we 
  saveSearch = data => {
    // event.preventDefault();
    console.log("YOU CLICKED THE SAVE BUTTON sanID  "+data.sanId)//this works, 
    console.log("YOU CLICKED THE SAVE BUTTON userID  "+data.userId)//this works, 
    API.saveSearch({
      sanId: data.sanId,
      userId: data.userId
    })
      .then(res => {
        console.log(res);
      })
  }

  render() {
    let filteredSanctuaries = this.state.sanctuaries.filter(
      (sanctuary) => {
        return sanctuary.SanctuaryName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Sanctuary Name:</h1>
          <p>You are currently logged in as {this.state.user.email}</p>
          <SearchForm
            handleInputChange={this.handleInputChange}
            search={this.state.search}
          />
          {/* if logged in */}
          {this.state.user ?
            (
              <div>
                {filteredSanctuaries.map(sanctuary => (
                  <UserSearchResults
                    sanId={sanctuary.sanId}
                    key={sanctuary.sanId}
                    name={sanctuary.SanctuaryName}
                    website={sanctuary.animalWebsite}
                    logo={sanctuary.SanctuaryImage}
                    //pass in the user ID for associting
                    userId={this.state.user.userId}
                    onClick={()=>this.saveSearch({sanId:sanctuary.sanId,userId: this.state.user.userId})}
                  />
                ))}
              </div>
            ) : (
              // if not logged in serve up the page without button link
              <div>
                {filteredSanctuaries.map(sanctuary => (
                  <SearchResults
                    id={sanctuary.sanId}
                    key={sanctuary.sanId}
                    name={sanctuary.SanctuaryName}
                    website={sanctuary.animalWebsite}
                    logo={sanctuary.SanctuaryImage}
                  />
                ))}
              </div>
            )}
        </Container>
      </div>
    );
  }
}

export default Search;
