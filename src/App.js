import React from 'react';
import './app.css';

import Header from './components/Header';
import Aside from './components/Aside';

import TasksContainer from './containers/tasksContainer';

function App() {
  return (
    <div className="app">
      <h1 className="logo"><i className="fas fa-list-alt"></i>ToDo</h1>
      <Header/>
      <Aside />
      <main className="main">
        <TasksContainer/>
      </main>
    </div>
  );
}

export default App;
