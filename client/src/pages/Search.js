import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import SearchForm from "../components/SearchForm";
import SearchState from "../components/SearchState";
import SearchResults from "../components/SearchResults";
import UserSearchResults from "../components/UserSearchResults";

// import sanctuaries from "../sanctuaries.json";
import API from "../utils/API";
class Search extends Component {
  state = {
    search: "",
    searchState: "",
    sanctuaries: [],
    results: [],
    error: "",
    //add state user to save searches
    user: {}
  };

  // getSanctuaries and getUser, if logged in
  componentDidMount() {
    this.getUser();
    this.getSanctuaries();
  }
  getUser = () => {
    API.getUser().then(res => {
      this.setState({
        user: res.data
      });
    });
  };
  getSanctuaries = () => {
    API.getSanctuaries().then(res => {
      this.setState({
        sanctuaries: res.data
      });
    });
  };
  // We need to shift this page to view Profiles.
  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  // renderPage = () => {
  //   if (this.state.currentPage === "Search") {
  //     return <Search />;
  //   } else if (this.state.currentPage === "SanctuaryProfile") {
  //     return <SanctuaryProfile />;
  //   }
  // };

  // handle any changes to the input Fields: Search
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //If user is true we pass this to our onClick
  //API will send data to the backend
  saveSearch = data => {
    API.saveSearch({
      sanId: data.sanId,
      userId: data.userId
    }).then(res => {
      console.log(res);
    });
  };
  //we need to pick a sanctuary that for a profile we'll view
  // selectSanctuary=data=>{
  //   this.setState({
  //     selected: data
  //   })
  //   // This fires off first, so we'll see the previous one
  //   .then(console.log("Selected Sanctuary IS" +JSON.stringify(this.state.selected)));
  // }

  render() {
    //This wont work: How would we extract the props we need back out of one mess array?
    //let names=this.state.sanctuaries.map((sanctuary)=>{return sanctuary.name})
    // let states=this.state.sanctuaries.map((sanctuary)=>{return sanctuary.state})
    // const searchFields = [...names,...states]
    // console.log(`Seach fields ${searchFields}`)

    //Our live filter function
    let filteredSanctuaries = this.state.sanctuaries.filter(sanctuary => {
      return (
        sanctuary.name
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Row>
            <div className="card w-50 h-50">
              <p className="card-body text-center">
                You are currently logged in as {this.state.user.email}
              </p>
              {/* SearchForm is for Name */}
            </div>
          </Row>
          <Row>
            <div className="card w-100">
              <div className="card-body">
                <p className="text-center">
                  Search for a Sanctuary by NAME or STATE below
                </p>

                <SearchForm
                  className="form-control"
                  handleInputChange={this.handleInputChange}
                  search={this.state.search}
                />
              </div>
            </div>
          </Row>
          {/* <SearchState             
            handleInputChange={this.handleInputChange}
            searchState={this.state.searchState}
          /> */}
          <Row>
            <div className="card w-100 h-100">
              <div className="card-body">
                {this.state.user ? ( // if LOGGED IN
                  <div>
                    {filteredSanctuaries.map(sanctuary => (
                      <UserSearchResults
                        sanId={sanctuary.sanId}
                        key={sanctuary.sanId}
                        name={sanctuary.name}
                        website={sanctuary.animalWebsite}
                        logo={sanctuary.image}
                        //userId comes from state, not our filteredSanctuaries array
                        userId={this.state.user.userId}
                        save={() =>
                          this.saveSearch({
                            sanId: sanctuary.sanId,
                            userId: this.state.user.userId
                          })
                        }
                      />
                    ))}
                  </div> // if not logged in serve up the page without button link
                ) : (
                  <div>
                    {filteredSanctuaries.map(sanctuary => (
                      <SearchResults
                        sanId={sanctuary.sanId}
                        key={sanctuary.sanId}
                        name={sanctuary.name}
                        website={sanctuary.animalWebsite}
                        logo={sanctuary.image}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
