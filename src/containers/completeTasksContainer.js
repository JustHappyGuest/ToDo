import {connect} from "react-redux";
import Tasks from "../components/Tasks";

const mapStateToProps = state => {
    return {
        title:"Завершенные задачи",
        complete: true,
        missed: false,
        search: state.controlTasks.search,
        tasks: state.controlTasks.tasks
    }
}

const CompleteTasksContainer = connect(mapStateToProps)(Tasks);

export default CompleteTasksContainer;