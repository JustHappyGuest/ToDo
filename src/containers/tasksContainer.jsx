import {connect} from "react-redux";
import Tasks from "../components/Tasks";
import { 
            newTask, 
            changeDescripton, 
            cancelUpdate, 
            changeDeadline, 
            addTask, 
            showDropdown, 
            deleteTask, 
            updateTask, 
            selectTask, 
            selectAllTasks, 
            completeTask, 
            deleteSelectedTasks,
            completeSelectedTasks,
            updateSelectedTasks,
            checkTasksDeadline
        } from "../actionCreaters";

const mapStateToProps = state => {
    return {
        title: "Активные задачи",
        complete: false,
        missed: false,
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
        deleteSelectedTasks: () => dispatch(deleteSelectedTasks()),
        updateTask: id => dispatch(updateTask(id)),
        updateSelectedTasks: () => dispatch(updateSelectedTasks()),
        selectTask: id => dispatch(selectTask(id)),
        selectAllTasks: () => dispatch(selectAllTasks()),
        completeTask: id => dispatch(completeTask(id)),
        completeSelectedTasks: () => dispatch(completeSelectedTasks()),
        checkTasksDeadline: () => dispatch(checkTasksDeadline())
    }
}

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;