import { compose } from 'redux';
import { connect } from 'react-redux';

import { logOut } from '../actions';
import { withTodoService } from '../hocs/with-todo-service';
import UserCard from '../components/user-card';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch, { todoService }) => {
  return {
    logOut: dispatch(logOut(todoService)),
  };
};

export default compose(
  withTodoService,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UserCard);
