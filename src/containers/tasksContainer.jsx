import {connect} from "react-redux";
import Tasks from "../components/Tasks";
import { newTask } from "../actionCreaters";

const mapStateToProps = state => {
    return {
        tasks: state.controlTasks.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newTask: () => dispatch(newTask())
    }
}

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;