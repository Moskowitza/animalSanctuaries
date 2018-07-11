import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./SanctuaryProfile.css";

class SanctuaryProfile extends Component {
    state = {
        sanctuary: {},
        user:{},
        comment:""
    }
    componentDidMount() {
        API.getSanctuary(this.props.match.params.id)
            .then(res => this.setState({ sanctuary: res.data }))
            .catch(err => console.log(err));
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
  handleFormSubmit = event => {
    event.preventDefault();
    // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    // We need to have an HTTP request to our path
    API.saveComment({
        // we'll send over the user making the comment, 
        //the sanctuary being commented to and
        //The comment text
      comment: this.state.comment,
      userId:this.state.user.userId,
      sanId:this.state.sanctuary.sanId
    })
      .then(res => {
        if ( res.data === true ) {
            // do what? I guess render the comment section, we'll get there
        //   this.props.history.push("/dashboard");
        // this.history.pushState(null, 'comment');
        }
        else {
          // however you want to handle an error.
        }
      })
      .catch(err => {
        console.log(err);
        alert('Problem Commenting!');
      });
  };

  // const data = new FormData(event.target);

    render() {
        return (
            <div>
                <div className="card">
                <div className="card-body">
             
                <h1>Santuary Profile Page</h1>
                <img alt="sanctuary" src={this.state.sanctuary.logo} className="img-fluid" />
                <h3>Sanctuary Name:{this.state.sanctuary.name}</h3>
                <aside>Details:
                    <ul>
                        <li> address:{this.state.sanctuary.address}</li>
                        <li> Facebook:{this.state.sanctuary.facebook}</li>
                        <li> Instagram:{this.state.sanctuary.instagram}</li>

                    </ul>
                </aside>
                <label>Add Comment:</label>
                        <p>
                          <input type="text" className="form-control" name="comment" value={this.state.comment} onChange={this.handleInputChange} />
                        </p>
                        <button className="btn btn-default btn-info" type="submit" onClick={this.handleFormSubmit}>
                          Save Comment
                        </button>
                <Link to="/Search">← Back to Search</Link>
                </div>
                </div>
            </div>
        )
    }
}

export default SanctuaryProfile;