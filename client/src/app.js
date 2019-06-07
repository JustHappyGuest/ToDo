import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import './app.css';

import Header from './components/header/index';
import Aside from './components/aside/index';

import TasksContainer from './containers/tasks-container';
import CompleteTasksContainer from './containers/complete-tasks-container';
import MissedTasksContainer from './containers/missed-tasks-container';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1 className="logo"><NavLink to="/"><i className="fas fa-list-alt"></i>ToDo</NavLink></h1>
        <Header/>
        <Aside />
        <main className="main">
          <Route exact path="/" component={TasksContainer}/>
          <Route exact path="/tasks" component={TasksContainer}/>
          <Route exact path="/tasks/completed" component={CompleteTasksContainer}/>
          <Route exact path="/tasks/missed" component={MissedTasksContainer}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
