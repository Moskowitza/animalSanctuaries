import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Container from "../components/Container";
import API from "../utils/API";
import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";

// Switch this to REGISTER and create a seperate LOGIN
class NewSanctuary extends Component {
    //Setting the initial values of this.state.email and this.state.password

    state = {
        user:[],
        name: "",
        image: "",
        state: "",
    }
    componentDidMount() {
        this.getUser();
      };
      getUser = () => {
        API.getUser()
          .then(res => {
            this.setState({ user: res.data});
          })
      }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, prevent the default event and alert the username and password
    handleFormSubmit = event => {
        event.preventDefault();
        // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        // We need to have an HTTP request to our path
        API.saveSanctuary({
            name: this.state.name,
            image: this.state.image,
            state: this.state.state
        })
            .then(res => {
                if (res.data === true) {
                    this.props.history.push("/");
                }
                else {
                    // however you want to handle an error.
                     console.log(res);
                }
            })
            .catch(err => {
                console.log(err);
                alert('Problem Creating Sanctuary');
            });
    };



    render() {
        return (
        <React.Fragment>
            {this.state.user? (
                <Container>
                    <Row className="justify-content-center">
                        <Col size="md-12">
                            <div className="card w-50 h-50">
                            {/* FORM HAS ACTION TO SIGNUP route*/}
                                <form action="/auth/newSanctuary">
                                    <div className="card-header">Register a New Sanctuary</div>
                                    <span className="card-body" >
    
                                    <p>
                                    <label>Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                    />
                                    </p>
                                    <p>
                                    <label>Image Link</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="image"
                                        value={this.state.image}
                                        onChange={this.handleInputChange}
                                    />
                                    </p>
                                    <p>

                                    <label >State</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="state"
                                        value={this.state.state}
                                        onChange={this.handleInputChange}
                                    />
                                    </p>

                                        <Link className="btn btn-info" onClick={this.handleFormSubmit} to="/auth/newSanctuary">Add New Sanctuary</Link>
                                    <Link className="btn" to='/'>Cancel</Link>
                                </span>
                            </form>
                        </div>
                        </Col>
                    </Row>
                </Container>
                ):(
                <Container>
                    <Row className="justify-content-center">
                        <Col size="md-12">
                            <div className="card ">
                            Login to create a Sanctuary
                            
                        </div>
                        </Col>
                    </Row>
                </Container>
                )}
            </React.Fragment>
        
        )}
};


export default withRouter(NewSanctuary);
