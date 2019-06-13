import { compose } from "redux";
import { connect } from "react-redux";

import {
  addTask,
  cancelUpdateTask,
  changeDeadlineTask,
  changeDescriptonTask,
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
    addTask: dispatch(addTask(todoService))
    //changeDeadline: (id, direction) => dispatch(changeDeadline(id, direction)),
    //cancelUpdate: id => dispatch(cancelUpdate(id)),
    //addTask: id => dispatch(addTask(id)),
    //showDropdown: id => dispatch(showDropdown(id)),
    //deleteTask: id => dispatch(deleteTask(id)),
    //deleteSelectedTasks: () => dispatch(deleteSelectedTasks()),
    //updateTask: id => dispatch(updateTask(id)),
    //updateSelectedTasks: () => dispatch(updateSelectedTasks()),
    //selectTask: id => dispatch(selectTask(id)),
    //selectAllTasks: () => dispatch(selectAllTasks()),
    //completeTask: id => dispatch(completeTask(id)),
    //completeSelectedTasks: () => dispatch(completeSelectedTasks()),
    //checkTasksDeadline: () => dispatch(checkTasksDeadline())
  };
};

export default compose(
  withTodoService,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Tasks);
