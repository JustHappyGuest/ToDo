import {connect} from "react-redux";
import Tasks from '../components/tasks/';

const mapStateToProps = state => {
    return {
        title:"Пропущенные задачи",
        complete: false,
        missed: true,
        search: state.controlTasks.search,
        tasks: state.controlTasks.tasks
    }
}

const MissedTasksContainer = connect(mapStateToProps)(Tasks);

export default MissedTasksContainer;
