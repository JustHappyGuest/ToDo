import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import './app.css';

import Header from './components/Header';
import Aside from './components/Aside';

import TasksContainer from './containers/tasksContainer';
import CompleteTasksContainer from './containers/completeTasksContainer';
import MissedTasksContainer from './containers/missedTasksContainer';

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
