import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.sanctuaries array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="name">Sanctuary Name:</label>
      <p>Search: {props.search}</p>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="search"
        list="search"
        type="text"
        className="form-control"
        placeholder="Type in an Animal Sanctuary Name"
        id="sanctuary"
      />
      {/* <datalist id="sanctuaries">
        {props.sanctuaries.map(sanctuary => <option value={sanctuary} key={sanctuary} />)}
      </datalist> */}
      {/* <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button> */}
    </div>
  </form>
);

export default SearchForm;
