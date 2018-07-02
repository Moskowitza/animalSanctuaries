import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
// import sanctuaries from "../sanctuaries.json";
import API from "../utils/API";
class Search extends Component {
  state = {
    search: "",
    sanctuaries:null,
    results: [],
    error: "",
    //add state user to save searches
    user: null
  };

  // When the component mounts, get a list of all sanctuaries this.state.sanctuaries from the json file
  componentDidMount() {
    // this.setState({
    //   sanctuaries: this.state.sanctuaries
    // });
    //also call our getUser function to see if the user is logged in
    this.getUser();
    // this.getSanctuaries();
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
  // getSanctuaries = () => {
  //   API.getSanctuaries()
  //     .then(res => {
  //       //this does return the object with key pairs
  //       this.setState({
  //         sanctuaries: res.data
  //       });
  //       console.log(this.state.user)
  //     })
  // }

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
  saveSearch = event => {
  }

  render() {
    let filteredSanctuaries = this.state.sanctuaries.filter(
      (sanctuary) => {
        return sanctuary.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Sanctuary Name:</h1>
          <SearchForm
            handleInputChange={this.handleInputChange}
            search={this.state.search}
          />
          {/* if logged in */}

            <div>
              <p>You are currently logged in as {this.state.user.email}</p>
              {filteredSanctuaries.map(sanctuary => (
            <SearchResults
              id={sanctuary.id}
              key={sanctuary.id}
              name={sanctuary.name}
              website={sanctuary.website}
              logo={sanctuary.logo}
            />
          ))}
            </div>
        </Container>
      </div>
    );
  }
}

export default Search;
