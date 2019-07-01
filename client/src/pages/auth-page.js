import { Switch, Route } from "react-router-dom";
import React from 'react';

import AuthContainer from '../containers/auth-container';
import TasksPage from './tasks-page';


const AuthPage = (props) => {

  const renderAuthContainer = () => {
    return (
      <AuthContainer>
        <Switch>
          <Route exact path="/" component={TasksPage} />
          <Route path="/tasks" component={TasksPage} />
        </Switch>
      </AuthContainer>
    );
  }

  return (
      <Switch>
        <Route path="/" render={renderAuthContainer} />
        <Route exact path="/login" render={renderAuthContainer} />
      </Switch>
  );
};



export default AuthPage;
