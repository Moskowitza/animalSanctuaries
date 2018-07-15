import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./SanctuaryProfile.css";
import Comments from "../Comments";

class SanctuaryProfile extends Component {
  state = {
    sanctuary: {},
    user: {},
    existingComments: [],
    comment: ""
  }
  componentDidMount() {
    this.getUser();
    API.getSanctuary(this.props.match.params.id)
      .then(res => this.setState({ sanctuary: res.data }))
      .catch(err => console.log(err));
    this.getComments();
  }
  getUser = () => {
    API.getUser()
      .then(res => {
        this.setState({
          user: res.data
        });
      })
  }
  getComments = () => {
    API.getComments(this.props.match.params.id)
      .then(res => this.setState({ existingComments: res.data }))
      .catch(err => console.log(err))
  }


  // handle any changes to the input fields
  handleInputChange = event => {
    event.preventDefault()
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    var data = {
      comment: this.state.comment,
      userId: this.state.user.userId,
      sanId: this.state.sanctuary.sanId
    }

    // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    // We need to have an HTTP request to our path
    API.saveComment(data)
      .then(res => this.getComments())
      //   {
      //   if (res.data === true) {
      //     // do what? I guess render the comment section, we'll get there
      //     //   this.props.history.push("/dashboard");
      //     // this.history.pushState(null, 'comment');
          
      //   }
      //   // else {
      //   //   // however you want to handle an error.
      //   // }
      // })
      //get them again
      // .then(this.getComments())
      .then(this.setState({ comment: "" }))
      .catch(err => {
        console.log(err);
        alert('Problem Commenting!');
      });
  };

  // const data = new FormData(event.target);

  render() {
    return (
      <div>
        <div className="card w-50 h-50 text-center">
          <h3>Santuary Profile Page</h3>
        </div>
        <div className="card w-50 h-50">
          <div className="card-body text-center">
            <img alt="sanctuary" src={this.state.sanctuary.image} className="img-fluid" />
            <h3>Sanctuary Name:{this.state.sanctuary.name}</h3>
          </div>
        </div>
        <div className="card w-50 h-50">
          <div className="card-body text-center">
            <p>Details:
                    <ul>
                <li> Address: {this.state.sanctuary.animalAddress}</li>
                <li> Facebook: {this.state.sanctuary.Facebook}</li>
                <li> Instagram: {this.state.sanctuary.Instagram}</li>

              </ul>
            </p>
          </div>
          <div className="card-body text-center">
            {this.state.existingComments ?
              (
                <div>
                  <p>Comments:</p>
                  {this.state.existingComments.map(comment => (
                    <Comments
                      key={comment.postId}
                      comment={comment.comment}
                    />
                  ))}
                </div>

              ) : (
                <div>
                  <p> no comments </p>
                </div>
              )}
          </div>
        </div>
        <div className="card w-75 h-75">

          {this.state.user ?
            (
              <div className="card-body">
                <label>Add Comment:</label>
                <p>
                  <input type="text" className="form-control" name="comment" value={this.state.comment} onChange={this.handleInputChange} />
                </p>
                <button className="btn btn-default btn-info" type="submit" onClick={this.handleFormSubmit}>
                  Save Comment
                </button>
                <Link to="/Search">← Back to Search</Link>
              </div>
            ) : (
              <div className="card-body">
                log in to comment
              </div>
            )}
        </div>
      </div >
    )
  }
}

export default SanctuaryProfile;