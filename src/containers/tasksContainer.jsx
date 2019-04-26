import {connect} from "react-redux";
import Tasks from "../components/Tasks";

const mapStateToProps = (state) => {
    return {
        newTask: state.tasks.newTask,
        tasks: state.tasks.data
    }
}

const TasksContainer = connect(mapStateToProps)(Tasks);

export default TasksContainer;