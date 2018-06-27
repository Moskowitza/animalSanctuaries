import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.sanctuaries array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="breed">Sanctuary Name:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="sanctuary"
        list="sanctuary"
        type="text"
        className="form-control"
        placeholder="Type in an Animal Sanctuary Name"
        id="sanctuary"
      />
      <datalist id="breeds">
        {props.breeds.map(breed => <option value={breed} key={breed} />)}
      </datalist>
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
