import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import UserSearchResults from '../components/UserSearchResults';

import API from '../utils/API';

class Search extends Component {
  state = {
    search: '',
    sanctuaries: [],
  };

  // getSanctuaries and getUser, if logged in
  componentDidMount() {
    this.getSanctuaries();
  }

  getSanctuaries = () => {
    console.log('getting sanctuaries');
    API.getSanctuaries().then(res => {
      this.setState({
        sanctuaries: res.data,
      });
    });
  };

  // handle any changes to the input Fields: Search
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // If user, make relation in database
  saveSearch = data => {
    API.saveSearch({
      sanId: data.sanId,
      userId: data.userId,
    }).then(res => {
      console.log(res);
      // Open Modal
    });
  };
  handleClick = () => {
    this.props.history.push('/signin');
  };

  render() {
    const { sanctuaries, search } = this.state;
    const { user } = this.props;
    const filteredSanctuaries = sanctuaries.filter(
      sanctuary =>
        sanctuary.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    return (
      <Container className="mb-4">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            {user
              ? <Card>
                  <Card.Body>
                    You are currently logged in as {user.email}
                  </Card.Body>
                </Card>
              : <Card className="text-center">
                  <Card.Body>
                    <Card.Text>
                      Log in to save sanctuaries to your dashboard
                    </Card.Text>
                    <Button variant="primary" onClick={this.handleClick}>
                      Sign In
                    </Button>
                  </Card.Body>
                </Card>}
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 6 }} style={{ margin: '10px' }}>
            <SearchForm
              className="form-control"
              handleInputChange={this.handleInputChange}
              search={search}
            />
          </Col>
        </Row>
        <Row>
          <CardColumns>
            {filteredSanctuaries.map(sanctuary =>
              <SearchResults
                sanId={sanctuary.sanId}
                key={sanctuary.sanId}
                name={sanctuary.name}
                website={sanctuary.animalWebsite}
                logo={sanctuary.image}
                animalPhone={sanctuary.animalPhone}
                animalAddress={sanctuary.animalAddress}
                userId={user ? user.userId : null}
                save={() =>
                  this.saveSearch({
                    sanId: sanctuary.sanId,
                    userId: user.userId,
                  })}
              />
            )}
          </CardColumns>
        </Row>
      </Container>
    );
  }
}
Search.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    userId: PropTypes.number,
  }),
};
export default Search;
