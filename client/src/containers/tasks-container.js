import { compose } from 'redux';
import { connect } from "react-redux";
import React, {useEffect} from 'react';

import {
  confirmUpdateRow,
  cancelUpdateTask,
  changeDeadlineTask,
  changeDescriptonTask,
  deleteTask,
  fetchTasks,
  showUpdateRow,
  updateTask
} from '../actions';
import { withTodoService } from "../hocs/with-todo-service";
import Tasks from "../components/table/";

const TasksContainer = (props) => {
  const {fetchTasks, ...restProps} = props;
  useEffect(()=> {
    fetchTasks()
  }, []);
  return <Tasks {...restProps} />
}

const mapStateToProps = ({search, tasks}) => {
  return {
    search,
    tasks
  };
};

const mapDispatchToProps = (dispatch, { todoService }) => {
  return {
    fetchTasks: dispatch(fetchTasks(todoService)),
    showUpdateRow: dispatch(showUpdateRow),
    changeDescriptonTask: (value) => dispatch(changeDescriptonTask(value)),
    changeDeadlineTask: (date, difference) => dispatch(changeDeadlineTask(date, difference)),
    cancelUpdateTask: () => dispatch(cancelUpdateTask()),
    confirmUpdateRow: dispatch(confirmUpdateRow(todoService)),
    deleteTask: dispatch(deleteTask(todoService)),
    updateTask: (id) => dispatch(updateTask(id))
  };
};

export default compose(
  withTodoService,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TasksContainer);
