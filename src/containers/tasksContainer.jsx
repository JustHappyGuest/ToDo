import {connect} from "react-redux";
import Tasks from "../components/Tasks";
import { newTask, changeDescripton, cancelUpdate, changeDeadline } from "../actionCreaters";

const mapStateToProps = state => {
    return {
        tasks: state.controlTasks.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newTask: () => dispatch(newTask()),
        changeDescription: (id, value) => dispatch(changeDescripton(id, value)),
        changeDeadline: (id, direction) => dispatch(changeDeadline(id, direction)),
        cancelUpdate: id => dispatch(cancelUpdate(id))
    }
}

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;