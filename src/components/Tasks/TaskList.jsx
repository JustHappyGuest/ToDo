import React from "react";

import Task from "./Task";
import UpdateTask from "./UpdateTask";


const TaskList = (props) => {
    let taskList = props.tasks.filter(item => 
        (!!(item.data.description.toLowerCase().indexOf(props.search.toLowerCase())+1)
        && ((props.complete) ? item.complete : !item.complete)
        && ((props.missed) ? item.missed : !item.missed))
        || item.updating);

    return (
        taskList.map(item => {
            let {updating, ...task} = item;
            return (
                (!updating)
                    ?   
                        <Task 
                            complete = {props.complete}
                            {...task}
                            showDropdown = {props.showDropdown}
                            deleteTask = {props.deleteTask}
                            updateTask = {props.updateTask}
                            selectTask = {props.selectTask}
                            completeTask = {props.completeTask}
                        />
                    :
                        <UpdateTask 
                            id = {task.id}
                            {...updating}
                            changeDescription = {props.changeDescription}
                            changeDeadline = {props.changeDeadline}
                            cancelUpdate = {props.cancelUpdate}
                            addTask = {props.addTask}
                        />
            );
    }));
}

export default TaskList;