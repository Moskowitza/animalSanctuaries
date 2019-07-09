import React from "react";
import "./SearchState.css";

// Using the datalist element we can create autofill suggestions based on the props.sanctuaries array
const SearchState = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="name">Sanctuary State:</label>
      <p>Search: {props.searchState}</p>
      <input
        value={props.searchState}
        onChange={props.handleInputChange}
        name="searchState"
        list="searchState"
        type="text"
        className="form-control"
        placeholder="Type in an Animal Sanctuary State"
        id="sanctuary"
      />
    </div>
  </form>
);

export default SearchState;
