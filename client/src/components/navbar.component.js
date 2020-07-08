import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css'
import { Button,Navbar,NavDropdown,Nav,Form,FormControl }

  from 'react-bootstrap';


export default class Navbaar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Exercise Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Exercise Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
