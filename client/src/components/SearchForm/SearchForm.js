import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import PropTypes from 'prop-types';
import './SearchForm.css';

// Using the datalist element we can create autofill suggestions based on the props.sanctuaries array
const SearchForm = ({ search, handleInputChange }) => (
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-search">Search</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      onChange={handleInputChange}
      aria-label="Search"
      name="search"
      type="text"
      value={search}
      placeholder="Rancho Relaxo"
      aria-describedby="inputGroup-search"
    />
  </InputGroup>
  // <form className="search">
  //   <div className="form-group">
  //     <label htmlFor="name">
  //       Sanctuary Name:
  //       <p>Search: {search}</p>
  //       <input
  //         value={search}
  //         onChange={handleInputChange}
  //         name="search"
  //         list="search"
  //         type="text"
  //         className="form-control"
  //         placeholder="Type in an Animal Sanctuary Name"
  //         id="sanctuary"
  //       />
  //     </label>
  //   </div>
  // </form>
);
SearchForm.propTypes = {
  search: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default SearchForm;
