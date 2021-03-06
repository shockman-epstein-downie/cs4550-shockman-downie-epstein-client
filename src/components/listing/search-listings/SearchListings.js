import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input, Button, Form, FormGroup, Label, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class SearchListings extends Component {
  static propTypes = {
    listings: PropTypes.array,
    searchListings: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  handleChange = event => {
    const {target} = event;
    this.setState({[target.id]: target.value});
  };

  handleSearch = () => {
    this.props.searchListings(this.state.query);
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label for="query">Search:</Label>
                <Input onChange={this.handleChange} id="query" name="query"/>
              </FormGroup>
              <Button color="primary" onClick={this.handleSearch}>Search</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup className="list-group-item-action">
              {this.props.listings.map((listing, k) => {
                return <ListGroupItem className="list-group-item-action" key={k}>
                  {listing.title}
                  <Link to={`/listing/${listing.id}`} className="float-right btn btn-primary"><i className="fa fa-arrow-right"/></Link>
                </ListGroupItem>;
              })}
            </ListGroup>
          </Col>
        </Row>
      </div>
    )
  }
}