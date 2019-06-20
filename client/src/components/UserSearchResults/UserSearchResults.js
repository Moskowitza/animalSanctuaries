import React from "react";
import "./UserSearchResults.css";
import { Link } from "react-router-dom";

//TODO : Format with

// TODO : Create an onClick function to have reactRouter swith to the store
//sancRef=React.createRef()
//goToSanc=event=>{
//  event.preventDefault();
//  const animalSanc=this.sancRef.sanid
//  push this.props.history(`/sanctuary/${animalSanc}`)
// }



const UserSearchResults = props => (
  <ul className="list-group search-results">
    <li
      key={props.sanId}
      className="list-group-item" /*onClick={props.select}*/
    >
      <img alt="sanctuary" src={props.logo} className="img-fluid" />
      <h4>Sanctuary Name:{props.name}</h4>
      <button
        className="btn btn-outline-success active"
        aria-pressed="true"
        userid={props.userId}
        sanid={props.sanId}
        onClick={props.save}
      >
        save
      </button>{" "}
      &nbsp;
      <Link to={"/sanctuary/" + props.sanId}>
        <strong>view profile</strong>
      </Link>
    </li>
  </ul>
);
export default UserSearchResults;