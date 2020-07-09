import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Table,
} from 'react-bootstrap';
require('dotenv').config();
const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={'/edit/' + props.exercise._id}>edit</Link> |{' '}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
    constructor(props) {
      super(props);
      this.deleteExercise = this.deleteExercise.bind(this);
      this.state = { exercises: [] };
    }
    componentDidMount() {
      axios
        .get(`http://${process.env.URL}/exercises/`)
        .then((response) => {
          this.setState({ exercises: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    deleteExercise(id) {
      axios
        .delete(`http://${process.env.URL}/exercises/` + id)
        .then((res) => console.log(res.data));
      this.setState({
        exercises: this.state.exercises.filter(
          (el) => el._id !== id
        ),
      });
    }
    exerciseList() {
      return this.state.exercises.map((currentexercise) => {
        return (
          <Exercise
            exercise={currentexercise}
            deleteExercise={this.deleteExercise}
            key={currentexercise._id}
          />
        );
      });
    }

    render() {
      return (
        <div className="v">
          <div className="p">
         
         <h1> Exercise Log</h1>
          <Table responsive>
            <thead>
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.exerciseList()}</tbody>
          </Table>
            </div>
            </div>
           
      );
    }
  }
