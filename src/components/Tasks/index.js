import React from "react";
import styled from "./style.module.css";

import TaskList from "./TaskList";
import HeaderTasks from "./HeaderTasks";


class Tasks extends React.Component {
    componentDidMount(){
        this.checkTasksInterval = setInterval(this.props.checkTasksDeadline, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.checkTasksInterval);
    }

    render(){
        return (
            <section className={styled.tasks}>
                <h2 className={styled.title}>{this.props.title}</h2>
                <table className={styled.table}>
                    <thead className={styled.thead}>
                        <HeaderTasks 
                            complete = {this.props.complete}
                            missed = {this.props.missed}
                            tasks = {this.props.tasks}
                            selectAllTasks = {this.props.selectAllTasks}
                            newTask = {this.props.newTask}
                            completeSelectedTasks = {this.props.completeSelectedTasks}
                            updateSelectedTasks = {this.props.updateSelectedTasks}
                            deleteSelectedTasks = {this.props.deleteSelectedTasks}
                        />
                    </thead>
                    <tbody className={styled.tbody}>
                        <TaskList 
                            search = {this.props.search}
                            complete = {this.props.complete}
                            missed = {this.props.missed}
                            tasks = {this.props.tasks}
                            showDropdown = {this.props.showDropdown}
                            deleteTask = {this.props.deleteTask}
                            updateTask = {this.props.updateTask}
                            selectTask = {this.props.selectTask}
                            completeTask = {this.props.completeTask}
                            changeDescription = {this.props.changeDescription}
                            changeDeadline = {this.props.changeDeadline}
                            cancelUpdate = {this.props.cancelUpdate}
                            addTask = {this.props.addTask}
                        />
                    </tbody>
                </table>
            </section>
        )
    }
}

export default Tasks;