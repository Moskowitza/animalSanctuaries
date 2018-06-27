import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import sanctuaries from "../sanctuaries.json";
class Search extends Component {
  state = {
    search: "",
    sanctuaries,
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all sanctuaries this.state.sanctuaries from the json file
  componentDidMount() {
    this.setState({ 
      sanctuaries: this.state.sanctuaries
    });
    console.log(sanctuaries)
  };

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Sanctuary Name:</h1>
          <SearchForm
            handleInputChange={this.handleInputChange}
            sanctuaries={this.state.sanctuaries}
          />
          {this.state.sanctuaries.map(sanctuary=>(
            <SearchResults 
            id={sanctuary.id}
            key={sanctuary.id}
            name={sanctuary.name}
            website={sanctuary.website}
            logo={sanctuary.logo}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Search;
