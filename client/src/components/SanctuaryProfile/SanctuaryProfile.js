import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./SanctuaryProfile.css";

class SanctuaryProfile extends Component {
    state = {
        sanctuary: {}
    }
    componentDidMount() {
        API.getSanctuary(this.props.match.params.id)
            .then(res => this.setState({ sanctuary: res.data }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
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
                <Link to="/Search">← Back to Search</Link>
            </div>
        )
    }
}

export default SanctuaryProfile;