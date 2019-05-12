import {connect} from "react-redux";
import Tasks from "../components/Tasks";
import { newTask, changeDescripton, cancelUpdate, changeDeadline, addTask, showDropdown, deleteTask, updateTask, selectTask, selectAllTask, completeTask } from "../actionCreaters";

const mapStateToProps = state => {
    return {
        complete: true,
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
        selectAllTask: () => dispatch(selectAllTask()),
        completeTask: id => dispatch(completeTask(id))
    }
}

const CompleteTasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default CompleteTasksContainer;