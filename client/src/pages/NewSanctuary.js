import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Container from "../components/Container";
import API from "../utils/API";
import Row from "../components/Row";
import Col from "../components/Col";

// Switch this to REGISTER and create a seperate LOGIN
class NewSanctuary extends Component {
    //Setting the initial values of this.state.email and this.state.password

    state = {
        name: "",
        image: "",
        state: "",
        // animalPhone: "",
        // animalSanEmail: "",
        // animalSanAddress: "",
        // animalWebsite: "",
        // Facebook: "",
        // Instagram: "",
        // Twitter: "",
        // youTube: "",
        // DonationPage: "",
        // Volunteer: "",
        // VisitationPage: "",
        // animalBlog: "",
        // listAnimal: "",
        // EventPage: "",
        // animalAbout: "",
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

    // When the form is submitted, prevent the default event and alert the username and password
    handleFormSubmit = event => {
        event.preventDefault();
        // alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        // We need to have an HTTP request to our path
        API.saveSanctuary({
            name: this.state.name,
            image: this.state.image,
            state: this.state.state
            // animalPhone: this.state.animalPhone,
            // animalSanEmail: this.state.animalSanEmail,
            // animalSanAddress: this.state.animalSanAddress,
            // animalWebsite: this.state.animalWebsite,
            // Facebook: this.state.Facebook,
            // Instagram: this.state.Instagram,
            // Twitter: this.state.Twitter,
            // youTube: this.state.youTube,
            // DonationPage: this.state.DonationPage,
            // Volunteer: this.state.Volunteer,
            // VisitationPage: this.state.VisitationPage,
            // animalBlog: this.state.animalBlog,
            // listAnimal: this.state.listAnimal,
            // EventPage: this.state.EventPage,
            // animalAbout: this.state.animalAbout,
        })
            .then(res => {

                if (res.data === true) {
                    this.props.history.push("/");
                }
                else {
                    // however you want to handle an error.
                }
                // console.log(res);

                // this.history.pushState(null, 'login');
            })
            .catch(err => {
                console.log(err);
                alert('Problem Creating Sanctuary');
            });
    };

    // const data = new FormData(event.target);

    render() {
        return (
            <div>
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
                                   
                                    {/* <label >animalPhone</label>
                                    <input
                                        type="text"
                                        name="animalPhone"
                                        value={this.state.animalPhone}
                                        onChange={this.handleInputChange}
                                    />                                    <br />
                                    <label >animalSanEmail</label>
                                    <input
                                        type="text"
                                        name="animalSanEmail"
                                        value={this.state.animalSanEmail}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >animalSanAddress</label>
                                    <input
                                        type="text"
                                        name="animalSanAddress"
                                        value={this.state.animalSanAddress}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >animalWebsite</label>
                                    <input
                                        type="text"
                                        name="animalWebsite"
                                        value={this.state.animalWebsite}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >Facebook</label>
                                    <input
                                        type="text"
                                        name="Facebook"
                                        value={this.state.Facebook}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >Instagram</label>
                                    <input
                                        type="text"
                                        name="Instagram"
                                        value={this.state.Instagram}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >Twitter</label>
                                    <input
                                        type="text"
                                        name="Twitter"
                                        value={this.state.Twitter}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >youTube</label>
                                    <input
                                        type="text"
                                        name="youTube"
                                        value={this.state.youTube}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >DonationPage</label>
                                    <input
                                        type="text"
                                        name="DonationPage"
                                        value={this.state.DonationPage}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >Volunteer</label>
                                    <input
                                        type="text"
                                        name="Volunteer"
                                        value={this.state.Volunteer}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >VisitationPage</label>
                                    <input
                                        type="text"
                                        name="VisitationPage"
                                        value={this.state.VisitationPage}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >animalBlog</label>
                                    <input
                                        type="text"
                                        name="animalBlog"
                                        value={this.state.animalBlog}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >listAnimal</label>
                                    <input
                                        type="text"
                                        name="listAnimal"
                                        value={this.state.listAnimal}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >EventPage</label>
                                    <input
                                        type="text"
                                        name="EventPage"
                                        value={this.state.EventPage}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <label >animalAbout</label>
                                    <input
                                        type="text"
                                        name="animalAbout"
                                        value={this.state.animalAbout}
                                        onChange={this.handleInputChange}
                                    /> */}
                                    <button className="btn btn-primary" onClick={this.handleFormSubmit}>Register</button>
                                    <a className="btn" href='/'>Cancel</a>
                                </span>
                            </form>
                        </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
};


export default withRouter(NewSanctuary);
