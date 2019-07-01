import { Dimmer, Loader } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { useEffect } from "react";

import { getUserData, signIn } from '../actions';
import { withTodoService } from "../hocs/with-todo-service";
import Auth from "../components/auth";

const AuthContainer = ({
  user: { loading, data, error },
  children,
  getUserData,
  signIn
}) => {
  useEffect(() => {
    getUserData();
  }, []);

  if (loading)
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );

  if (!data) return <Auth {...{ signIn, user: { data, error } }} />;

  return children;
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch, { todoService }) => ({
  getUserData: dispatch(getUserData(todoService)),
  signIn: dispatch(signIn(todoService))
});
export default compose(
  withTodoService,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AuthContainer);
