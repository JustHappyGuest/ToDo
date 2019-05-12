import {connect} from "react-redux";
import Tasks from "../components/Tasks";
import { newTask, changeDescripton, cancelUpdate, changeDeadline, addTask, showDropdown, deleteTask, updateTask, selectTask, selectAllTask } from "../actionCreaters";

const mapStateToProps = state => {
    return {
        search: state.controlTasks.search,
        tasks: state.controlTasks.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newTask: () => dispatch(newTask()),
        changeDescription: (id, value) => dispatch(changeDescripton(id, value)),
        changeDeadline: (id, direction) => dispatch(changeDeadline(id, direction)),
        cancelUpdate: id => dispatch(cancelUpdate(id)),
        addTask: id => dispatch(addTask(id)),
        showDropdown: id => dispatch(showDropdown(id)),
        deleteTask: id => dispatch(deleteTask(id)),
        updateTask: id => dispatch(updateTask(id)),
        selectTask: id => dispatch(selectTask(id)),
        selectAllTask: () => dispatch(selectAllTask())
    }
}

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;