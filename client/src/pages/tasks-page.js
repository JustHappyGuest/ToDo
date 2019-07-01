import Header from "../components/header/";
import { Route, NavLink, Switch } from "react-router-dom";
import React from "react";

import Aside from "../components/aside";
import TasksCompleteContainer from "../containers/tasks-complete-container";
import TasksContainer from "../containers/tasks-container";
import TasksMissContainer from "../containers/tasks-miss-container";

const TasksPage = props => {
  return (
    <div className="app">
      <h1 className="logo">
        <NavLink to="/tasks">
          <i className="fas fa-list-alt"></i>ToDo
        </NavLink>
      </h1>
      <Header />
      <Aside />
      <main className="main">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <TasksContainer title="Активные задачи" />}
          />
          <Route
            exact
            path="/tasks"
            render={() => <TasksContainer title="Активные задачи" />}
          />
          <Route
            exact
            path="/tasks/complete"
            render={() => (
              <TasksCompleteContainer title="Завершенные задачи" simple />
            )}
          />
          <Route
            exact
            path="/tasks/miss"
            render={() => (
              <TasksMissContainer title="Пропущенные задачи" simple />
            )}
          />
        </Switch>
      </main>
    </div>
  );
};

export default TasksPage;
