import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/user" component={CreateUser} />
            <Route path="/create" component={CreateExercise} />
      </Router>
    </div>

  );
}

export default App;
