import { bindActionCreators, compose } from 'redux';
import { connect } from "react-redux";

import {
  addTask,
  cancelUpdateTask,
  changeDeadlineTask,
  changeDescriptonTask,
  changeDropdown,
  fetchTasksSuccess,
  showUpdateRow
} from '../actions';
import { withTodoService } from "../hocs/with-todo-service";
import Tasks from "../components/tasks/";

const mapStateToProps = ({search, tasks}, {complete, missed}) => {
  return {
    title: "Активные задачи",
    complete,
    missed,
    search,
    tasks
  };
};

const mapDispatchToProps = (dispatch, { todoService }) => {
  return {
    fetchTasksSuccess: dispatch(fetchTasksSuccess(todoService)),
    showUpdateRow: dispatch(showUpdateRow),
    changeDescriptonTask: (value) => dispatch(changeDescriptonTask(value)),
    changeDeadlineTask: (date, difference) => dispatch(changeDeadlineTask(date, difference)),
    cancelUpdateTask: () => dispatch(cancelUpdateTask()),
    addTask: dispatch(addTask(todoService)),
    changeDropdown: (id) => dispatch(changeDropdown(id))
  };
};

export default compose(
  withTodoService,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Tasks);
