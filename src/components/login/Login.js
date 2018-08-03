import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleFormUpdate = event => {
    const {target} = event;
    this.setState({[target.id]: target.value});
  };

  handleSubmit = event => {
    event.stopPropagation();
    const {loginUser} = this.props;
    const {username, password} = this.state;

    loginUser({
      username,
      password
    });
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input onChange={this.handleFormUpdate} id="username" name="username" placeholder="Jane_Doe"/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input onChange={this.handleFormUpdate} id="password" name="password" type="password" placeholder="***********"/>
        </FormGroup>
        <Button onClick={this.handleSubmit}>Login</Button>
      </Form>
    );
  }
}