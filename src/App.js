import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './app.css';

import Header from './components/Header';
import Aside from './components/Aside';

import TasksContainer from './containers/tasksContainer';
import CompleteTasksContainer from './containers/completeTasksContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1 className="logo"><i className="fas fa-list-alt"></i>ToDo</h1>
        <Header/>
        <Aside />
        <main className="main">
          <Route exact path="/" component={TasksContainer}/>
          <Route exact path="/tasks" component={TasksContainer}/>
          <Route exact path="/tasks/completed" component={CompleteTasksContainer}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
