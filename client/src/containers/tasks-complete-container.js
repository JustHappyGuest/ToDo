import { compose } from 'redux';
import { connect } from 'react-redux';
import React, {useEffect} from 'react';

import { fetchTasksComplete } from '../actions';
import { withTodoService } from '../hocs/with-todo-service';
import Tasks from "../components/table/";

const TasksCompleteContainer = ({fetchTasksComplete, ...restProps}) => {
  useEffect(()=> {
    fetchTasksComplete()
  }, []);
  return <Tasks {...restProps} simple/>
}

const mapStateToProps = ({search, completeTasks}) => {
  return {
    search,
    tasks: completeTasks
  };
};

const mapDispatchToProps = (dispatch, { todoService }) => {
  return {
    fetchTasksComplete: dispatch(fetchTasksComplete(todoService))
  };
};

export default compose(
  withTodoService,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TasksCompleteContainer);
