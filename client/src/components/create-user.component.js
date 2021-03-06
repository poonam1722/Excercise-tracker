import React, { Component } from 'react';
import axios from 'axios';
import '../../src/App.css';
require('dotenv').config();
export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
    };
    console.log(newUser);

    axios
      .post('/users/add', newUser)
      .then((res) => console.log(res.data));

    this.setState({
      username: '',
    });
  }

  render() {
    return (
    <div className="v">
      <div className="container">
        <div className="row">
          <div className="mar col-md-4 col-8 mx-auto">
        <div className="b">
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Username: </label>
                <input
                  type="text"
                  required
                  className="form-control my-3"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Create User"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          </div>
        </div>
        </div>
        </div>
      
    );
  }
}
